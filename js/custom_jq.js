$(function () {
  var $header = $("#header_nav"),
    $headerOST = $header.offset().top;

  $(window).scroll(function () {
    var $currentSCT = $(this).scrollTop();
    if ($currentSCT > $headerOST) {
      $header.addClass("sticky");
    } else {
      $header.removeClass("sticky");
    }
  });
});

$("#banner").each(function () {
  $(this).on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 100;
      if (window.opera) delta = -delta;
    } else if (event.detail) delta = -event.detail / 3;
    var moveTop = null;
    if (delta < 0) {
      if ($(this).next() != undefined) {
        moveTop = $(this).next().offset().top;
      }
    } else {
      if ($(this).prev() != undefined) {
        moveTop = $(this).prev().offset().top;
      }
    }
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: moveTop + "px",
        },
        {
          duration: 300,
          complete: function () {},
        }
      );
  });
});

$(function () {
  var slideShow = $("#banner");
  var imagesSrc = ["mainvisual.jpg", "mainvisual1.jpg", "mainvisual2.jpg"];
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
      .removeClass("current");
    slideShow
      .find("> img")
      .eq((j + 1) % imagesSrc.length)
      .addClass("current");
    j++;
  }, 4000);
});

//content1_box2

var slideWrapper = $(".ct2_box2_slidewrapper"),
  slides = slideWrapper.find(".ct2_box2_slides"),
  slide = slides.find("li"),
  currentIdx = 0,
  slideCount = slide.length,
  slideWidth = slide.width(),
  slideGap = 30,
  moveAmt,
  prevBtn = slideWrapper.find(".ct2_box2_prev"),
  nextBtn = slideWrapper.find(".ct2_box2_next"),
  newSlideWidth,
  responsiveGap = 20,
  maxSlides = 3,
  newSlides;

newSlideWidth = slideWidth;

slides.append(slide.clone().addClass("clone"));
slides.prepend(slide.clone().addClass("clone"));
function slideLayout(sw, sm) {
  newSlides = $(".ct2_box2_slidewrapper li");
  moveAmt = sw + sm;
  newSlides.each(function (idx) {
    $(this).css({ left: moveAmt * idx + "px", width: slideWidth });
  });
}
slideLayout(slideWidth, slideGap);
function MoveSlide(num) {
  slides.stop().animate({ left: moveAmt * -num }, 100, function () {
    if (currentIdx == slideCount || currentIdx == -slideCount) {
      slides.css("left", 0);
      currentIdx = 0;
    }
  });
  currentIdx = num;
}
nextBtn.click(function () {
  MoveSlide(currentIdx + 1);
});
prevBtn.click(function () {
  MoveSlide(currentIdx - 1);
});
function setslidePos() {
  var ulMoveAmt = -moveAmt * slideCount + "px";
  slides.css("transform", "translateX(" + ulMoveAmt + ")");
}
setslidePos();

//con_box2

$(function(){
  var boxSlideWrap = $('.con_box2'),
  boxSlides = boxSlideWrap.find('.slide_1'),
  boxSlidesCount = boxSlides.length,
  stopTimer,
  current = 0,
  leftBtn = boxSlideWrap.find('.slide_control > .slide_prev'),
  rightBtn = boxSlideWrap.find('.slide_control > .slide_next'),
  playBtn = boxSlideWrap.find('.slide_control > .slide_play'),
  stopBtn = boxSlideWrap.find('.slide_control > .slide_stop');
  
  var slidePos = boxSlides.each(function(i){
    $(this).css("left", i * 100 + "%");
  });
  
  timer();
  function timer() {
    stopTimer = setInterval(function(){
      var prev = boxSlides.eq(current);
      move(prev, 0, "-100%");
      current++;
      if (current == boxSlidesCount) {
        current = 0;
      }
      var next = boxSlides.eq(current);
      move(next, "100%", "0%");
      cnt(current);
    }, 3000)
  }
  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 1000)
  }
  playBtn.click(function () {
    $(this).addClass("hide");
    stopBtn.removeClass("hide");
    timer();
  });
  stopBtn.click(function() {
    $(this).addClass("hide");
    playBtn.removeClass("hide");
    clearInterval(stopTimer);
  });
  rightBtn.click(function() {
    var prev = boxSlides.eq(current);
    move(prev, 0, "-100%");
    current++;
    if (current == boxSlidesCount) {
      current = 0;
    }
    var next = boxSlides.eq(current);
    move(next, "100%", "0%");
    cnt(current);
  });
  leftBtn.click(function() {
    var prev = boxSlides.eq(current);
    move(prev, 0, "100%");
    current--;
    if (current < 0) {
      current = boxSlidesCount -1;
    }
    var next = boxSlides.eq(current);
    move(next, "-100%", "0%");
    cnt(current)
  });
  var counterEl = "<span class='counter'>1 ";
  $("#counter1").prepend(counterEl);
  var counter = $(".counter");
  function cnt(n){
    counter.html(n+1);
  }
});

//tab
var targetLink = $("#newsmenu a"),
tabContent = $("#ct2_tab_wrapper>div");

tabContent.eq(0).show();

targetLink.each(function () {
  var tg = $(this);
  var tgAnc = tg.attr("href");
  var notg = $(".notg");
  console.log(tg);
  tg.click(function (e) {
    e.preventDefault();
    targetLink.removeClass("active");
    tg.addClass("active");
    tabContent.hide();
    $(tgAnc).show();
  });
  notg.click(function (e) {
    e.unbind();
  })
});

//con_box11
$(function(){
  var boxSlideWrap = $('.con_box11'),
  boxSlides = boxSlideWrap.find('.slide_1'),
  boxSlidesCount = boxSlides.length,
  stopTimer,
  current = 0,
  leftBtn = boxSlideWrap.find('.slide_control > .slide_prev'),
  rightBtn = boxSlideWrap.find('.slide_control > .slide_next'),
  playBtn = boxSlideWrap.find('.slide_control > .slide_play'),
  stopBtn = boxSlideWrap.find('.slide_control > .slide_stop');
  
  var slidePos = boxSlides.each(function(i){
    $(this).css("left", i * 100 + "%");
  });
  
  timer();
  function timer() {
    stopTimer = setInterval(function(){
      var prev = boxSlides.eq(current);
      move(prev, 0, "-100%");
      current++;
      if (current == boxSlidesCount) {
        current = 0;
      }
      var next = boxSlides.eq(current);
      move(next, "100%", "0%");
      cnt(current);
    }, 3000)
  }
  function move(tg, start, end) {
    tg.css("left", start).stop().animate({ left: end }, 1000)
  }
  playBtn.click(function () {
    $(this).addClass("hide");
    stopBtn.removeClass("hide");
    timer();
  });
  stopBtn.click(function() {
    $(this).addClass("hide");
    playBtn.removeClass("hide");
    clearInterval(stopTimer);
  });
  rightBtn.click(function() {
    var prev = boxSlides.eq(current);
    move(prev, 0, "-100%");
    current++;
    if (current == boxSlidesCount) {
      current = 0;
    }
    var next = boxSlides.eq(current);
    move(next, "100%", "0%");
    cnt(current);
  });
  leftBtn.click(function() {
    var prev = boxSlides.eq(current);
    move(prev, 0, "100%");
    current--;
    if (current < 0) {
      current = boxSlidesCount -1;
    }
    var next = boxSlides.eq(current);
    move(next, "-100%", "0%");
    cnt(current)
  });
  var counterEl = "<span class='counter'>1 ";
  $("#counter2").prepend(counterEl);
  var counter = $(".counter");
  function cnt(n){
    counter.html(n+1);
  }
});
