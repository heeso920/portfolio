$(function () {

    // opening
    // $("#intro .wave").animate({
    //     top : "1000px",
    //     right: "10000x"
    // },2000,function(){
    //     $("#intro .title").delay(2000).fadeOut(6000);
    //     $(".login").delay(7000).fadeIn(3000);
    // });


    $("#intro .test").animate({
        top: "1000px",
        right: "-5000px"
    }, 5000, function () {
        $("#intro .title").delay(500).fadeOut(500);
        $(".login").delay(1000).fadeIn(2000);
    });

    $("#main .cover .cover3").css({
        opacity: 1
    });

    $("#main .cover_list ul li").on({
        mouseenter: function () {
            $(this).addClass("on");
        },
        mouseleave: function () {
            $(this).removeClass("on");
        }

    });

    $("#main .cover_list ul li").click(function () {
        let position = $(this).position();
        let width = $(this).width();

        $("#main .cover_list ul .slide").css({
            left: +position.left,
            width: width
        });

        $("#main .cover_list ul li").removeClass("on2");
        $(this).addClass("on2");


    });

    $("#main .cover_list ul li").click(function (e) {
        let position = $(this).position();
        let width = $(this).width();

        $("#main .cover_list ul .slide").css({
            left: +position.left,
            width: width
        });

        $("#main .cover_list ul li").removeClass("on2");
        $(this).addClass("on2");

        const cover_list = $(e.currentTarget).index();
        console.log(cover_list);

        $("#main .cover > li").removeClass("on");
        $(`#main .cover > li:eq(${cover_list})`).addClass("on");

    });

});