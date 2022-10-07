const btt=document.querySelector('#back-to-top');
let scrollAmount;
//console.log(window)
window.addEventListener('scroll',function(){
    scrollAmount=this.scrollY;
    if(scrollAmount>scrollAmount/12){
        btt.classList.add('visible');
    } else {
        btt.classList.remove('visible');
    }
});
btt.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(btt.getAttribute('href')).scrollIntoView({behavior:'smooth'});
})



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
    $(this).css({"left": moveAmt * idx + "px", width:slideWidth});
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