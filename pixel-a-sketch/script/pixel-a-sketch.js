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

    $('#userInputStartBoard').focus();

    $('#startSubmit').click(function() {
        startBoard(userGridSize);
    });

    $('.startBoardModal').keypress(function(e) {
        if( e.which === 13 ) {
            startBoard(userGridSize);
        };
    });
});

function startBoardModal() {
    $('.startBoardModal').css({ display: "block" });
    $('#userInputStartBoard').focus();
    $('#startSubmit').click(function() {
        var userGridSize = $('#userInputStartBoard').val();
        $('#userInputStartBoard').val("");
        createStartBoard(userGridSize);
    });
    $('.startBoardModal').keypress(function(e) {
        if( e.which === 13 ) {
            var userGridSize = $('#userInputStartBoard').val();
            $('#userInputStartBoard').val("");
            createStartBoard(userGridSize);
        };
    });
};

function createStartBoard(userGridSize) {
        if (userGridSize === "" || userGridSize < 1 || userGridSize > 100 || $.isNumeric(userGridSize) != true) {
            $('#userInputStartBoard').val("");
            startErrorModal();
        } else {
            if($.isNumeric(userGridSize)) {
                $('#userInputStartBoard').val("");
                $('.startBoardModal').css({ display: "none" });
                createBoard(userGridSize);
            };
        };
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

function newBoardModal() {
    $('.newBoardModal').css({ display: "block" });
        $('.close').click(function() {
            $('.newBoardModal').css({ display: "none" });  
        });
    $('#userInputNewBoard').focus();
    $('#newSubmit').click(function() {
        var userGridSize = $('#userInputNewBoard').val();
        $('#userInputNewBoard').val("");
        createNewBoard(userGridSize);
    });
    $('.newBoardModal').keypress(function(e) {
        if( e.which === 13 ) {
            var userGridSize = $('#userInputNewBoard').val();
            $('#userInputNewBoard').val("");
            createNewBoard(userGridSize);
        };
    });
};

function createNewBoard(userGridSize) {
        if (userGridSize === "" || userGridSize < 1 || userGridSize > 100 || $.isNumeric(userGridSize) != true) {
            $('#userInputNewBoard').val("");
            newErrorModal();
            } else {
                if($.isNumeric(userGridSize)) {
                    $('.container').empty();
                    $('.newBoardModal').css({ display: "none" });
                    createBoard(userGridSize);
                };
        };
};

function startErrorModal() {
    $('.startBoardModal').css({ display: "none" });
    $('.startErrorModal').css({ display: "block" });
            $('#startErrorSubmit').click(function() {
                $('.startErrorModal').css({ display: "none" });
                startBoardModal();
            });
};

function newErrorModal() {
    $('.newBoardModal').css({ display: "none" });
    $('.newErrorModal').css({ display: "block" });
            $('#newErrorSubmit').click(function() {
                $('.newErrorModal').css({ display: "none" });
                newBoardModal();
            });
};