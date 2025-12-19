document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the target panel and its content
      const panel = button.nextElementSibling;
      const isExpanded =
        button.getAttribute("aria-expanded") === "true" || false;

      // Close all other open panels
      buttons.forEach((btn) => {
        const otherPanel = btn.nextElementSibling;
        if (btn !== button && btn.getAttribute("aria-expanded") === "true") {
          btn.setAttribute("aria-expanded", "false");
          otherPanel.classList.remove("active");
          otherPanel.style.maxHeight = 0;
          otherPanel.style.padding = "0 25px"; // Reset padding when closing
        }
      });

      // Toggle the clicked panel
      button.setAttribute("aria-expanded", !isExpanded);
      panel.classList.toggle("active");

      if (!isExpanded) {
        // Open the panel
        // We use scrollHeight to get the full, natural height of the content
        // panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.padding = "15px 25px";
      } else {
        // Close the panel
        // panel.style.maxHeight = 0;
        panel.style.padding = "0 25px"; // Reset padding when closing
      }
    });
  });
});
