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
			setTimeout(btnClicked('B' + seq[i]), 1500);
		}
	}

	var bSound1 = document.getElementById("B1sound");
	var bSound2 = document.getElementById("B2sound");
	var bSound3 = document.getElementById("B3sound");
	var bSound4 = document.getElementById("B4sound");


	$("#B1").mousedown(function(){
		btnClicked(this.id)
	});

	$("#B2").mousedown(function(){
		btnClicked(this.id)
	});

	$("#B3").mousedown(function(){
		btnClicked(this.id)
	});

	$("#B4").mousedown(function(){
		btnClicked(this.id)
	});

	function btnClicked(button) {
		console.log(button);
		document.getElementById(button + "sound").load();
		document.getElementById(button + "sound").play();
	}

	$("button").click(function(){
		runSequence([1, 2, 3, 4]);
	});


}
