const SqlService = require('./SqlService');
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


app.get('/', (req, res) => {
  res.json('Hello and welcome to my amazing character api!');
});

router.route('/character/:id')
    .get((req, res) => {
      SqlService.getCharacter(req.params.id , (err, results, fields) => {
        res.json(results);
      });
    })

    .put((req, res) => {
      console.log(req.body);
      let characters = [];

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
    .get((req, res) => {
      SqlService.getCharacters((err, results, fields) => {
        res.json(results);
      });
    })

    .post((req, res) => {
      console.log('POST!');
      if (!req.body.name) {
        res.json('Please provide a name!');
        return;
      }

      if (!req.body.power) {
        res.json('Please provide a power!');
        return;
      }

      console.log(req.body);

      SqlService.createCharacter(req.body.name, req.body.power, (err, results, fields) => {
        console.log('Callback!', err , results, fields);
        if (err) {
          res.status(500).json(err);
        }
        res.json(results);
      })
    });


app.use('/api', router);


app.listen(3000, () => {
  console.log('Express server running!')
});
