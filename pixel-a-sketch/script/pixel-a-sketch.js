currentColor = "#000000";
currentOpacity = 1;
currentShape = "0"

$(document).ready(function() {
    $('.container, .palette > div, .opacity > div, .toolShape > div').hover(function() {
        $(this).css("cursor", "pointer");
    });
    $('.opacity > div').css({ "background-color": currentColor });
    $('.palette > div').click(function() {
        currentOpacity = 1;
    });
    $('#black').click(function() {
        hoverDraw("#000000");
    });
    $('#red').click(function() {
        hoverDraw("#ff0000");
    });
    $('#blue').click(function() {
        hoverDraw("#0000ff");
    });
    $('#green').click(function() {
        hoverDraw("#008000");
    });
    $('#yellow').click(function() {
       hoverDraw("#ffff00");
    });
    $('#orange').click(function() {
       hoverDraw("#ffa500");
    });
    $('#purple').click(function() {
       hoverDraw("#800080");
    });
    $('#brown').click(function() {
       hoverDraw("#a52a2a");
    });
    $('#eraser').click(function() {
        hoverDraw("#ffffff");
    });
    $('#lighter').click(function() {
        currentOpacity = 0.2;
    });
    $('#light').click(function() {
        currentOpacity = 0.4;
    });
    $('#dark').click(function() {
       currentOpacity = 0.7;
    });
    $('#darker').click(function() {
        currentOpacity = 1;
    });
    $('#rectangle').click(function() {
        currentShape = "0";
    });
    $('#circle').click(function() {
        currentShape = "50%";
    });
    startBoard();
});

function startBoard() {
    var userSquares = prompt("Welcome to Pixel-A-Sketch! Which pixel size would you like? Numbers only please. (Between 1 - 100)");
    if(userSquares === null) {
        alert("You can't play unless you enter a number between 1 - 100!");
        startBoard();
    } else {
        if(userSquares === "" || userSquares < 1 || userSquares > 100 || $.isNumeric(userSquares) != true) {
            alert("Please enter a number between 1 - 100");
            startBoard();
        } else {
            if($.isNumeric(userSquares)) {
                createBoard(userSquares);
            }
        }
    }
};

function createBoard(newSquares) {
    currentOpacity = 1

    var squareSize = parseInt(Math.ceil(600 / newSquares));

    var totalSquares = newSquares * newSquares;
    
    for ( i = 0; i < totalSquares; i++) {
        $('.container').append('<div class="square">');
    };

    $('.square').css({ width: squareSize, height: squareSize });

    hoverDraw("#000000");
};

function hoverDraw(squareColor) {
    currentColor = squareColor;
    $('.opacity > div').css({ "background-color": squareColor });
    $('.square').mousedown(function(e) {
        $(this).css({ "background-color": squareColor, opacity: currentOpacity, "border-radius": currentShape });
            $('.square').mousemove(function(e) {
                if(e.which === 1 || e.buttons === 1) {
                    $(this).css({ "background-color": squareColor, opacity: currentOpacity, "border-radius": currentShape });
                };
        });
    });
};

function resetBoard() {
    var userSquares = prompt("Which pixel size would you like? Numbers only please. (Between 1 - 100)");
    if(userSquares === null) {
        hoverDraw(currentColor);
    } else {
        if(userSquares === "" || userSquares < 1 || userSquares > 100 || $.isNumeric(userSquares) != true) {
            resetBoard();
        } else {
            if($.isNumeric(userSquares)) {
                $('.container').empty();
                createBoard(userSquares);
            }
        }
    }
};
