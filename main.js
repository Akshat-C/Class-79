var stn = [];
function Submit(){
    var n1 = document.getElementById("s1").value;
    var n2 = document.getElementById("s2").value;
    var n3 = document.getElementById("s3").value;
    var n4 = document.getElementById("s4").value;
    stn.push(n1);
    stn.push(n2);
    stn.push(n3);
    stn.push(n4);
    console.log(stn);
    document.getElementById("display").innerHTML = stn;
    document.getElementById("sub").style.display = "none";
    document.getElementById("sor").style.display = "inline";
}
function Sort(){
    stn.sort();
    console.log(stn);
    document.getElementById("display").innerHTML = stn;
}