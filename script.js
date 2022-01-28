$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('#header').addClass("sticky");
        } else{
             $('#header').removeClass("sticky");
         }
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["열정이 넘치는", "끈기가 있는", "Front-End 지망생"],
        typeSpeed:50,
        backSpped:60,
        loop: true
    });

    var typed = new Typed(".typing2", {
        strings: ["꾸준합니다.", "열정이 넘칩니다."],
        typeSpeed:200,
        backSpped:60,
        loop: true
    });
})