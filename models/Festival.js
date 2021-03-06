const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SetSchema = new Schema({
  // Keeping both artist & artistId to keep backwards compatible for now
  artist: {
    type: String,
  },
  artistId: {
    type: Schema.Types.ObjectId,
    ref: 'Artist'
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  stage: {
    type: String,
    required: true
  },
  going: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  interested: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  notGoing: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  stars: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  ]
});

const FestivalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  lineup: [SetSchema]
});

module.exports = Festival = mongoose.model('Festival', FestivalSchema);
