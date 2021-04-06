$(function(){

    setInterval(function(){
        if($(".one").hasClass('active')){
            $(".one").removeClass('active');
            $(".two").addClass('active');

            $('.main-body').addClass("second-bg");
            $('.main-body').removeClass("first-bg");
            $('.main-body').removeClass("third-bg");
        }else if($(".two").hasClass('active')){
            $(".two").removeClass("active");
            $(".three").addClass("active");

            $('.main-body').addClass("third-bg");
            $('.main-body').removeClass("first-bg");
            $('.main-body').removeClass("second-bg");
        }else if($(".three").hasClass('active')){
            $(".three").removeClass("active");
            $(".one").addClass("active");

            $('.main-body').addClass("first-bg");
            $('.main-body').removeClass("second-bg");
            $('.main-body').removeClass("third-bg");
        };
    },10000);

    $(".circle").click(function(){
        if($(this).hasClass("one")){ 
            $(this).addClass("active");
            $('.two').removeClass("active");
            $('.three').removeClass('active');

            $('.main-body').addClass("first-bg");
            $('.main-body').removeClass("second-bg");
            $('.main-body').removeClass("third-bg");
        }else if($(this).hasClass("two")){
            $(this).addClass("active");
            $(".one").removeClass("active");
            $(".three").removeClass("active");

            $('.main-body').addClass("second-bg");
            $('.main-body').removeClass("first-bg");
            $('.main-body').removeClass("third-bg");
        }else if($(this).hasClass("three")){
            $(this).addClass('active');
            $(".one").removeClass("active");
            $(".two").removeClass("active");

            $('.main-body').addClass("third-bg");
            $('.main-body').removeClass("first-bg");
            $('.main-body').removeClass("second-bg");
        };
    });
});