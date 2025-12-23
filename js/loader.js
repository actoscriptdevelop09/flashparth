(function () {
  function updatePreloader(value) {
    const track100 = document.querySelector("#number-track-100");
    const track10 = document.querySelector("#number-track-10");
    const track1 = document.querySelector("#number-track-1");

    const hY = Math.floor(value / 100) * -2;
    const tY = Math.floor(value / 10) * -2;
    const oY = value * -2;

    if (track100)
      track100.style.setProperty(
        "transform",
        `translateY(${hY}ch)`,
        "important"
      );
    if (track10)
      track10.style.setProperty(
        "transform",
        `translateY(${tY}ch)`,
        "important"
      );
    if (track1)
      track1.style.setProperty("transform", `translateY(${oY}ch)`, "important");
  }

  function removePreloader() {
    updatePreloader(100);

    setTimeout(() => {
      document
        .querySelector("#preloader p")
        .style.setProperty("transform", "scale(1.2)", "important");
      const tracks = document.querySelectorAll(".number-track");

      tracks.forEach((track, index) => {
        setTimeout(() => {
          const currentY =
            parseInt((track.style.transform || "0").replace(/[^\d.-]/g, "")) ||
            0;
          track.style.setProperty(
            "transform",
            `translateY(${currentY - 2}ch)`,
            "important"
          );

          if (index === tracks.length - 1) {
            setTimeout(() => {
              document.querySelector("#preloader").style.animation =
                "preloaderClip 1.5s cubic-bezier(.65,.05,0,1) forwards";
            }, 1200);
          }
        }, index * 60);
      });
    }, 800);
  }

  // Replace this with your actual window.load logic
  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;
    updatePreloader(progress);
    if (progress >= 100) {
      clearInterval(interval);
      removePreloader();
    }
  }, 50);
})();
