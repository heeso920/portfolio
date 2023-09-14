
const swiper = new Swiper(".main_slides", {
    speed: 1000,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
})

const swiper2 = new Swiper(".review_slide", {
    speed: 1000,
    loop: true,
    navigation: {
        prevEl:(".left_arrow"),
        nextEl:(".right_arrow")
    }
})

$(function () {
    $("header .navi .menu").click(function () {

        if ($("header .dropdown nav").hasClass("on")) {
            $("header .dropdown nav").removeClass("on");
            setTimeout(function(){
                $("header .dropdown").removeClass("on");
            },500)
        } else {
            $("header .dropdown").addClass("on");
            setTimeout(function(){
                $("header .dropdown nav").addClass("on");
            },100)
        }
    })


});


// scroll Event
$(document).scroll(function () {
    let s = $(document).scrollTop();
    $(".posNum").text(s);

    if (s >= 950) {
        $(".banner .skin").addClass("on");
    }
    if (s >= 1700) {
        $(".banner .best").addClass("on");
    }
    if (s >= 2300) {
        $(".banner .new").addClass("on");
    }


});









