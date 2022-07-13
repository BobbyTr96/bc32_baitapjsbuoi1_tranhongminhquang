document.getElementById("tinh").onclick = function(){
    // đầu vào
var chieuDai = document.getElementById("chieuDai").value*1;
var chieuRong = document.getElementById("chieuRong").value*1;

    // xử lý
var dienTich = chieuDai *  chieuRong ;
var chuVi = (chieuDai +  chieuRong) * 2 ;
var ketQua = "" ;
ketQua += " <div class='bg-success text-center text-white' "
ketQua += "<p>Diện Tích hcn: " + dienTich + "</p>"
ketQua += "<p>chu vi hcn: " + chuVi + "</p>"
ketQua += "</div>"

// đầu ra 
document.getElementById("ketQua").innerHTML = ketQua ;

}