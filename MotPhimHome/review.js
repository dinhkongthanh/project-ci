/*card-slider.js */
$(document).ready(function(){
    $('.carousel').carousel();
  });

  /*description.js */
  function toggle() {
    const blur = document.getElementById('blur');
    blur.classList.toggle('active')
    const popup = document.getElementById('popup');
    popup.classList.toggle('active')
}