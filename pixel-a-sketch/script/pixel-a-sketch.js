var userStarted = false;
var currentColor = "#000000";
var currentOpacity = 1;
var currentShape = "0"

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
    
    $('.close').click(function() {
        if ( userStarted === true ) {
            $('.startBoardModal').css({ display: "none" });
            $('.container, .opacity, .toolShape, .palette, #button, #copyright').css({ display: "block" });
        }
    })

    $('.startBoardModal').fadeIn('slow');
    $('#userInputStartBoard').focus();
    $('#startSubmit').click(function() {
        var startGridSize = $('#userInputStartBoard').val();
        createBoard(startGridSize);
    });
    $('.startBoardModal').keypress(function(e) {
        if( e.which === 13 ) {
            var startGridSize = $('#userInputStartBoard').val();
            createBoard(startGridSize);
        };
    });

});

function startBoardModal() {
    $('.container, .opacity, .toolShape, .palette, #button, #copyright').css({ display: "none" });
    $('#userInputStartBoard').val("");
    if ( $('.startBoardModal').css( "display" ) === "none" ) {
        $('.startBoardModal').fadeIn('slow');
    };
    $('#userInputStartBoard').focus();
};

function createBoard(userGridSize) {
    userStarted = true;
    $('.container').empty();
        if (userGridSize === "" || userGridSize < 1 || userGridSize > 100 || $.isNumeric(userGridSize) != true) {
            errorModal();
        } else {
            if($.isNumeric(userGridSize)) {
                currentOpacity = 1
                currentShape = 0
                var gridSize = parseInt(Math.ceil(600 / userGridSize));
                var totalSquares = userGridSize * userGridSize;
                for ( i = 0; i < totalSquares; i++) {
                    $('.container').append('<div class="square">');
                };
                $('.square').css({ width: gridSize, height: gridSize });
                hoverDraw("#000000");
                $('.startBoardModal').css({ display: "none" });
                $('.container, .opacity, .toolShape, .palette, #button, #copyright').fadeIn('slow');
            };
        };
};

function hoverDraw(squareColor) {
    currentColor = squareColor;
    $('.opacity > div').css({ "background-color": squareColor });
    $('.square').mousedown(function(e) {
        $(this).css({ "background-color": squareColor, opacity: currentOpacity, "border-radius": currentShape });
            $('.square').mousemove(function(e) {
                if( e.buttons === 0) {
                    return;
                } else {
                    if( e.which === 1 || e.buttons === 1 ) {
                        $(this).css({ "background-color": squareColor, opacity: currentOpacity, "border-radius": currentShape });
                    };
                };
            });
    });
};

function errorModal() {
    $('.startBoardModal').css({ opacity: "0.3" });
        $('.errorModal').css({ display: "block" });
            $('#errorSubmit').click(function() {
                $('.errorModal').css({ display: "none" });
                $('.startBoardModal').css({ opacity: "1" });
                startBoardModal();
            });
};