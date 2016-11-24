//store the X | O
var state = {
    items: 0,
    counter: 0
};
//modify state
//add new X | O


function addCounter() {
    state.counter++;
};


function checkWin(xOrCircle) {
    $(xOrCircle)
        // check for wins or loses if you have played for more than or equal to 3 turns
    var wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    var xOwned = []; 
    var oOwned = []; 


    if ($('.circle').length >= 3 || $('.cross').length >= 3) {
        
        var crosses = $('.cross').parent();
        var circles = $('.circle').parent();
        for (var i = 0; i < crosses.length; i++) {
            xOwned.push(+crosses[i].id);
        }
        for (var i = 0; i < circles.length; i++) {
            oOwned.push(+circles[i].id);
        }
        
        
        console.log(xOwned.length, xOwned);
        console.log(oOwned.length, oOwned);
        for (var i = 0; i < wins.length; i++) {
            if (xOwned.indexOf(wins[i][0]) > -1 && xOwned.indexOf(wins[i][1]) > -1 && xOwned.indexOf(wins[i][2]) > -1) {
                //x won
                alert("X has won!");
                resetGame();
                break;
            } else if (oOwned.indexOf(wins[i][0]) > -1 && oOwned.indexOf(wins[i][1]) > -1 && oOwned.indexOf(wins[i][2]) > -1) {
                //o won
                alert("O has won!");
                resetGame();
                break;
            } else if (state.counter === 8) {
                //draw
                alert("Draw!");
                resetGame();
                break;
            };
        };
    };
}


var resetGame = function() {
    location.reload();
};


//render state
//push required counter


function addItem(target) {
    var listX = '<img class="cross" src="http://simpleicon.com/wp-content/uploads/cross.png" height=100px width=100px />';
    var listO = '<img class="circle" src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/shape_circle.png" height=100px width=100px/>';
    if (state.counter % 2 === 0) {
        $(target).append(listX);
    } else {
        $(target).append(listO);
    };
};


//eventlistener - click
$(document).ready(function() {
    $('.tictac').on('click', '.cell', function() {
        // debugger
        var cell = $(this);
        addCounter();
        addItem(cell);


        if (state.counter % 2 === 0) {
            checkWin('.cross');
        } else {
            checkWin('.circle');
        };
    })
});
