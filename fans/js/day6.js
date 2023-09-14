window.addEventListener("load", function () {  //브라우저의 html이 다 로드된 후에 코드 실행

    new Isotope(".scene08 .gal_all", {
        itemSelector: ".scene08 .gal_all .gal_img li",  //section 안쪽에서 정렬하고자하는 대상
        columnWidth: ".scene08 .gal_all .gal_img li",  //넓이값 지정, "itemSelector" 선택자명을 지정해주면 자동 계산
        transitionDuration: "0.5s" //정렬할 때 속도 지정
    });

});

$(function () {


    $(".main_slide").slick({
        slidesToShow: 1, //한 화면에 보여질 콘텐츠 개수
        slidesToScroll: 1, //스크롤 한 번에 움직이는 콘텐츠 개수
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        pauseOnHover: false,
        draggable: false,
        arrows: false
    });


    $(".scene01 .inner .member div.mem_sj a").click(function () {
        let s = $(document).scrollTop();

    });


    // scene07 click
    $(".scene07 .dis_list li").click(e => {
        const dis_list = $(e.currentTarget).index();
        $(".scene07 .dis_list li").removeClass("on");
        $(e.currentTarget).addClass("on");
        $(".scene07 .dis_all > div").removeClass("on");
        $(`.scene07 .dis_all > div:eq(${dis_list})`).addClass("on");
    });

    // scene07 slide
    let i = 0; //슬라이드 넘버 1

    $(".dis_next").click(function () {
        i++; //슬라이드 넘버 +1 증가

        if (i > 4) i = 4; //i가 4보다 크면i가 증가하지 않고 4로 고정

        $(".slide_container .slide").stop().animate({marginLeft: 1 * i + "px"}, 500);
    });

    $(".dis_prev").click(function () {

        i--;

        if (i < 0) i = 0; //i가 0보다 작다면 i가 감소하지 않고 0으로 고정

        $(".slide_container .slide").stop().animate({marginLeft: -800 * i + "px"}, 500);
    });

    $(".scene08 .gal_all .gal_img li").click(e => {
        const gal_img_list = $(e.currentTarget).index();
        $(".scene08 .gal_all .gal_img li").removeClass("on");
        $(e.currentTarget).addClass("on");
        $(`.scene08 .gal_all .gal_img_enl li:eq(${gal_img_list})`).addClass("on");
    });
    $(".scene08 .gal_all .gal_img_enl li .btnClose").click(function () {
        $(".scene08 .gal_all .gal_img_enl li").removeClass("on");
    });


    // scene09 click
    $(".scene09 .vid_all .vid_list li").click(e => {
        const vid_list = $(e.currentTarget).index();
        $(".scene09 .vid_all .vid_list li").removeClass("on");
        $(e.currentTarget).addClass("on");
        $(".scene09 .vid_all .vid_main div").removeClass("on");
        $(`.scene09 .vid_all .vid_main div:eq(${vid_list})`).addClass("on");
    });

    // scene10 click
    $(".scene10 .not_all .not_list li").click(e => {
        const not_list_list = $(e.currentTarget).index();
        $(".scene10 .not_all .not_list li").removeClass("on");
        $(e.currentTarget).addClass("on");
        $(".scene10 .not_all .not_inner > div").removeClass("on");
        $(`.scene10 .not_all .not_inner > div:eq(${not_list_list})`).addClass("on");
    });

    // scene11 click
    $(".scene11 .from_all .from_list li").click(e => {
        const from_list_list = $(e.currentTarget).index();
        $(".scene11 .from_all .from_list li").removeClass("on");
        $(e.currentTarget).addClass("on");
        $(".scene11 .from_all .from_list_inner > li").removeClass("on");
        $(`.scene11 .from_all .from_list_inner > li:eq(${from_list_list})`).addClass("on");
    });

    // scene12 click
    $(".scene12 .to_all .to_list li").click(e => {
        const to_list_list = $(e.currentTarget).index();
        $(".scene12 .to_all .to_list li").removeClass("on");
        $(e.currentTarget).addClass("on");
        $(".scene12 .to_all .to_list_inner > li").removeClass("on");
        $(`.scene12 .to_all .to_list_inner > li:eq(${to_list_list})`).addClass("on");
    });

    // scene13 group click
    $(".scene13 .sch_all .sch_text_all .sch_member li").click(function (e) {
        e.preventDefault();
        $(".scene13 .sch_all .sch_text_all .sch_member li").removeClass("on");
        $(e.currentTarget).addClass("on");

        if ($(".scene13 .sch_all .sch_text_all .sch_member li:eq(0)").hasClass("on")) {
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_day6").fadeIn();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_sungjin").fadeIn();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_youngk").fadeIn();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_wonpil").fadeIn();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_dowoon").fadeIn();

        } else if ($(".scene13 .sch_all .sch_text_all .sch_member li:eq(1)").hasClass("on")) {
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_day6").fadeIn();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_sungjin").fadeIn();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_youngk").fadeOut();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_wonpil").fadeOut();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_dowoon").fadeOut();

        } else if ($(".scene13 .sch_all .sch_text_all .sch_member li:eq(2)").hasClass("on")) {
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_day6").fadeIn();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_sungjin").fadeOut();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_youngk").fadeIn();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_wonpil").fadeOut();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_dowoon").fadeOut();

        } else if ($(".scene13 .sch_all .sch_text_all .sch_member li:eq(3)").hasClass("on")) {
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_day6").fadeIn();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_sungjin").fadeOut();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_youngk").fadeOut();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_wonpil").fadeIn();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_dowoon").fadeOut();

        } else if ($(".scene13 .sch_all .sch_text_all .sch_member li:eq(4)").hasClass("on")) {
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_day6").fadeIn();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_sungjin").fadeOut();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_youngk").fadeOut();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_wonpil").fadeOut();
            $(".scene13 .sch_all .sch_celender .sch_day .sch_date li .sch_dowoon").fadeIn();

        }
    });

    $(".scene14 .mdo_all .first").click(function () {
        alert("1기 회원들만 입장 가능합니다.");
    });

    $(".scene14 .mdo_all .second").click(function () {
        alert("2기 회원들만 입장 가능합니다.");
    });

    // scene15 click
    $(".scene15 .third_all .third_list li").click(e => {
        const third_list_list = $(e.currentTarget).index();
        $(".scene15 .third_all .third_list li").removeClass("on");
        $(e.currentTarget).addClass("on");
        $(".scene15 .third_all .third_list_inner > li").removeClass("on");
        $(`.scene15 .third_all .third_list_inner > li:eq(${third_list_list})`).addClass("on");
    });


    // 스크롤

    $(document).scroll(function () {
        let s = $(document).scrollTop();

        if (s <= 1) {
            $(".scene00 .inner").css({
                position: "relative",
            });
            $(".scene00").removeClass("on");
        }
        if (s >= 1) {
            $(".scene00 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 200) {

            $(".scene00").addClass("on");
        }

        if (s >= 1 && s <= 945) {
            $(".scene01 .inner").css({
                position: "relative",
            });
            $(".scene01").removeClass("on");
        }
        if (s >= 945) {
            $(".scene01 .inner").css({
                position: "fixed",
            });
        }
        if (s >= 1145) {
            $(".scene01").addClass("on");
        }

        if (s >= 945 && s <= 1880) {
            $(".scene02 .inner").css({
                position: "relative",
            });
            $(".scene02").removeClass("on");
        }
        if (s >= 1880) {
            $(".scene02 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 2080) { //어두워지는거
            $(".scene02").addClass("on");
        }
        if (s >= 1880 && s <= 2815) {
            $(".scene03 .inner").css({
                position: "relative",
            });

            $(".scene03").removeClass("on");
        }
        if (s >= 2815) {
            $(".scene03 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 3015) {
            $(".scene03").addClass("on");
        }

        if (s >= 2815 && s <= 3750) {
            $(".scene04 .inner").css({
                position: "relative",
            });
            $(".scene04").removeClass("on");
        }
        if (s >= 3750) {
            $(".scene04 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 3950) {
            $(".scene04").addClass("on");
        }

        if (s >= 3750 && s <= 4685) {
            $(".scene05 .inner").css({
                position: "relative",
            });

            $(".scene05").removeClass("on");
        }
        if (s >= 4685) {
            $(".scene05 .inner").css({
                position: "fixed"
            });

        }
        if (s >= 4885) {
            $(".scene05").addClass("on");
        }

        if (s >= 4685 && s <= 5620) {
            $(".scene06 .inner").css({
                position: "relative",
            });
            $(".scene06").removeClass("on");
        }
        if (s >= 5620) {
            $(".scene06 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 5820) {
            $(".scene06").addClass("on");
        }

        if (s >= 5620 && s <= 6555) {
            $(".scene07 .inner").css({
                position: "relative",
            });
            $(".scene07").removeClass("on");
        }
        if (s >= 6555) {
            $(".scene07 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 6755) {
            $(".scene07").addClass("on");
        }

        if (s >= 6555 && s <= 7490) {
            $(".scene08 .inner").css({
                position: "relative",
            });
            $(".scene08").removeClass("on");
        }
        if (s >= 7490) {
            $(".scene08 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 7690) {
            $(".scene08").addClass("on");
        }

        if (s >= 7490 && s <= 8425) {
            $(".scene09 .inner").css({
                position: "relative",
            });

            $(".scene09").removeClass("on");
        }
        if (s >= 8425) {
            $(".scene09 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 8625) {
            $(".scene09").addClass("on");
        }

        if (s >= 8425 && s <= 9360) {
            $(".scene10 .inner").css({
                position: "relative",
            });
            $(".scene10").removeClass("on");
        }
        if (s >= 9360) {
            $(".scene10 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 9560) {
            $(".scene10").addClass("on");
        }

        if (s >= 9360 && s <= 10295) {
            $(".scene11 .inner").css({
                position: "relative",
            });
            $(".scene11").removeClass("on");
        }
        if (s >= 10295) {
            $(".scene11 .inner").css({
                position: "fixed"
            });
        }

        if (s >= 10495) {
            $(".scene11").addClass("on");
        }

        if (s >= 10295 && s <= 11230) {
            $(".scene12 .inner").css({
                position: "relative",
            });
            $(".scene12").removeClass("on");
        }
        if (s >= 11230) {
            $(".scene12 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 11430) {
            $(".scene12").addClass("on");
        }

        if (s >= 11230 && s <= 12165) {
            $(".scene13 .inner").css({
                position: "relative",
            });
            $(".scene13").removeClass("on");
        }
        if (s >= 12165) {
            $(".scene13 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 12365) {
            $(".scene13").addClass("on");
        }

        if (s >= 12165 && s <= 13100) {
            $(".scene14 .inner").css({
                position: "relative",
            });
            $(".scene14").removeClass("on");
        }
        if (s >= 13100) {
            $(".scene14 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 13300) {
            $(".scene14").addClass("on");
        }

        if (s >= 13100 && s <= 14035) {
            $(".scene15 .inner").css({
                position: "relative",
            });
            $(".scene15").removeClass("on");
        }
        if (s >= 14035) {
            $(".scene15 .inner").css({
                position: "fixed"
            });
        }
        if (s >= 14235) {
            $(".scene15").addClass("on");
        }
    });
});
