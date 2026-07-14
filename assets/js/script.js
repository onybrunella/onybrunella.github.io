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
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var $link = $(this);

      $('.navbar-nav li').removeClass('active');
      $link.closest('li').addClass('active');

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 280, function() {
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

  var projectFilterButtons = document.querySelectorAll('.project-filter-btn');
  if (projectFilterButtons.length) {
    function applyProjectFilter(filter) {
      projectFilterButtons.forEach(function(btn) {
        var isActive = btn.dataset.filter === filter;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      document.querySelectorAll('.project-group').forEach(function(group) {
        var visibleCards = 0;

        group.querySelectorAll('.card[data-project-group]').forEach(function(card) {
          var groups = (card.dataset.projectGroup || '').split(/\s+/);
          var showCard = filter === 'all' || groups.indexOf(filter) !== -1;
          card.classList.toggle('is-filter-hidden', !showCard);
          if (showCard) visibleCards += 1;
        });

        group.classList.toggle('is-filter-hidden', visibleCards === 0);
      });
    }

    projectFilterButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        applyProjectFilter(btn.dataset.filter || 'all');
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add('no-scroll');
  window.scrollTo(0, 0);

  var loaderDone = false;
  var loader = document.querySelector('.loader');
  var loaderSpinner = document.querySelector('.loader-spinner');
  var loaderContent = document.querySelector('.loader-content');
  var content = document.getElementById('content');

  function hideLoader() {
    if (loaderDone) return;
    loaderDone = true;

    if (loader) loader.style.opacity = '0';
    if (loaderSpinner) loaderSpinner.style.opacity = '0';
    if (loaderContent) loaderContent.style.opacity = '0';
    if (content) content.style.opacity = '1';

    document.body.classList.remove('no-scroll');

    setTimeout(function() {
      if (loader) loader.style.display = 'none';
      if (loaderSpinner) loaderSpinner.style.display = 'none';
      if (loaderContent) loaderContent.style.display = 'none';
    }, 450);
  }

  if (loader) loader.addEventListener('click', hideLoader);
  if (loaderContent) loaderContent.addEventListener('click', hideLoader);

  setTimeout(hideLoader, 4000);
});
