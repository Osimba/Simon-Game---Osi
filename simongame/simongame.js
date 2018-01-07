$(document).ready(main());

function main(){
	var gameOnOff = false;
	var strictMode = false;
	var colorSequence = [];
	const colors = ['B1', 'B2', 'B3', 'B4'];
	var round = 0;
	var score = 0;
	var step = 0;


	function startGame() {
		if(gameOnOff) {
			clearScore();
			nextRound();
		}
	}

	function clearScore() {
		round = 0;
		updateScore(round);
		step = 0;
		colorSequence = [];
	}

	function updateScore(newScore) {
		document.getElementById("counter").innerHTML = padding(newScore);
	}

	function padding(num) {
     return (num < 10 ? '0' : '') + num;
	}

	function nextRound(){
		round++;
		updateScore(round);
		colorSequence.push(colors[Math.floor((Math.random() * colors.length))]);
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
		btnClicked(nextColor);
		setTimeout(btnRestore, 1000, nextColor);
		step++;
		setTimeout(runSequence, 1000, seq);
	}

	function seqCheck(pushed) {
		//possibly use global variable pointing to next color
		//every time player pushed is correct, go to next color (var++)
		//if incorrect make error sound, reset play sequence and have player try again
		if(pushed === colorSequence[step]){
			//Next step
			if(step === colorSequence.length - 1){
				setTimeout(nextRound, 1000);
			}
			step++;
		} else {
			alert("WRONG, please try again!");
			if(strictMode){
				startGame();
			} else {
				step = 0;
				runSequence(colorSequence);
			}


		}
	}


//GREEN
	$("#B1").on({
		mousedown: function(){
			if(playerTurn && gameOnOff){
				btnClicked(this.id);
				seqCheck(this.id);
			}
		},
		mouseup: function(){
			if(playerTurn && gameOnOff){
				btnRestore(this.id);
			}
		}
	});

//RED
	$("#B2").on({
		mousedown: function(){
			if(playerTurn && gameOnOff){
				btnClicked(this.id);
				seqCheck(this.id);
			}
		},
		mouseup: function(){
			if(playerTurn && gameOnOff){
				btnRestore(this.id);
			}
		}
	});

//YELLOW
	$("#B3").on({
		mousedown: function(){
			if(playerTurn && gameOnOff){
				btnClicked(this.id);
				seqCheck(this.id);
			}
		},
		mouseup: function(){
			if(playerTurn && gameOnOff){
				btnRestore(this.id);
			}
		}
	});

//BLUE
	$("#B4").on({
		mousedown: function(){
			if(playerTurn && gameOnOff){
				btnClicked(this.id);
				seqCheck(this.id);
			}
		},
		mouseup: function(){
			if(playerTurn && gameOnOff){
				btnRestore(this.id);
			}
		}
	});

	$("#start").click(function(){
		startGame();
	});

	$("#strict").click(function(){
		if(gameOnOff){
			strictMode = !strictMode;
			if(strictMode){
				this.firstChild.style.backgroundColor = "#991f00";
			} else {
				this.firstChild.style.backgroundColor = "#FFF";
			}
		}
	});


	function btnClicked(button) {
		$('#' + button).addClass(button);
		document.getElementById(button + "sound").load();
		document.getElementById(button + "sound").play();
	}

	function btnRestore(button) {
		$('#' + button).removeClass(button);
	}

//Power on off
	$("#power").change(function(){
		if($(this).prop('checked')) {
			gameOnOff = true;
			$("span").addClass("input:checked + .slider:before");
		} else {
			gameOnOff = false;
			clearScore();
		}
	});

}
