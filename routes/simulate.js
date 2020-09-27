var express = require('express');
var router = express.Router();


/* simulate the game with given data */
router.post('/', function(req, res, next) {

	// given data
	 const { number, isSwitch} = req.body;

	function runMontyHall(toSwitch) {

		const doors = [0,1,2]
		let carIsIn = Math.floor(Math.random() * doors.length);

		let doorSelected = Math.floor(Math.random() * doors.length);

		let revealedDoor = doors.find((door) => door !== carIsIn && door !== doorSelected);

		if(toSwitch){
			return carIsIn === doors.find((door) => door !== doorSelected && door !== revealedDoor)
		}
		else {
			return carIsIn === doorSelected
		}

	}

	function simulateGame(number, toSwitch) {

		// TODO check number with 01
		let gamesReportWin = 0;
		let gameresult = {};
		if(number !== null && number !== '' && Number(number) >= 0) {
			for(let i = 0; i < number; i++){
				gamesReportWin += runMontyHall(toSwitch)
			}
		}else {
			gamesReportWin = -1;
		}

		gameresult = {number, toSwitch, gamesReportWin}
		return gameresult
	}


  res.json({
	  gamesReport: simulateGame(number, isSwitch)
  });
});

module.exports = router;
