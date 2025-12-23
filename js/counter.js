const counters = document.querySelectorAll(".counter");
const speed = 1000; // The higher the number, the slower the counter

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target"); // Get the stop point
    const count = +counter.innerText; // Get current displayed number

    // Lower increment to slow down the counter
    const inc = target / speed;

    if (count < target) {
      // Add increment and update the text
      counter.innerText = Math.ceil(count + inc);
      // Call function again after a short delay
      setTimeout(updateCount, 1);
    } else {
      // Ensure it stops exactly at the target
      counter.innerText = target;
    }
  };

  updateCount();
});
