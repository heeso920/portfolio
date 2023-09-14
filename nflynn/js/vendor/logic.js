function Logic () {

    // class delay logic event
    $.fn.queueAddClass = function(className) {
        this.queue('fx', function(next) {
            $(this).addClass(className);
            next();
        });
        return this;
    };
    $.fn.queueRemoveClass = function(className) {
        this.queue('fx', function(next) {
            $(this).removeClass(className);
            next();
        });
        return this;
    };
    $.fn.queuetoggleClass = function(className) {
        this.queue('fx', function(next) {
            $(this).toggleClass(className);
            next();
        });
        return this;
    };

    //hover attr replace event
    $('.hover_img').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('.png','_on.png'));
    });
    $('.hover_img').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('_on.png','.png'));
    });




}
