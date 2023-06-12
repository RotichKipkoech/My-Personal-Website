document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform form submission handling or AJAX request here
    alert('Form submitted!');
  });
  var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false; 
var textArray = [ " My name is Rotich Kennedy 🥸|", 
                    "Simply in love with programming 🖥️|", 
                    "Mostly developing web apps 📈| ", 
                    "Look latests 2 successful projects down ✅|",
                   ];
var speedForward = 100,
    speedWait = 1000,
    speedBetweenLines = 1000,
    speedBackspace = 25;
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"),
      eParagraph = element.children("p");
  if (!isBackspacing) {
    if (i < aString.length) {
      if (aString.charAt(i) == "|") {
        isParagraph = true;

        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
      } else {
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
    } else if (i == aString.length) {
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);

    }
  } else {
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    } else { 

      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length;
      setTimeout(function(){ typeWriter(id, ar); }, 50);

    }
  }
}


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });