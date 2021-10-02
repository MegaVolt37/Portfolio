
$(document).ready(function() {
    $('.header-burger').click(function() {
        $('.header-burger').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
    });
});






filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("BtnWorks");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* Btn scroll */
  $(window).scroll(function () {       
    if ($(this).scrollTop() > $(window).height() * 0.2) {
      $('.btnScroll').css("display", "flex");  
    } else {
      $('.btnScroll').css("display", "none");
    }
  });

  $('.btnScroll').click(function() {         
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

/* Animated */
$(function () {
  $(window).scroll(function() {
  $(".section__title").each(function() {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+750) {
          $(this).addClass("fadeInDown");
      }
  });
});
})

$(function () {
  $(window).scroll(function() {
  $(".about__block").each(function() {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+750) {
          $(this).addClass("fadeInUp");
      }
  });
});
})
$(function () {
  $(window).scroll(function() {
  $(".about__search-title").each(function() {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+750) {
          $(this).addClass("fadeInRight");
      }
  });
});
})

$(function () {
  $(window).scroll(function() {
  $(".about__description").each(function() {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+750) {
          $(this).addClass("fadeInRight");
      }
  });
});
})

$(function () {
  $(window).scroll(function() {
  $(".skills__block").each(function() {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+750) {
          $(this).addClass("rotateInDownLeft");
      }
  });
});
})

$(function () {
  $(window).scroll(function() {
  $(".contact__item").each(function() {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+750) {
          $(this).addClass("rollIn");
      }
  });
});
})

$(function () {
  $(window).scroll(function() {
  $(".footer__social").each(function() {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+850) {
          $(this).addClass("rollIn");
      }
  });
});
})

$(function () {
  $(window).scroll(function() {
  $(".footer__copyright").each(function() {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+950) {
          $(this).addClass("fadeInUp");
      }
  });
});
})