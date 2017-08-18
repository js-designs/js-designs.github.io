var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  $('html,body').scrollTop(0);
  // $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function currentDiv(n) {
  $('html,body').scrollTop(0);
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("portoflioBtn");
  if (n > x.length) { 
    slideIndex = 1 
  }  

  if (n < 1) { 
    slideIndex = x.length
  }

  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }

  for (i = 0; i < x.length; i++) {
    dots[i].className = dots[i].className.replace("portoflioBtn btn btn-default btn-lg", "portoflioBtn btn btn-default");
  }

  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " btn-lg";
}