setInterval('countdown()', 1000);
        function countdown() {
        let newyear = "2023-01-01";
        let endDate = new Date(newyear); let now = new Date();
        if (now >= endDate) {
            endDate = new Date("9999-12-31");
            document.getElementById("ftimg").src = "images/ny.png";
        }
        let miligiay = (endDate - now);
        let sogiay = Math.floor( (miligiay / 1000) % 60);
        let sophut = Math.floor( (miligiay/1000/60) % 60);
        let sogio = Math.floor((miligiay /1000/60/60) % 24);
        let songay = Math.floor((miligiay /1000/60/60/24));
        let str = `
            <table class='container'>
                <td><div class='form-button'>${songay} ngày</div class='form-button'> </td>
                <td><div class='form-button'>${sogio} giờ</div class='form-button'> </td>
                <td><div class='form-button'>${sophut} phút</div class='form-button'> </td>
                <td><div class='form-button'>${sogiay} giây</div class='form-button'> </td>
            </table>
        `;
        document.getElementById("countdown").innerHTML = str;
        document.getElementById("thoigian").innerHTML = "<strong><em>COUNTDOWN</em></strong>";
    }