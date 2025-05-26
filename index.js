document.addEventListener("DOMContentLoaded", function () {
  const text = "HEY\nTHERE!!!";
  const speed = 100; // snelheid per teken in ms
  let i = 0;

  const target = document.getElementById("typewriter");
  const introContent = document.querySelector(".intro-content");

  function type() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      target.classList.remove("cursor");
      introContent.classList.remove("hidden"); // Verwijder verbergklasse
    }
  }

  type();
});
