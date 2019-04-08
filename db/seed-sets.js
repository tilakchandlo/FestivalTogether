const axios = require('axios');

const artistString =
  'https://www.coachella.com/lineup/#/artist/070-shake,https://www.coachella.com/lineup/#/artist/88glam,https://www.coachella.com/lineup/#/artist/a-hundred-drums,https://www.coachella.com/lineup/#/artist/a-r-i-z-o-n-a,https://www.coachella.com/lineup/#/artist/adriatique,https://www.coachella.com/lineup/#/artist/agoria,https://www.coachella.com/lineup/#/artist/alice-merton,https://www.coachella.com/lineup/#/artist/ame,https://www.coachella.com/lineup/#/artist/amelie-lens,https://www.coachella.com/lineup/#/artist/anderson-paak-the-free-nationals,https://www.coachella.com/lineup/#/artist/anna-lunoe,https://www.coachella.com/lineup/#/artist/aphex-twin,https://www.coachella.com/lineup/#/artist/ariana-grande,https://www.coachella.com/lineup/#/artist/bad-bunny,https://www.coachella.com/lineup/#/artist/bassnectar,https://www.coachella.com/lineup/#/artist/baynk,https://www.coachella.com/lineup/#/artist/bazzi,https://www.coachella.com/lineup/#/artist/beach-fossils,https://www.coachella.com/lineup/#/artist/billie-eilish,https://www.coachella.com/lineup/#/artist/blackpink,https://www.coachella.com/lineup/#/artist/blondish,https://www.coachella.com/lineup/#/artist/blood-orange,https://www.coachella.com/lineup/#/artist/bob-moses,https://www.coachella.com/lineup/#/artist/boy-pablo,https://www.coachella.com/lineup/#/artist/burna-boy,https://www.coachella.com/lineup/#/artist/calypso-rose,https://www.coachella.com/lineup/#/artist/camelphat,https://www.coachella.com/lineup/#/artist/cassian,https://www.coachella.com/lineup/#/artist/charlotte-de-witte,https://www.coachella.com/lineup/#/artist/charlotte-gainsbourg,https://www.coachella.com/lineup/#/artist/childish-gambino,https://www.coachella.com/lineup/#/artist/chon,https://www.coachella.com/lineup/#/artist/chris-lake,https://www.coachella.com/lineup/#/artist/christine-and-the-queens,https://www.coachella.com/lineup/#/artist/chvrches,https://www.coachella.com/lineup/#/artist/cirez-d,https://www.coachella.com/lineup/#/artist/clairo,https://www.coachella.com/lineup/#/artist/clozee,https://www.coachella.com/lineup/#/artist/cola-boyy,https://www.coachella.com/lineup/#/artist/d1bbs,https://www.coachella.com/lineup/#/artist/dave-p,https://www.coachella.com/lineup/#/artist/deep-dish,https://www.coachella.com/lineup/#/artist/dennis-lloyd,https://www.coachella.com/lineup/#/artist/dermot-kennedy,https://www.coachella.com/lineup/#/artist/dillon-francis,https://www.coachella.com/lineup/#/artist/diplo,https://www.coachella.com/lineup/#/artist/dirtwire,https://www.coachella.com/lineup/#/artist/dj-nu-mark,https://www.coachella.com/lineup/#/artist/dj-seinfeld,https://www.coachella.com/lineup/#/artist/dj-snake,https://www.coachella.com/lineup/#/artist/dom-dolla,https://www.coachella.com/lineup/#/artist/dombresky,https://www.coachella.com/lineup/#/artist/dorfex-bos,https://www.coachella.com/lineup/#/artist/dusky,https://www.coachella.com/lineup/#/artist/dvsn,https://www.coachella.com/lineup/#/artist/easy-life,https://www.coachella.com/lineup/#/artist/elderbrook,https://www.coachella.com/lineup/#/artist/ella-mai,https://www.coachella.com/lineup/#/artist/emily-king,https://www.coachella.com/lineup/#/artist/emmit-fenn,https://www.coachella.com/lineup/#/artist/escapade,https://www.coachella.com/lineup/#/artist/evan-giia,https://www.coachella.com/lineup/#/artist/fisher,https://www.coachella.com/lineup/#/artist/fkj,https://www.coachella.com/lineup/#/artist/ford,https://www.coachella.com/lineup/#/artist/four-tet,https://www.coachella.com/lineup/#/artist/gesaffelstein,https://www.coachella.com/lineup/#/artist/golden-features,https://www.coachella.com/lineup/#/artist/gorgon-city,https://www.coachella.com/lineup/#/artist/gryffin,https://www.coachella.com/lineup/#/artist/gucci-gang,https://www.coachella.com/lineup/#/artist/guy-gerber,https://www.coachella.com/lineup/#/artist/heidi-lawden,https://www.coachella.com/lineup/#/artist/henry-pope,https://www.coachella.com/lineup/#/artist/her,https://www.coachella.com/lineup/#/artist/holly,https://www.coachella.com/lineup/#/artist/hop-along,https://www.coachella.com/lineup/#/artist/hot-since-82,https://www.coachella.com/lineup/#/artist/hurray-for-the-riff-raff,https://www.coachella.com/lineup/#/artist/hyukoh,https://www.coachella.com/lineup/#/artist/iceage,https://www.coachella.com/lineup/#/artist/idris-elba,https://www.coachella.com/lineup/#/artist/j-balvin,https://www.coachella.com/lineup/#/artist/jaden-smith,https://www.coachella.com/lineup/#/artist/jain,https://www.coachella.com/lineup/#/artist/jambinai,https://www.coachella.com/lineup/#/artist/jan-blomqvist,https://www.coachella.com/lineup/#/artist/janelle-monae,https://www.coachella.com/lineup/#/artist/jauz,https://www.coachella.com/lineup/#/artist/javiera-mena,https://www.coachella.com/lineup/#/artist/jon-hopkins,https://www.coachella.com/lineup/#/artist/jpegmafia,https://www.coachella.com/lineup/#/artist/juice-wrld,https://www.coachella.com/lineup/#/artist/justin-jay,https://www.coachella.com/lineup/#/artist/kacey-musgraves,https://www.coachella.com/lineup/#/artist/kaytranada,https://www.coachella.com/lineup/#/artist/kayzo,https://www.coachella.com/lineup/#/artist/kero-kero-bonito,https://www.coachella.com/lineup/#/artist/khalid,https://www.coachella.com/lineup/#/artist/khruangbin,https://www.coachella.com/lineup/#/artist/kid-cudi,https://www.coachella.com/lineup/#/artist/king-princess,https://www.coachella.com/lineup/#/artist/kmln,https://www.coachella.com/lineup/#/artist/kolsch,https://www.coachella.com/lineup/#/artist/las-robertas,https://www.coachella.com/lineup/#/artist/lastlings,https://www.coachella.com/lineup/#/artist/latmun,https://www.coachella.com/lineup/#/artist/lauren-lane,https://www.coachella.com/lineup/#/artist/lee-burridge,https://www.coachella.com/lineup/#/artist/lets-eat-grandma,https://www.coachella.com/lineup/#/artist/little-people,https://www.coachella.com/lineup/#/artist/little-simz,https://www.coachella.com/lineup/#/artist/lizzo,https://www.coachella.com/lineup/#/artist/los-tucanes-de-tijuana,https://www.coachella.com/lineup/#/artist/lost-desert,https://www.coachella.com/lineup/#/artist/lou-phelps,https://www.coachella.com/lineup/#/artist/lsdream,https://www.coachella.com/lineup/#/artist/mac-demarco,https://www.coachella.com/lineup/#/artist/madam-x,https://www.coachella.com/lineup/#/artist/maggie-rogers,https://www.coachella.com/lineup/#/artist/mansionair,https://www.coachella.com/lineup/#/artist/memba,https://www.coachella.com/lineup/#/artist/men-i-trust,https://www.coachella.com/lineup/#/artist/mersiv,https://www.coachella.com/lineup/#/artist/mon-laferte,https://www.coachella.com/lineup/#/artist/mr-eazi,https://www.coachella.com/lineup/#/artist/murda-beatz,https://www.coachella.com/lineup/#/artist/nghtmre,https://www.coachella.com/lineup/#/artist/nic-fanciulli,https://www.coachella.com/lineup/#/artist/nicole-moudaber,https://www.coachella.com/lineup/#/artist/nina-kraviz,https://www.coachella.com/lineup/#/artist/nocturnal-sunshine,https://www.coachella.com/lineup/#/artist/nora-en-pure,https://www.coachella.com/lineup/#/artist/ocho-ojos,https://www.coachella.com/lineup/#/artist/ookay,https://www.coachella.com/lineup/#/artist/parcels,https://www.coachella.com/lineup/#/artist/patrice-baumel,https://www.coachella.com/lineup/#/artist/patricio,https://www.coachella.com/lineup/#/artist/perfume,https://www.coachella.com/lineup/#/artist/playboi-carti,https://www.coachella.com/lineup/#/artist/polo-pan,https://www.coachella.com/lineup/#/artist/pusha-t,https://www.coachella.com/lineup/#/artist/rat-boy,https://www.coachella.com/lineup/#/artist/razorbumps,https://www.coachella.com/lineup/#/artist/rico-nasty,https://www.coachella.com/lineup/#/artist/rosalia,https://www.coachella.com/lineup/#/artist/ross-from-friends,https://www.coachella.com/lineup/#/artist/rufus-du-sol,https://www.coachella.com/lineup/#/artist/ry-x,https://www.coachella.com/lineup/#/artist/sabrina-claudio,https://www.coachella.com/lineup/#/artist/sales,https://www.coachella.com/lineup/#/artist/serpentwithfeet,https://www.coachella.com/lineup/#/artist/sg-lewis,https://www.coachella.com/lineup/#/artist/shallou,https://www.coachella.com/lineup/#/artist/shame,https://www.coachella.com/lineup/#/artist/shawni,https://www.coachella.com/lineup/#/artist/sheck-wes,https://www.coachella.com/lineup/#/artist/sir,https://www.coachella.com/lineup/#/artist/smino,https://www.coachella.com/lineup/#/artist/sob-x-rbe,https://www.coachella.com/lineup/#/artist/soccer-mommy,https://www.coachella.com/lineup/#/artist/social-house,https://www.coachella.com/lineup/#/artist/sofi-tukker,https://www.coachella.com/lineup/#/artist/solange,https://www.coachella.com/lineup/#/artist/sonny-fodera,https://www.coachella.com/lineup/#/artist/sophie,https://www.coachella.com/lineup/#/artist/soulection,https://www.coachella.com/lineup/#/artist/stavroz,https://www.coachella.com/lineup/#/artist/steady-holiday,https://www.coachella.com/lineup/#/artist/stephan-bodzin,https://www.coachella.com/lineup/#/artist/still-woozy,https://www.coachella.com/lineup/#/artist/superorganism,https://www.coachella.com/lineup/#/artist/tale-of-us,https://www.coachella.com/lineup/#/artist/tame-impala,https://www.coachella.com/lineup/#/artist/tara-brooks,https://www.coachella.com/lineup/#/artist/the-1975,https://www.coachella.com/lineup/#/artist/the-floozies,https://www.coachella.com/lineup/#/artist/the-frights,https://www.coachella.com/lineup/#/artist/the-funk-hunters,https://www.coachella.com/lineup/#/artist/the-garden,https://www.coachella.com/lineup/#/artist/the-interrupters,https://www.coachella.com/lineup/#/artist/the-messthetics,https://www.coachella.com/lineup/#/artist/the-red-pears,https://www.coachella.com/lineup/#/artist/tierra-whack,https://www.coachella.com/lineup/#/artist/tomasa-del-real,https://www.coachella.com/lineup/#/artist/turnover,https://www.coachella.com/lineup/#/artist/turnstile,https://www.coachella.com/lineup/#/artist/ty-segall-white-fence,https://www.coachella.com/lineup/#/artist/unknown-mortal-orchestra,https://www.coachella.com/lineup/#/artist/us-girls,https://www.coachella.com/lineup/#/artist/virgil-abloh,https://www.coachella.com/lineup/#/artist/vnssa,https://www.coachella.com/lineup/#/artist/walker-royce,https://www.coachella.com/lineup/#/artist/wallows,https://www.coachella.com/lineup/#/artist/weezer,https://www.coachella.com/lineup/#/artist/wiz-khalifa,https://www.coachella.com/lineup/#/artist/yellow-days,https://www.coachella.com/lineup/#/artist/yg,https://www.coachella.com/lineup/#/artist/yotto,https://www.coachella.com/lineup/#/artist/yung-bae,https://www.coachella.com/lineup/#/artist/yves-tumor,https://www.coachella.com/lineup/#/artist/zedd';

const artistArr = artistString.split(',').slice(0, 65);
const stages = [
  'Coachella Stage',
  'Outdoor Theatre',
  'Gobi',
  'Mojave',
  'Sahara',
  'Sonora',
  'Yuma',
  'Do Lab'
];
const startTimes = ['12:00', '12:05', '12:10', '12:20', '12:30', '12:35', '12:40', '12:50', '13:00', '13:05', '13:10', '13:20', '13:30', '13:35', '13:40', '13:50', '14:00', '14:05', '14:10', '14:20', '14:30', '14:35', '14:40', '14:50', '15:10', '15:20', '15:30', '15:35', '15:40', '15:50', '16:10', '16:20', '16:30', '16:35', '16:40', '16:50', '17:00', '17:05', '17:10', '17:20', '17:30', '17:35', '17:40', '17:50', '18:05', '18:10', '18:20', '18:30', '18:35', '18:40', '18:50', '19:00', '19:05', '19:20', '19:30', '19:35', '19:40', '19:50', '20:05', '20:20', '20:30', '20:35', '20:40', '20:50', '21:00'];

const endTimes = ['12:35', '12:40', '12:50', '13:00', '13:05', '13:10', '13:20', '13:30', '13:35', '13:40', '13:50', '14:00', '14:05', '14:10', '14:20', '14:30', '14:35', '14:40', '14:50', '15:10', '15:20', '15:30', '15:35', '15:40', '15:50', '16:10', '16:20', '16:30', '16:35', '16:40', '16:50', '17:00', '17:05', '17:10', '17:20', '17:30', '17:35', '17:40', '17:50', '18:05', '18:10', '18:20', '18:30', '18:35', '18:40', '18:50', '19:00', '19:05', '19:20', '19:30', '19:35', '19:40', '19:50', '20:05', '20:20', '20:30', '20:35', '20:40', '20:50', '21:00', '21:20', '21:30', '21:35', '21:40', '22:00']

console.log(startTimes.length);
axios
  .get('http://localhost:5000/api/festivals')
  .then(festivals => {
    const coachella = festivals.data.find(festival => (
      festival.name === 'Coachella' && festival.year === 2019
    ));
    debugger
    const coachellaId = coachella._id;

    artistArr.forEach((artist, idx) => {
      const url = artist.split('/');
      let name = url[url.length - 1];

      // Format name properly, capitalizing each word
      name = name
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');

      const params = {
        start: new Date(`2019-4-12 ${startTimes[idx]}`),
        end: new Date(`2019-4-12 ${endTimes[idx]}`),
        stage: stages[idx % 7],
        artist: name
      }

      axios.post(`http://localhost:5000/api/festivals/${coachellaId}/sets`, params)
        .catch(err => console.log(err));
    }).catch(err => console.log(err));
  });
