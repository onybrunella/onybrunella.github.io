  
  // // JavaScript pour le bouton "Haut de page"

  // $(document).ready(function() {
  //   // Montrer ou cacher le bouton "Haut de page" en fonction du défilement de la page
  //   $(window).scroll(function() {
  //     if ($(this).scrollTop() > 200) {
  //       $('.back-to-top').fadeIn(200);
  //     } else {
  //       $('.back-to-top').fadeOut(200);
  //     }
  //   });
    
  //   // Animer le bouton "Haut de page" vers le haut de la page
  //   $('.back-to-top').click(function(event) {
  //     event.preventDefault();
      
  //     $('html, body').animate({scrollTop: 0}, 300);
  //   })
  // });
  

  document.addEventListener("DOMContentLoaded", function () {
  // Montrer ou cacher le bouton "Haut de page" en fonction du défilement de la page
  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      document.querySelector('.back-to-top').style.display = 'block';
    } else {
      document.querySelector('.back-to-top').style.display = 'none';
    }
  });

  // Animer le bouton "Haut de page" vers le haut de la page
  document.querySelector('.back-to-top').addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
