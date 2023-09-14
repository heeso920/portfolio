$(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $("header").css({"color": "#000"})
            $("header h1 img").attr("src", "./img/black_logo.png")
            $("header .icon img").eq(0).attr("src", "./img/black_icon1.png")
            $("header .icon img").eq(1).attr("src", "./img/black_icon2.png")

        } else {
            $("header h1 img").attr("src", "./img/logo.png")
            $("header .icon img").eq(0).attr("src", "./img/icon1.png")
            $("header .icon img").eq(1).attr("src", "./img/icon2.png")
            $("header").css({"color": "#fff"})
        }
    })

    $("header .gnb>li").mouseenter(function () {
        $("header .sub").hide()
        $(this).find(".sub").show()
        $("header").css({"background-color": "#fff", "color": "#000"})
        $("header h1 img").attr("src", "./img/black_logo.png")
        $("header .icon img").eq(0).attr("src", "./img/black_icon1.png")
        $("header .icon img").eq(1).attr("src", "./img/black_icon2.png")
        $("header .bg").show()

    })


    $("header .sub").mouseleave(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $("header").css({"background": "transparent", "color": "#111"})
            $("header h1 img").attr("src", "./img/black_logo.png")
            $("header .icon img").eq(0).attr("src", "./img/black_icon1.png")
            $("header .icon img").eq(1).attr("src", "./img/black_icon2.png")
            $("header .bg").hide()
            $("header .sub").hide()
        } else {
            $("header").css({"background": "transparent", "color": "#fff"})
            $("header h1 img").attr("src", "./img/logo.png")
            $("header .icon img").eq(0).attr("src", "./img/icon1.png")
            $("header .icon img").eq(1).attr("src", "./img/icon2.png")
            $("header .bg").hide()
            $("header .sub").hide()
        }
    })


    $(document).scroll(function(){
        let s = $(document).scrollTop();
        $(".posNum").text(s);
        if(s <= 1874) { // 올라갔을 때
            $(".con2 .fix_con").css({
                position:"absolute",
                top:"0px",
            });
        }
        if(s >= 1874 && s <= 5000){ //고정되고 있을 때
            $(".con2 .fix_con").css({
                position:"fixed",
                top:"0px",
            })
        }
        if(s >= 2000 && s <= 2600){ //고정되고 있을 때
            $(".con2 .text_box2 p").removeClass("on");
            $(".con2 .text_box2 p:nth-of-type(1)").addClass("on");
        }
        if(s >= 2600 && s <= 3100){ //고정되고 있을 때
            $(".con2 .text_box2 p").removeClass("on");
            $(".con2 .text_box2 p:nth-of-type(2)").addClass("on");
        }
        if(s >= 3100 && s <= 3700){ //고정되고 있을 때
            $(".con2 .text_box2 p").removeClass("on");
            $(".con2 .text_box2 p:nth-of-type(3)").addClass("on");
        }
        if(s >= 3700 && s <= 4300){ //고정되고 있을 때
            $(".con2 .text_box2 p").removeClass("on");
            $(".con2 .text_box2 p:nth-of-type(4)").addClass("on");
        }
        if(s >= 5000){ //고정이 끝나고 내려갈 때
            $(".con2 .fix_con").css({
                position:"absolute",
                top:"3200px",
            })
        }




    })

    


    $(".bag_box").on({
        mouseenter: function(){
           $(this).find(".bag_text").addClass("on").css({"box-shadow" : "4px 4px 4px 4px rgba(163, 163, 163, 0.2)"});
          
        },
        mouseleave: function(){
            $(".bag_text").removeClass("on");
            $(".bag_text").css({"box-shadow" : "none"});
        }
    })

    $(".acc_box").on({
        mouseenter : function(){
            $(this).find(".acc_text").addClass("on").css({
                "box-shadow" : "4px 4px 4px 4px rgba(163, 163, 163, 0.2)" 
            });
        },
        mouseleave: function(){
            $(".acc_text").removeClass("on");
            $(".acc_text").css({"box-shadow" : "none"});
        }
    })

    $(".wear_box").on({
        mouseenter : function(){
            $(this).find(".wear_text").addClass("on").css({
                "box-shadow" : "4px 4px 4px 4px rgba(163, 163, 163, 0.2)" 
            });
        },
        mouseleave: function(){
            $(".wear_text").removeClass("on");
            $(".wear_text").css({"box-shadow" : "none"});
        }
    })

    

    
    

    




})