$(document).ready(function() {
    var squareColor = "#000000"
    createBoard(20)
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
});

function createBoard(newSquares) {
    var squareSize = Math.ceil(600 / newSquares) + ".px";

    var totalSquares = newSquares * newSquares;
    
    for ( i = 0; i < totalSquares; i++) {
        $('.container').append('<div class="square">');
    };

    $('.square').css({ "width": squareSize, "height": squareSize })

    hoverDraw("#000000");
}

function hoverDraw(squareColor) {
    $('.square').mousedown(function() {
        $('.square').mousemove(function(e) {
            if(e.which==1) {
                $(this).css({ "background-color": squareColor });
            }
        });
    });
}

function resetBoard() {
    $('.container').empty();
    var userSquares = parseInt(prompt("Which pixel size would you like?? Numbers only please"));
    createBoard(userSquares);
}
