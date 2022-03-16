console.log("Welcome to Poke-A-Square...");

// == User Stories/game logic == //
// user story is a guide of the user's journey though our application and serves as a guide for the developer in building out logic

// When the user clicks begin, the timer should start and the squares should populate with a random color

// When the user clicks on a color: the color should disapear and score should be added or subtracted.

// When the round is over, the scores round and timer should be updated for the user to start over with increased difficulty.

let score = 0;
let time = 0;
let round = 1;

const updateTimer = () => {
    time--;
    $('#timer').text(`timer: ${time}`);
    if (time === 0) {
        time = 30;
        round += 1;
        setUpRound;
    }
};
}

setInterval(updateTimer, 1000)

const setUpRound = () => {
    $('.squares).empty();
    $('#round').text('round: ' + round)

    if (round === 1) {
        createSquares(50);
    } else if (round === 2) {
        createSquares(100);
    } else if (round >= 3) {
        createSquares(150);
    }
}
}




const createSquares = (numberOfSquares) => {
    for (i = 0; i < numberOfSquares; i++) {
        const square = $('<div/>');
        applyRandomColor(square);
        square.on('click', handlePoke);
        $('.squares').append(square);
    createSquares(30);
}
}

const applyRandomColor  = (square) => {
    const randNum = Math.ceil(Math.random() * 3);
    if(randNum === 1) {
        square.css('background=color', 'red')
    } else if(randNum === 2) {
        square.css('background=color', 'blue')
    } else if(randNum === 3) {
        square.css('background=color', 'green')
    }
}

const handlepoke = (e) => {
    console.log(e.target)
    $(e.target).css('opacity',0);
    const color = $(e.target).css('background-color');
    checkValidPoke(color)
};

console.log(color)

const checkValidPoke = (square) => {
    console.log(square, typeof square)
    const colors = square.substring(4, square.length-1.split(", ");
    const blue=coloros[2];
    
    if (blue ==='255'){
        score++;
    } else {
        scpre--;
    }
    $('h1').text('scoreboard: ' + score);
}
}

const updateTimer = () => {
    time--;
    $('#timer').text(`timer: ${time}s`);')
}