document.getElementById("quyDoi").onclick = function(){
    // đầu vào
var giaTienViet = 23500 ;
var tienDo = document.getElementById("tienDo").value ;
var currenFormat = new Intl.NumberFormat("vn-VN");
    // xử lý
var doiTien = giaTienViet * tienDo ;
doiTien = "<p>" + currenFormat.format(doiTien) + " Vnd</p>" ;

    // đầu ra
document.getElementById("ketQua").innerHTML = doiTien ;
}