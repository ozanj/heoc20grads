$(function() {

  showSlides();
  
  // Source: https://www.freecodecamp.org/news/how-to-create-a-slideshow/
  function showSlides() {
    var slides = document.querySelectorAll('.slides-wrapper .slide'); // Get an array of slides

    var index = 0, time = 2000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      // Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }
  
  // Need to manually click for audio to play due to this: https://goo.gl/xX8pDD
  $('#slide-1').on('click', function() {
    document.querySelector('#slides-music').play();
  });
  
  $('.theme-button').on('click', function(e) {
    var theme = e.target.innerHTML;
    var el = document.getElementById('theme');
    el.href = `libraries/frameworks/revealjs/css/theme/${theme}.css`;
  })
  
});
