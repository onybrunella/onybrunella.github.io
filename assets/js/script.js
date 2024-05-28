// window.addEventListener("DOMContentLoaded", (event) => {
//   repeatAnimation();
// });

// function repeatAnimation() {
//   let texte = document.querySelector('h2.text-animate');
//   let originalContent = texte.innerHTML;
//   texte.innerHTML = '';
//   let index = 0;

//   function typeWriter() {
//     if (index < originalContent.length) {
//       texte.innerHTML += originalContent.charAt(index);
//       index++;
//       setTimeout(typeWriter, 300);
//     } else {
//       setTimeout(repeatAnimation, 1000);
//     }
//   }

//   typeWriter();
// }

// $(document).ready(function() {
//   $("nav").find("li").on("click", "a", function() {
//     $('.navbar-collapse.in').collapse('hide');
//   });

//   $(".navbar a, footer a[href='#home']").on('click', function(event) {
//     if (this.hash !== "" && $(window).width() > 480) {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 700, function() {
//         window.location.hash = hash;
//       });
//     }
//   });

// });

// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(function() {
//         var preloader = document.querySelector('.preloader');
//         var content = document.getElementById('content');
//         preloader.style.display = 'none';
//         content.style.display = 'block';
//         content.style.opacity = '1';
//     }, 3000);
// });


document.addEventListener("DOMContentLoaded", function () {
  repeatAnimation();

  $("nav").find("li").on("click", "a", function() {
    $('.navbar-collapse.in').collapse('hide');
  });

  $(".navbar a, footer a[href='#home']").on('click', function(event) {
    if (this.hash !== "" && $(window).width() > 480) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function() {
        window.location.hash = hash;
      });
    }
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
});

document.addEventListener("DOMContentLoaded", function () {

  document.body.classList.add('no-scroll');
  
  window.scrollTo(0, 0);

  setTimeout(function() {
    var loader = document.querySelector('.loader');
    var loaderContent = document.querySelector('.loader-content');
    var content = document.getElementById('content');
    loader.style.opacity = '0';
    loaderContent.style.opacity = '0';
    content.style.opacity = '1';

    document.body.classList.remove('no-scroll');
  }, 4000);
});
