AOS.init({
  duration: 1000,
  easing: 'slide',
  once: true
});

$('.owl-carousel').owlCarousel({
  stagePadding: 50,
  loop:true,
  margin:50,
  items:3,
  lazyLoad: true,
  nav:true,
  dots:true,
  responsive:{
    0:{
      items:1,
      stagePadding: 0
    },
    768:{
      items:2,
      stagePadding: 0
    },
    991:{
      items:1,
      stagePadding: 200
    }
  }
});