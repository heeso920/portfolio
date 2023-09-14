gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".comment",
        start: "top 0",
        end: "bottom 0",
        scrub:1,
        pin:".comment",
        markers:false
    }
})
    .fromTo(".comment .black",{y:0},{y:"-100vh",duration:10},0)
    .fromTo(".comment .black p",{y:0},{y:"100vh",duration:10},0)


$(function () {

    $(".gnb ul li").click(e=>{
        $(e.currentTarget).siblings("li").removeClass("on");
        $(e.currentTarget).addClass("on");
    });

    $(".movies .list ul li").click(function (e) {
        const list_idx = $(e.currentTarget).index();
        $(this).addClass("on");
        $(".movies .list ul li").removeClass("z");
        $(this).addClass("z");
        setTimeout(() => {
            $(".movies .close").addClass("on");
            $(".movies .list .watch").addClass("on");
            $(".movies .list ul li .target").addClass("on");
        }, 1000)

        $(`.movies .gallery ul li:eq(0) img`).attr('src',`img/ironman${list_idx}_gallery/1.jpg`);
        $(`.movies .gallery ul li:eq(1) img`).attr('src',`img/ironman${list_idx}_gallery/2.jpg`);
        $(`.movies .gallery ul li:eq(2) img`).attr('src',`img/ironman${list_idx}_gallery/3.jpg`);
        $(`.movies .gallery ul li:eq(3) img`).attr('src',`img/ironman${list_idx}_gallery/4.jpg`);
        $(`.movies .gallery ul li:eq(4) img`).attr('src',`img/ironman${list_idx}_gallery/5.jpg`);
        $(`.movies .gallery ul li:eq(5) img`).attr('src',`img/ironman${list_idx}_gallery/6.jpg`);

    });

    $(".movies .close").click(function () {
        $(this).removeClass("on");
        $(".movies .list .watch").removeClass("on");
        $(".movies .list ul li").removeClass("on");
        $(".movies .list ul li .target").removeClass("on");
        $(".movies .gallery").fadeOut(1);
    });

    $(".movies .list ul li .target").click(function(){
        $(".movies .gallery").fadeIn(1000);
        $(".movies .gallery ul li").addClass("on");
    });

    $(".music .btn img").click(e=>{
        $(".music .btn img").siblings("img").removeClass("on");
        $(e.currentTarget).addClass("on");
        
        const audio = document.querySelector("#audio");
        audio.play();

        if($(".music .btn .play").hasClass("on")){
            $(".music .acro").addClass("on");
            $(".music .acro").removeClass("pa");
        }
        else {
            $(".music .acro").addClass("pa");
            audio.pause();
        }
    });
});

$(document).scroll(function () {
    let s = $(document).scrollTop();
    $(".posNum").text(s);

    if (s >= 0 && s <= 2200) {
        $("#mask").css({ //up
            position: "fixed",
            top: "0",
        });
        $("#mask .circle").css({ //down
            "clip-path": `circle(${s * 0.05}% at 50% 50%)`,
            position: "absolute",
            top: "30%"
        });
    }
    if (s >= 2200) {
        $("#mask").css({
            position: "relative",
            top: "0",
        });
        $("#mask .circle").css({
            "clip-path": "circle(100% at 50% 50%)",
            position: "relative",
            top: "2500px"
        });
    }
});






const gallery = document.querySelector(".movies .gallery");
const gallery_list1 = document.querySelector(".movies .gallery ul li:nth-of-type(1)");
const gallery_list2 = document.querySelector(".movies .gallery ul li:nth-of-type(2)");
const gallery_list3 = document.querySelector(".movies .gallery ul li:nth-of-type(3)");
const gallery_list4 = document.querySelector(".movies .gallery ul li:nth-of-type(4)");
const gallery_list5 = document.querySelector(".movies .gallery ul li:nth-of-type(5)");
const gallery_list6 = document.querySelector(".movies .gallery ul li:nth-of-type(6)");


gallery.addEventListener("mousemove", e => {
    let x = e.pageX;  //현재 x축 위치값
    let y = e.pageY;  //현재 y축 위치값
    let cx = -x / 65;  //마우스 역방향 수치 감소
    let cy = -y / 65;  //마우스 역방향 수치 감소
    let cx2 = x / 65;  //마우스 정방향 수치 감소
    let cy2 = y / 65;  //마우스 정방향 수치 감소
    gallery_list1.style.transform = `translate(${cx}px,${cy}px)`;
    gallery_list2.style.transform = `translate(${cx2}px,${cy2}px)`;
    gallery_list3.style.transform = `translate(${cx}px,${cy2}px)`;
    gallery_list4.style.transform = `translate(${cx2}px,${cy}px)`;
    gallery_list5.style.transform = `translate(${cx2}px,${cy2}px)`;
    gallery_list6.style.transform = `translate(${cx}px,${cy}px)`;
});




const swiper = new Swiper(".char_slide", {
    speed: 500, //스와이프를 놨을 때 패널이 넘어가는 속도
    loop: true, //패널 무한반복 순환
    direction: "horizontal",   //horizontal = 가로 , vertical = 세로
    slidesPerView: 5, //숫자 : 해당 개수단위로 패널 표시 //auto : 특정 크기 지정
    spaceBetween: 50, //패널 사이 간격(px)
    centeredSlides: true, //활성화 패널 중앙 배치
    pagination: {
        el: ".swiper-pagination", //페이지네이션 추가 (클래스가 다르면 작동X)
        clickable: true,  //클릭 가능 여부 설정
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },
});