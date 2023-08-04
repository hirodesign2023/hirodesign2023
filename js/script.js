// $(".slider").slick({
//   autoplay: true,
//   autoplaySpeed: 3800,
//   speed: 2000,
//   adaptiveHeight: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: true,
// });

// new Vue({
//   el: "#app",
//   data: {
//     slides: 5,
//   },
//   components: {
//     "carousel-3d": Carousel3d.Carousel3d,
//     slide: Carousel3d.Slide,
//   },
// });

$(".slider").slick({
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2000,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  centerMode: true, // 前後スライドを部分表示
  centerPadding: "10%", // 両端の見切れるスライド幅
  slidesToShow: 1,
  arrows: true,

  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: "20px",
  //       slidesToShow: 1,
  //     },
  //   },
  // ],
});
