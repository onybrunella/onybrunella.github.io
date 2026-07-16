document.addEventListener("DOMContentLoaded", function () {
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion) {
    repeatAnimation();
  }

  $("nav")
    .find("li")
    .on("click", "a", function () {
      $(".navbar-collapse.in").collapse("hide");
    });

  $(".navbar a, footer a[href='#home']").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var $link = $(this);

      $(".navbar-nav li").removeClass("active");
      $link.closest("li").addClass("active");

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 60,
        },
        prefersReducedMotion ? 0 : 280,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  function repeatAnimation() {
    var texte = document.querySelector("h2.text-animate");
    if (!texte) return;

    var originalContent = texte.innerHTML;
    texte.innerHTML = "";
    var index = 0;

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

  var projectFilterButtons = document.querySelectorAll(".project-filter-btn");
  if (projectFilterButtons.length) {
    function applyProjectFilter(filter) {
      projectFilterButtons.forEach(function (btn) {
        var isActive = btn.dataset.filter === filter;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      document.querySelectorAll(".project-group").forEach(function (group) {
        var visibleCards = 0;

        group
          .querySelectorAll(".card[data-project-group]")
          .forEach(function (card) {
            var groups = (card.dataset.projectGroup || "").split(/\s+/);
            var showCard =
              filter === "all" || groups.indexOf(filter) !== -1;
            card.classList.toggle("is-filter-hidden", !showCard);
            if (showCard) visibleCards += 1;
          });

        group.classList.toggle("is-filter-hidden", visibleCards === 0);
      });
    }

    projectFilterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyProjectFilter(btn.dataset.filter || "all");
      });
    });
  }

  // Touch / coarse pointer: first tap reveals card details, second opens link
  var coarsePointer = window.matchMedia("(hover: none)").matches;
  if (coarsePointer) {
    document.querySelectorAll(".card").forEach(function (card) {
      var link = card.querySelector("a");
      if (!link) return;

      link.addEventListener("click", function (event) {
        if (!card.classList.contains("is-revealed")) {
          event.preventDefault();
          document.querySelectorAll(".card.is-revealed").forEach(function (openCard) {
            openCard.classList.remove("is-revealed");
          });
          card.classList.add("is-revealed");
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".card")) {
        document.querySelectorAll(".card.is-revealed").forEach(function (card) {
          card.classList.remove("is-revealed");
        });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("no-scroll");
  window.scrollTo(0, 0);

  var loaderDone = false;
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  var loader = document.querySelector(".loader");
  var loaderSpinner = document.querySelector(".loader-spinner");
  var loaderContent = document.querySelector(".loader-content");
  var loaderSkip = document.getElementById("loader-skip-text");
  var content = document.getElementById("content");
  var autoHideDelay = prefersReducedMotion ? 800 : 4000;

  if (loaderSkip) {
    loaderSkip.focus();
  }

  function hideLoader() {
    if (loaderDone) return;
    loaderDone = true;

    if (loader) {
      loader.style.opacity = "0";
      loader.setAttribute("aria-hidden", "true");
    }
    if (loaderSpinner) loaderSpinner.style.opacity = "0";
    if (loaderContent) {
      loaderContent.style.opacity = "0";
      loaderContent.setAttribute("aria-hidden", "true");
      loaderContent.removeAttribute("aria-modal");
    }
    if (content) content.style.opacity = "1";

    document.body.classList.remove("no-scroll");

    setTimeout(function () {
      if (loader) loader.style.display = "none";
      if (loaderSpinner) loaderSpinner.style.display = "none";
      if (loaderContent) loaderContent.style.display = "none";
    }, prefersReducedMotion ? 0 : 450);
  }

  if (loader) loader.addEventListener("click", hideLoader);
  if (loaderContent) loaderContent.addEventListener("click", hideLoader);
  if (loaderSkip) {
    loaderSkip.addEventListener("click", function (event) {
      event.stopPropagation();
      hideLoader();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (loaderDone) return;
    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "Escape"
    ) {
      event.preventDefault();
      hideLoader();
    }
  });

  setTimeout(hideLoader, autoHideDelay);
});
