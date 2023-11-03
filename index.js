window.onload = () => {
    var myIndex = 0;
    slideShow();
    setInterval(slideShow, 3000);

    function slideShow() {
        $('#i' + myIndex).hide();
        myIndex++;
        if (myIndex > 9) {
            myIndex = 1
        }
        $('#i' + myIndex).fadeIn(2000);
    }
};

var countDownDate = new Date("Jun 19, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day-value").innerHTML = days;
    document.getElementById("hour-value").innerHTML = hours;
    document.getElementById("minute-value").innerHTML = minutes;
    document.getElementById("second-value").innerHTML = seconds;

    // If the count down is finished, write some text
}, 1000);
