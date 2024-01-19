// Animation effet machine à écrire sur "Permettez-moi de me présenter"

window.addEventListener("DOMContentLoaded", (event) => {
  repeatAnimation();
});

function repeatAnimation() {
  let texte = document.querySelector('h2.text-animate');
  let originalContent = texte.innerHTML;
  texte.innerHTML = '';
  let index = 0;

  function typeWriter() {
    if (index < originalContent.length) {
      texte.innerHTML += originalContent.charAt(index);
      index++;
      setTimeout(typeWriter, 300); 
    } else {
      setTimeout(repeatAnimation, 1000); 
    }
  }

  typeWriter(); 
}
  
  // JavaScript (Jqeury) pour le menu hamburger avec un effet de défilement en douceur
  
  $(document).ready(function() {   // Activer la fonction qui suit lorsque la page est chargée
    // Correction pour que le menu hamburger se replie après un clic sur un élément de menu.
    $("nav").find("li").on("click", "a", function() {
      $('.navbar-collapse.in').collapse('hide');
    });

    // Ajouter un défilement en douceur à tous les liens de navigation.
    $(".navbar a, footer a[href='#home']").on('click', function(event) {
      // Ne pas faire défiler si l'on est sur un portable
      if (this.hash !== "" && $(window).width() > 480) {
        // Empêcher le comportement de clic d'ancre par défaut.
        event.preventDefault();
        // Stocker la variable de hachage.
        var hash = this.hash;
        // Faites défiler jusqu'à la balise de hachage en 700 ms.
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function() {
        // Ajouter le hachage (#) à l'URL une fois le défilement terminé.
          window.location.hash = hash;
        });
      }
    });

  }); 

  