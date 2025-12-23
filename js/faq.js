document.querySelectorAll(".as-accordian-main").forEach((accordionItem) => {
  accordionItem.addEventListener("click", function () {
    // Toggles the "is-open" class on the clicked item
    this.classList.toggle("is-open");
  });
});
