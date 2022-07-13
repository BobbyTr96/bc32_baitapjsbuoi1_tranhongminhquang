function tinh() {
    // đầu vào
var number = document.getElementById("number").value ;

    // xử lý
var hangChuc = Math.floor(number%100/10) ;
var hangDonVi = number % 10 ;
var toTal = hangChuc + hangDonVi ;
var ketQua = "<p>Tổng : " + toTal + "</p>" ;

    // đầu ra
document.getElementById("ketQua").innerHTML = ketQua ;


}