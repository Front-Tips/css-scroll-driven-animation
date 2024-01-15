function handleIntersection(entries) {
  entries.forEach((entry) => {
    const stickyText = entry.target.querySelector(".sticky");
    stickyText.style.display = entry.isIntersecting
      ? "block"
      : "none";
    if (entry.isIntersecting) {
      stickyText.innerHTML = `In Viewport:<b>${entry.target.dataset.section}</b>`;
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);
document
  .querySelectorAll(".section")
  .forEach((el) => observer.observe(el));
