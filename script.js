// LOADER & SPLASH
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

function openPortfolio(){
  const splash = document.getElementById("splash-screen");
  splash.classList.add("fade-out");
  setTimeout(()=> splash.style.display="none",800);
}

// mouse click
document.addEventListener("click", openPortfolio);

// keyboard press
document.addEventListener("keydown", openPortfolio);

// SPLASH CLICK
document.getElementById("splash-screen").addEventListener("click", () => {
  const splash = document.getElementById("splash-screen");
  splash.classList.add("fade-out");
  setTimeout(() => splash.style.display = "none", 800);
});

// LETTER ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const para = document.querySelector(".animate-para");
  if (!para) return;

  const text = para.textContent.trim();
  para.innerHTML = "";

  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
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

  // Top button
  if(window.scrollY > 300){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }

  // Progress bar
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("progressBar").style.width = scrollPercent + "%";

  // Navbar hide/show
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

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// HERO TITLE LETTER ANIMATION

const heroTitle = document.querySelector(".hero-title");

if(heroTitle){
const text = heroTitle.textContent;
heroTitle.textContent = "";

text.split("").forEach((letter,i)=>{
const span = document.createElement("span");
span.textContent = letter === " " ? "\u00A0" : letter;
span.style.animationDelay = i * 0.08 + "s";
heroTitle.appendChild(span);
});
}

// EMAILJS INIT
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // yahan apni key
})();

// FORM SUBMIT
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function(){
      alert("Message sent successfully ✅");
    }, function(error){
      alert("Failed ❌ " + error.text);
    });
});