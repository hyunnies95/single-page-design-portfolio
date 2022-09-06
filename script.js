$(document).ready(function(){
  $('.work__slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrows: true,
    centerMode: true,
    variableWidth: true,
    prevArrow: $('.arrow--prev'),
    nextArrow: $('.arrow--next')
  })
})