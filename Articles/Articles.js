const myLink = document.querySelectorAll(".back-arrow");
const favicon = document.querySelector('.favicon');
const banner = document.querySelector('.banner');
const heroHead = document.querySelector(".hero-head");
const heroText = document.querySelector('.hero-text');
const footerImg = document.querySelector('.img-logo2');
const footerText = document.querySelector('.footer-link');




for (link of myLink){
link.href = "https://chiskeed.github.io/Spring-Schools/";
}
favicon.href = "https://ideogram.ai/assets/progressive-image/balanced/response/SwIdbhYnSLaqlAmsdJqZCw";
banner.textContent = 'Spring Schools';
banner.style.backgroundColor = '#0D1112';
banner.style.color = 'white';
heroHead.textContent = 'Welcome To Spring Schools';
heroText.textContent = 'Discipline, Commitment & Success';
footerImg.src = 'https://ideogram.ai/assets/progressive-image/balanced/response/SwIdbhYnSLaqlAmsdJqZCw';
footerText.textContent = 'Spring Schools';
