gsap.registerPlugin(ScrollTrigger);


$(function () {

    const t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".tasty",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            // pin:true,
            markers: false
        }
    })
        // .fromTo(".tasty .tasty_wrap .t_title",{yPercent:100},{yPercent:45,duration:2})


        .fromTo(".t_title", {x: 0}, {x: 2000, duration: 1}, 0)
        .fromTo(".t_title2", {y: 0, x: 0}, {y: -700, x: -2200, duration: 1}, 0)
        .fromTo(".tasty_burger_i", {y: 0, x: 0}, {y: -1200, x: 1400, duration: 1}, 1)
        .fromTo(".tasty_burger_t", {y: 0}, {y: -1200, duration: 1}, 1)
        .fromTo(".tasty_chicken_t", {y: 0}, {y: -1400, x: -600, duration: 1}, 2)
        .fromTo(".tasty_chicken_i", {y: 0, x: 0}, {y: -1400, x: -100, duration: 1}, 2)
        .fromTo(".tasty_ice_t", {x: 0, y: 0}, {x: -1000, y: -1400, duration: 1}, 3)
        .fromTo(".tasty_ice_i", {x: 0, y: 0}, {x: 1000, y: -1400, duration: 1}, 3)


    const swiper = new Swiper(".main_slider", {
        autoplay: {
            delay: 0,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        slidesPerView: 3,
        loop: true,
        speed: 8000,
        spaceBetween: 100,

        breakpoints: {
            600: {

                direction: "horizontal",
            },
            1290: {
                direction: "vertical",
            }
        },


    })

    const swiper2 = new Swiper(".side_slider", {

        loop: false,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {

            1000: {
                slidesPerView: 1,
            },
            1400: {
                slidesPerView: 2,
            },
            1700: {
                slidesPerView: 3,
            }
        },
    })

    const swiper3 = new Swiper(".wapper_slider", {

        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {

            1000: {

                slidesPerView: 1,
            },
            1400: {

                slidesPerView: 2,
            },
            1700: {
                slidesPerView: 3,
            }
        },
    })

    const swiper4 = new Swiper(".premium_slider", {

        loop: false,


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {

            1000: {

                slidesPerView: 1,
            },
            1400: {

                slidesPerView: 2,
            },
            1700: {
                slidesPerView: 3,
            }
        },
    })

    $(".gnb").mouseenter(function () {
        $(".sub").stop().slideDown();
        $(".bg").stop().slideDown()
    })

    $("header").mouseleave(function () {
        $(".sub").stop().slideUp();
        $(".bg").stop().slideUp()
    })


    $(".newmenu_wrap .btn_box > div").click(function () {
        $(this).addClass("on");
        $(this).siblings().removeClass("on");

        if ($(".newmenu_wrap .btn_box .burger_btn").hasClass("on")) {
            $(".newmenu_wrap .new.menu_burger").addClass("on");
            $(".newmenu_wrap .new.menu_side").removeClass("on");
        } else if ($(".newmenu_wrap .btn_box .side_btn").hasClass("on")) {
            $(".newmenu_wrap .new.menu_burger").removeClass("on");
            $(".newmenu_wrap .new.menu_side").addClass("on");
        }
    })

    $(".banner .food_box > div").click(function () {
        $(this).addClass("on");
        const food1 = $(".banner .food_box > div:eq(0)").hasClass("on");
        const food2 = $(".banner .food_box > div:eq(1)").hasClass("on");
        const food3 = $(".banner .food_box > div:eq(2)").hasClass("on");
        const food4 = $(".banner .food_box > div:eq(3)").hasClass("on");
        const food5 = $(".banner .food_box > div:eq(4)").hasClass("on");


        if (food1 && food2 && food3 && food4 && food5) {
            $(".banner .b_inner .test").addClass("end");
        }


    });


    $(".btn_box2 div").click(function () {
        $(this).addClass("active")
        $(this).siblings().removeClass("active");
        if ($(".btn_box2 .wapper_btn").hasClass("active")) {
            $(".wapper_slider").addClass("active");
            $(".wapper_slider").siblings().removeClass("active");
            $(".move_img_box img").eq(0).addClass("active2");
            $(".move_img_box img").eq(0).siblings().removeClass("active2");
        } else if ($(".btn_box2 .pre_btn").hasClass("active")) {
            $(".premium_slider").addClass("active");
            $(".premium_slider").siblings().removeClass("active");
            $(".move_img_box img").eq(1).addClass("active2");
            $(".move_img_box img").eq(1).siblings().removeClass("active2");
        } else if ($(".btn_box2 .side_btn2").hasClass("active")) {
            $(".side_slider").addClass("active");
            $(".side_slider").siblings().removeClass("active");
            $(".move_img_box img").eq(2).addClass("active2");
            $(".move_img_box img").eq(2).siblings().removeClass("active2");
        }
    })


})