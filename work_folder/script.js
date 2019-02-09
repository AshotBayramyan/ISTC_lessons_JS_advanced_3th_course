function myFunction(){
    var message, input;

    input = document.getElementById("inp").value;
    message = document.getElementById("message");
    message.innerHTML = ""; 

try{
    if(input == "") throw "input is empaty";
    if(input > 10) throw "tivy mec e 10";
    if(input < 10) throw "tivy poqr e 10";
    if(input == 10) throw "tivy havasar e 10"
    if(typeof input == "string") throw "xndrvum e nermucel tiv";
}
catch(err){
    message.innerHTML = " " + err;

}
finally {
    document.getElementById("inp").value = "";
}
}