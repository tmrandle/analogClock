const HOURHAND = document.getElementById("hour");
const MINUTEHAND = document.getElementById("minute");
const SECONDHAND = document.getElementById("second");

var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let secs = date.getSeconds();
let millisecs = date.getMilliseconds();
console.log("Hours " + hr + " Minutes " + min + " Seconds" + secs + " milliseconds " + millisecs);

let day = date.getDay();

switch (day) {
    case 0:
        document.getElementById("dateText").innerHTML = "SUN";
        break;
    case 1:
        document.getElementById("dateText").innerHTML = "MON";
        break;
    case 2:
        document.getElementById("dateText").innerHTML = "TUE";
        break;  
    case 3:
        document.getElementById("dateText").innerHTML = "WED";
        break; 
    case 4:
        document.getElementById("dateText").innerHTML = "THU";
        break; 
    case 5:
        document.getElementById("dateText").innerHTML = "FRI";
        break; 
    case 6:
        document.getElementById("dateText").innerHTML = "SAT";
        break; 
    default:
        console.log(day);
        break;
}


let hrPosition = hr*360/12 + (min*(360/60)/12);
let minPosition = min*360/60 + (secs*(360/60)/60);
let secPosition = secs*360/60;

function movingClock(){
    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(movingClock, 1000);