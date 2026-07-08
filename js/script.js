const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

const hoverElements = document.querySelectorAll("a, img, video, .project-card");

hoverElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("is-hovering");
  });

  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("is-hovering");
  });
});


function setupJustifiedRows() {
  const rows = document.querySelectorAll(".justified-row");

  rows.forEach((row) => {
    const images = row.querySelectorAll("img");

    if (images.length < 2) return;

    let totalRatio = 0;

    images.forEach((img) => {
      totalRatio += img.naturalWidth / img.naturalHeight;
    });

    const rowWidth = row.clientWidth;
    const gap = 24 * (images.length - 1);
    const availableWidth = rowWidth - gap;
    const rowHeight = availableWidth / totalRatio;

    images.forEach((img) => {
      const ratio = img.naturalWidth / img.naturalHeight;
      img.style.height = `${rowHeight}px`;
      img.style.width = `${rowHeight * ratio}px`;
    });
  });
}

const floatingTop = document.querySelector(".floating-top");

if (floatingTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      floatingTop.classList.add("is-visible");
    } else {
      floatingTop.classList.remove("is-visible");
    }
  });
}

window.addEventListener("load", setupJustifiedRows);
window.addEventListener("resize", setupJustifiedRows);