 /*##########################   HEADER TOGGLE ########################### */
document.getElementById('toggleButton').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  });




 /*##########################   BOTTOM HEADER TOGGLE  ########################### */
  document.getElementById('btm-toggleButton').addEventListener('click', function() {
    const navLinks = document.getElementById('btm-navLinks');
    navLinks.classList.toggle('show');
  });
 /*##########################   BOTTOM HEADER POSITION ########################### */
  function handleScroll() {
    const bottomHeader = document.querySelector('.bottom-header');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const hideHeaderThreshold = windowHeight * 0.5; // 15% of the viewport height
    
    if (scrollPosition < hideHeaderThreshold) {
      bottomHeader.classList.add('hidden');
    } else {
      bottomHeader.classList.remove('hidden');
    }
  }
  
  // Run the scroll handler on page load
  handleScroll();
  
  // Add the scroll event listener
  window.addEventListener('scroll', handleScroll);




 /*##########################   TEXTAREA OF FORM ON INDEX PAGE ########################### */
  document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('message');

    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
});


 /*##########################   COUNTER ########################### */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const duration = 5000; // total duration of the count up animation in milliseconds
  let startTime = null;

  const updateCounts = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const count = Math.min(Math.floor(progress / duration * target), target);
          counter.innerText = count;
      });

      if (progress < duration) {
          requestAnimationFrame(updateCounts);
      } else {
          counters.forEach(counter => counter.innerText = counter.getAttribute('data-target'));
      }
  };

  requestAnimationFrame(updateCounts);
});

 /*##########################   SLIDER ########################### */
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showSlide(index) {
    const screenWidth = window.innerWidth;
    let slidesToShow = 3;

    if (screenWidth < 576) {
        slidesToShow = 1;
    } else if (screenWidth < 992) {
        slidesToShow = 2;
    }

    slides.style.transform = `translateX(-${index * (100 / slidesToShow)}%)`;

    // Add active class to the clicked dot
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Initialize the first slide
showSlide(currentIndex);

// Add event listener for window resize
window.addEventListener('resize', () => {
    showSlide(currentIndex);
  });



  
  /*##########################   IMAGES ANIMATION  ########################### */
  const images = document.querySelectorAll('.animate');
      
      
  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }

  window.addEventListener('scroll', () => {
      let lastScrollTop = 0;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = scrollTop > lastScrollTop? 'down' : 'up';
    lastScrollTop = scrollTop;

    images.forEach((image) => {
      if (isInView(image) && scrollDirection === 'down') {
        image.classList.add('in-view');
      }
    });
  });