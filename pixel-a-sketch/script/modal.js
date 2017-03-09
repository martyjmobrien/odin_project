function newBoardModal() {
    $('.newBoardModal').css({ display: "block" })
        $('.close').click(function() {
            $('.newBoardModal').css({ display: "none" });  
        }) ;  
};

function hoverBoard() {
    var userGridSize = $('#userGrid').val();
    console.log(userGridSize);
};


