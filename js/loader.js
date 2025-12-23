window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  // 1. Smooth 0 to 100 counting animation
  tl.to(".percent", {
    duration: 2.5,
    innerText: 100,
    snap: { innerText: 1 }, // Ensure it counts in whole numbers
    ease: "power3.inOut",
    onUpdate: function () {
      // Sync progress bar with the numbers
      const progress = Math.round(this.targets()[0].innerText);
      gsap.set(".bar", { width: progress + "%" });
    },
  });

  // 2. Fade out counter and bar
  tl.to(".preloader-content", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: "power2.in",
  });

  // 3. Smoothly slide up the preloader curtain
  tl.to(".preloader", {
    yPercent: -100,
    duration: 1.2,
    ease: "power4.inOut",
  });

  // 4. Reveal the website content with a fade/scale effect
  tl.to(
    "#content",
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      onStart: () => {
        document.body.style.overflow = "auto"; // Re-enable scrolling
      },
    },
    "-=0.8"
  ); // Start slightly before the curtain finishes moving
});
