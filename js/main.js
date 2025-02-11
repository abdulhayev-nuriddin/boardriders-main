function activateTab(element, tabName) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
    localStorage.setItem('activeTab', tabName);
}
document.addEventListener('DOMContentLoaded', () => {
    const activeTab = localStorage.getItem('activeTab') || 'men';
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.textContent.toLowerCase() === activeTab) {
            link.classList.add('active');
        }
    });
});
function setActive(link) {
    let links = document.querySelectorAll('.nav1 .header-links');
    links.forEach(function (item) {
        item.classList.remove('active');
    });
    link.classList.add('active');
}
let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide() {
    document.getElementById("slider").style.transform = `translateX(-${index * 1360}px)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
}
function toggleStar(element) {
    element.classList.toggle("selected");
}

let currentIndex = 0;
const slider = document.getElementById("slider");
const totalItems = 12; // Jami mahsulotlar soni
const itemsPerSlide = 4; // Har safar 4 tadan ko‘rsatamiz
const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1; // Eng oxirgi indeks

function updateSlider() {
    const translateX = -currentIndex * (321 * itemsPerSlide + 10 * itemsPerSlide);
    slider.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}