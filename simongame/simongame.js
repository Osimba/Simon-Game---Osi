$(document).ready(main());

function main(){
	var gameOnOff = false;
	var strictMode = false;
	var colorSequence = [];

	startGame(strictMode);

	function startGame(mode){
		clearScore();
		nextRound(0);
	}

	function clearScore(){
		document.getElementById("counter").innerHTML = padding(0);
	}

	function padding(num) {
     return (num < 10 ? '0' : '') + num;
	}

	function nextRound(round){
		colorSequence.push(Math.floor((Math.random() * 4) + 1));
		//runSequence(colorSequence);
	}

	function runSequence(seq){
		for(var i = 0; i < seq.length; i++){
			/* use button press
			 * play tone
			 * set delay for each button press
			 */
			$('#B' + seq[i]).click();
		}
	}

	var bSound1 = document.getElementById("B1sound");
	var bSound2 = document.getElementById("B2sound");
	var bSound3 = document.getElementById("B3sound");
	var bSound4 = document.getElementById("B4sound");


	$("#B1").mousedown(function(){
		bSound1.load();
		bSound1.play();
		$("#B1").prop("transform", "matrix(.95, 0, 0, .95, 2, 2)");
	});
	$("#B1").mouseup(function(){
	//	bSound1.pause();
	//	this.removeProp("box-shadow");
	//	this.removeProp("transform");
	});
	$("#B2").on('click', function(){
		$('#B1').click();
		bSound2.play();
	});
	$("#B3").on('click', function(){
		bSound3.play();
	});
	$("#B4").on('click', function(){
		bSound4.play();
	});


}