
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.querySelector('.hero-dots');
  let currentSlide = 0;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('hero-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.hero-dot');

  function updateSlider() {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
      dots[i].classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }

  // Autoplay
  setInterval(nextSlide, 10000);

