

// $(window).scroll(function() {
//     var hT = $('.skills').offset().top,
//         hH = $('.skills').outerHeight()-500,
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//     console.log((hT-wH) , wS);
//     if ((wS > hT+hH-wH) && swap === 1) {
        $(".dws-progress-bar-0").circularProgress({
            color: "#30bae7",
            line_width: 12,
            height: "215px",
            width: "225px",
            percent: 0,
            num: 0,
            // counter_clockwise: true,
            starting_position: 0,
        }).circularProgress('animate', 90, 500);


        $(".dws-progress-bar-1").circularProgress({
            color: "#d74680",
            line_width: 12,
            height: "215px",
            width: "225px",
            percent: 0,
            num: 1,
            // counter_clockwise: true,
            starting_position: 0,
        }).circularProgress('animate', 75, 500);


        $(".dws-progress-bar-2").circularProgress({
            color: "#15c7a8",
            line_width: 12,
            height: "215px",
            width: "225px",
            percent: 0,
            num: 2,
            // counter_clockwise: true,
            starting_position: 0,
        }).circularProgress('animate', 70, 500);


        $(".dws-progress-bar-3").circularProgress({
            color: "#eb7d4b",
            line_width: 12,
            height: "215px",
            width: "225px",
            percent: 0,
            num: 3,
            // counter_clockwise: true,
            starting_position: 0,
        }).circularProgress('animate', 85, 500);


    // }
// });