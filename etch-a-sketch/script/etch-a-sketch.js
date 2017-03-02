currentColor = "#000000";
currentOpacity = 1;

$(document).ready(function() {
    createBoard(20)
    $('.container, .palette > div, .opacity > div').hover(function() {
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
});

function createBoard(newSquares) {
    var squareSize = Math.ceil(600 / newSquares) + ".px";

    var totalSquares = newSquares * newSquares;
    
    for ( i = 0; i < totalSquares; i++) {
        $('.container').append('<div class="square">');
    };

    $('.square').css({ width: squareSize, height: squareSize });
    // console.log(squareSize)
    // console.log($('.square').width())
    // console.log($('.square').height())

    hoverDraw("#000000");
};

function hoverDraw(squareColor) {
    currentColor = squareColor;
    $('.opacity > div').css({ "background-color": squareColor })
    $('.square').mousedown(function() {
        $('.square').mousemove(function(e) {
            if(e.buttons==1) {
                $(this).css({ "background-color": squareColor, opacity: currentOpacity });
            };
        });
    });
};

function resetBoard() {
    // var userSquares = parseInt(prompt("Which pixel size would you like? Numbers only please"));
    var userSquares = prompt("Which pixel size would you like? Numbers only please");
    while(typeof userSquares === 'string') {
        var userSquares = prompt("Numbers only please! Which pixel size would you like?");
    }
    if(Number.isInteger(userSquares)) {
        $('.container').empty();
        createBoard(userSquares);
    } else {
        hoverDraw(currentColor);
    };
};
