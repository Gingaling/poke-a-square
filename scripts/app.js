console.log('Welcome to Poke-A-Square...');

// == User Stories/game logic == //
// user story is a guide of the user's journey though our application and serves as a guide for the developer in building out logic

// When the user clicks begin, the timer should start and the squares should populate with a random color

// When the user clicks on a color: the color should disapear and score should be added or subtracted.

// When the round is over, the scores round and timer should be updated for the user to start over with increased difficulty.

$('button').on('click', () => {
	// createSquares(30);
	setUpRound();
	setTimer();
});

const createSquares = numberOfSquares => {
	const $squares = $('.squares');
	for (let i = 0; i < numberOfSquares; i++) {
		const $square = $('<div/>');
		$square.addClass('square');
		$square.css('background-color', applyRandomColor());
		$squares.append($square);
	}
};

const applyRandomColor = square => {
	const colors = ['red', 'green', 'blue'];
	const idx = Math.ceil(Math.random() * 3);
	return colors[idx];
};

$(".squares").on("click", ".square", e => {
	handlePoke(e);
});

let score = 0;

const handlePoke = e => {
	if (e.target.classList.contains("poked")) {
		return;
	}
	if (e.target.classList.contains("square")) {
		$(e.target).css('opacity', 0);
		const color = $(e.target).css('background-color');
		$(e.target).addClass("poked");
		checkValidPoke(color);
	}
};

const checkValidPoke = squareColor => {
	const colors = squareColor.substring(4, squareColor.length - 1).split(" ");
	const blue = parseInt(colors[2]);
	if (blue === 255) {
		score++;
		$('#score').text('scoreboard: ' + score);
	} else {
		score--;
		$('#score').text('scoreboard: ' + score);
	}
};

const gameOver = () => {
	$('#gameName').text("Game Over");
}

let time = 30;
let round = 1;

const setTimer = () => {
	const timer = setInterval(() => {
		time--;
		if (time === 0) {
			round++;
			if (round === 4) {
				clearInterval(timer);
				gameOver();
				return;
			}
			clearInterval(timer);
			setUpRound();
			setTimer();
		}
		updateTimer();
	}, 1000);
}

const updateTimer = () => {
	const $timer = $("#timer");
	$timer.text(`timer: ${time}s`);
};

const setUpRound = () => {
	$('.squares').empty();
	$('#round').text('round: ' + round);
	if (round === 1) {
		createSquares(50);
		time = 30;
	} else if (round === 2) {
		createSquares(100);
		time = 20;
	} else if (round >= 3) {
		createSquares(150);
		time = 20;
	}
};
