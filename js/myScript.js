const HOURHAND = document.getElementById("hour");
const MINUTEHAND = document.getElementById("minute");
const SECONDHAND = document.getElementById("second");

var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let secs = date.getSeconds();
console.log("Hours " + hr + " Minutes " + min + " Seconds" + secs);

let hrPosition = hr*360/12 + (min*(360/60)/12);
let minPosition = min*360/60 + (secs*(360/60)/60);
let secPosition = secs*360/60;

function movingClock(){
    

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(movingClock, 1000);