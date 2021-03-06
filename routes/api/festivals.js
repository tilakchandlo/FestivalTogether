const express = require('express');
const router = express.Router();
const passport = require('passport');

const validateFestivalInput = require('../../validation/festival');
const Festival = require('../../models/Festival');
const sets = require('./sets');

// @route  GET /api/festivals/test
// @desc   Tests festivals route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Festivals works' }));

// @route  GET /api/festivals
// @desc   Get all festivals
// @access Public
router.get('/', (req, res) => {
  Festival.find({}, ['_id', 'name', 'year'])
    .then(festivals => res.json(festivals))
    .catch(err => res.status(400).json(err))
});

// @route  POST /api/festivals
// @desc   Create new festival
// @access Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { isValid, errors } = validateFestivalInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Festival.findOne({ name: req.body.name, year: req.body.year })
      .then(festival => {
        if (festival) {
          return res
            .status(422)
            .json({ festival: 'This festival already exists ' });
        }

        const newFestival = new Festival({
          name: req.body.name,
          year: req.body.year
        });

        newFestival.save().then(festival => res.json(festival));
      })
      .catch(err => res.status(400).json(err));
  });

// @route  GET /api/festivals/search
// @desc   Create new set for festival
// @access Public
router.get('/search', (req, res) => {
  Festival.findOne(req.query)
    .populate([
      { path: 'lineup.artistId' },
      { path: 'lineup.going', select: ['name', 'email'] }
    ])
    .then(festival => {
      if (!festival) {
        return res.status(404).json({ festival: 'Festival not found' });
      }

      res.status(200).json(festival);
    })
    .catch(err => res.status(400).json(err))
});

// @route  GET /api/festivals/:id
// @desc   Get festival info
// @access Public
router.get('/:id', (req, res) => {
  Festival.findById(req.params.id)
    .populate([
      { path: 'lineup.artistId' },  
      { path: 'lineup.going', select: ['name', 'email'] }
    ])
    .then(festival => {
      if (!festival) {
        return res.status(404).json({ festival: 'Festival not found' });
      }

      res.status(200).json(festival);
    })
    .catch(err => res.status(400).json(err));
});

// @route  PATCH /api/festivals/:id
// @desc   Convert old festival with embedded User objs to User refs
// @access Private
router.patch(
  '/:id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Festival.findById(req.params.id)
      .then(festival => {
        festival.lineup.forEach(set => {
          if (set.going && set.going.length) {
            const going = set.going.map(user => user._id);
            set.set('going', going);
          }
        })
        festival.save().then(festival => res.json(festival));
      });
})

router.use('/:festivalId/sets', sets);

module.exports = router;
