$(function(){
    Logic();
    // 검색창
    $("header .search div img").click(function(){
        $("header .search div").addClass("on");
    });


    $("section").click(function(e){
        $("header .search div").removeClass("on");
    });



    $(".letter").lettering();
    animation();

});


// scroll Event
$(document).scroll(function(){
    let s = $(document).scrollTop();
    $(".posNum").text(s);

    if(s <= 925) {
        $(".brand .inner").css({
            position:"relative",
            top:"0px"
        });
        $(".brand .brand_slide .img_slide").removeClass("con2");
        $(".brand .brand_slide .img_slide").removeClass("con3");
        $(".brand .brand_slide .img_slide").addClass("con1");

        $(".brand .brand_slide .text_slide").removeClass("con2");
        $(".brand .brand_slide .text_slide").removeClass("con3");
        $(".brand .brand_slide .text_slide").addClass("con1");

    }
    if(s >= 2001 && s <= 4000){
        $(".brand .brand_slide .img_slide").removeClass("con1");
        $(".brand .brand_slide .img_slide").removeClass("con3");
        $(".brand .brand_slide .img_slide").addClass("con2");

        $(".brand .brand_slide .text_slide").removeClass("con1");
        $(".brand .brand_slide .text_slide").removeClass("con3");
        $(".brand .brand_slide .text_slide").addClass("con2");
    }
    if(s >= 4001 && s <= 5700){
        $(".brand .brand_slide .img_slide").removeClass("con2");
        $(".brand .brand_slide .img_slide").addClass("con3");

        $(".brand .brand_slide .text_slide").removeClass("con2");
        $(".brand .brand_slide .text_slide").addClass("con3");
    }
    if(s >= 925 && s <= 5857){
        $(".brand .inner").css({
            position:"fixed",
            top:"156px"
        })
    }
    if(s >= 5858){
        $(".brand .inner").css({
            position:"absolute",
            top:"6001px",
        })
    }


    if(s >= 250){
        $(".brand h2").addClass("on");
    }


    if(s >= 6200){
        $(".best h2").addClass("on");
    }
    if(s >= 6400){
        $(".best .best_slide").addClass("on");
    }



    if(s >= 6900){
        $(".advantage .inner .left .text").addClass("on");
    }
    if(s >= 7000){
        $(".advantage .inner .right img").addClass("on");
    }
    if(s >= 7200){
        $(".advantage .inner .left p").addClass("on");
    }
    if(s >= 7250){
        $(".advantage .inner .left .btn2").addClass("on");
    }
    if(s >= 7250){
        $(".advantage .inner .left .flower").addClass("on");
    }


    if(s >= 7900){
        $(".new h2").addClass("on");
    }
    if(s >= 8200){
        $(".new .new_slide").addClass("on");
    }





    if(s >= 8800){
        $(".custom .inner h2").addClass("on");
    }
    if(s >= 9100){
        $(".custom .inner h3").addClass("on");
    }
    if(s >= 9400){
        $(".custom .inner .wrap .center p").addClass("on");
    }
    if(s >= 9500){
        $(".custom .inner .wrap .center .btn3").addClass("on");
    }




    if(s >= 9900){
        $(".review h2").addClass("on");
    }
    if(s >= 10050){
        $(".review .wrap").addClass("on");
    }
    if(s >= 9900){
        $(".review h2").addClass("on");
    }
    if(s >= 10750){
        $(".review .btn4").addClass("on");
    }




    if(s >= 11000){
        $(".store h2").addClass("on");
    }
    if(s >= 11700){
        $(".store .wrap").addClass("on");
    }


});





// first letter

function animation() {
    let title1 = new TimelineMax();
    title1.staggerFromTo(".letter span", 0.5,
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
}


//best swiper
const swiper = new Swiper(".best_slide",{

    speed: 1000,
    loop: true,
    direction: "horizontal",
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween:20,
    centeredSlides: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    }
});

const swiper2 = new Swiper(".new_slide",{

    speed: 1000,
    loop: true,
    direction: "horizontal",
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween:20,
    centeredSlides: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    }
});


