/* ============create ROW divs==========================================*/
    function createRows() {
        for(var i=0; i<=12; i++) {
            $('.container').append('<div id="row_' + i + '"></div>');
        }
    }
    createRows();
/* ============create MARKERS and values================================*/
    function createMarkers() {
        for(var i=0; i<=12; i++) {
            $('#row_' + i + '').append('<div class="mark_1"></div>');
            $('#row_' + i + '').append('<div class="mark_2"></div>');
            $('#row_' + i + '').append('<div class="mark_3"></div>');
            $('#row_' + i + '').append('<div class="mark_4"></div>');
        }
    }
    createMarkers();

    function giveMarkersValue() {
        for(var i=1; i<=4; i++) {
            $('.mark_' + i + '').text('\u2022'); // <= dots
        }
    }
    giveMarkersValue();
/* ============create SOLVERS and values - create PLAY button===========*/
    function createSolvers() {
        for(var i=0; i<=11; i++) {
            $('#row_' + i + '').append('<div class="mark_5"></div>');
            $('#row_' + i + '').append('<div class="mark_6"></div>');
            $('#row_' + i + '').append('<div class="mark_7"></div>');
            $('#row_' + i + '').append('<div class="mark_8"></div>');
        }
    }
    createSolvers();

    function giveSolversValue() {
        for(var i=5; i<=8; i++) {
            $('.mark_' + i + '').text('\u2022'); // <= dots
        }
    }
    giveSolversValue();

    function createPlayButton() {
        $('#row_12').append('<button id="play_button">Play</button>');
    }
    createPlayButton();
/* ============create CHECK GUESSES button==============================*/
    function solveButtons() {
        for(var i=0; i<=11; i++) {
            $('.container').append('<button id="btn_' + i + '">\u21E6</button>');
        }
    }
    solveButtons();
/* ============create GAME OVER button==================================*/
    function gameOver() {
        $('.container').append('<button id="game_over">\u21E8</button>');
    }
    gameOver();
/* ============choose GAME PIECES=======================================*/
    var row0Mark1Clicks = 0;
    $('#row_0 .mark_1').on('click', function() {
        row0Mark1Clicks++;
        if(row0Mark1Clicks === 1 || row0Mark1Clicks === 5 || row0Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark1Clicks === 2 || row0Mark1Clicks === 6 || row0Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark1Clicks === 3 || row0Mark1Clicks === 7 || row0Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark1Clicks === 4 || row0Mark1Clicks === 8 || row0Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_0();
    });

    var row0Mark2Clicks = 0;
    $('#row_0 .mark_2').on('click', function() {
        row0Mark2Clicks++;
        if(row0Mark2Clicks === 1 || row0Mark2Clicks === 5 || row0Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark2Clicks === 2 || row0Mark2Clicks === 6 || row0Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark2Clicks === 3 || row0Mark2Clicks === 7 || row0Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark2Clicks === 4 || row0Mark2Clicks === 8 || row0Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_0();
    });

    var row0Mark3Clicks = 0;
    $('#row_0 .mark_3').on('click', function() {
        row0Mark3Clicks++;
        if(row0Mark3Clicks === 1 || row0Mark3Clicks === 5 || row0Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark3Clicks === 2 || row0Mark3Clicks === 6 || row0Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark3Clicks === 3 || row0Mark3Clicks === 7 || row0Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark3Clicks === 4 || row0Mark3Clicks === 8 || row0Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_0();
    });

    var row0Mark4Clicks = 0;
    $('#row_0 .mark_4').on('click', function() {
        row0Mark4Clicks++;
        if(row0Mark4Clicks === 1 || row0Mark4Clicks === 5 || row0Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark4Clicks === 2 || row0Mark4Clicks === 6 || row0Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark4Clicks === 3 || row0Mark4Clicks === 7 || row0Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row0Mark4Clicks === 4 || row0Mark4Clicks === 8 || row0Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_0();
    });
    /*===================================*/
    var row1Mark1Clicks = 0;
    $('#row_1 .mark_1').on('click', function() {
        row1Mark1Clicks++;
        if(row1Mark1Clicks === 1 || row1Mark1Clicks === 5 || row1Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark1Clicks === 2 || row1Mark1Clicks === 6 || row1Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark1Clicks === 3 || row1Mark1Clicks === 7 || row1Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark1Clicks === 4 || row1Mark1Clicks === 8 || row1Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_1();
    });

    var row1Mark2Clicks = 0;
    $('#row_1 .mark_2').on('click', function() {
        row1Mark2Clicks++;
        if(row1Mark2Clicks === 1 || row1Mark2Clicks === 5 || row1Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark2Clicks === 2 || row1Mark2Clicks === 6 || row1Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark2Clicks === 3 || row1Mark2Clicks === 7 || row1Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark2Clicks === 4 || row1Mark2Clicks === 8 || row1Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_1();
    });

    var row1Mark3Clicks = 0;
    $('#row_1 .mark_3').on('click', function() {
        row1Mark3Clicks++;
        if(row1Mark3Clicks === 1 || row1Mark3Clicks === 5 || row1Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark3Clicks === 2 || row1Mark3Clicks === 6 || row1Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark3Clicks === 3 || row1Mark3Clicks === 7 || row1Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark3Clicks === 4 || row1Mark3Clicks === 8 || row1Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_1();
    });

    var row1Mark4Clicks = 0;
    $('#row_1 .mark_4').on('click', function() {
        row1Mark4Clicks++;
        if(row1Mark4Clicks === 1 || row1Mark4Clicks === 5 || row1Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark4Clicks === 2 || row1Mark4Clicks === 6 || row1Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark4Clicks === 3 || row1Mark4Clicks === 7 || row1Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row1Mark4Clicks === 4 || row1Mark4Clicks === 8 || row1Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_1();
    });
    /*===================================*/
    var row2Mark1Clicks = 0;
    $('#row_2 .mark_1').on('click', function() {
        row2Mark1Clicks++;
        if(row2Mark1Clicks === 1 || row2Mark1Clicks === 5 || row2Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark1Clicks === 2 || row2Mark1Clicks === 6 || row2Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark1Clicks === 3 || row2Mark1Clicks === 7 || row2Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark1Clicks === 4 || row2Mark1Clicks === 8 || row2Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_2();
    });

    var row2Mark2Clicks = 0;
    $('#row_2 .mark_2').on('click', function() {
        row2Mark2Clicks++;
        if(row2Mark2Clicks === 1 || row2Mark2Clicks === 5 || row2Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark2Clicks === 2 || row2Mark2Clicks === 6 || row2Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark2Clicks === 3 || row2Mark2Clicks === 7 || row2Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark2Clicks === 4 || row2Mark2Clicks === 8 || row2Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_2();
    });

    var row2Mark3Clicks = 0;
    $('#row_2 .mark_3').on('click', function() {
        row2Mark3Clicks++;
        if(row2Mark3Clicks === 1 || row2Mark3Clicks === 5 || row2Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark3Clicks === 2 || row2Mark3Clicks === 6 || row2Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark3Clicks === 3 || row2Mark3Clicks === 7 || row2Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark3Clicks === 4 || row2Mark3Clicks === 8 || row2Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_2();
    });

    var row2Mark4Clicks = 0;
    $('#row_2 .mark_4').on('click', function() {
        row2Mark4Clicks++;
        if(row2Mark4Clicks === 1 || row2Mark4Clicks === 5 || row2Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark4Clicks === 2 || row2Mark4Clicks === 6 || row2Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark4Clicks === 3 || row2Mark4Clicks === 7 || row2Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row2Mark4Clicks === 4 || row2Mark4Clicks === 8 || row2Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_2();
    });
    /*===================================*/
    var row3Mark1Clicks = 0;
    $('#row_3 .mark_1').on('click', function() {
        row3Mark1Clicks++;
        if(row3Mark1Clicks === 1 || row3Mark1Clicks === 5 || row3Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark1Clicks === 2 || row3Mark1Clicks === 6 || row3Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark1Clicks === 3 || row3Mark1Clicks === 7 || row3Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark1Clicks === 4 || row3Mark1Clicks === 8 || row3Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_3();
    });

    var row3Mark2Clicks = 0;
    $('#row_3 .mark_2').on('click', function() {
        row3Mark2Clicks++;
        if(row3Mark2Clicks === 1 || row3Mark2Clicks === 5 || row3Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark2Clicks === 2 || row3Mark2Clicks === 6 || row3Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark2Clicks === 3 || row3Mark2Clicks === 7 || row3Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark2Clicks === 4 || row3Mark2Clicks === 8 || row3Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_3();
    });

    var row3Mark3Clicks = 0;
    $('#row_3 .mark_3').on('click', function() {
        row3Mark3Clicks++;
        if(row3Mark3Clicks === 1 || row3Mark3Clicks === 5 || row3Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark3Clicks === 2 || row3Mark3Clicks === 6 || row3Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark3Clicks === 3 || row3Mark3Clicks === 7 || row3Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark3Clicks === 4 || row3Mark3Clicks === 8 || row3Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_3();
    });

    var row3Mark4Clicks = 0;
    $('#row_3 .mark_4').on('click', function() {
        row3Mark4Clicks++;
        if(row3Mark4Clicks === 1 || row3Mark4Clicks === 5 || row3Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark4Clicks === 2 || row3Mark4Clicks === 6 || row3Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark4Clicks === 3 || row3Mark4Clicks === 7 || row3Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row3Mark4Clicks === 4 || row3Mark4Clicks === 8 || row3Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_3();
    });
    /*===================================*/
    var row4Mark1Clicks = 0;
    $('#row_4 .mark_1').on('click', function() {
        row4Mark1Clicks++;
        if(row4Mark1Clicks === 1 || row4Mark1Clicks === 5 || row4Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark1Clicks === 2 || row4Mark1Clicks === 6 || row4Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark1Clicks === 3 || row4Mark1Clicks === 7 || row4Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark1Clicks === 4 || row4Mark1Clicks === 8 || row4Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_4();
    });

    var row4Mark2Clicks = 0;
    $('#row_4 .mark_2').on('click', function() {
        row4Mark2Clicks++;
        if(row4Mark2Clicks === 1 || row4Mark2Clicks === 5 || row4Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark2Clicks === 2 || row4Mark2Clicks === 6 || row4Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark2Clicks === 3 || row4Mark2Clicks === 7 || row4Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark2Clicks === 4 || row4Mark2Clicks === 8 || row4Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_4();
    });

    var row4Mark3Clicks = 0;
    $('#row_4 .mark_3').on('click', function() {
        row4Mark3Clicks++;
        if(row4Mark3Clicks === 1 || row4Mark3Clicks === 5 || row4Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark3Clicks === 2 || row4Mark3Clicks === 6 || row4Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark3Clicks === 3 || row4Mark3Clicks === 7 || row4Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark3Clicks === 4 || row4Mark3Clicks === 8 || row4Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_4();
    });

    var row4Mark4Clicks = 0;
    $('#row_4 .mark_4').on('click', function() {
        row4Mark4Clicks++;
        if(row4Mark4Clicks === 1 || row4Mark4Clicks === 5 || row4Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark4Clicks === 2 || row4Mark4Clicks === 6 || row4Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark4Clicks === 3 || row4Mark4Clicks === 7 || row4Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row4Mark4Clicks === 4 || row4Mark4Clicks === 8 || row4Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_4();
    });
    /*===================================*/
    var row5Mark1Clicks = 0;
    $('#row_5 .mark_1').on('click', function() {
        row5Mark1Clicks++;
        if(row5Mark1Clicks === 1 || row5Mark1Clicks === 5 || row5Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark1Clicks === 2 || row5Mark1Clicks === 6 || row5Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark1Clicks === 3 || row5Mark1Clicks === 7 || row5Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark1Clicks === 4 || row5Mark1Clicks === 8 || row5Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_5();
    });

    var row5Mark2Clicks = 0;
    $('#row_5 .mark_2').on('click', function() {
        row5Mark2Clicks++;
        if(row5Mark2Clicks === 1 || row5Mark2Clicks === 5 || row5Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark2Clicks === 2 || row5Mark2Clicks === 6 || row5Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark2Clicks === 3 || row5Mark2Clicks === 7 || row5Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark2Clicks === 4 || row5Mark2Clicks === 8 || row5Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_5();
    });

    var row5Mark3Clicks = 0;
    $('#row_5 .mark_3').on('click', function() {
        row5Mark3Clicks++;
        if(row5Mark3Clicks === 1 || row5Mark3Clicks === 5 || row5Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark3Clicks === 2 || row5Mark3Clicks === 6 || row5Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark3Clicks === 3 || row5Mark3Clicks === 7 || row5Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark3Clicks === 4 || row5Mark3Clicks === 8 || row5Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_5();
    });

    var row5Mark4Clicks = 0;
    $('#row_5 .mark_4').on('click', function() {
        row5Mark4Clicks++;
        if(row5Mark4Clicks === 1 || row5Mark4Clicks === 5 || row5Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark4Clicks === 2 || row5Mark4Clicks === 6 || row5Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark4Clicks === 3 || row5Mark4Clicks === 7 || row5Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row5Mark4Clicks === 4 || row5Mark4Clicks === 8 || row5Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_5();
    });
    /*===================================*/
    var row6Mark1Clicks = 0;
    $('#row_6 .mark_1').on('click', function() {
        row6Mark1Clicks++;
        if(row6Mark1Clicks === 1 || row6Mark1Clicks === 5 || row6Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark1Clicks === 2 || row6Mark1Clicks === 6 || row6Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark1Clicks === 3 || row6Mark1Clicks === 7 || row6Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark1Clicks === 4 || row6Mark1Clicks === 8 || row6Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_6();
    });

    var row6Mark2Clicks = 0;
    $('#row_6 .mark_2').on('click', function() {
        row6Mark2Clicks++;
        if(row6Mark2Clicks === 1 || row6Mark2Clicks === 5 || row6Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark2Clicks === 2 || row6Mark2Clicks === 6 || row6Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark2Clicks === 3 || row6Mark2Clicks === 7 || row6Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark2Clicks === 4 || row6Mark2Clicks === 8 || row6Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_6();
    });

    var row6Mark3Clicks = 0;
    $('#row_6 .mark_3').on('click', function() {
        row6Mark3Clicks++;
        if(row6Mark3Clicks === 1 || row6Mark3Clicks === 5 || row6Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark3Clicks === 2 || row6Mark3Clicks === 6 || row6Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark3Clicks === 3 || row6Mark3Clicks === 7 || row6Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark3Clicks === 4 || row6Mark3Clicks === 8 || row6Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_6();
    });

    var row6Mark4Clicks = 0;
    $('#row_6 .mark_4').on('click', function() {
        row6Mark4Clicks++;
        if(row6Mark4Clicks === 1 || row6Mark4Clicks === 5 || row6Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark4Clicks === 2 || row6Mark4Clicks === 6 || row6Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark4Clicks === 3 || row6Mark4Clicks === 7 || row6Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row6Mark4Clicks === 4 || row6Mark4Clicks === 8 || row6Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_6();
    });
    /*===================================*/
    var row7Mark1Clicks = 0;
    $('#row_7 .mark_1').on('click', function() {
        row7Mark1Clicks++;
        if(row7Mark1Clicks === 1 || row7Mark1Clicks === 5 || row7Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark1Clicks === 2 || row7Mark1Clicks === 6 || row7Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark1Clicks === 3 || row7Mark1Clicks === 7 || row7Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark1Clicks === 4 || row7Mark1Clicks === 8 || row7Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_7();
    });

    var row7Mark2Clicks = 0;
    $('#row_7 .mark_2').on('click', function() {
        row7Mark2Clicks++;
        if(row7Mark2Clicks === 1 || row7Mark2Clicks === 5 || row7Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark2Clicks === 2 || row7Mark2Clicks === 6 || row7Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark2Clicks === 3 || row7Mark2Clicks === 7 || row7Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark2Clicks === 4 || row7Mark2Clicks === 8 || row7Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_7();
    });

    var row7Mark3Clicks = 0;
    $('#row_7 .mark_3').on('click', function() {
        row7Mark3Clicks++;
        if(row7Mark3Clicks === 1 || row7Mark3Clicks === 5 || row7Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark3Clicks === 2 || row7Mark3Clicks === 6 || row7Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark3Clicks === 3 || row7Mark3Clicks === 7 || row7Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark3Clicks === 4 || row7Mark3Clicks === 8 || row7Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_7();
    });

    var row7Mark4Clicks = 0;
    $('#row_7 .mark_4').on('click', function() {
        row7Mark4Clicks++;
        if(row7Mark4Clicks === 1 || row7Mark4Clicks === 5 || row7Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark4Clicks === 2 || row7Mark4Clicks === 6 || row7Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark4Clicks === 3 || row7Mark4Clicks === 7 || row7Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row7Mark4Clicks === 4 || row7Mark4Clicks === 8 || row7Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_7();
    });
    /*===================================*/
    var row8Mark1Clicks = 0;
    $('#row_8 .mark_1').on('click', function() {
        row8Mark1Clicks++;
        if(row8Mark1Clicks === 1 || row8Mark1Clicks === 5 || row8Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark1Clicks === 2 || row8Mark1Clicks === 6 || row8Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark1Clicks === 3 || row8Mark1Clicks === 7 || row8Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark1Clicks === 4 || row8Mark1Clicks === 8 || row8Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_8();
    });

    var row8Mark2Clicks = 0;
    $('#row_8 .mark_2').on('click', function() {
        row8Mark2Clicks++;
        if(row8Mark2Clicks === 1 || row8Mark2Clicks === 5 || row8Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark2Clicks === 2 || row8Mark2Clicks === 6 || row8Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark2Clicks === 3 || row8Mark2Clicks === 7 || row8Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark2Clicks === 4 || row8Mark2Clicks === 8 || row8Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_8();
    });

    var row8Mark3Clicks = 0;
    $('#row_8 .mark_3').on('click', function() {
        row8Mark3Clicks++;
        if(row8Mark3Clicks === 1 || row8Mark3Clicks === 5 || row8Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark3Clicks === 2 || row8Mark3Clicks === 6 || row8Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark3Clicks === 3 || row8Mark3Clicks === 7 || row8Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark3Clicks === 4 || row8Mark3Clicks === 8 || row8Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_8();
    });

    var row8Mark4Clicks = 0;
    $('#row_8 .mark_4').on('click', function() {
        row8Mark4Clicks++;
        if(row8Mark4Clicks === 1 || row8Mark4Clicks === 5 || row8Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark4Clicks === 2 || row8Mark4Clicks === 6 || row8Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark4Clicks === 3 || row8Mark4Clicks === 7 || row8Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row8Mark4Clicks === 4 || row8Mark4Clicks === 8 || row8Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_8();
    });
    /*===================================*/
    var row9Mark1Clicks = 0;
    $('#row_9 .mark_1').on('click', function() {
        row9Mark1Clicks++;
        if(row9Mark1Clicks === 1 || row9Mark1Clicks === 5 || row9Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark1Clicks === 2 || row9Mark1Clicks === 6 || row9Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark1Clicks === 3 || row9Mark1Clicks === 7 || row9Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark1Clicks === 4 || row9Mark1Clicks === 8 || row9Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_9();
    });

    var row9Mark2Clicks = 0;
    $('#row_9 .mark_2').on('click', function() {
        row9Mark2Clicks++;
        if(row9Mark2Clicks === 1 || row9Mark2Clicks === 5 || row9Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark2Clicks === 2 || row9Mark2Clicks === 6 || row9Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark2Clicks === 3 || row9Mark2Clicks === 7 || row9Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark2Clicks === 4 || row9Mark2Clicks === 8 || row9Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_9();
    });

    var row9Mark3Clicks = 0;
    $('#row_9 .mark_3').on('click', function() {
        row9Mark3Clicks++;
        if(row9Mark3Clicks === 1 || row9Mark3Clicks === 5 || row9Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark3Clicks === 2 || row9Mark3Clicks === 6 || row9Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark3Clicks === 3 || row9Mark3Clicks === 7 || row9Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark3Clicks === 4 || row9Mark3Clicks === 8 || row9Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_9();
    });

    var row9Mark4Clicks = 0;
    $('#row_9 .mark_4').on('click', function() {
        row9Mark4Clicks++;
        if(row9Mark4Clicks === 1 || row9Mark4Clicks === 5 || row9Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark4Clicks === 2 || row9Mark4Clicks === 6 || row9Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark4Clicks === 3 || row9Mark4Clicks === 7 || row9Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row9Mark4Clicks === 4 || row9Mark4Clicks === 8 || row9Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_9();
    });
    /*===================================*/
    var row10Mark1Clicks = 0;
    $('#row_10 .mark_1').on('click', function() {
        row10Mark1Clicks++;
        if(row10Mark1Clicks === 1 || row10Mark1Clicks === 5 || row10Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark1Clicks === 2 || row10Mark1Clicks === 6 || row10Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark1Clicks === 3 || row10Mark1Clicks === 7 || row10Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark1Clicks === 4 || row10Mark1Clicks === 8 || row10Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_10();
    });

    var row10Mark2Clicks = 0;
    $('#row_10 .mark_2').on('click', function() {
        row10Mark2Clicks++;
        if(row10Mark2Clicks === 1 || row10Mark2Clicks === 5 || row10Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark2Clicks === 2 || row10Mark2Clicks === 6 || row10Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark2Clicks === 3 || row10Mark2Clicks === 7 || row10Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark2Clicks === 4 || row10Mark2Clicks === 8 || row10Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_10();
    });

    var row10Mark3Clicks = 0;
    $('#row_10 .mark_3').on('click', function() {
        row10Mark3Clicks++;
        if(row10Mark3Clicks === 1 || row10Mark3Clicks === 5 || row10Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark3Clicks === 2 || row10Mark3Clicks === 6 || row10Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark3Clicks === 3 || row10Mark3Clicks === 7 || row10Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark3Clicks === 4 || row10Mark3Clicks === 8 || row10Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_10();
    });

    var row10Mark4Clicks = 0;
    $('#row_10 .mark_4').on('click', function() {
        row10Mark4Clicks++;
        if(row10Mark4Clicks === 1 || row10Mark4Clicks === 5 || row10Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark4Clicks === 2 || row10Mark4Clicks === 6 || row10Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark4Clicks === 3 || row10Mark4Clicks === 7 || row10Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row10Mark4Clicks === 4 || row10Mark4Clicks === 8 || row10Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_10();
    });
    /*===================================*/
    var row11Mark1Clicks = 0;
    $('#row_11 .mark_1').on('click', function() {
        row11Mark1Clicks++;
        if(row11Mark1Clicks === 1 || row11Mark1Clicks === 5 || row11Mark1Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark1Clicks === 2 || row11Mark1Clicks === 6 || row11Mark1Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark1Clicks === 3 || row11Mark1Clicks === 7 || row11Mark1Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark1Clicks === 4 || row11Mark1Clicks === 8 || row11Mark1Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFirstGuessedColor_11();
    });
    

    var row11Mark2Clicks = 0;
    $('#row_11 .mark_2').on('click', function() {
        row11Mark2Clicks++;
        if(row11Mark2Clicks === 1 || row11Mark2Clicks === 5 || row11Mark2Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark2Clicks === 2 || row11Mark2Clicks === 6 || row11Mark2Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark2Clicks === 3 || row11Mark2Clicks === 7 || row11Mark2Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark2Clicks === 4 || row11Mark2Clicks === 8 || row11Mark2Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkSecondGuessedColor_11();
    });

    var row11Mark3Clicks = 0;
    $('#row_11 .mark_3').on('click', function() {
        row11Mark3Clicks++;
        if(row11Mark3Clicks === 1 || row11Mark3Clicks === 5 || row11Mark3Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark3Clicks === 2 || row11Mark3Clicks === 6 || row11Mark3Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark3Clicks === 3 || row11Mark3Clicks === 7 || row11Mark3Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark3Clicks === 4 || row11Mark3Clicks === 8 || row11Mark3Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkThirdGuessedColor_11();
    });

    var row11Mark4Clicks = 0;
    $('#row_11 .mark_4').on('click', function() {
        row11Mark4Clicks++;
        if(row11Mark4Clicks === 1 || row11Mark4Clicks === 5 || row11Mark4Clicks === 9) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'red');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark4Clicks === 2 || row11Mark4Clicks === 6 || row11Mark4Clicks === 10) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'blue');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark4Clicks === 3 || row11Mark4Clicks === 7 || row11Mark4Clicks === 11) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'green');
            $(this).css('text-shadow', '0px 0px 5px black');
        } else if(row11Mark4Clicks === 4 || row11Mark4Clicks === 8 || row11Mark4Clicks === 12) {
            $(this).css('font-size', '60px');
            $(this).css('color', 'yellow');
            $(this).css('text-shadow', '0px 0px 5px black');
        }
        checkFourthGuessedColor_11();
    });
/* ============onclick PLAY button chooses colors=======================*/
    $('#play_button').on('click', function() {
        console.log('hejsan');
        var colors_1 = ['red', 'blue', 'green', 'yellow'];
        var colors_2 = ['red', 'blue', 'green', 'yellow'];
        var colors_3 = ['red', 'blue', 'green', 'yellow'];
        var colors_4 = ['red', 'blue', 'green', 'yellow'];
        var rand_1 = colors_1[Math.floor(Math.random() * colors_1.length)];
        var rand_2 = colors_2[Math.floor(Math.random() * colors_2.length)];
        var rand_3 = colors_3[Math.floor(Math.random() * colors_3.length)];
        var rand_4 = colors_4[Math.floor(Math.random() * colors_4.length)];
        $('#row_12 .mark_1').css('color', rand_1);
        $('#row_12 .mark_1').css('font-size', '60px');
        $('#row_12 .mark_1').css('text-shadow', '0px 0px 5px black');
        $('#row_12 .mark_1').slideUp();
        $('#row_12 .mark_2').css('color', rand_2);
        $('#row_12 .mark_2').css('font-size', '60px');
        $('#row_12 .mark_2').css('text-shadow', '0px 0px 5px black');
        $('#row_12 .mark_2').slideUp();
        $('#row_12 .mark_3').css('color', rand_3);
        $('#row_12 .mark_3').css('font-size', '60px');
        $('#row_12 .mark_3').css('text-shadow', '0px 0px 5px black');
        $('#row_12 .mark_3').slideUp();
        $('#row_12 .mark_4').css('color', rand_4);
        $('#row_12 .mark_4').css('font-size', '60px');
        $('#row_12 .mark_4').css('text-shadow', '0px 0px 5px black');
        $('#row_12 .mark_4').slideUp();
        $('#play_button').slideUp();
        $('#row_12').css('background-color', '#4d0000');
    });
/* ============onclick BTN_11 button checks colors======================*/
    function checkFirstGuessedColor_11() {
        var firstGuessedColor = $('#row_11 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_11() {
        var secondGuessedColor = $('#row_11 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_11() {
        var thirdGuessedColor = $('#row_11 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_11() {
        var fourthGuessedColor = $('#row_11 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_11() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_11() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_11() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_11() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_11').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_11 .mark_1').off('click');
        $('#row_11 .mark_2').off('click');
        $('#row_11 .mark_3').off('click');
        $('#row_11 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_11();
        var secondGuessedColor = checkSecondGuessedColor_11();
        var thirdGuessedColor = checkThirdGuessedColor_11();
        var fourthGuessedColor = checkFourthGuessedColor_11();
        var firstColor = checkFirstColor_11();
        var secondColor = checkSecondColor_11();
        var thirdColor = checkThirdColor_11();
        var fourthColor = checkFourthColor_11();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_11 .mark_8').css('color', 'gray');
            $('#row_11 .mark_8').css('font-size', '32px');
            $('#row_11 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_11 .mark_8').css('color', 'gray');
            $('#row_11 .mark_8').css('font-size', '32px');
            $('#row_11 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_7').css('color', 'gray');
            $('#row_11 .mark_7').css('font-size', '32px');
            $('#row_11 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_11 .mark_8').css('color', 'gray');
            $('#row_11 .mark_8').css('font-size', '32px');
            $('#row_11 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_7').css('color', 'gray');
            $('#row_11 .mark_7').css('font-size', '32px');
            $('#row_11 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_6').css('color', 'gray');
            $('#row_11 .mark_6').css('font-size', '32px');
            $('#row_11 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_11 .mark_8').css('color', 'gray');
            $('#row_11 .mark_8').css('font-size', '32px');
            $('#row_11 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_7').css('color', 'gray');
            $('#row_11 .mark_7').css('font-size', '32px');
            $('#row_11 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_6').css('color', 'gray');
            $('#row_11 .mark_6').css('font-size', '32px');
            $('#row_11 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_5').css('color', 'gray');
            $('#row_11 .mark_5').css('font-size', '32px');
            $('#row_11 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_11 .mark_5').css('color', 'white');
            $('#row_11 .mark_5').css('font-size', '32px');
            $('#row_11 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_11 .mark_5').css('color', 'white');
            $('#row_11 .mark_5').css('font-size', '32px');
            $('#row_11 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_8').css('color', 'gray');
            $('#row_11 .mark_8').css('font-size', '32px');
            $('#row_11 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_11 .mark_5').css('color', 'white');
            $('#row_11 .mark_5').css('font-size', '32px');
            $('#row_11 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_8').css('color', 'gray');
            $('#row_11 .mark_8').css('font-size', '32px');
            $('#row_11 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_7').css('color', 'gray');
            $('#row_11 .mark_7').css('font-size', '32px');
            $('#row_11 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_11 .mark_5').css('color', 'white');
            $('#row_11 .mark_5').css('font-size', '32px');
            $('#row_11 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_8').css('color', 'gray');
            $('#row_11 .mark_8').css('font-size', '32px');
            $('#row_11 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_7').css('color', 'gray');
            $('#row_11 .mark_7').css('font-size', '32px');
            $('#row_11 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_6').css('color', 'gray');
            $('#row_11 .mark_6').css('font-size', '32px');
            $('#row_11 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_11 .mark_5').css('color', 'white');
            $('#row_11 .mark_5').css('font-size', '32px');
            $('#row_11 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_6').css('color', 'white');
            $('#row_11 .mark_6').css('font-size', '32px');
            $('#row_11 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_11 .mark_5').css('color', 'white');
            $('#row_11 .mark_5').css('font-size', '32px');
            $('#row_11 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_6').css('color', 'white');
            $('#row_11 .mark_6').css('font-size', '32px');
            $('#row_11 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_8').css('color', 'gray');
            $('#row_11 .mark_8').css('font-size', '32px');
            $('#row_11 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_11 .mark_5').css('color', 'white');
            $('#row_11 .mark_5').css('font-size', '32px');
            $('#row_11 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_6').css('color', 'white');
            $('#row_11 .mark_6').css('font-size', '32px');
            $('#row_11 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_8').css('color', 'gray');
            $('#row_11 .mark_8').css('font-size', '32px');
            $('#row_11 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_7').css('color', 'gray');
            $('#row_11 .mark_7').css('font-size', '32px');
            $('#row_11 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_11 .mark_5').css('color', 'white');
            $('#row_11 .mark_5').css('font-size', '32px');
            $('#row_11 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_6').css('color', 'white');
            $('#row_11 .mark_6').css('font-size', '32px');
            $('#row_11 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_7').css('color', 'white');
            $('#row_11 .mark_7').css('font-size', '32px');
            $('#row_11 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_11 .mark_5').css('color', 'white');
            $('#row_11 .mark_5').css('font-size', '32px');
            $('#row_11 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_6').css('color', 'white');
            $('#row_11 .mark_6').css('font-size', '32px');
            $('#row_11 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_7').css('color', 'white');
            $('#row_11 .mark_7').css('font-size', '32px');
            $('#row_11 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_8').css('color', 'gray');
            $('#row_11 .mark_8').css('font-size', '32px');
            $('#row_11 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_11 .mark_5').css('color', 'white');
            $('#row_11 .mark_5').css('font-size', '32px');
            $('#row_11 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_6').css('color', 'white');
            $('#row_11 .mark_6').css('font-size', '32px');
            $('#row_11 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_7').css('color', 'white');
            $('#row_11 .mark_7').css('font-size', '32px');
            $('#row_11 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_11 .mark_8').css('color', 'white');
            $('#row_11 .mark_8').css('font-size', '32px');
            $('#row_11 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    });
/* ============onclick BTN_10 button checks colors======================*/
    function checkFirstGuessedColor_10() {
        var firstGuessedColor = $('#row_10 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_10() {
        var secondGuessedColor = $('#row_10 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_10() {
        var thirdGuessedColor = $('#row_10 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_10() {
        var fourthGuessedColor = $('#row_10 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_10() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_10() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_10() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_10() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_10').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_10 .mark_1').off('click');
        $('#row_10 .mark_2').off('click');
        $('#row_10 .mark_3').off('click');
        $('#row_10 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_10();
        var secondGuessedColor = checkSecondGuessedColor_10();
        var thirdGuessedColor = checkThirdGuessedColor_10();
        var fourthGuessedColor = checkFourthGuessedColor_10();
        var firstColor = checkFirstColor_10();
        var secondColor = checkSecondColor_10();
        var thirdColor = checkThirdColor_10();
        var fourthColor = checkFourthColor_10();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_10 .mark_8').css('color', 'gray');
            $('#row_10 .mark_8').css('font-size', '32px');
            $('#row_10 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_10 .mark_8').css('color', 'gray');
            $('#row_10 .mark_8').css('font-size', '32px');
            $('#row_10 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_7').css('color', 'gray');
            $('#row_10 .mark_7').css('font-size', '32px');
            $('#row_10 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_10 .mark_8').css('color', 'gray');
            $('#row_10 .mark_8').css('font-size', '32px');
            $('#row_10 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_7').css('color', 'gray');
            $('#row_10 .mark_7').css('font-size', '32px');
            $('#row_10 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_6').css('color', 'gray');
            $('#row_10 .mark_6').css('font-size', '32px');
            $('#row_10 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_10 .mark_8').css('color', 'gray');
            $('#row_10 .mark_8').css('font-size', '32px');
            $('#row_10 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_7').css('color', 'gray');
            $('#row_10 .mark_7').css('font-size', '32px');
            $('#row_10 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_6').css('color', 'gray');
            $('#row_10 .mark_6').css('font-size', '32px');
            $('#row_10 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_5').css('color', 'gray');
            $('#row_10 .mark_5').css('font-size', '32px');
            $('#row_10 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_10 .mark_5').css('color', 'white');
            $('#row_10 .mark_5').css('font-size', '32px');
            $('#row_10 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_10 .mark_5').css('color', 'white');
            $('#row_10 .mark_5').css('font-size', '32px');
            $('#row_10 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_8').css('color', 'gray');
            $('#row_10 .mark_8').css('font-size', '32px');
            $('#row_10 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_10 .mark_5').css('color', 'white');
            $('#row_10 .mark_5').css('font-size', '32px');
            $('#row_10 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_8').css('color', 'gray');
            $('#row_10 .mark_8').css('font-size', '32px');
            $('#row_10 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_7').css('color', 'gray');
            $('#row_10 .mark_7').css('font-size', '32px');
            $('#row_10 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_10 .mark_5').css('color', 'white');
            $('#row_10 .mark_5').css('font-size', '32px');
            $('#row_10 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_8').css('color', 'gray');
            $('#row_10 .mark_8').css('font-size', '32px');
            $('#row_10 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_7').css('color', 'gray');
            $('#row_10 .mark_7').css('font-size', '32px');
            $('#row_10 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_6').css('color', 'gray');
            $('#row_10 .mark_6').css('font-size', '32px');
            $('#row_10 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_10 .mark_5').css('color', 'white');
            $('#row_10 .mark_5').css('font-size', '32px');
            $('#row_10 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_6').css('color', 'white');
            $('#row_10 .mark_6').css('font-size', '32px');
            $('#row_10 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_10 .mark_5').css('color', 'white');
            $('#row_10 .mark_5').css('font-size', '32px');
            $('#row_10 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_6').css('color', 'white');
            $('#row_10 .mark_6').css('font-size', '32px');
            $('#row_10 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_8').css('color', 'gray');
            $('#row_10 .mark_8').css('font-size', '32px');
            $('#row_10 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_10 .mark_5').css('color', 'white');
            $('#row_10 .mark_5').css('font-size', '32px');
            $('#row_10 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_6').css('color', 'white');
            $('#row_10 .mark_6').css('font-size', '32px');
            $('#row_10 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_8').css('color', 'gray');
            $('#row_10 .mark_8').css('font-size', '32px');
            $('#row_10 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_7').css('color', 'gray');
            $('#row_10 .mark_7').css('font-size', '32px');
            $('#row_10 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_10 .mark_5').css('color', 'white');
            $('#row_10 .mark_5').css('font-size', '32px');
            $('#row_10 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_6').css('color', 'white');
            $('#row_10 .mark_6').css('font-size', '32px');
            $('#row_10 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_7').css('color', 'white');
            $('#row_10 .mark_7').css('font-size', '32px');
            $('#row_10 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_10 .mark_5').css('color', 'white');
            $('#row_10 .mark_5').css('font-size', '32px');
            $('#row_10 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_6').css('color', 'white');
            $('#row_10 .mark_6').css('font-size', '32px');
            $('#row_10 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_7').css('color', 'white');
            $('#row_10 .mark_7').css('font-size', '32px');
            $('#row_10 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_8').css('color', 'gray');
            $('#row_10 .mark_8').css('font-size', '32px');
            $('#row_10 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_10 .mark_5').css('color', 'white');
            $('#row_10 .mark_5').css('font-size', '32px');
            $('#row_10 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_6').css('color', 'white');
            $('#row_10 .mark_6').css('font-size', '32px');
            $('#row_10 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_7').css('color', 'white');
            $('#row_10 .mark_7').css('font-size', '32px');
            $('#row_10 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_10 .mark_8').css('color', 'white');
            $('#row_10 .mark_8').css('font-size', '32px');
            $('#row_10 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    });
/* ============onclick BTN_9 button checks colors=======================*/
    function checkFirstGuessedColor_9() {
        var firstGuessedColor = $('#row_9 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_9() {
        var secondGuessedColor = $('#row_9 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_9() {
        var thirdGuessedColor = $('#row_9 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_9() {
        var fourthGuessedColor = $('#row_9 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_9() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_9() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_9() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_9() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_9').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_9 .mark_1').off('click');
        $('#row_9 .mark_2').off('click');
        $('#row_9 .mark_3').off('click');
        $('#row_9 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_9();
        var secondGuessedColor = checkSecondGuessedColor_9();
        var thirdGuessedColor = checkThirdGuessedColor_9();
        var fourthGuessedColor = checkFourthGuessedColor_9();
        var firstColor = checkFirstColor_9();
        var secondColor = checkSecondColor_9();
        var thirdColor = checkThirdColor_9();
        var fourthColor = checkFourthColor_9();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_9 .mark_8').css('color', 'gray');
            $('#row_9 .mark_8').css('font-size', '32px');
            $('#row_9 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_9 .mark_8').css('color', 'gray');
            $('#row_9 .mark_8').css('font-size', '32px');
            $('#row_9 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_7').css('color', 'gray');
            $('#row_9 .mark_7').css('font-size', '32px');
            $('#row_9 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_9 .mark_8').css('color', 'gray');
            $('#row_9 .mark_8').css('font-size', '32px');
            $('#row_9 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_7').css('color', 'gray');
            $('#row_9 .mark_7').css('font-size', '32px');
            $('#row_9 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_6').css('color', 'gray');
            $('#row_9 .mark_6').css('font-size', '32px');
            $('#row_9 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_9 .mark_8').css('color', 'gray');
            $('#row_9 .mark_8').css('font-size', '32px');
            $('#row_9 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_7').css('color', 'gray');
            $('#row_9 .mark_7').css('font-size', '32px');
            $('#row_9 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_6').css('color', 'gray');
            $('#row_9 .mark_6').css('font-size', '32px');
            $('#row_9 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_5').css('color', 'gray');
            $('#row_9 .mark_5').css('font-size', '32px');
            $('#row_9 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_9 .mark_5').css('color', 'white');
            $('#row_9 .mark_5').css('font-size', '32px');
            $('#row_9 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_9 .mark_5').css('color', 'white');
            $('#row_9 .mark_5').css('font-size', '32px');
            $('#row_9 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_8').css('color', 'gray');
            $('#row_9 .mark_8').css('font-size', '32px');
            $('#row_9 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_9 .mark_5').css('color', 'white');
            $('#row_9 .mark_5').css('font-size', '32px');
            $('#row_9 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_8').css('color', 'gray');
            $('#row_9 .mark_8').css('font-size', '32px');
            $('#row_9 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_7').css('color', 'gray');
            $('#row_9 .mark_7').css('font-size', '32px');
            $('#row_9 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_9 .mark_5').css('color', 'white');
            $('#row_9 .mark_5').css('font-size', '32px');
            $('#row_9 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_8').css('color', 'gray');
            $('#row_9 .mark_8').css('font-size', '32px');
            $('#row_9 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_7').css('color', 'gray');
            $('#row_9 .mark_7').css('font-size', '32px');
            $('#row_9 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_6').css('color', 'gray');
            $('#row_9 .mark_6').css('font-size', '32px');
            $('#row_9 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_9 .mark_5').css('color', 'white');
            $('#row_9 .mark_5').css('font-size', '32px');
            $('#row_9 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_6').css('color', 'white');
            $('#row_9 .mark_6').css('font-size', '32px');
            $('#row_9 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_9 .mark_5').css('color', 'white');
            $('#row_9 .mark_5').css('font-size', '32px');
            $('#row_9 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_6').css('color', 'white');
            $('#row_9 .mark_6').css('font-size', '32px');
            $('#row_9 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_8').css('color', 'gray');
            $('#row_9 .mark_8').css('font-size', '32px');
            $('#row_9 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_9 .mark_5').css('color', 'white');
            $('#row_9 .mark_5').css('font-size', '32px');
            $('#row_9 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_6').css('color', 'white');
            $('#row_9 .mark_6').css('font-size', '32px');
            $('#row_9 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_8').css('color', 'gray');
            $('#row_9 .mark_8').css('font-size', '32px');
            $('#row_9 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_7').css('color', 'gray');
            $('#row_9 .mark_7').css('font-size', '32px');
            $('#row_9 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_9 .mark_5').css('color', 'white');
            $('#row_9 .mark_5').css('font-size', '32px');
            $('#row_9 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_6').css('color', 'white');
            $('#row_9 .mark_6').css('font-size', '32px');
            $('#row_9 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_7').css('color', 'white');
            $('#row_9 .mark_7').css('font-size', '32px');
            $('#row_9 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_9 .mark_5').css('color', 'white');
            $('#row_9 .mark_5').css('font-size', '32px');
            $('#row_9 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_6').css('color', 'white');
            $('#row_9 .mark_6').css('font-size', '32px');
            $('#row_9 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_7').css('color', 'white');
            $('#row_9 .mark_7').css('font-size', '32px');
            $('#row_9 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_8').css('color', 'gray');
            $('#row_9 .mark_8').css('font-size', '32px');
            $('#row_9 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_9 .mark_5').css('color', 'white');
            $('#row_9 .mark_5').css('font-size', '32px');
            $('#row_9 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_6').css('color', 'white');
            $('#row_9 .mark_6').css('font-size', '32px');
            $('#row_9 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_7').css('color', 'white');
            $('#row_9 .mark_7').css('font-size', '32px');
            $('#row_9 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_9 .mark_8').css('color', 'white');
            $('#row_9 .mark_8').css('font-size', '32px');
            $('#row_9 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    });
/* ============onclick BTN_8 button checks colors=======================*/
    function checkFirstGuessedColor_8() {
        var firstGuessedColor = $('#row_8 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_8() {
        var secondGuessedColor = $('#row_8 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_8() {
        var thirdGuessedColor = $('#row_8 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_8() {
        var fourthGuessedColor = $('#row_8 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_8() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_8() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_8() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_8() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_8').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_8 .mark_1').off('click');
        $('#row_8 .mark_2').off('click');
        $('#row_8 .mark_3').off('click');
        $('#row_8 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_8();
        var secondGuessedColor = checkSecondGuessedColor_8();
        var thirdGuessedColor = checkThirdGuessedColor_8();
        var fourthGuessedColor = checkFourthGuessedColor_8();
        var firstColor = checkFirstColor_8();
        var secondColor = checkSecondColor_8();
        var thirdColor = checkThirdColor_8();
        var fourthColor = checkFourthColor_8();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_8 .mark_8').css('color', 'gray');
            $('#row_8 .mark_8').css('font-size', '32px');
            $('#row_8 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_8 .mark_8').css('color', 'gray');
            $('#row_8 .mark_8').css('font-size', '32px');
            $('#row_8 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_7').css('color', 'gray');
            $('#row_8 .mark_7').css('font-size', '32px');
            $('#row_8 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_8 .mark_8').css('color', 'gray');
            $('#row_8 .mark_8').css('font-size', '32px');
            $('#row_8 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_7').css('color', 'gray');
            $('#row_8 .mark_7').css('font-size', '32px');
            $('#row_8 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_6').css('color', 'gray');
            $('#row_8 .mark_6').css('font-size', '32px');
            $('#row_8 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_8 .mark_8').css('color', 'gray');
            $('#row_8 .mark_8').css('font-size', '32px');
            $('#row_8 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_7').css('color', 'gray');
            $('#row_8 .mark_7').css('font-size', '32px');
            $('#row_8 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_6').css('color', 'gray');
            $('#row_8 .mark_6').css('font-size', '32px');
            $('#row_8 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_5').css('color', 'gray');
            $('#row_8 .mark_5').css('font-size', '32px');
            $('#row_8 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_8 .mark_5').css('color', 'white');
            $('#row_8 .mark_5').css('font-size', '32px');
            $('#row_8 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_8 .mark_5').css('color', 'white');
            $('#row_8 .mark_5').css('font-size', '32px');
            $('#row_8 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_8').css('color', 'gray');
            $('#row_8 .mark_8').css('font-size', '32px');
            $('#row_8 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_8 .mark_5').css('color', 'white');
            $('#row_8 .mark_5').css('font-size', '32px');
            $('#row_8 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_8').css('color', 'gray');
            $('#row_8 .mark_8').css('font-size', '32px');
            $('#row_8 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_7').css('color', 'gray');
            $('#row_8 .mark_7').css('font-size', '32px');
            $('#row_8 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_8 .mark_5').css('color', 'white');
            $('#row_8 .mark_5').css('font-size', '32px');
            $('#row_8 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_8').css('color', 'gray');
            $('#row_8 .mark_8').css('font-size', '32px');
            $('#row_8 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_7').css('color', 'gray');
            $('#row_8 .mark_7').css('font-size', '32px');
            $('#row_8 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_6').css('color', 'gray');
            $('#row_8 .mark_6').css('font-size', '32px');
            $('#row_8 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_8 .mark_5').css('color', 'white');
            $('#row_8 .mark_5').css('font-size', '32px');
            $('#row_8 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_6').css('color', 'white');
            $('#row_8 .mark_6').css('font-size', '32px');
            $('#row_8 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_8 .mark_5').css('color', 'white');
            $('#row_8 .mark_5').css('font-size', '32px');
            $('#row_8 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_6').css('color', 'white');
            $('#row_8 .mark_6').css('font-size', '32px');
            $('#row_8 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_8').css('color', 'gray');
            $('#row_8 .mark_8').css('font-size', '32px');
            $('#row_8 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_8 .mark_5').css('color', 'white');
            $('#row_8 .mark_5').css('font-size', '32px');
            $('#row_8 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_6').css('color', 'white');
            $('#row_8 .mark_6').css('font-size', '32px');
            $('#row_8 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_8').css('color', 'gray');
            $('#row_8 .mark_8').css('font-size', '32px');
            $('#row_8 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_7').css('color', 'gray');
            $('#row_8 .mark_7').css('font-size', '32px');
            $('#row_8 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_8 .mark_5').css('color', 'white');
            $('#row_8 .mark_5').css('font-size', '32px');
            $('#row_8 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_6').css('color', 'white');
            $('#row_8 .mark_6').css('font-size', '32px');
            $('#row_8 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_7').css('color', 'white');
            $('#row_8 .mark_7').css('font-size', '32px');
            $('#row_8 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_8 .mark_5').css('color', 'white');
            $('#row_8 .mark_5').css('font-size', '32px');
            $('#row_8 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_6').css('color', 'white');
            $('#row_8 .mark_6').css('font-size', '32px');
            $('#row_8 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_7').css('color', 'white');
            $('#row_8 .mark_7').css('font-size', '32px');
            $('#row_8 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_8').css('color', 'gray');
            $('#row_8 .mark_8').css('font-size', '32px');
            $('#row_8 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_8 .mark_5').css('color', 'white');
            $('#row_8 .mark_5').css('font-size', '32px');
            $('#row_8 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_6').css('color', 'white');
            $('#row_8 .mark_6').css('font-size', '32px');
            $('#row_8 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_7').css('color', 'white');
            $('#row_8 .mark_7').css('font-size', '32px');
            $('#row_8 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_8 .mark_8').css('color', 'white');
            $('#row_8 .mark_8').css('font-size', '32px');
            $('#row_8 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    });
/* ============onclick BTN_7 button checks colors=======================*/
    function checkFirstGuessedColor_7() {
        var firstGuessedColor = $('#row_7 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_7() {
        var secondGuessedColor = $('#row_7 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_7() {
        var thirdGuessedColor = $('#row_7 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_7() {
        var fourthGuessedColor = $('#row_7 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_7() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_7() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_7() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_7() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_7').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_7 .mark_1').off('click');
        $('#row_7 .mark_2').off('click');
        $('#row_7 .mark_3').off('click');
        $('#row_7 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_7();
        var secondGuessedColor = checkSecondGuessedColor_7();
        var thirdGuessedColor = checkThirdGuessedColor_7();
        var fourthGuessedColor = checkFourthGuessedColor_7();
        var firstColor = checkFirstColor_7();
        var secondColor = checkSecondColor_7();
        var thirdColor = checkThirdColor_7();
        var fourthColor = checkFourthColor_7();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_7 .mark_8').css('color', 'gray');
            $('#row_7 .mark_8').css('font-size', '32px');
            $('#row_7 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_7 .mark_8').css('color', 'gray');
            $('#row_7 .mark_8').css('font-size', '32px');
            $('#row_7 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_7').css('color', 'gray');
            $('#row_7 .mark_7').css('font-size', '32px');
            $('#row_7 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_7 .mark_8').css('color', 'gray');
            $('#row_7 .mark_8').css('font-size', '32px');
            $('#row_7 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_7').css('color', 'gray');
            $('#row_7 .mark_7').css('font-size', '32px');
            $('#row_7 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_6').css('color', 'gray');
            $('#row_7 .mark_6').css('font-size', '32px');
            $('#row_7 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_7 .mark_8').css('color', 'gray');
            $('#row_7 .mark_8').css('font-size', '32px');
            $('#row_7 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_7').css('color', 'gray');
            $('#row_7 .mark_7').css('font-size', '32px');
            $('#row_7 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_6').css('color', 'gray');
            $('#row_7 .mark_6').css('font-size', '32px');
            $('#row_7 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_5').css('color', 'gray');
            $('#row_7 .mark_5').css('font-size', '32px');
            $('#row_7 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_7 .mark_5').css('color', 'white');
            $('#row_7 .mark_5').css('font-size', '32px');
            $('#row_7 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_7 .mark_5').css('color', 'white');
            $('#row_7 .mark_5').css('font-size', '32px');
            $('#row_7 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_8').css('color', 'gray');
            $('#row_7 .mark_8').css('font-size', '32px');
            $('#row_7 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_7 .mark_5').css('color', 'white');
            $('#row_7 .mark_5').css('font-size', '32px');
            $('#row_7 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_8').css('color', 'gray');
            $('#row_7 .mark_8').css('font-size', '32px');
            $('#row_7 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_7').css('color', 'gray');
            $('#row_7 .mark_7').css('font-size', '32px');
            $('#row_7 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_7 .mark_5').css('color', 'white');
            $('#row_7 .mark_5').css('font-size', '32px');
            $('#row_7 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_8').css('color', 'gray');
            $('#row_7 .mark_8').css('font-size', '32px');
            $('#row_7 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_7').css('color', 'gray');
            $('#row_7 .mark_7').css('font-size', '32px');
            $('#row_7 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_6').css('color', 'gray');
            $('#row_7 .mark_6').css('font-size', '32px');
            $('#row_7 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_7 .mark_5').css('color', 'white');
            $('#row_7 .mark_5').css('font-size', '32px');
            $('#row_7 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_6').css('color', 'white');
            $('#row_7 .mark_6').css('font-size', '32px');
            $('#row_7 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_7 .mark_5').css('color', 'white');
            $('#row_7 .mark_5').css('font-size', '32px');
            $('#row_7 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_6').css('color', 'white');
            $('#row_7 .mark_6').css('font-size', '32px');
            $('#row_7 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_8').css('color', 'gray');
            $('#row_7 .mark_8').css('font-size', '32px');
            $('#row_7 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_7 .mark_5').css('color', 'white');
            $('#row_7 .mark_5').css('font-size', '32px');
            $('#row_7 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_6').css('color', 'white');
            $('#row_7 .mark_6').css('font-size', '32px');
            $('#row_7 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_8').css('color', 'gray');
            $('#row_7 .mark_8').css('font-size', '32px');
            $('#row_7 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_7').css('color', 'gray');
            $('#row_7 .mark_7').css('font-size', '32px');
            $('#row_7 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_7 .mark_5').css('color', 'white');
            $('#row_7 .mark_5').css('font-size', '32px');
            $('#row_7 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_6').css('color', 'white');
            $('#row_7 .mark_6').css('font-size', '32px');
            $('#row_7 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_7').css('color', 'white');
            $('#row_7 .mark_7').css('font-size', '32px');
            $('#row_7 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_7 .mark_5').css('color', 'white');
            $('#row_7 .mark_5').css('font-size', '32px');
            $('#row_7 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_6').css('color', 'white');
            $('#row_7 .mark_6').css('font-size', '32px');
            $('#row_7 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_7').css('color', 'white');
            $('#row_7 .mark_7').css('font-size', '32px');
            $('#row_7 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_8').css('color', 'gray');
            $('#row_7 .mark_8').css('font-size', '32px');
            $('#row_7 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_7 .mark_5').css('color', 'white');
            $('#row_7 .mark_5').css('font-size', '32px');
            $('#row_7 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_6').css('color', 'white');
            $('#row_7 .mark_6').css('font-size', '32px');
            $('#row_7 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_7').css('color', 'white');
            $('#row_7 .mark_7').css('font-size', '32px');
            $('#row_7 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_7 .mark_8').css('color', 'white');
            $('#row_7 .mark_8').css('font-size', '32px');
            $('#row_7 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    });
/* ============onclick BTN_6 button checks colors=======================*/
    function checkFirstGuessedColor_6() {
        var firstGuessedColor = $('#row_6 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_6() {
        var secondGuessedColor = $('#row_6 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_6() {
        var thirdGuessedColor = $('#row_6 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_6() {
        var fourthGuessedColor = $('#row_6 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_6() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_6() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_6() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_6() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_6').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_6 .mark_1').off('click');
        $('#row_6 .mark_2').off('click');
        $('#row_6 .mark_3').off('click');
        $('#row_6 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_6();
        var secondGuessedColor = checkSecondGuessedColor_6();
        var thirdGuessedColor = checkThirdGuessedColor_6();
        var fourthGuessedColor = checkFourthGuessedColor_6();
        var firstColor = checkFirstColor_6();
        var secondColor = checkSecondColor_6();
        var thirdColor = checkThirdColor_6();
        var fourthColor = checkFourthColor_6();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_6 .mark_8').css('color', 'gray');
            $('#row_6 .mark_8').css('font-size', '32px');
            $('#row_6 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_6 .mark_8').css('color', 'gray');
            $('#row_6 .mark_8').css('font-size', '32px');
            $('#row_6 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_7').css('color', 'gray');
            $('#row_6 .mark_7').css('font-size', '32px');
            $('#row_6 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_6 .mark_8').css('color', 'gray');
            $('#row_6 .mark_8').css('font-size', '32px');
            $('#row_6 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_7').css('color', 'gray');
            $('#row_6 .mark_7').css('font-size', '32px');
            $('#row_6 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_6').css('color', 'gray');
            $('#row_6 .mark_6').css('font-size', '32px');
            $('#row_6 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_6 .mark_8').css('color', 'gray');
            $('#row_6 .mark_8').css('font-size', '32px');
            $('#row_6 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_7').css('color', 'gray');
            $('#row_6 .mark_7').css('font-size', '32px');
            $('#row_6 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_6').css('color', 'gray');
            $('#row_6 .mark_6').css('font-size', '32px');
            $('#row_6 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_5').css('color', 'gray');
            $('#row_6 .mark_5').css('font-size', '32px');
            $('#row_6 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_6 .mark_5').css('color', 'white');
            $('#row_6 .mark_5').css('font-size', '32px');
            $('#row_6 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_6 .mark_5').css('color', 'white');
            $('#row_6 .mark_5').css('font-size', '32px');
            $('#row_6 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_8').css('color', 'gray');
            $('#row_6 .mark_8').css('font-size', '32px');
            $('#row_6 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_6 .mark_5').css('color', 'white');
            $('#row_6 .mark_5').css('font-size', '32px');
            $('#row_6 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_8').css('color', 'gray');
            $('#row_6 .mark_8').css('font-size', '32px');
            $('#row_6 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_7').css('color', 'gray');
            $('#row_6 .mark_7').css('font-size', '32px');
            $('#row_6 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_6 .mark_5').css('color', 'white');
            $('#row_6 .mark_5').css('font-size', '32px');
            $('#row_6 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_8').css('color', 'gray');
            $('#row_6 .mark_8').css('font-size', '32px');
            $('#row_6 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_7').css('color', 'gray');
            $('#row_6 .mark_7').css('font-size', '32px');
            $('#row_6 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_6').css('color', 'gray');
            $('#row_6 .mark_6').css('font-size', '32px');
            $('#row_6 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_6 .mark_5').css('color', 'white');
            $('#row_6 .mark_5').css('font-size', '32px');
            $('#row_6 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_6').css('color', 'white');
            $('#row_6 .mark_6').css('font-size', '32px');
            $('#row_6 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_6 .mark_5').css('color', 'white');
            $('#row_6 .mark_5').css('font-size', '32px');
            $('#row_6 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_6').css('color', 'white');
            $('#row_6 .mark_6').css('font-size', '32px');
            $('#row_6 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_8').css('color', 'gray');
            $('#row_6 .mark_8').css('font-size', '32px');
            $('#row_6 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_6 .mark_5').css('color', 'white');
            $('#row_6 .mark_5').css('font-size', '32px');
            $('#row_6 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_6').css('color', 'white');
            $('#row_6 .mark_6').css('font-size', '32px');
            $('#row_6 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_8').css('color', 'gray');
            $('#row_6 .mark_8').css('font-size', '32px');
            $('#row_6 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_7').css('color', 'gray');
            $('#row_6 .mark_7').css('font-size', '32px');
            $('#row_6 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_6 .mark_5').css('color', 'white');
            $('#row_6 .mark_5').css('font-size', '32px');
            $('#row_6 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_6').css('color', 'white');
            $('#row_6 .mark_6').css('font-size', '32px');
            $('#row_6 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_7').css('color', 'white');
            $('#row_6 .mark_7').css('font-size', '32px');
            $('#row_6 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_6 .mark_5').css('color', 'white');
            $('#row_6 .mark_5').css('font-size', '32px');
            $('#row_6 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_6').css('color', 'white');
            $('#row_6 .mark_6').css('font-size', '32px');
            $('#row_6 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_7').css('color', 'white');
            $('#row_6 .mark_7').css('font-size', '32px');
            $('#row_6 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_8').css('color', 'gray');
            $('#row_6 .mark_8').css('font-size', '32px');
            $('#row_6 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_6 .mark_5').css('color', 'white');
            $('#row_6 .mark_5').css('font-size', '32px');
            $('#row_6 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_6').css('color', 'white');
            $('#row_6 .mark_6').css('font-size', '32px');
            $('#row_6 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_7').css('color', 'white');
            $('#row_6 .mark_7').css('font-size', '32px');
            $('#row_6 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_6 .mark_8').css('color', 'white');
            $('#row_6 .mark_8').css('font-size', '32px');
            $('#row_6 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    });
/* ============onclick BTN_5 button checks colors=======================*/
    function checkFirstGuessedColor_5() {
        var firstGuessedColor = $('#row_5 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_5() {
        var secondGuessedColor = $('#row_5 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_5() {
        var thirdGuessedColor = $('#row_5 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_5() {
        var fourthGuessedColor = $('#row_5 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_5() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_5() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_5() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_5() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_5').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_5 .mark_1').off('click');
        $('#row_5 .mark_2').off('click');
        $('#row_5 .mark_3').off('click');
        $('#row_5 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_5();
        var secondGuessedColor = checkSecondGuessedColor_5();
        var thirdGuessedColor = checkThirdGuessedColor_5();
        var fourthGuessedColor = checkFourthGuessedColor_5();
        var firstColor = checkFirstColor_5();
        var secondColor = checkSecondColor_5();
        var thirdColor = checkThirdColor_5();
        var fourthColor = checkFourthColor_5();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_5 .mark_8').css('color', 'gray');
            $('#row_5 .mark_8').css('font-size', '32px');
            $('#row_5 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_5 .mark_8').css('color', 'gray');
            $('#row_5 .mark_8').css('font-size', '32px');
            $('#row_5 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_7').css('color', 'gray');
            $('#row_5 .mark_7').css('font-size', '32px');
            $('#row_5 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_5 .mark_8').css('color', 'gray');
            $('#row_5 .mark_8').css('font-size', '32px');
            $('#row_5 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_7').css('color', 'gray');
            $('#row_5 .mark_7').css('font-size', '32px');
            $('#row_5 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_6').css('color', 'gray');
            $('#row_5 .mark_6').css('font-size', '32px');
            $('#row_5 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_5 .mark_8').css('color', 'gray');
            $('#row_5 .mark_8').css('font-size', '32px');
            $('#row_5 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_7').css('color', 'gray');
            $('#row_5 .mark_7').css('font-size', '32px');
            $('#row_5 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_6').css('color', 'gray');
            $('#row_5 .mark_6').css('font-size', '32px');
            $('#row_5 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_5').css('color', 'gray');
            $('#row_5 .mark_5').css('font-size', '32px');
            $('#row_5 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_5 .mark_5').css('color', 'white');
            $('#row_5 .mark_5').css('font-size', '32px');
            $('#row_5 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_5 .mark_5').css('color', 'white');
            $('#row_5 .mark_5').css('font-size', '32px');
            $('#row_5 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_8').css('color', 'gray');
            $('#row_5 .mark_8').css('font-size', '32px');
            $('#row_5 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_5 .mark_5').css('color', 'white');
            $('#row_5 .mark_5').css('font-size', '32px');
            $('#row_5 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_8').css('color', 'gray');
            $('#row_5 .mark_8').css('font-size', '32px');
            $('#row_5 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_7').css('color', 'gray');
            $('#row_5 .mark_7').css('font-size', '32px');
            $('#row_5 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_5 .mark_5').css('color', 'white');
            $('#row_5 .mark_5').css('font-size', '32px');
            $('#row_5 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_8').css('color', 'gray');
            $('#row_5 .mark_8').css('font-size', '32px');
            $('#row_5 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_7').css('color', 'gray');
            $('#row_5 .mark_7').css('font-size', '32px');
            $('#row_5 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_6').css('color', 'gray');
            $('#row_5 .mark_6').css('font-size', '32px');
            $('#row_5 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_5 .mark_5').css('color', 'white');
            $('#row_5 .mark_5').css('font-size', '32px');
            $('#row_5 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_6').css('color', 'white');
            $('#row_5 .mark_6').css('font-size', '32px');
            $('#row_5 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_5 .mark_5').css('color', 'white');
            $('#row_5 .mark_5').css('font-size', '32px');
            $('#row_5 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_6').css('color', 'white');
            $('#row_5 .mark_6').css('font-size', '32px');
            $('#row_5 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_8').css('color', 'gray');
            $('#row_5 .mark_8').css('font-size', '32px');
            $('#row_5 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_5 .mark_5').css('color', 'white');
            $('#row_5 .mark_5').css('font-size', '32px');
            $('#row_5 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_6').css('color', 'white');
            $('#row_5 .mark_6').css('font-size', '32px');
            $('#row_5 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_8').css('color', 'gray');
            $('#row_5 .mark_8').css('font-size', '32px');
            $('#row_5 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_7').css('color', 'gray');
            $('#row_5 .mark_7').css('font-size', '32px');
            $('#row_5 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_5 .mark_5').css('color', 'white');
            $('#row_5 .mark_5').css('font-size', '32px');
            $('#row_5 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_6').css('color', 'white');
            $('#row_5 .mark_6').css('font-size', '32px');
            $('#row_5 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_7').css('color', 'white');
            $('#row_5 .mark_7').css('font-size', '32px');
            $('#row_5 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_5 .mark_5').css('color', 'white');
            $('#row_5 .mark_5').css('font-size', '32px');
            $('#row_5 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_6').css('color', 'white');
            $('#row_5 .mark_6').css('font-size', '32px');
            $('#row_5 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_7').css('color', 'white');
            $('#row_5 .mark_7').css('font-size', '32px');
            $('#row_5 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_8').css('color', 'gray');
            $('#row_5 .mark_8').css('font-size', '32px');
            $('#row_5 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_5 .mark_5').css('color', 'white');
            $('#row_5 .mark_5').css('font-size', '32px');
            $('#row_5 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_6').css('color', 'white');
            $('#row_5 .mark_6').css('font-size', '32px');
            $('#row_5 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_7').css('color', 'white');
            $('#row_5 .mark_7').css('font-size', '32px');
            $('#row_5 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_5 .mark_8').css('color', 'white');
            $('#row_5 .mark_8').css('font-size', '32px');
            $('#row_5 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    });
/* ============onclick BTN_4 button checks colors=======================*/
    function checkFirstGuessedColor_4() {
        var firstGuessedColor = $('#row_4 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_4() {
        var secondGuessedColor = $('#row_4 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_4() {
        var thirdGuessedColor = $('#row_4 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_4() {
        var fourthGuessedColor = $('#row_4 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_4() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_4() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_4() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_4() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_4').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_4 .mark_1').off('click');
        $('#row_4 .mark_2').off('click');
        $('#row_4 .mark_3').off('click');
        $('#row_4 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_4();
        var secondGuessedColor = checkSecondGuessedColor_4();
        var thirdGuessedColor = checkThirdGuessedColor_4();
        var fourthGuessedColor = checkFourthGuessedColor_4();
        var firstColor = checkFirstColor_4();
        var secondColor = checkSecondColor_4();
        var thirdColor = checkThirdColor_4();
        var fourthColor = checkFourthColor_4();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_4 .mark_8').css('color', 'gray');
            $('#row_4 .mark_8').css('font-size', '32px');
            $('#row_4 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_4 .mark_8').css('color', 'gray');
            $('#row_4 .mark_8').css('font-size', '32px');
            $('#row_4 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_7').css('color', 'gray');
            $('#row_4 .mark_7').css('font-size', '32px');
            $('#row_4 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_4 .mark_8').css('color', 'gray');
            $('#row_4 .mark_8').css('font-size', '32px');
            $('#row_4 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_7').css('color', 'gray');
            $('#row_4 .mark_7').css('font-size', '32px');
            $('#row_4 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_6').css('color', 'gray');
            $('#row_4 .mark_6').css('font-size', '32px');
            $('#row_4 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_4 .mark_8').css('color', 'gray');
            $('#row_4 .mark_8').css('font-size', '32px');
            $('#row_4 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_7').css('color', 'gray');
            $('#row_4 .mark_7').css('font-size', '32px');
            $('#row_4 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_6').css('color', 'gray');
            $('#row_4 .mark_6').css('font-size', '32px');
            $('#row_4 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_5').css('color', 'gray');
            $('#row_4 .mark_5').css('font-size', '32px');
            $('#row_4 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_4 .mark_5').css('color', 'white');
            $('#row_4 .mark_5').css('font-size', '32px');
            $('#row_4 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_4 .mark_5').css('color', 'white');
            $('#row_4 .mark_5').css('font-size', '32px');
            $('#row_4 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_8').css('color', 'gray');
            $('#row_4 .mark_8').css('font-size', '32px');
            $('#row_4 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_4 .mark_5').css('color', 'white');
            $('#row_4 .mark_5').css('font-size', '32px');
            $('#row_4 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_8').css('color', 'gray');
            $('#row_4 .mark_8').css('font-size', '32px');
            $('#row_4 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_7').css('color', 'gray');
            $('#row_4 .mark_7').css('font-size', '32px');
            $('#row_4 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_4 .mark_5').css('color', 'white');
            $('#row_4 .mark_5').css('font-size', '32px');
            $('#row_4 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_8').css('color', 'gray');
            $('#row_4 .mark_8').css('font-size', '32px');
            $('#row_4 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_7').css('color', 'gray');
            $('#row_4 .mark_7').css('font-size', '32px');
            $('#row_4 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_6').css('color', 'gray');
            $('#row_4 .mark_6').css('font-size', '32px');
            $('#row_4 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_4 .mark_5').css('color', 'white');
            $('#row_4 .mark_5').css('font-size', '32px');
            $('#row_4 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_6').css('color', 'white');
            $('#row_4 .mark_6').css('font-size', '32px');
            $('#row_4 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_4 .mark_5').css('color', 'white');
            $('#row_4 .mark_5').css('font-size', '32px');
            $('#row_4 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_6').css('color', 'white');
            $('#row_4 .mark_6').css('font-size', '32px');
            $('#row_4 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_8').css('color', 'gray');
            $('#row_4 .mark_8').css('font-size', '32px');
            $('#row_4 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_4 .mark_5').css('color', 'white');
            $('#row_4 .mark_5').css('font-size', '32px');
            $('#row_4 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_6').css('color', 'white');
            $('#row_4 .mark_6').css('font-size', '32px');
            $('#row_4 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_8').css('color', 'gray');
            $('#row_4 .mark_8').css('font-size', '32px');
            $('#row_4 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_7').css('color', 'gray');
            $('#row_4 .mark_7').css('font-size', '32px');
            $('#row_4 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_4 .mark_5').css('color', 'white');
            $('#row_4 .mark_5').css('font-size', '32px');
            $('#row_4 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_6').css('color', 'white');
            $('#row_4 .mark_6').css('font-size', '32px');
            $('#row_4 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_7').css('color', 'white');
            $('#row_4 .mark_7').css('font-size', '32px');
            $('#row_4 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_4 .mark_5').css('color', 'white');
            $('#row_4 .mark_5').css('font-size', '32px');
            $('#row_4 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_6').css('color', 'white');
            $('#row_4 .mark_6').css('font-size', '32px');
            $('#row_4 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_7').css('color', 'white');
            $('#row_4 .mark_7').css('font-size', '32px');
            $('#row_4 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_8').css('color', 'gray');
            $('#row_4 .mark_8').css('font-size', '32px');
            $('#row_4 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_4 .mark_5').css('color', 'white');
            $('#row_4 .mark_5').css('font-size', '32px');
            $('#row_4 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_6').css('color', 'white');
            $('#row_4 .mark_6').css('font-size', '32px');
            $('#row_4 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_7').css('color', 'white');
            $('#row_4 .mark_7').css('font-size', '32px');
            $('#row_4 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_4 .mark_8').css('color', 'white');
            $('#row_4 .mark_8').css('font-size', '32px');
            $('#row_4 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    });
/* ============onclick BTN_3 button checks colors=======================*/
    function checkFirstGuessedColor_3() {
        var firstGuessedColor = $('#row_3 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_3() {
        var secondGuessedColor = $('#row_3 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_3() {
        var thirdGuessedColor = $('#row_3 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_3() {
        var fourthGuessedColor = $('#row_3 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_3() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_3() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_3() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_3() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_3').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_3 .mark_1').off('click');
        $('#row_3 .mark_2').off('click');
        $('#row_3 .mark_3').off('click');
        $('#row_3 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_3();
        var secondGuessedColor = checkSecondGuessedColor_3();
        var thirdGuessedColor = checkThirdGuessedColor_3();
        var fourthGuessedColor = checkFourthGuessedColor_3();
        var firstColor = checkFirstColor_3();
        var secondColor = checkSecondColor_3();
        var thirdColor = checkThirdColor_3();
        var fourthColor = checkFourthColor_3();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_3 .mark_8').css('color', 'gray');
            $('#row_3 .mark_8').css('font-size', '32px');
            $('#row_3 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_3 .mark_8').css('color', 'gray');
            $('#row_3 .mark_8').css('font-size', '32px');
            $('#row_3 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_7').css('color', 'gray');
            $('#row_3 .mark_7').css('font-size', '32px');
            $('#row_3 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_3 .mark_8').css('color', 'gray');
            $('#row_3 .mark_8').css('font-size', '32px');
            $('#row_3 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_7').css('color', 'gray');
            $('#row_3 .mark_7').css('font-size', '32px');
            $('#row_3 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_6').css('color', 'gray');
            $('#row_3 .mark_6').css('font-size', '32px');
            $('#row_3 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_3 .mark_8').css('color', 'gray');
            $('#row_3 .mark_8').css('font-size', '32px');
            $('#row_3 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_7').css('color', 'gray');
            $('#row_3 .mark_7').css('font-size', '32px');
            $('#row_3 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_6').css('color', 'gray');
            $('#row_3 .mark_6').css('font-size', '32px');
            $('#row_3 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_5').css('color', 'gray');
            $('#row_3 .mark_5').css('font-size', '32px');
            $('#row_3 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_3 .mark_5').css('color', 'white');
            $('#row_3 .mark_5').css('font-size', '32px');
            $('#row_3 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_3 .mark_5').css('color', 'white');
            $('#row_3 .mark_5').css('font-size', '32px');
            $('#row_3 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_8').css('color', 'gray');
            $('#row_3 .mark_8').css('font-size', '32px');
            $('#row_3 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_3 .mark_5').css('color', 'white');
            $('#row_3 .mark_5').css('font-size', '32px');
            $('#row_3 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_8').css('color', 'gray');
            $('#row_3 .mark_8').css('font-size', '32px');
            $('#row_3 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_7').css('color', 'gray');
            $('#row_3 .mark_7').css('font-size', '32px');
            $('#row_3 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_3 .mark_5').css('color', 'white');
            $('#row_3 .mark_5').css('font-size', '32px');
            $('#row_3 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_8').css('color', 'gray');
            $('#row_3 .mark_8').css('font-size', '32px');
            $('#row_3 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_7').css('color', 'gray');
            $('#row_3 .mark_7').css('font-size', '32px');
            $('#row_3 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_6').css('color', 'gray');
            $('#row_3 .mark_6').css('font-size', '32px');
            $('#row_3 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_3 .mark_5').css('color', 'white');
            $('#row_3 .mark_5').css('font-size', '32px');
            $('#row_3 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_6').css('color', 'white');
            $('#row_3 .mark_6').css('font-size', '32px');
            $('#row_3 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_3 .mark_5').css('color', 'white');
            $('#row_3 .mark_5').css('font-size', '32px');
            $('#row_3 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_6').css('color', 'white');
            $('#row_3 .mark_6').css('font-size', '32px');
            $('#row_3 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_8').css('color', 'gray');
            $('#row_3 .mark_8').css('font-size', '32px');
            $('#row_3 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_3 .mark_5').css('color', 'white');
            $('#row_3 .mark_5').css('font-size', '32px');
            $('#row_3 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_6').css('color', 'white');
            $('#row_3 .mark_6').css('font-size', '32px');
            $('#row_3 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_8').css('color', 'gray');
            $('#row_3 .mark_8').css('font-size', '32px');
            $('#row_3 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_7').css('color', 'gray');
            $('#row_3 .mark_7').css('font-size', '32px');
            $('#row_3 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_3 .mark_5').css('color', 'white');
            $('#row_3 .mark_5').css('font-size', '32px');
            $('#row_3 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_6').css('color', 'white');
            $('#row_3 .mark_6').css('font-size', '32px');
            $('#row_3 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_7').css('color', 'white');
            $('#row_3 .mark_7').css('font-size', '32px');
            $('#row_3 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_3 .mark_5').css('color', 'white');
            $('#row_3 .mark_5').css('font-size', '32px');
            $('#row_3 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_6').css('color', 'white');
            $('#row_3 .mark_6').css('font-size', '32px');
            $('#row_3 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_7').css('color', 'white');
            $('#row_3 .mark_7').css('font-size', '32px');
            $('#row_3 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_8').css('color', 'gray');
            $('#row_3 .mark_8').css('font-size', '32px');
            $('#row_3 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_3 .mark_5').css('color', 'white');
            $('#row_3 .mark_5').css('font-size', '32px');
            $('#row_3 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_6').css('color', 'white');
            $('#row_3 .mark_6').css('font-size', '32px');
            $('#row_3 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_7').css('color', 'white');
            $('#row_3 .mark_7').css('font-size', '32px');
            $('#row_3 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_3 .mark_8').css('color', 'white');
            $('#row_3 .mark_8').css('font-size', '32px');
            $('#row_3 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    });
/* ============onclick BTN_2 button checks colors=======================*/
    function checkFirstGuessedColor_2() {
        var firstGuessedColor = $('#row_2 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_2() {
        var secondGuessedColor = $('#row_2 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_2() {
        var thirdGuessedColor = $('#row_2 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_2() {
        var fourthGuessedColor = $('#row_2 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_2() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_2() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_2() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_2() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_2').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_2 .mark_1').off('click');
        $('#row_2 .mark_2').off('click');
        $('#row_2 .mark_3').off('click');
        $('#row_2 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_2();
        var secondGuessedColor = checkSecondGuessedColor_2();
        var thirdGuessedColor = checkThirdGuessedColor_2();
        var fourthGuessedColor = checkFourthGuessedColor_2();
        var firstColor = checkFirstColor_2();
        var secondColor = checkSecondColor_2();
        var thirdColor = checkThirdColor_2();
        var fourthColor = checkFourthColor_2();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_2 .mark_8').css('color', 'gray');
            $('#row_2 .mark_8').css('font-size', '32px');
            $('#row_2 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_2 .mark_8').css('color', 'gray');
            $('#row_2 .mark_8').css('font-size', '32px');
            $('#row_2 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_7').css('color', 'gray');
            $('#row_2 .mark_7').css('font-size', '32px');
            $('#row_2 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_2 .mark_8').css('color', 'gray');
            $('#row_2 .mark_8').css('font-size', '32px');
            $('#row_2 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_7').css('color', 'gray');
            $('#row_2 .mark_7').css('font-size', '32px');
            $('#row_2 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_6').css('color', 'gray');
            $('#row_2 .mark_6').css('font-size', '32px');
            $('#row_2 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_2 .mark_8').css('color', 'gray');
            $('#row_2 .mark_8').css('font-size', '32px');
            $('#row_2 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_7').css('color', 'gray');
            $('#row_2 .mark_7').css('font-size', '32px');
            $('#row_2 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_6').css('color', 'gray');
            $('#row_2 .mark_6').css('font-size', '32px');
            $('#row_2 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_5').css('color', 'gray');
            $('#row_2 .mark_5').css('font-size', '32px');
            $('#row_2 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_2 .mark_5').css('color', 'white');
            $('#row_2 .mark_5').css('font-size', '32px');
            $('#row_2 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_2 .mark_5').css('color', 'white');
            $('#row_2 .mark_5').css('font-size', '32px');
            $('#row_2 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_8').css('color', 'gray');
            $('#row_2 .mark_8').css('font-size', '32px');
            $('#row_2 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_2 .mark_5').css('color', 'white');
            $('#row_2 .mark_5').css('font-size', '32px');
            $('#row_2 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_8').css('color', 'gray');
            $('#row_2 .mark_8').css('font-size', '32px');
            $('#row_2 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_7').css('color', 'gray');
            $('#row_2 .mark_7').css('font-size', '32px');
            $('#row_2 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_2 .mark_5').css('color', 'white');
            $('#row_2 .mark_5').css('font-size', '32px');
            $('#row_2 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_8').css('color', 'gray');
            $('#row_2 .mark_8').css('font-size', '32px');
            $('#row_2 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_7').css('color', 'gray');
            $('#row_2 .mark_7').css('font-size', '32px');
            $('#row_2 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_6').css('color', 'gray');
            $('#row_2 .mark_6').css('font-size', '32px');
            $('#row_2 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_2 .mark_5').css('color', 'white');
            $('#row_2 .mark_5').css('font-size', '32px');
            $('#row_2 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_6').css('color', 'white');
            $('#row_2 .mark_6').css('font-size', '32px');
            $('#row_2 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_2 .mark_5').css('color', 'white');
            $('#row_2 .mark_5').css('font-size', '32px');
            $('#row_2 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_6').css('color', 'white');
            $('#row_2 .mark_6').css('font-size', '32px');
            $('#row_2 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_8').css('color', 'gray');
            $('#row_2 .mark_8').css('font-size', '32px');
            $('#row_2 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_2 .mark_5').css('color', 'white');
            $('#row_2 .mark_5').css('font-size', '32px');
            $('#row_2 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_6').css('color', 'white');
            $('#row_2 .mark_6').css('font-size', '32px');
            $('#row_2 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_8').css('color', 'gray');
            $('#row_2 .mark_8').css('font-size', '32px');
            $('#row_2 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_7').css('color', 'gray');
            $('#row_2 .mark_7').css('font-size', '32px');
            $('#row_2 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_2 .mark_5').css('color', 'white');
            $('#row_2 .mark_5').css('font-size', '32px');
            $('#row_2 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_6').css('color', 'white');
            $('#row_2 .mark_6').css('font-size', '32px');
            $('#row_2 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_7').css('color', 'white');
            $('#row_2 .mark_7').css('font-size', '32px');
            $('#row_2 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_2 .mark_5').css('color', 'white');
            $('#row_2 .mark_5').css('font-size', '32px');
            $('#row_2 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_6').css('color', 'white');
            $('#row_2 .mark_6').css('font-size', '32px');
            $('#row_2 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_7').css('color', 'white');
            $('#row_2 .mark_7').css('font-size', '32px');
            $('#row_2 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_8').css('color', 'gray');
            $('#row_2 .mark_8').css('font-size', '32px');
            $('#row_2 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_2 .mark_5').css('color', 'white');
            $('#row_2 .mark_5').css('font-size', '32px');
            $('#row_2 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_6').css('color', 'white');
            $('#row_2 .mark_6').css('font-size', '32px');
            $('#row_2 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_7').css('color', 'white');
            $('#row_2 .mark_7').css('font-size', '32px');
            $('#row_2 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_2 .mark_8').css('color', 'white');
            $('#row_2 .mark_8').css('font-size', '32px');
            $('#row_2 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    });
/* ============onclick BTN_1 button checks colors=======================*/
    function checkFirstGuessedColor_1() {
        var firstGuessedColor = $('#row_1 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_1() {
        var secondGuessedColor = $('#row_1 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_1() {
        var thirdGuessedColor = $('#row_1 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_1() {
        var fourthGuessedColor = $('#row_1 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_1() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_1() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_1() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_1() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_1').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_1 .mark_1').off('click');
        $('#row_1 .mark_2').off('click');
        $('#row_1 .mark_3').off('click');
        $('#row_1 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_1();
        var secondGuessedColor = checkSecondGuessedColor_1();
        var thirdGuessedColor = checkThirdGuessedColor_1();
        var fourthGuessedColor = checkFourthGuessedColor_1();
        var firstColor = checkFirstColor_1();
        var secondColor = checkSecondColor_1();
        var thirdColor = checkThirdColor_1();
        var fourthColor = checkFourthColor_1();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_1 .mark_8').css('color', 'gray');
            $('#row_1 .mark_8').css('font-size', '32px');
            $('#row_1 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_1 .mark_8').css('color', 'gray');
            $('#row_1 .mark_8').css('font-size', '32px');
            $('#row_1 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_7').css('color', 'gray');
            $('#row_1 .mark_7').css('font-size', '32px');
            $('#row_1 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_1 .mark_8').css('color', 'gray');
            $('#row_1 .mark_8').css('font-size', '32px');
            $('#row_1 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_7').css('color', 'gray');
            $('#row_1 .mark_7').css('font-size', '32px');
            $('#row_1 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_6').css('color', 'gray');
            $('#row_1 .mark_6').css('font-size', '32px');
            $('#row_1 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_1 .mark_8').css('color', 'gray');
            $('#row_1 .mark_8').css('font-size', '32px');
            $('#row_1 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_7').css('color', 'gray');
            $('#row_1 .mark_7').css('font-size', '32px');
            $('#row_1 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_6').css('color', 'gray');
            $('#row_1 .mark_6').css('font-size', '32px');
            $('#row_1 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_5').css('color', 'gray');
            $('#row_1 .mark_5').css('font-size', '32px');
            $('#row_1 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_1 .mark_5').css('color', 'white');
            $('#row_1 .mark_5').css('font-size', '32px');
            $('#row_1 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_1 .mark_5').css('color', 'white');
            $('#row_1 .mark_5').css('font-size', '32px');
            $('#row_1 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_8').css('color', 'gray');
            $('#row_1 .mark_8').css('font-size', '32px');
            $('#row_1 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_1 .mark_5').css('color', 'white');
            $('#row_1 .mark_5').css('font-size', '32px');
            $('#row_1 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_8').css('color', 'gray');
            $('#row_1 .mark_8').css('font-size', '32px');
            $('#row_1 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_7').css('color', 'gray');
            $('#row_1 .mark_7').css('font-size', '32px');
            $('#row_1 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_1 .mark_5').css('color', 'white');
            $('#row_1 .mark_5').css('font-size', '32px');
            $('#row_1 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_8').css('color', 'gray');
            $('#row_1 .mark_8').css('font-size', '32px');
            $('#row_1 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_7').css('color', 'gray');
            $('#row_1 .mark_7').css('font-size', '32px');
            $('#row_1 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_6').css('color', 'gray');
            $('#row_1 .mark_6').css('font-size', '32px');
            $('#row_1 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_1 .mark_5').css('color', 'white');
            $('#row_1 .mark_5').css('font-size', '32px');
            $('#row_1 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_6').css('color', 'white');
            $('#row_1 .mark_6').css('font-size', '32px');
            $('#row_1 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_1 .mark_5').css('color', 'white');
            $('#row_1 .mark_5').css('font-size', '32px');
            $('#row_1 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_6').css('color', 'white');
            $('#row_1 .mark_6').css('font-size', '32px');
            $('#row_1 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_8').css('color', 'gray');
            $('#row_1 .mark_8').css('font-size', '32px');
            $('#row_1 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_1 .mark_5').css('color', 'white');
            $('#row_1 .mark_5').css('font-size', '32px');
            $('#row_1 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_6').css('color', 'white');
            $('#row_1 .mark_6').css('font-size', '32px');
            $('#row_1 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_8').css('color', 'gray');
            $('#row_1 .mark_8').css('font-size', '32px');
            $('#row_1 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_7').css('color', 'gray');
            $('#row_1 .mark_7').css('font-size', '32px');
            $('#row_1 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_1 .mark_5').css('color', 'white');
            $('#row_1 .mark_5').css('font-size', '32px');
            $('#row_1 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_6').css('color', 'white');
            $('#row_1 .mark_6').css('font-size', '32px');
            $('#row_1 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_7').css('color', 'white');
            $('#row_1 .mark_7').css('font-size', '32px');
            $('#row_1 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_1 .mark_5').css('color', 'white');
            $('#row_1 .mark_5').css('font-size', '32px');
            $('#row_1 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_6').css('color', 'white');
            $('#row_1 .mark_6').css('font-size', '32px');
            $('#row_1 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_7').css('color', 'white');
            $('#row_1 .mark_7').css('font-size', '32px');
            $('#row_1 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_8').css('color', 'gray');
            $('#row_1 .mark_8').css('font-size', '32px');
            $('#row_1 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_1 .mark_5').css('color', 'white');
            $('#row_1 .mark_5').css('font-size', '32px');
            $('#row_1 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_6').css('color', 'white');
            $('#row_1 .mark_6').css('font-size', '32px');
            $('#row_1 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_7').css('color', 'white');
            $('#row_1 .mark_7').css('font-size', '32px');
            $('#row_1 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_1 .mark_8').css('color', 'white');
            $('#row_1 .mark_8').css('font-size', '32px');
            $('#row_1 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    });
/* ============onclick BTN_0 button checks colors=======================*/
    function checkFirstGuessedColor_0() {
        var firstGuessedColor = $('#row_0 .mark_1').css('color');
        return firstGuessedColor;
    }

    function checkSecondGuessedColor_0() {
        var secondGuessedColor = $('#row_0 .mark_2').css('color');
        return secondGuessedColor;
    }

    function checkThirdGuessedColor_0() {
        var thirdGuessedColor = $('#row_0 .mark_3').css('color');
        return thirdGuessedColor;
    }

    function checkFourthGuessedColor_0() {
        var fourthGuessedColor = $('#row_0 .mark_4').css('color');
        return fourthGuessedColor;
    }


    function checkFirstColor_0() {
        var firstColor = $('#row_12 .mark_1').css('color');
        return firstColor;
    }

    function checkSecondColor_0() {
        var secondColor = $('#row_12 .mark_2').css('color');
        return secondColor;
    }

    function checkThirdColor_0() {
        var thirdColor = $('#row_12 .mark_3').css('color');
        return thirdColor;
    }

    function checkFourthColor_0() {
        var fourthColor = $('#row_12 .mark_4').css('color');
        return fourthColor;
    }

    $('#btn_0').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_0 .mark_1').off('click');
        $('#row_0 .mark_2').off('click');
        $('#row_0 .mark_3').off('click');
        $('#row_0 .mark_4').off('click');
        var firstGuessedColor = checkFirstGuessedColor_0();
        var secondGuessedColor = checkSecondGuessedColor_0();
        var thirdGuessedColor = checkThirdGuessedColor_0();
        var fourthGuessedColor = checkFourthGuessedColor_0();
        var firstColor = checkFirstColor_0();
        var secondColor = checkSecondColor_0();
        var thirdColor = checkThirdColor_0();
        var fourthColor = checkFourthColor_0();
        console.log(firstGuessedColor + ' - ' + secondGuessedColor + ' - ' + thirdGuessedColor + ' - ' + fourthGuessedColor);
        console.log(firstColor + ' - ' + secondColor + ' - ' + thirdColor + ' - ' + fourthColor);
        var correctRed = 0, correctBlue = 0, correctGreen = 0, correctYellow = 0;
        var redGuess = 0, blueGuess = 0, greenGuess = 0, yellowGuess = 0;
        var red = 0, blue = 0, green = 0, yellow = 0;

        var correctGuesses = 0;
        var correctGuessesButWrongPlace = 0;
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)' && firstColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(firstGuessedColor === 'rgb(0, 0, 255)' && firstColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(firstGuessedColor === 'rgb(0, 128, 0)' && firstColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(firstGuessedColor === 'rgb(255, 255, 0)' && firstColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)' && secondColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(secondGuessedColor === 'rgb(0, 0, 255)' && secondColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(secondGuessedColor === 'rgb(0, 128, 0)' && secondColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(secondGuessedColor === 'rgb(255, 255, 0)' && secondColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)' && thirdColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(thirdGuessedColor === 'rgb(0, 0, 255)' && thirdColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(thirdGuessedColor === 'rgb(0, 128, 0)' && thirdColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(thirdGuessedColor === 'rgb(255, 255, 0)' && thirdColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)' && fourthColor === 'rgb(255, 0, 0)') {
            correctRed++;
        }
        if(fourthGuessedColor === 'rgb(0, 0, 255)' && fourthColor === 'rgb(0, 0, 255)') {
            correctBlue++;
        }
        if(fourthGuessedColor === 'rgb(0, 128, 0)' && fourthColor === 'rgb(0, 128, 0)') {
            correctGreen++;
        }
        if(fourthGuessedColor === 'rgb(255, 255, 0)' && fourthColor === 'rgb(255, 255, 0)') {
            correctYellow++;
        }
        console.log(correctRed + ' - ' + correctBlue + ' - ' + correctGreen + ' - ' + correctYellow);
        /*===========================================================================*/
        if(firstGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(firstGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(firstGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(secondGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(secondGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(secondGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(thirdGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(thirdGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        if(fourthGuessedColor === 'rgb(255, 0, 0)') {
            redGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 0, 255)') {
            blueGuess++;
        } else if(fourthGuessedColor === 'rgb(0, 128, 0)') {
            greenGuess++;
        } else {
            yellowGuess++;
        }
        redGuess -= correctRed;
        blueGuess -= correctBlue;
        greenGuess -= correctGreen;
        yellowGuess -= correctYellow;
        console.log(redGuess + ' - ' + blueGuess + ' - ' + greenGuess + ' - ' + yellowGuess);
        /*===========================================================================*/
        if(firstColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(firstColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(firstColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(secondColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(secondColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(secondColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(thirdColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(thirdColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(thirdColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        if(fourthColor === 'rgb(255, 0, 0)') {
            red++;
        } else if(fourthColor === 'rgb(0, 0, 255)') {
            blue++;
        } else if(fourthColor === 'rgb(0, 128, 0)') {
            green++;
        } else {
            yellow++;
        }
        red -= correctRed;
        blue -= correctBlue;
        green -= correctGreen;
        yellow -= correctYellow;
        console.log(red + ' - ' + blue + ' - ' + green + ' - ' + yellow);

        if(redGuess > 0 && red > 0) {
            if(redGuess >= red) {
                correctGuessesButWrongPlace += red;
            } else if(redGuess < red) {
                correctGuessesButWrongPlace += redGuess;
            }
        }
        if(blueGuess > 0 && blue > 0) {
            if(blueGuess >= blue) {
                correctGuessesButWrongPlace += blue;
            } else if(blueGuess < red) {
                correctGuessesButWrongPlace += blueGuess;
            }
        }
        if(greenGuess > 0 && green > 0) {
            if(greenGuess >= green) {
                correctGuessesButWrongPlace += green;
            } else if(greenGuess < green) {
                correctGuessesButWrongPlace += greenGuess;
            }
        }
        if(yellowGuess > 0 && yellow > 0) {
            if(yellowGuess >= yellow) {
                correctGuessesButWrongPlace += yellow;
            } else if(yellowGuess < yellow) {
                correctGuessesButWrongPlace += yellowGuess;
            }
        }
        correctGuesses = correctRed + correctBlue + correctGreen + correctYellow;
        console.log('riktiga: ' + correctGuesses + ' - fel plats: ' + correctGuessesButWrongPlace);
        if(correctGuesses === 0 && correctGuessesButWrongPlace === 1) {
            $('#row_0 .mark_8').css('color', 'gray');
            $('#row_0 .mark_8').css('font-size', '32px');
            $('#row_0 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 2) {
            $('#row_0 .mark_8').css('color', 'gray');
            $('#row_0 .mark_8').css('font-size', '32px');
            $('#row_0 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_7').css('color', 'gray');
            $('#row_0 .mark_7').css('font-size', '32px');
            $('#row_0 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 3) {
            $('#row_0 .mark_8').css('color', 'gray');
            $('#row_0 .mark_8').css('font-size', '32px');
            $('#row_0 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_7').css('color', 'gray');
            $('#row_0 .mark_7').css('font-size', '32px');
            $('#row_0 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_6').css('color', 'gray');
            $('#row_0 .mark_6').css('font-size', '32px');
            $('#row_0 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 0 && correctGuessesButWrongPlace === 4) {
            $('#row_0 .mark_8').css('color', 'gray');
            $('#row_0 .mark_8').css('font-size', '32px');
            $('#row_0 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_7').css('color', 'gray');
            $('#row_0 .mark_7').css('font-size', '32px');
            $('#row_0 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_6').css('color', 'gray');
            $('#row_0 .mark_6').css('font-size', '32px');
            $('#row_0 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_5').css('color', 'gray');
            $('#row_0 .mark_5').css('font-size', '32px');
            $('#row_0 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 0) {
            $('#row_0 .mark_5').css('color', 'white');
            $('#row_0 .mark_5').css('font-size', '32px');
            $('#row_0 .mark_5').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 1) {
            $('#row_0 .mark_5').css('color', 'white');
            $('#row_0 .mark_5').css('font-size', '32px');
            $('#row_0 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_8').css('color', 'gray');
            $('#row_0 .mark_8').css('font-size', '32px');
            $('#row_0 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 2) {
            $('#row_0 .mark_5').css('color', 'white');
            $('#row_0 .mark_5').css('font-size', '32px');
            $('#row_0 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_8').css('color', 'gray');
            $('#row_0 .mark_8').css('font-size', '32px');
            $('#row_0 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_7').css('color', 'gray');
            $('#row_0 .mark_7').css('font-size', '32px');
            $('#row_0 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 1 && correctGuessesButWrongPlace === 3) {
            $('#row_0 .mark_5').css('color', 'white');
            $('#row_0 .mark_5').css('font-size', '32px');
            $('#row_0 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_8').css('color', 'gray');
            $('#row_0 .mark_8').css('font-size', '32px');
            $('#row_0 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_7').css('color', 'gray');
            $('#row_0 .mark_7').css('font-size', '32px');
            $('#row_0 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_6').css('color', 'gray');
            $('#row_0 .mark_6').css('font-size', '32px');
            $('#row_0 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 0) {
            $('#row_0 .mark_5').css('color', 'white');
            $('#row_0 .mark_5').css('font-size', '32px');
            $('#row_0 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_6').css('color', 'white');
            $('#row_0 .mark_6').css('font-size', '32px');
            $('#row_0 .mark_6').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 1) {
            $('#row_0 .mark_5').css('color', 'white');
            $('#row_0 .mark_5').css('font-size', '32px');
            $('#row_0 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_6').css('color', 'white');
            $('#row_0 .mark_6').css('font-size', '32px');
            $('#row_0 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_8').css('color', 'gray');
            $('#row_0 .mark_8').css('font-size', '32px');
            $('#row_0 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 2 && correctGuessesButWrongPlace === 2) {
            $('#row_0 .mark_5').css('color', 'white');
            $('#row_0 .mark_5').css('font-size', '32px');
            $('#row_0 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_6').css('color', 'white');
            $('#row_0 .mark_6').css('font-size', '32px');
            $('#row_0 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_8').css('color', 'gray');
            $('#row_0 .mark_8').css('font-size', '32px');
            $('#row_0 .mark_8').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_7').css('color', 'gray');
            $('#row_0 .mark_7').css('font-size', '32px');
            $('#row_0 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 0) {
            $('#row_0 .mark_5').css('color', 'white');
            $('#row_0 .mark_5').css('font-size', '32px');
            $('#row_0 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_6').css('color', 'white');
            $('#row_0 .mark_6').css('font-size', '32px');
            $('#row_0 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_7').css('color', 'white');
            $('#row_0 .mark_7').css('font-size', '32px');
            $('#row_0 .mark_7').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 3 && correctGuessesButWrongPlace === 1) {
            $('#row_0 .mark_5').css('color', 'white');
            $('#row_0 .mark_5').css('font-size', '32px');
            $('#row_0 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_6').css('color', 'white');
            $('#row_0 .mark_6').css('font-size', '32px');
            $('#row_0 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_7').css('color', 'white');
            $('#row_0 .mark_7').css('font-size', '32px');
            $('#row_0 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_8').css('color', 'gray');
            $('#row_0 .mark_8').css('font-size', '32px');
            $('#row_0 .mark_8').css('text-shadow', '0px 0px 5px black');
        } else if(correctGuesses === 4 && correctGuessesButWrongPlace === 0) {
            $('#row_0 .mark_5').css('color', 'white');
            $('#row_0 .mark_5').css('font-size', '32px');
            $('#row_0 .mark_5').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_6').css('color', 'white');
            $('#row_0 .mark_6').css('font-size', '32px');
            $('#row_0 .mark_6').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_7').css('color', 'white');
            $('#row_0 .mark_7').css('font-size', '32px');
            $('#row_0 .mark_7').css('text-shadow', '0px 0px 5px black');
            $('#row_0 .mark_8').css('color', 'white');
            $('#row_0 .mark_8').css('font-size', '32px');
            $('#row_0 .mark_8').css('text-shadow', '0px 0px 5px black');
        }
    }); 
/* ============onclick show correct solution============================*/
    $('#game_over').on('click', function() {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
        $('#row_12 .mark_4').slideDown();
        $('#row_12 .mark_3').slideDown();
        $('#row_12 .mark_2').slideDown();
        $('#row_12 .mark_1').slideDown();
        $('#play_button').slideDown();
        $('#row_12').css('background-color', '#802b00');
    });
