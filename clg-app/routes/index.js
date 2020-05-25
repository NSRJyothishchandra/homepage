var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require('path');
/* GET home page. */
router.use(express.static(path.join(__dirname, 'college')));
router.get('/', function(req, res, next) {
  fs.createReadStream(__dirname + "/college/home.html").pipe(res)
});

module.exports = router;
