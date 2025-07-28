window.addEventListener("load", () => {
  document.getElementById("loading").style.display = "none";
});

const clickSound = document.getElementById("clickSound");
document.querySelectorAll(".links a, .lang-btn").forEach(btn => {
  btn.addEventListener("click", () => clickSound.play());
});

const langData = {
  id: {
    title: "GTRG PRIVATE SERVER",
    subtitle: "Link resmi & komunitas GTRG Reborn 2025",
    tiktok: "TikTok",
    discord: "Discord",
    wa: "WhatsApp"
  },
  en: {
    title: "GTRG PRIVATE SERVER",
    subtitle: "Official links & community GTRG Reborn 2025",
    tiktok: "TikTok",
    discord: "Discord",
    wa: "WhatsApp"
  }
};

function setLang(code){
  document.getElementById("title").innerText = langData[code].title;
  document.getElementById("subtitle").innerText = langData[code].subtitle;
  document.querySelector("[data-id='tiktok']").innerText = langData[code].tiktok;
  document.querySelector("[data-id='discord']").innerText = langData[code].discord;
  document.querySelector("[data-id='wa']").innerText = langData[code].wa;
}

// Auto set bahasa browser
const userLang = navigator.language.startsWith("id") ? "id" : "en";
setLang(userLang);
