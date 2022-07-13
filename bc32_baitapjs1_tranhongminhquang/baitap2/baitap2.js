// đầu vào
document.getElementById("tinhTrungBinh").onclick = function () {
    // đầu vào
    var soMot = document.getElementById("soMot").value*1 ;
    var soHai = document.getElementById("soHai").value*1 ;
    var soBa = document.getElementById("soBa").value*1 ;
    var soBon = document.getElementById("soBon").value*1 ;
    var soNam = document.getElementById("soNam").value*1 ;

    // xử lý 
    var trungBinh = (soMot + soHai + soBa + soBon + soNam) / 5 ;
    
    // đầu ra 
document.getElementById("ketQua").innerHTML = trungBinh ;
}
