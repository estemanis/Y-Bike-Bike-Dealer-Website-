
var clicked= false;
function fungsi1(){
    
    if(clicked==false){
        clicked=true;
        document.getElementById("tombol-penting").innerHTML="&#x2212;";
        document.getElementById("isi-tabel").classList.toggle("muncul");
    }else if(clicked==true){
        clicked=false;
        document.getElementById("tombol-penting").innerHTML="&#x2b;";
        document.getElementById("isi-tabel").classList.toggle("muncul");
    }
}


