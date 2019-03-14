var secondHand = document.getElementById("secondHand");
var minuteHand = document.getElementById("minuteHand");
var houreHand = document.getElementById("hourHand");
function clock(){


var date = new Date();


var second = date.getSeconds();
var minute = date.getMinutes();
var hour = date.getHours();


var secondDeg = second * 6;
var minuteDeg = minute * 6;
var hourDeg = (hour * 30) + (0.5 * minute);

secondHand.style.transform = "rotate(" + secondDeg + "deg)"
minuteHand.style.transform = "rotate(" + minuteDeg + "deg)"
houreHand.style.transform = "rotate(" + hourDeg + "deg)"

setTimeout(clock, 1000)
    
};

clock();