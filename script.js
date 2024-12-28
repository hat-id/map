var zahl = 0;
function b1(){
    var x = document.getElementById("text1").value;
    document.getElementById("text2").value = x;
    zahl += 1;
    document.getElementById("p2").innerText = zahl;
}
function b2(){
    var x = document.getElementById("text2").value;
    document.getElementById("p1").innerText = x;
    zahl += 1;
    document.getElementById("p2").innerText = zahl;
    z = true;
}


