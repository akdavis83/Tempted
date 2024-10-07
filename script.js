const wrapperEl = document.querySelector(".js-wrapper");
const slides = document.querySelectorAll(".js-slide");

// Initial State
slides.forEach(function (slide, idx) {
  if (idx === 0) return;
  const slideImage = slide.querySelector("img");
  gsap.set(slide, { yPercent: 100 });
  gsap.set(slideImage, { yPercent: -100 });
});

const scroll = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperEl,
      start: "top top",
      end: `+=${slides.length * 100}%`,
      scrub: true,
      pin: true
      // markers: true
    },
    defaults: { ease: "none" }
  });

  slides.forEach(function (slide, idx) {
    if (idx === slides.length - 1) return;
    const slideImg = slide.querySelector("img");
    const nextSlide = slides[idx + 1];
    const nextSlideImg = slides[idx + 1].querySelector("img");
    tl.to(slide, { yPercent: -100 })
    .to(slideImg, { yPercent: 100 }, "<")

    .to(nextSlide, { yPercent: 0 }, "<")
    .to(nextSlideImg, { yPercent: 0 }, "<");
  });
};

scroll();