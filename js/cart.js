function taoCart(){
    var cart = [
    { 'tensp' : 'Quần Jogger Nam Màu Đen' , 'gia' : 169, 'hinh' : 'images/tt1a.jpg','soluong':1}, 
    { 'tensp' : 'Quần Jogger Nam Ống Rộng' , 'gia' : 255, 'hinh' : 'images/tt2a.jpg','soluong':1}, 
    { 'tensp' : 'Quần Jogger Jean Nam' , 'gia' : 179, 'hinh' : 'images/tt3a.jpg','soluong':1}, 
    { 'tensp' : 'Quần Jogger Nam Có Nút' , 'gia' : 199, 'hinh' : 'images/tt4a.jpg','soluong':1}, 
    { 'tensp' : 'Quần Jogger Nam Màu Ống Ôm' , 'gia' : 169, 'hinh' : 'images/tt5a.jpg','soluong':1}, 
    { 'tensp' : 'Quần Jogger Nam Màu Đen Kaki' , 'gia' : 188, 'hinh' : 'images/tt6a.jpg','soluong':1},
    { 'tensp' : 'Quần Jogger Nam Màu Nâu Kaki' , 'gia' : 159, 'hinh' : 'images/tt7a.jpg','soluong':1}, 
    { 'tensp' : 'Quần Jogger Nam Màu Vàng Kaki' , 'gia' : 159, 'hinh' : 'images/tt8a.jpg','soluong':1}, 
    { 'tensp' : 'Quần Jogger Nam Trắng Xanh' , 'gia' : 179, 'hinh' : 'images/tt9a.jpg','soluong':1}
    ];
    sessionStorage.setItem("cart", JSON.stringify(cart));
    //đổi thành dạng chuỗi để người ta ghi vào biến tên cart
    //các thông tin sản phẩm mà user đã chọn trên trang khi ngta chọn sản phẩm mình sẽ lưu vào session
    //đây là nơi lưu trữ không bị mất khi người ta chuyển từ trang nay sang trang kia
    //chỉ khi nào người ta tắt tab/đóng trình duyệt thì mới mất
    alert('Đã tạo cart xong trong sessionStorage')
    }

    function hienCart() {
        var str = `
            <div class='rows'>
                <div>TT</div>
                <div>Tên SP</div>
                <div>Giá</div>
                <div>Số lượng</div>
                <span>Tiền</span>
                <span>Mệnh giá</span>
            </div>
        `;
        var text = sessionStorage.getItem("cart"); //biến dạng chữ
        var cart = JSON.parse(text); //đổi thành biến của JS gán cho array để đọc
        console.log(cart);
        for (let i = 0; i < cart.length; i++) {
            sp = cart[i]; //lưu vô từng sp để hiện
            str += `
            <div class='rows'>
                <div>${i + 1}</div>
                <div>${sp.tensp}</div>
                <div>${sp.gia}.000</div>
                <div><input onkeyup="doisoluong()" onchange="doisoluong()" type='number' value='${sp.soluong}'> </div>
                <span>${sp.gia*sp.soluong}</span>
                <span>.000 VND</span>
            </div>
            `;
        }
        document.getElementById("giohang").innerHTML = str;
    }

    function doisoluong() {
        var soluong = event.target.value;
        if (soluong <= 0) soluong = 0;
        var gia = event.target.parentElement.previousElementSibling.innerText;
        var tien = soluong * gia;
        event.target.parentElement.nextElementSibling.innerText = tien;
        tongtiengiohang();
    }
    function tongtiengiohang() {
        var arr = document.getElementsByClassName("rows");
        var tongtienGH = 0;
        for (let i = 1; i < arr.length; i++) {
            let row = arr[i];
            tien = row.getElementsByTagName("span")[0].innerText;                
            tien = parseFloat(tien);
            tongtienGH += tien;
        }
        document.getElementById("tongtiengiohang").innerText = "Tổng tiền giỏ hàng = " + tongtienGH + ".000 VND";
    }
    function xoaCart() {
        sessionStorage.removeItem("cart");
        document.getElementById("giohang").innerHTML = "";
        document.getElementById("tongtiengiohang").innerHTML = "";
    }