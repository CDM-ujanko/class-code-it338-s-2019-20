
const express = require("express");
const bodyParser = require("body-parser");

const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

let router = express.Router();

function readData() {
  try {
    return JSON.parse(fs.readFileSync('data.json', 'utf8'));
  } catch (err) {
    console.error(err);
  }
}

/**
 * Add a char to the data
 * @param {Object} char The character object.
 */
function addCharacter(char) {
  console.log('in add char!', char);
  let data = readData();
  data.characters.push(char);

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    console.log(err);
  })
}

/**
 *
 * @param id
 * @param name
 * @param power
 */
function updateChar(id, name, power) {
  let data = readData();

  data.characters[id].name = name;
  data.characters[id].power = power;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    console.log(err);
  })
}

app.get('/', (req, res) => {
  res.json('Hello and welcome to my amazing character api!');
});

router.route('/character/:id')
    .get((req, res) => {
      let characters = readData().characters;
      if (req.params.id && characters[req.params.id]) {
        res.json(characters[req.params.id]);
      } else {
        res.json('No such id');
      }
    })

    .put((req, res) => {
      console.log(req.body);
      let characters = readData().characters;

      if (!characters[req.params.id]) {
        res.json('No such id');
        return;
      }

      if (!req.body.name) {
        res.json('Please provide a name!');
        return;
      }

      if (!req.body.power) {
        res.json('Please provide a power!');
        return;
      }

      updateChar(req.params.id, req.body.name, req.body.power);
      res.json('OK!');
    });

router.route('/characters')
    .get((req, res) =>{
      res.json(readData());
    })

    .post((req, res) => {
      if (!req.body.name) {
        res.json('Please provide a name!');
        return;
      }

      if (!req.body.power) {
        res.json('Please provide a power!');
        return;
      }

      try {
        addCharacter(req.body);
        res.json('ok!');
      } catch (e) {
        res.json(e);
      }
    });


app.use('/api', router);


app.listen(3000, () => {
  console.log('Express server running!')
});
