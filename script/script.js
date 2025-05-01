document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');
  
    carousels.forEach(carousel => {
      const imgs = carousel.querySelectorAll('img');
      let current = 0;
  
      function showNextImage() {
        imgs[current].classList.remove('active');
        current = (current + 1) % imgs.length;
        imgs[current].classList.add('active');
      }
  
      setInterval(showNextImage, 3000);
    });
  
    AOS.init({
      duration: 2000,
      once: true
    });
  });