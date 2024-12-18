/* visual 슬라이드 */

const visual_list = new Swiper('.visual_list', {
  autoplay: { //자동재생
    delay: 3000, // 3초 숫자 조절 가능
    disableOnInteraction: false,
  },
  loop: true, // 기본값 false,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",//다음
    prevEl: ".swiper-button-prev",//이전
  },
});

/* 버튼 */
$(".pause").click(function () {
  visual_list.autoplay.stop();
  $(this).hide();
  $(".play").show();
});

$(".play").click(function () {
  visual_list.autoplay.start();
  $(this).hide();
  $(".pause").show();
});

/* best menu 슬라이드 */
const best_list = new Swiper('.best_list', {
  autoplay: { //자동재생
    delay: 3000, // 3초 숫자 조절 가능
    disableOnInteraction: false,
  },
  loop: true, // 기본값 false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",// type : "bullets",
  },
  centeredSlides: true,
  breakpoints: {
    0: { //분기점 
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

//new
$(".new_btn button").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  let number = $(this).index();
  $(".new_img li").eq(number).fadeIn().siblings().hide();
});