gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

$(function(){

    $("header .top .menu_btn").click(function (){
        $("header").toggleClass("on");
    });

    const t1 = gsap.timeline({
        scrollTrigger:{
            trigger: "#scene01",
            start: "top top",
            end: "bottom bottom",
            scrub:1,
            markers:false
        }
    })
        .fromTo(".text_scroll",{yPercent:0},{yPercent:45,duration:2})
        .fromTo(".text_scroll .box1",{xPercent:0,yPercent:0},{xPercent:-100,yPercent:100,duration:10, ease:"none"},1)
        .fromTo(".text_scroll .box2",{xPercent:0,yPercent:0},{xPercent:-60,yPercent:100,duration:10, ease:"none"},1)
        .fromTo(".text_scroll .box3",{xPercent:0,yPercent:0},{xPercent:60,yPercent:100,duration:10, ease:"none"},1)
        .fromTo(".text_scroll .box4",{xPercent:0,yPercent:0},{xPercent:100,yPercent:100,duration:10, ease:"none"},1)
        .fromTo(".text_scroll",{yPercent:35},{yPercent:175,duration:10, ease:"none"},1)
});



const b1 = gsap.timeline({
    scrollTrigger:{
        trigger: "#scene01 .con_scroll .con_art .con_box",
        start: "top 80%",
        end: "bottom bottom",
        markers:false
    }
})
    .fromTo("#scene01 .con_scroll .con_art .con_box .box_left .img_1",{yPercent:70,opacity:0},{yPercent:0,opacity:1,duration:3},1)
    .fromTo("#scene01 .con_scroll .con_art .con_box .box_right .img_3",{yPercent:70,opacity:0},{yPercent:0,opacity:1,duration:2},1)
    .fromTo("#scene01 .con_scroll .con_art .con_box .box_left .img_2",{yPercent:50,opacity:0},{yPercent:0,opacity:1,duration:1},1)
    .fromTo("#scene01 .con_scroll .con_art .con_box .box_right .img_4",{yPercent:50,opacity:0},{yPercent:0,opacity:1,duration:4},1)


const b2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".item_brow",
        start: "top 30%",
        end: "bottom bottom",
        // scrub:1,
        markers:false
    }
})
    .to(".item_section .item_con .item_brow .brow_img",{xPercent:10,opacity:1,duration:1})
    .to(".item_section .item_con .item_brow .brow_img2",{opacity:1,duration:1})

    
const b3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".item_lip",
        start: "top 30%",
        end: "bottom bottom",
        // scrub:1,
        markers:false
    }
})
    .to(".item_section .item_con .item_lip .lip_img",{xPercent:-10,opacity:1,duration:1})
    .to(".item_section .item_con .item_lip .lip_img2",{opacity:1,duration:1})   





const swiper = new Swiper(".photo_swiper",{
    speed: 1000,
    loop: true,
    direction: "horizontal",
    grabCursor:false,
    slidesPerView:"auto",
    spaceBetween:30,
    centeredSlides:true,
    pagination:{
        el: ".custom_dots",
        clickable:true,
    },
    navigation:{
        prevEl: ".arrow_prev",
        nextEl: ".arrow_next"
    },
    effect:"coverflow",
    coverflowEffect:{
        rotate:30,
        stretch:-50,
        depth:480,
        slideShadows:true
    }
});


const swiper2 = new Swiper(".insta_swiper",{
    speed: 1000,
    loop: true,
    Infinity:true,
    autoplay:true,
    direction: "horizontal",
    grabCursor:false,
    slidesPerView:5,
    spaceBetween:30,
    centeredSlides:true,
    pagination:{
        el: ".custom_dots",
        clickable:true,
    },
});




$(window).on("wheel",function (e){

    if (e.originalEvent.deltaY < 0) { //up

    }

    else { //down
        $(".intro").addClass("on");
        $(".mask").addClass("on");
        setTimeout(()=>{
            $(".scroll_section").addClass("scroll")
        },3000);

        if($(".scroll_section").hasClass("scroll")){
            $(".scroll_section").addClass("off");
            $(".container").addClass("on");
            setTimeout(()=>{
                $("body").addClass("on")
            },1200)
        }
    }
})
























