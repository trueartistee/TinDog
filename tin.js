/*var track = 'm';
function CC(){
    var Color = document.getElementById("pink");
    if(track == 'm'){
        Color.style.backgroundColor = "indigo";
        track = 'p';
    }
    else{
        Color.style.backgroundColor = "#ff4c68";
        track = 'm';
    }
}
function cchange(){
    window.setTimeout(CC, 1000);
}
*/
function colorChange0(){
    document.getElementById("su0").style.backgroundColor = "darkslategray";
}
function colorBack0(){
    document.getElementById("su0").style.backgroundColor = "lightgray";
}
function colorChange1(){
    document.getElementById("su1").style.backgroundColor = "darkslategray";
}
function colorBack1(){
    document.getElementById("su1").style.backgroundColor = "lightgray";
}
function colorChange2(){
    document.getElementById("su2").style.backgroundColor = "darkslategray";
}
function colorBack2(){
    document.getElementById("su2").style.backgroundColor = "lightgray";
}
function colorChange3(){
    document.getElementById("button").style.backgroundColor = "darkslategray";
}
function colorBack3(){
    document.getElementById("button").style.backgroundColor = "lightgray";
}

var col = window.getComputedStyle(document.getElementById("name")).getPropertyValue("color");
console.log(col);
function validate(){
    var name= document.getElementById("name");
    var email= document.getElementById("email");

    if(name.value.trim() == "" && email.value.trim() == ""){
        alert("Name and Email required");
        name.style.border = "solid 2px red";
        email.style.border = "solid 2px red";
        return false;
    }
    else if(name.value.trim() == ""){
        alert("Name required");
        name.style.border = "solid 2px red";
        return false;
    }
    else if(email.value.trim() == ""){
        alert("Email required");
        email.style.border = "solid 2px red";
        return false;
    }
    else{
        true;
        alert("Sign Up successful");
    }
}

function changing(){
    document.getElementById("name").style.color = "black";
    document.getElementById("email").style.color = "col";
}

function time(){
    document.getElementById("timeSpace").style.visibility = "";
    var Time = new Date();
    var hours = Time.getHours();
    var mins = Time.getMinutes();
    var secs = Time.getSeconds();
    if(Time.getSeconds < 10){
       secs = "0" + secs;
    }
    else if(mins < 10){
        mins = "0" + mins;
    }
    else if(hours < 10){
        hours = "0" + hours;
    }
    document.getElementById("timeSpace").innerHTML = hours +":"+ mins +":"+ secs;

}
window.setInterval(time, 1000);