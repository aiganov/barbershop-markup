    var link = document.querySelector(".login");
    var popup = document.querySelector(".modal-content");
    var close = popup.querySelector(".modal-close");
    var overlay = document.querySelector(".modal-overlay");
    var login = popup.querySelector("[name=login]");
    var password = popup.querySelector("[name=password]");
    var form = popup.querySelector("form");
    var mapOpen = document.querySelectorAll(".modal-map");
    var mapPopup = document.querySelector(".modal-map-content");
    var mapClose = document.querySelector(".modal-map-close");
    var imgNext = document.querySelector(".gallery-next");
    var imgPrev = document.querySelector(".gallery-prev");
    var currentImg = 0;
    var slides = document.querySelectorAll(".slide")

       
      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        login.focus();
        overlay.classList.add("modal-overlay-show");

      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function(event) {
        if (!login.value || !password.value) {
          event.preventDefault();
          popup.classList.add("modal-error");
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          popup.classList.remove("modal-content-show");
          overlay.classList.remove("modal-overlay-show");
          popup.classList.remove("modal-error");
        }
        
      });

    for (var i = 0; i < mapOpen.length; i++) {
      mapOpen[i].addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-map-content-show");
        overlay.classList.add("modal-overlay-show");

      });
    }

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-map-content-show");
        overlay.classList.remove("modal-overlay-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          mapPopup.classList.remove("modal-map-content-show");
          overlay.classList.remove("modal-overlay-show");
          
        }
        
      });

      overlay.addEventListener("click", function() {
        overlay.classList.remove("modal-overlay-show");
        mapPopup.classList.remove("modal-map-content-show");
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");

      });
      

      imgNext.addEventListener("click", function() {

        slides[currentImg].className = "slide";
        currentImg = ++currentImg;
        console.log(currentImg);
        slides[currentImg].className = "slide img-show";
        
        if (currentImg != 0) {
          imgPrev.removeAttribute("disabled");
          imgPrev.classList.remove("disabled");
        }

        if (currentImg === slides.length-1) {
          imgNext.setAttribute("disabled", 0);
          imgNext.classList.add("disabled");
        }
        
      });

      imgPrev.addEventListener("click", function() {

        slides[currentImg].className = "slide";
        currentImg = --currentImg;
        console.log(currentImg);
        slides[currentImg].className = "slide img-show";
        
        if (currentImg === 0) {
          imgPrev.setAttribute("disabled", 0);
          imgPrev.classList.remove("disabled");
        }

        if (currentImg != slides.length) {
          imgNext.removeAttribute("disabled");
          imgNext.classList.remove("disabled");
        }
        
      });



