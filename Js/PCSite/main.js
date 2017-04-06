//右侧从右边到左边效果
//我要获得最右边的小图标
//再获得要动的元素
//给他们分别设置width到100%动画

$(document).ready(function(){

  $('#right_float .yidong').hover(function(){

    $(this).find('.l_rw').stop().animate({
      'width':'60px'
    },400);
  },function(){
    $(this).find('.l_rw').stop().animate({
      'width':'0px'
    },400);
    });
});
$(document).ready(function(){

  $('#right_float .yidong').hover(function(){

    $(this).find('.l_rw3').stop().animate({
      'width':'132px'
    },400);
  },function(){
    $(this).find('.l_rw3').stop().animate({
      'width':'0px'
    },400);
    });
});
$(document).ready(function(){

  $('#right_float .yidong').hover(function(){

    $(this).find('.l_rw2').stop().animate({
      'width':'75px'
    },400);
  },function(){
    $(this).find('.l_rw2').stop().animate({
      'width':'0px'
    },400);
    });
});


$(document).ready(function() {
  $('#scrollUp').click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop:0});
  });
});

$(document).ready(function(){
//  var topMain=$("#charact").offset().top;
//  alert(topMain);
  var Logo=$("#layout_float_nav");
  $(window).scroll(function(){
    if($(window).scrollTop()>500){
      Logo.addClass("ScrollNav");
    }else{
      Logo.removeClass("ScrollNav");}
  });

});