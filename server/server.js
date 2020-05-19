const SqlService = require('./SqlService');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('API_KEY');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

let router = express.Router();

const REQUIRED_CHAR_FIELDS = ['name', 'description'];

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

      let missingFields = REQUIRED_CHAR_FIELDS.filter((field) => !req.body[field]);

      if (missingFields.length) {
        res.status(500).json(`Error is following fields ${missingFields}`);
        return;
      }

      SqlService.updateCharacter(char, (err, results, fields) => {
        if (err) {
          res.status(500).json(err);
        } else {
          res.json(results);
        }
      });
    });

router.route('/characters')
    .get((req, res) => {
      SqlService.getCharacters((err, results, fields) => {
        res.json(results);
      });
    })

    .post((req, res) => {

      console.log('POST!');
      let missingFields = REQUIRED_CHAR_FIELDS.filter((field) => !req.body[field]);

      if (missingFields.length) {
        res.status(500).json(`Error is following fields ${missingFields}`);
        return ;
      }

      SqlService.createCharacter(req.body, (err, results, fields) => {
        console.log('Callback!', err , results, fields);
        if (err) {
          res.status(500).json(err);
        }
        res.json(results);
      })
    });

router.route('/submit-form/')
    .post((req, res) => {
      console.log('SUBMITTING FORM!');
      console.log(req.body);

      const msg = {
        to: 'bug24b@gmail.com',
        from: 'mynodeserver@nodeserver.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: req.body.name + ' said ' + req.body.message,
      };

      sgMail.send(msg);
    });



app.use('/api', router);


app.listen(3000, () => {
  console.log('Express server running!')
});
