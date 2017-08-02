var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.send("olá node  JS! Agora com nodemom");
});

module.exports = router;
