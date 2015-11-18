/* Handle routing */

var express = require('express');
var mylogic = require('../lib/mylogic');

var router = express.Router();

router.get('/' , mylogic.index);
router.get('/*' , mylogic.error);

module.exports = router;