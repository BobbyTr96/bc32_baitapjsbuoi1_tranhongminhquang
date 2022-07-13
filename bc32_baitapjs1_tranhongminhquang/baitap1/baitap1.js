// đầu vào
var tienCong = 100000 ;

document.getElementById("tinhLuong").onclick = function () {
var soNgayLuong = document.getElementById("ngayLuong").value ;

// xử lý
var currenFormatTienLuong = new Intl.NumberFormat("vn-VN");
var tongTienLuong = soNgayLuong * tienCong ;
tongTienLuong = "<p>" + currenFormatTienLuong.format(tongTienLuong) + " Vnd </p>"

// đầu ra

document.getElementById("tongTienLuong").innerHTML = tongTienLuong ;

}