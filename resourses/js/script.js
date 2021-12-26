
//Pre Loader
$(window).on('load', function
    () {
    $("#status").fadeOut(1000);
    $('#preloader').delay(1100).fadeOut(1000);
});



$(document).ready(function () {


    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        }
    );


});


//Progress Bar 
$(document).ready(function () {
    //Second
    $("#prgress-elements").waypoint(function () {
        //First
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + "%",
            }, 3000);
        });

        this.destory();
    }, {
        offset: "bottom-in-view"
    }


    );

});


//Responsive Tab
$(document).ready(function () {
    $('#services-tab').responsiveTabs({
        animation: 'slide',
    });
});



