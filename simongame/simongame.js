$(document).ready(main());

function main(){
	var gameOnOff = false;
	var strictMode = false;
	var colorSequence = [];
	const colors = ['B1', 'B2', 'B3', 'B4'];
	var round = 0;
	var score = 0;
	var step = 0;

	startGame(strictMode);

	function startGame(mode){
		clearScore();
		nextRound();
	}

	function clearScore(){
		updateScore(0);
		step = 0;
		colorSequence = [];
	}

	function updateScore(newScore){
		document.getElementById("counter").innerHTML = padding(newScore);
	}

	function padding(num) {
     return (num < 10 ? '0' : '') + num;
	}

	function nextRound(){
		round++;
		updateScore(round);
		colorSequence.push(colors[Math.floor((Math.random() * colors.length))]);
		console.log(colorSequence);
		step = 0;
		runSequence(colorSequence);
		playerTurn = true;
	}

	function runSequence(seq){
		if(step > seq.length - 1) {
			step = 0;
			return;
		}

		var nextColor = seq[step];
		console.log(nextColor);
		btnClicked(nextColor);
		setTimeout(btnRestore, 1000, nextColor);
		step++;
		setTimeout(runSequence, 1000, seq);
	}

	function seqCheck(pushed) {
		//possibly use global variable pointing to next color
		//every time player pushed is correct, go to next color (var++)
		//if incorrect make error sound, reset play sequence and have player try again
		console.log(pushed);
		if(pushed === colorSequence[step]){
			//Next step
			if(step === colorSequence.length - 1){
				console.log("YESS");
				setTimeout(nextRound, 1000);
			}
			step++;
		} else {
			alert("WRONG");
			// clearScore(); //if strict
			step = 0;
			runSequence(colorSequence);
		}
	}



	$("#B1").on({
		mousedown: function(){
			if(playerTurn){
				btnClicked(this.id);
				seqCheck(this.id);
			}
		},
		mouseup: function(){
			if(playerTurn){
				btnRestore(this.id);
			}
		}
	});

	$("#B2").on({
		mousedown: function(){
			if(playerTurn){
				btnClicked(this.id);
				seqCheck(this.id);
			}
		},
		mouseup: function(){
			if(playerTurn){
				btnRestore(this.id);
			}
		}
	});

	$("#B3").on({
		mousedown: function(){
			if(playerTurn){
				btnClicked(this.id);
				seqCheck(this.id);
			}
		},
		mouseup: function(){
			if(playerTurn){
				btnRestore(this.id);
			}
		}
	});

	$("#B4").on({
		mousedown: function(){
			if(playerTurn){
				btnClicked(this.id);
				seqCheck(this.id);
			}
		},
		mouseup: function(){
			if(playerTurn){
				btnRestore(this.id);
			}
		}
	});

	$("#start").click(function(){
		startGame(false);
	});

	function btnClicked(button) {
		$('#' + button).addClass(button);
		document.getElementById(button + "sound").load();
		document.getElementById(button + "sound").play();
	}

	function btnRestore(button) {
		$('#' + button).removeClass(button);
	}

	$("#power").change(function(){
		if($(this).prop('checked')) {
			gameOnOff = true;
		} else {
			gameOnOff = false;
		}
	});

	$("button").click(function(){
		console.log($("#B1").val());
	});

}
