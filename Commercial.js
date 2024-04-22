document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to each card image
    const cardImages = document.querySelectorAll('.card-img-top');
    cardImages.forEach(image => {
        image.addEventListener('click', function () {
            // Set the enlarged image source
            const enlargedImage = document.getElementById('enlargedImage');
            enlargedImage.src = this.src;

            // Show the enlarged image overlay
            const enlargedImageOverlay = document.getElementById('enlargedImageOverlay');
            enlargedImageOverlay.style.display = 'flex';
            enlargedImageOverlay.style.opacity = 1;
        });
    });
});

// Function to close the enlarged image overlay
function closeEnlargedImage() {
    const enlargedImageOverlay = document.getElementById('enlargedImageOverlay');
    enlargedImageOverlay.style.opacity = 0;
    setTimeout(() => {
        enlargedImageOverlay.style.display = 'none';
    }, 500);
}


let scrollPosition = 0;

function openContactPopup(event) {
event.preventDefault();

// Store the current scroll position
scrollPosition = window.scrollY;

document.body.classList.add("active-popup");

// Scroll to the contact popup
const contactPopup = document.querySelector('.contact-popup');
contactPopup.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closeContactPopup() {
document.body.classList.remove("active-popup");

// Restore the scroll position
window.scrollTo(0, scrollPosition);
}

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