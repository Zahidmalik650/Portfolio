// LOADER & SPLASH
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

function openPortfolio(){
  const splash = document.getElementById("splash-screen");
  splash.classList.add("fade-out");
  setTimeout(()=> splash.style.display="none",800);
}

document.addEventListener("click", openPortfolio);
document.addEventListener("keydown", openPortfolio);

document.getElementById("splash-screen").addEventListener("click", () => {
  const splash = document.getElementById("splash-screen");
  splash.classList.add("fade-out");
  setTimeout(() => splash.style.display = "none", 800);
});

// LETTER ANIMATION — FIX: space ko \u00A0 nahi, normal space rakho taake wrap ho sake
document.addEventListener("DOMContentLoaded", () => {
  const para = document.querySelector(".animate-para");
  if (!para) return;

  const text = para.textContent.trim();
  para.innerHTML = "";

  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char; // FIX: \u00A0 hata diya
    span.style.animationDelay = i * 0.03 + "s";
    para.appendChild(span);
  });
});

// TYPING EFFECT
const typing = document.querySelector(".typing");
const texts = ["CS Student","Web Developer","UI/UX Designer","Graphic Designer"];
let textIndex = 0;
let charIndex = 0;

function type(){
  if(charIndex < texts[textIndex].length){
    typing.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type,100);
  }else{
    setTimeout(erase,1500);
  }
}

function erase(){
  if(charIndex > 0){
    typing.textContent = texts[textIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase,50);
  }else{
    textIndex = (textIndex+1) % texts.length;
    setTimeout(type,500);
  }
}

document.addEventListener("DOMContentLoaded",()=>setTimeout(type,500));

// PARTICLES
particlesJS("particles-js",{
  particles:{
    number:{value:80},
    size:{value:3},
    move:{speed:2},
    line_linked:{enable:true,color:"#00f7ff"}
  }
});

// NAVBAR TOGGLE
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click",()=>{
  navLinks.classList.toggle("active");
});

// SCROLL TOP + PROGRESS + NAVBAR HIDE
const topBtn = document.getElementById("topBtn");
const navbar = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener("scroll",()=>{

  if(window.scrollY > 300){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }

  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("progressBar").style.width = scrollPercent + "%";

  let currentScroll = window.pageYOffset;
  if(currentScroll > lastScroll){
    navbar.style.top = "-100px";
  }else{
    navbar.style.top = "0";
  }
  lastScroll = currentScroll;
});

// Scroll to top
topBtn.addEventListener("click",()=>{
  window.scrollTo({top:0,behavior:"smooth"});
});

// CONTACT SCROLL
document.querySelector(".btn-outline").addEventListener("click",()=>{
  document.querySelector("#contact").scrollIntoView({behavior:"smooth"});
});

// HIRE POPUP
const hireBtn = document.getElementById("hireBtn");
const popup = document.getElementById("hirePopup");
const closePopup = document.querySelector(".closePopup");

hireBtn.addEventListener("click",()=>{
  popup.style.display = "flex";
});

closePopup.addEventListener("click",()=>{
  popup.style.display = "none";
});

window.addEventListener("click",(e)=>{
  if(e.target === popup) popup.style.display = "none";
});

// SKILL CARD
document.querySelectorAll(".skill-card").forEach(card=>{
  const info = card.querySelector(".skill-info");
  const paragraph = info.querySelector("p");
  const originalText = paragraph.textContent;

  card.addEventListener("click",()=>{
    info.classList.toggle("show");
    paragraph.textContent = originalText;
  });
});

// FULLSCREEN GALLERY VIEW
document.addEventListener("DOMContentLoaded", function(){
  const galleryImgs = document.querySelectorAll(".gallery-item img");
  galleryImgs.forEach(function(img){
    img.addEventListener("click", function(){
      const overlay = document.createElement("div");
      overlay.className = "image-overlay";
      const fullImg = document.createElement("img");
      fullImg.src = this.src;
      overlay.appendChild(fullImg);
      document.body.appendChild(overlay);
      overlay.addEventListener("click", function(){
        overlay.remove();
      });
    });
  });
});

// SMOOTH SCROLL NAV LINKS
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });

    // Mobile pe click ke baad menu band ho jaye
    navLinks.classList.remove("active");
  });
});

// HERO TITLE LETTER ANIMATION — FIX: space normal rakho
const heroTitle = document.querySelector(".hero-title");
if(heroTitle){
  const text = heroTitle.textContent;
  heroTitle.textContent = "";
  text.split("").forEach((letter,i)=>{
    const span = document.createElement("span");
    span.textContent = letter; // FIX: \u00A0 hata diya
    span.style.animationDelay = i * 0.08 + "s";
    heroTitle.appendChild(span);
  });
}

// EMAILJS INIT — Apni key daalo yahan emailjs.com se
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

// CONTACT FORM SUBMIT
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("Failed to send message. Try again.");
      console.error(error);
    });
});
