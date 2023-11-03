window.onload = () => {
  var myIndex = 0;
  slideShow();
  setInterval(slideShow, 3000);

  function slideShow() {
    $("#i" + myIndex).hide();
    myIndex++;
    if (myIndex > 11) {
      myIndex = 1;
    }
    $("#i" + myIndex).fadeIn(2000);
  }
};

var countDownDate = new Date("Jun 19, 2025 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day-value").innerHTML = days;
  document.getElementById("hour-value").innerHTML = hours;
  document.getElementById("minute-value").innerHTML = minutes;
  document.getElementById("second-value").innerHTML = seconds;
}, 1000);
