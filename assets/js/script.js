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
    1000:{
      items:1,
      stagePadding: 180
    },
    1260:{
      items:1,
      stagePadding: 200
    }
  }
})

// $('.service-carousel').owlCarousel({
//   loop:true,
//   autoplay:true,
//   lazyLoad: true,
//   autoplayTimeout:1000,
//   smartSpeed: 2000,
//   autoplayHoverPause:true,
//   nav:true,
//   dots:true,
//   responsiveClass:true,
//   responsive:{
//     0:{
//       items:1,
//       margin: 20
//     },
//     600:{
//       items:2,
//       margin: 20
//     },
//     1000:{
//       items:3,
//     }
//   }
// })

// $('.banner-carousel').owlCarousel({
//   loop:true,
//   autoplay:true,
//   lazyLoad: true,
//   autoplayTimeout:1000,
//   smartSpeed: 2000,
//   autoplayHoverPause:true,
//   dots:true,
//   responsiveClass:true,
//   responsive:{
//     0:{
//       items:1,
//       margin: 20
//     }
//   }
// })