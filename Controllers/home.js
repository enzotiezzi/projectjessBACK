var express = require('express');
var views = require('../config/front');
var router = express.Router();

router.get('/', function (req, res) {
	res.sendFile('index.html', { root: views.path });
});

module.exports = router;