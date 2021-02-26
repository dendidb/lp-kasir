window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("navbar-sticky")
  } else {
    navbar.classList.remove("navbar-sticky");
  }
}

// Menu mobile

if ($(".mobile-menu").length) {
  $(".mobile-menu").on("click", function() {
    $(this).toggleClass("active");
    $(".nav-menu").slideToggle(300);
  });
}

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

$('.service-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  lazyLoad: true,
  autoplayTimeout:1000,
  smartSpeed: 2000,
  autoplayHoverPause:true,
  nav:true,
  dots:true,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      margin: 20
    },
    600:{
      items:2,
      margin: 20
    },
    1000:{
      items:3,
    }
  }
})

$('.banner-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  lazyLoad: true,
  autoplayTimeout:1000,
  smartSpeed: 2000,
  autoplayHoverPause:true,
  dots:true,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      margin: 20
    }
  }
})

const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu')
dropdown.addEventListener('click',()=>{
  dropdownMenu.classList.toggle('active')
})

