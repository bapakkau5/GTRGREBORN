// LOADING SCREEN
window.addEventListener("load", () => {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
});

// TYPING ANIMATION TITLE
const text = "🔥 WELCOME TO GTRG REBORN 🔥";
let i = 0;
const speed = 100;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}
window.onload = typeEffect;
