var arr_hinh=[
    "images/slideshow/slider1.jpg",
    "images/slideshow/slider2.jpg",
    "images/slideshow/slider3.jpg",
    "images/slideshow/slider4.jpg",
    "images/slideshow/slider5.jpg",
];
var arr_mota=[
    "EASY COOL EVERYDAY",
    "",
    "",
    "",
    "NEW STANDARDS SHORT"
];

var index = 0;
    function prev(){
        index--;
        if (index < -0) index = arr_hinh.length - 1;
        document.getElementById("hinh").src = arr_hinh[index];
        document.getElementById("mota").innerText = arr_mota[index];
    }
    function next(){
        index++;
        if (index == arr_hinh.length) index = 0;
        document.getElementById("hinh").src = arr_hinh[index];
        document.getElementById("mota").innerText = arr_mota[index];
    }

    setInterval("next()", 5000);