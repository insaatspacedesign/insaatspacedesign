function openContactPopup()
{
    document.body.classList.add("active-popup");
}

function closeContactPopup()
{
    document.body.classList.remove("active-popup");
}

// var count = document.getElementsByClassName("count");
// var inc = [];
// function incrementFunc(){
//     for(i=0; i<count.length; i++)
//     {
//         inc.push(1);
//         if(inc[i] != count[i].getAttribute("max-data")){
//             inc[i]++;
//         }
//         count[i].innerHTML = inc[i];
//     }
// }
// var main = document.getElementById("counter");
// window.onscroll = function (){
// var timer = setInterval(() => {
//     var topElement = main.offsetTop;
//     var btmElement = main.offsetTop + main.clientHeight;
//     var topScreen = window.pageYOffset;
//     var btmScreen = window.pageYOffset+ window.innerHeight;
//     if(btmScreen > topElement && topScreen < btmElement){
//         incrementFunc();
//     }
//     else{

//     }
// }, 100);
// }
var count = document.getElementsByClassName("count");
var inc = [];

function incrementFunc() {
  for (var i = 0; i < count.length; i++) {
    inc.push(1);
    if (inc[i] < count[i].getAttribute("max-data")) {
      inc[i]++;
    }
    count[i].innerHTML = inc[i];
  }
}

function handleScroll() {
  var timer;

  function checkVisibility() {
    var topElement = main.offsetTop;
    var btmElement = main.offsetTop + main.clientHeight;
    var topScreen = window.pageYOffset;
    var btmScreen = window.pageYOffset + window.innerHeight;

    if (btmScreen > topElement && topScreen < btmElement) {
      incrementFunc();
    } else {
      clearInterval(timer);
    }
  }

  window.addEventListener("scroll", function () {
    clearInterval(timer);
    timer = setInterval(checkVisibility, 100);
  });
}

var main = document.getElementById("counter");
handleScroll();


window.addEventListener('scroll', revealOnScroll);
      
function revealOnScroll() {
  var revealElement = document.querySelector('.this');
  var revealPosition = revealElement.offsetTop - window.innerHeight + 100;

  if (window.scrollY > revealPosition) {
    revealElement.classList.add('reveal');
  }
}

// js for what is session
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Enable navigation through bullets
    },
    breakpoints: {
      800: {
        slidesPerView: 5,
        centeredSlides: false,
        spaceBetween: 16
      }
    }
  });

  var currentSlide = 1;
  var isSliderVisible = false;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Check if the slider is in the viewport
      if (entry.isIntersecting) {
        isSliderVisible = true;
      }
    });
  }, { threshold: 0.5 });

  // Observe the slider container
  observer.observe(document.getElementById('swiper-container'));

  function startSlider() {
    if (isSliderVisible) {
      currentSlide = (currentSlide % 5) + 1;
      swiper.slideTo(currentSlide - 1);
    }
  }

  // Start the slider every 5 seconds
  setInterval(startSlider, 5000);
});