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
