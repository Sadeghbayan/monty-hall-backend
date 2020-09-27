var express = require('express');
var router = express.Router();


/* simulate the game with given data */
router.post('/', function(req, res, next) {

	console.log(req.body)

	// given data

	 const { numberOfSimulation, switchable} = req.body;

	 console.log(numberOfSimulation, switchable)



  res.json({
    date: new Date().toISOString()
  });
});

module.exports = router;
