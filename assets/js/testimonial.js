let currentIndex = 0;
const slider = document.getElementById('testimonialSlider');
const slides = slider.getElementsByClassName('testimonial-slide');
const slideWidth = slides[0].offsetWidth;
const dotsContainer = document.getElementById('testimonialDots');

// Create navigation dots
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
    });
    dotsContainer.appendChild(dot);
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    const dots = dotsContainer.getElementsByClassName('dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active-dot');
    }
    dots[currentIndex].classList.add('active-dot');
}

function moveSlider() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

setInterval(moveSlider, 2000); // Move slide every 2 seconds
