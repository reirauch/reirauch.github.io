$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: true, ///////!!!!
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: false,
        // rows: 3,
        // slidesPerRow: 2
        // vertical: true,
        // asNavFor:'.sliderbig',
        responsive:[
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]

    });
    // $('.sliderbig').slick({
    //     slidesToShow: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor:'.slider'

    // });
});

