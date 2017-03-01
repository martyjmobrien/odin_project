$(document).ready(function() {
    createBoard(20)
});

function createBoard(newSquares) {
    var squareSize = 600 / newSquares + ".px";

    var totalSquares = newSquares * newSquares;
    
    for ( i = 0; i < totalSquares; i++) {
        $('.container').append('<div class="square">');
    };

    $('.square').css({ "width": squareSize, "height": squareSize })

    hoverDraw();
}

function hoverDraw() {
    $('.square').hover(function () {
        var opacityAmount = 0.1
        if (opacityAmount < 1) {
            $(this).css({ "background-color": "#000000", "opacity": opacityAmount })
        };
        opacityAmount += 0.1
    });
}

function resetBoard() {
    $('.container').empty();
    var userSquares = parseInt(prompt("How many squares would you like? Numbers only please"), 10);
    createBoard(userSquares);
};
