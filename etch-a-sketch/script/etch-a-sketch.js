var rows = 16
var squares = 16

$(document).ready(function() {

    var totalSquares = rows * squares;
    
    for ( i = 0; i < totalSquares; i++) {
        $('.container').append('<div class="square">');
    };

    $('.square').hover(function () {
        var opacityAmount = 0.1
        if (opacityAmount < 1) {
            $(this).css({ "background-color": "#000000", "opacity": opacityAmount })
        };
        opacityAmount += 0.1
        console.log(opacityAmount)
    });

});

function resetBoard() {
    
    $('.container').empty();
    
    var totalSquares = rows * squares;
    
    for ( i = 0; i < totalSquares; i++) {
        $('.container').append('<div class="square">');
    };

    $('.square').hover(function () {
        $(this).css("background-color", "black");
    });

};
