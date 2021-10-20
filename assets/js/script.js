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

$(".service-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  lazyLoad: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  nav: true,
  dots: true,
  responsiveClass: true,
  autowidth: true,
  responsive: {
    0: {
      items: 1,
      margin: 20,
      nav: false
    },
    600: {
      items: 2,
      margin: 20
    },
    1000: {
      items: 3
    }
  }
});

$(".documentations-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  lazyLoad: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  nav: true,
  dots: true,
    // loop: true,
    // autoplay: true,
    // autoplayHoverPause: true,
    // nav: true,
    // dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 20,
        nav: false
      },
      600: {
        items: 2,
        margin: 20
      },
      1000: {
        items: 3
      }
    }
  });

  $(".opinion-carousel").owlCarousel({
    loop: false,
    lazyLoad: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    responsiveClass: true,
    autowidth: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
      },
      600: {
        items: 2,
        margin: 20
      },
      1000: {
        items: 3
      }
    }
  });

//   Fancybox.bind("[data-fancybox]", {
//     // Your options go here
//   });

//   // Change defaults
// Fancybox.defaults.infinite = 0;

// Start Fancybox with custom options when user clicks on the matching element
// Fancybox.bind("[data-fancybox]", {
//   infinite: false,
// });

// // Immediately start Fancybox with custom options
// Fancybox.show(
//   [
//     {
//       src: "./assets/img/opinion/opinion1.jpg",
//       type: "image",
//     },
//     {
//       src: "./assets/img/opinion/opinion2.jpg",
//       type: "image",
//     },
//   ],
//   {
//     infinite: false,
//   }
// );

Fancybox.bind(".opinion-area a", {
  groupAll : true, // Group all items
  on : {
    ready : (fancybox) => {
      // console.log(`fancybox #${fancybox.id} is ready!`);
    }
  }
});