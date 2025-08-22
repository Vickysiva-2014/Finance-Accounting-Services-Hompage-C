
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero-left')?.classList.add('visible');
  document.querySelector('.hero-right')?.classList.add('visible');
});


const serviceCards = document.querySelectorAll('.service-card');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animate-on-scroll', 'active');
      }, index * 300);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

serviceCards.forEach(card => cardObserver.observe(card));


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');


slides[currentSlide].classList.add('active');

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);


const fadeSections = document.querySelectorAll('.fade-in-section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeSections.forEach(section => sectionObserver.observe(section));


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const title = card.querySelector('.card-title');
  title?.addEventListener('click', () => {
    cards.forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
  });
});


let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
}, 4000);


const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    let count = +counter.innerText;
    const increment = Math.ceil(target / 100);

    if (count < target) {
      counter.innerText = Math.min(count + increment, target);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

const images = document.querySelectorAll(".arc-img");

  function rotateArcImages() {
    const classes = ["left", "center", "right"];

    const current = [...images].map(img => {
      return classes.find(cls => img.classList.contains(cls));
    });


    const rotated = [current[2], current[0], current[1]];

    images.forEach((img, i) => {
      img.classList.remove("left", "center", "right");
      img.classList.add(rotated[i]);
    });
  }

  setInterval(rotateArcImages, 3000);


  document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
  });

  const container = document.querySelector('.login-container');
  const swapBtn = document.getElementById('swapBtn');

  swapBtn.addEventListener('click', () => {
    container.classList.toggle('swap');
  });


  document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your message has been sent successfully!");
  this.reset();
});