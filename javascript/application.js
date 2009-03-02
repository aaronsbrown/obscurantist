$(function() {
        $('#grid-switch a').click(function() {
                $('#container').toggleClass("grid-overlay");
                $('body').toggleClass("baseline-grid-overlay");
            });
    });