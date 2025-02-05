function updateTime () {
let brisbaneElement = document.querySelector("#brisbane");
let brisbaneDateElement = brisbaneElement.querySelector(".date");
let brisbaneTimeElement = brisbaneElement.querySelector(".time");
let brisbaneTime = moment().tz("Australia/Brisbane");

brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM D, YYYY");
brisbaneTimeElement.innerHTML = brisbaneTime.format("h:mm:ss [<small>]A[</small>]");


let manilaElement = document.querySelector("#manila");
let manilaDateElement = manilaElement.querySelector(".date");
let manilaTimeElement = manilaElement.querySelector(".time");
let manilaTime = moment().tz("Asia/Manila");

manilaDateElement.innerHTML = manilaTime.format("MMMM D, YYYY");
manilaTimeElement.innerHTML = manilaTime.format("h:mm:ss [<small>]A[</small>]");


let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM D, YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime ();
setInterval(updateTime, 1000);