function description() {
    document.getElementById('body-description').style.display = 'inline-block';
    document.getElementById('body-comment').style.display = 'none';
}
function comment() {
    document.getElementById('body-description').style.display = 'none';
    document.getElementById('body-comment').style.display = 'inline-block';
}


//slideshow
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

