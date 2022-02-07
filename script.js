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
        strings: ["열정이 넘치는", "끈기가 있는", "성장하고 싶어하는", "Front-End 지망생"],
        typeSpeed:50,
        backSpped:60,
        loop: true
    });

    var typed = new Typed(".typing2", {
        strings: ["꾸준합니다.", "더욱더 성장하고 싶습니다.", "열정이 넘칩니다."],
        typeSpeed:100,
        backSpped:60,
        loop: true
    });
})

// 화면 맨위로 올려주는 버튼
function uppage(){
    document.documentElement.scrollTop = 0;
  }

function downpage(){
document.documentElement.scrollTop = 3180;
}

