$(function(){
  var $header = $('#header_nav'),
      $headerOST = $header.offset().top;

  $(window).scroll(function(){
      var $currentSCT = $(this).scrollTop();
      if($currentSCT > $headerOST){
          $header.addClass('sticky');
      }else{
          $header.removeClass('sticky');
      }
  });

})



$(function () {
  var slideShow = $("#banner");
  var imagesSrc = ["mainvisual.jpg", "mainvisual1.jpg",  "mainvisual2.jpg"];
  $.each(imagesSrc, function (i, o) {
    var image = $("<img>");
    image.attr("src", "./img/" + o);
    slideShow.append(image);
  });
  slideShow.find("> img").eq(0).addClass("current");

  var j = 0;

  setInterval(function () {
    slideShow
      .find("> img")
      .eq(j % imagesSrc.length)
      .removeClass("current")
    slideShow
      .find("> img")
      .eq((j + 1) % imagesSrc.length)
      .addClass("current")
    j++;
  }, 4000);
});

var targetLink = $("#newsmenu a"),
  tabContent = $("#ct2_tab_wrapper>div");

tabContent.eq(0).show();

targetLink.each(function () {
  var tg = $(this);
  var tgAnc = tg.attr("href");
  console.log(tg);
  tg.click(function (e) {
    e.preventDefault();
    targetLink.removeClass("active");
    tg.addClass("active");
    tabContent.hide();
    $(tgAnc).show();
  });
});
