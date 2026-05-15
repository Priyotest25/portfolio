// Smooth navbar background

window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){
    navbar.style.background = 'rgba(0,0,0,0.6)';
  }else{
    navbar.style.background = 'rgba(0,0,0,0.2)';
  }

});


// Smooth scrolling

document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {

  anchor.addEventListener('click', function(e){

    e.preventDefault();

    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({
        behavior:'smooth'
      });

  });

});