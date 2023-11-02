var myIndex = 0;
slideShow();

function slideShow() {
  myIndex++;
  if (myIndex > 9) {
    myIndex = 1;
  }
  switch (myIndex) {
    case 1:
      document.getElementById("i9").style.display = "none";
      document.getElementById("i1").style.display = "block";
      break;
    case 2:
      document.getElementById("i1").style.display = "none";
      document.getElementById("i2").style.display = "block";
      break;
    case 3:
      document.getElementById("i2").style.display = "none";
      document.getElementById("i3").style.display = "block";
      break;
    case 4:
      document.getElementById("i3").style.display = "none";
      document.getElementById("i4").style.display = "block";
      break;
    case 5:
      document.getElementById("i4").style.display = "none";
      document.getElementById("i5").style.display = "block";
      break;
    case 6:
      document.getElementById("i5").style.display = "none";
      document.getElementById("i6").style.display = "block";
      break;
    case 7:
      document.getElementById("i6").style.display = "none";
      document.getElementById("i7").style.display = "block";
      break;
    case 8:
      document.getElementById("i7").style.display = "none";
      document.getElementById("i8").style.display = "block";
      break;
    case 9:
      document.getElementById("i8").style.display = "none";
      document.getElementById("i8").style.display = "block";
      break;
    default:
      break;
  }
  setTimeout(carousel, 2000);
}
