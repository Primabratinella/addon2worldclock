function updateTime () {

    let brisbaneElement = document.querySelector("#brisbane");
    let brisbaneDateElement = brisbaneElement.querySelector(".date");
    let brisbaneTimeElement = brisbaneElement.querySelector(".time");
    let brisbaneTime = moment().tz("Australia/Brisbane");

    brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM D, YYYY");
    brisbaneTimeElement.innerHTML = brisbaneTime.format("h:mm:ss [<small>]A[</small>]");
}


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



function updateCity (event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split ("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector ("#cities");
    citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
          "A")}</small></div>
        </div>
        <a href="/"> All cities</a>
        `;
      }

updateTime ();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);