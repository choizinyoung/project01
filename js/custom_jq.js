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
  moveAmt, // slideWidth+slideGap 움직일 너비
  prevBtn = slideWrapper.find(".ct2_box2_prev"),
  nextBtn = slideWrapper.find(".ct2_box2_next"),
  newSlideWidth,
  //반응형변수선언
  responsiveGap = 20,
  maxSlides = 3,
  newSlides; //clone 된 요소를 담을 변수

newSlideWidth = slideWidth;

// 복사본 생성
// append : 원본 뒤 추가 / clone : 복사 / prepend : 원본 앞에 추가
slides.append(slide.clone().addClass("clone"));
slides.prepend(slide.clone().addClass("clone"));
// 가로 배치
function slideLayout(sw, sm) {
  newSlides = $(".ct2_box2_slidewrapper li");
  moveAmt = sw + sm;
  newSlides.each(function (idx) {
    $(this).css({ left: moveAmt * idx + "px", width: slideWidth });
  });
}
slideLayout(slideWidth, slideGap);

// 슬라이드 이동함수
function MoveSlide(num) {
  slides.stop().animate({ left: moveAmt * -num }, 100, function () {
    if (currentIdx == slideCount || currentIdx == -slideCount) {
      slides.css("left", 0);
      currentIdx = 0;
    }
  });
  currentIdx = num;
}

// 좌우버튼
nextBtn.click(function () {
  MoveSlide(currentIdx + 1);
});
prevBtn.click(function () {
  MoveSlide(currentIdx - 1);
});

// 중앙배치
function setslidePos() {
  var ulMoveAmt = -moveAmt * slideCount + "px";
  slides.css("transform", "translateX(" + ulMoveAmt + ")");
}
setslidePos();

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
