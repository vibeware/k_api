var express = require('express');
var router = express.Router();

const USERS = [
  {
    name: "john",
    email: "john@example.com",
    age: 20
  
  },
  {
    name: "dave",
    email: "dave@example.com",
    age: 25
  }
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: USERS });
});

module.exports = router;
