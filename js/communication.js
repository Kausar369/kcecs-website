let index = 0;
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');

function goToSlide(i){
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

document.querySelector('.next').onclick = () => {
    stopAuto();
    goToSlide((index + 1) % slides.length);
    startAuto();
};

document.querySelector('.prev').onclick = () => {
    stopAuto();
    goToSlide((index - 1 + slides.length) % slides.length);
    startAuto();
};

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopAuto();
        goToSlide(Number(dot.dataset.index));
        startAuto();
    });
});

let timer = null;
const interval = 4000;

function nextSlide(){
    goToSlide((index + 1) % slides.length);
}

function startAuto(){
    clearInterval(timer);          // ⭐ 关键修复
    timer = setInterval(nextSlide, interval);
}

function stopAuto(){
    clearInterval(timer);
}

slider.addEventListener('mouseenter', stopAuto);
slider.addEventListener('mouseleave', startAuto);

startAuto();
slides.forEach(slide => {
    slide.addEventListener('mouseenter', stopAuto);
    slide.addEventListener('mouseleave', startAuto);
});
