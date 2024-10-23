function val(){
    var c = parseInt(document.getElementById("t1").value);
    var f = (c*1.8)+32;
   document.getElementById("t2").value = f ;
}

function vale(){
     document.getElementById("t1").value = "";
     document.getElementById("t2").value = "";
}