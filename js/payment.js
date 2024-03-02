function kiemtra() {
    var u = document.frmlogin.u.value;
    var t = document.frmlogin.Telephone.value;
    var ct = document.getElementById("browsers").value;
    var str = "";
    var count = 0;
    if (u == "") {
        str += "Bạn chưa nhập Họ Tên <br>";
        count++;
    } else if (isNaN(u) == false) {
        str += "Họ tên phải nhập chữ<br>";
        count++;
    } else if (u.length < 6 || u.length > 30) {
        str += "Họ tên phải nhập từ 3 đến 30 ký tự<br>";
        count++;
    }
    if (t == "") {
        str += "Bạn chưa nhập Số điện thoại <br>";
        count++;
    } else if (isNaN(t) == true) {
        str += "Bạn cần nhập số đối với Số điện thoại<br>";
        count++;
    }
    if (ct == '') {
        str += "Bạn cần chọn Tỉnh";
        count++
    }
    if (count > 0) {
        document.getElementById("bao-loi").innerHTML = str;
        return false;
    }

    return true;
}
function hienthi(obj) { //ẩn hiện phần Phí vận chuyển
    vc = document.getElementById("vc");
    vc.style.display = (obj == true) ? "" : "none";
}