var images = [
    "images/luz11.jpg",
    "images/luz3.jpg",
    "images/pic8.jpg",
    "images/luz4.jpg",
    "images/luz6.jpg",
    "images/luz5.jpg",
    "images/head.jpg",
    "images/head1.jpg",
    "images/pic9.jpg",
    "images/pic1.jpg",
    "images/fluz1.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg",
    "images/pic6.jpg",
    
    
];
var num = 0;
function next() {
    var slider = document.getElementById("img-slider");
    num = num + 1;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
    }

    function previous() {
        var slider = document.getElementById("img-slider");
        num = num - 1;
        if(num < 0) {
            num = images.length-1;
        }
        slider.src = images[num];
    }

    function checkKey(e) {
        e = e || window.event;
        var slider = document.getElementById("img-slider");
        num = num + 1;
        if(num >= images.length) {
            num = 0;
        }
    slider.src = images[num];
    }
    
    document.onkeydown = checkKey;
    ////////////////Adding Style with JS ///////////////////////
    var colorButton = document.getElementById("btn");
    colorButton .style.width = "150px"; 
    colorButton .style.height = "50px";
    colorButton .style.marginLeft = "43%";
    colorButton .style.marginTop = "2%";
    colorButton .style.fontSize = "1em";