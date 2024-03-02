var listsp = [
    { 'tensp' : 'Quần Jogger Nam Màu Đen' , 'gia' : '169.000 VND', 'hinh' : 'images/tt1a.jpg'}, 
    { 'tensp' : 'Quần Jogger Nam Ống Rộng' , 'gia' : '255.000 VND', 'hinh' : 'images/tt2a.jpg'}, 
    { 'tensp' : 'Quần Jogger Jean Nam' , 'gia' : '179.000 VND', 'hinh' : 'images/tt3a.jpg'}, 
    { 'tensp' : 'Quần Jogger Nam Có Nút' , 'gia' : '199.000 VND', 'hinh' : 'images/tt4a.jpg'}, 
    { 'tensp' : 'Quần Jogger Nam Màu Ống Ôm' , 'gia' : '169.000 VND', 'hinh' : 'images/tt5a.jpg'}, 
    { 'tensp' : 'Quần Jogger Nam Màu Đen Kaki' , 'gia' : '188.000 VND', 'hinh' : 'images/tt6a.jpg'},
    { 'tensp' : 'Quần Jogger Nam Màu Nâu Kaki' , 'gia' : '159.000 VND', 'hinh' : 'images/tt7a.jpg'}, 
    { 'tensp' : 'Quần Jogger Nam Màu Vàng Kaki' , 'gia' : '159.000 VND', 'hinh' : 'images/tt8a.jpg'}, 
    { 'tensp' : 'Quần Jogger Nam Trắng Xanh' , 'gia' : '179.000 VND', 'hinh' : 'images/tt9a.jpg'}
]
for(i = 0; i < listsp.length; i++) {
    var sp = listsp[i];
    var tensp = sp.tensp;
    var gia = sp.gia;
    var hinh = sp.hinh;
    document.write(`
    <div class="sp" onmouseover="hienicon(this)" onmouseout="anicon(this)">
        <img src="${hinh}" class="hinhsp">
        <div class="info">
            <p class="gia">${gia}</p>
            <h3 class="tensp">${tensp}</h3>
        </div>
        <div class="icons" id="icons">
            <img src="images/detail.png" alt="" onclick="xemchitiet(${i})">
            <img src="images/cart.png" alt="" onclick="chonsp(${i}, '${tensp}')">
            <img src="images/like1.png" alt="" onclick="thich()">
        </div>
    </div>`);
}

function hienicon(obj) {
    obj.querySelector("#icons").style.display="block";
}
function anicon(obj) {
    obj.querySelector("#icons").style.display="none";
}
function thich() {
    obj = event.target;
    if (obj.src.endsWith('like1.png') == true)
        obj.src="images/like2.png";
    else
        obj.src="images/like1.png";
}
var soluong = 0;
document.getElementById("soluong").innerHTML = soluong;
function chonsp(id, tensp) {
    soluong++;
    document.getElementById("soluong").innerHTML = soluong;
}

function xemchitiet(i) {
    //document.location="detail.html?id=" + i;
    document.location="infor.html";
}