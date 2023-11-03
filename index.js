window.onload = () => {
    var myIndex = 0;
    const image1 = document.getElementById("i1");
    const image2 = document.getElementById("i2");
    const image3 = document.getElementById("i3");
    const image4 = document.getElementById("i4");
    const image5 = document.getElementById("i5");
    const image6 = document.getElementById("i6");
    const image7 = document.getElementById("i7");
    const image8 = document.getElementById("i8");
    const image9 = document.getElementById("i9");
    slideShow();

    function slideShow() {

        myIndex++;
        if (myIndex > 9) {
            myIndex = 1;
        }
        switch (myIndex) {
            case 1:
                image9.style.display = "none";
                image1.style.display = "block";
                break;
            case 2:
                image1.style.display = "none";
                image2.style.display = "block";
                break;
            case 3:
                image2.style.display = "none";
                image3.style.display = "block";
                break;
            case 4:
                image3.style.display = "none";
                image4.style.display = "block";
                break;
            case 5:
                image4.style.display = "none";
                image5.style.display = "block";
                break;
            case 6:
                image5.style.display = "none";
                image6.style.display = "block";
                break;
            case 7:
                image6.style.display = "none";
                image7.style.display = "block";
                break;
            case 8:
                image7.style.display = "none";
                image8.style.display = "block";
                break;
            case 9:
                image8.style.display = "none";
                image9.style.display = "block";
                break;
            default:
                break;
        }
        setTimeout(slideShow, 2000);
    }
};
