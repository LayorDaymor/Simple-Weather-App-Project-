const searchBtn=document.getElementById("search-btn");
const msg=document.querySelector(".msg");
const list=document.querySelector(".cities");
const apiDoc="https://api.openweathermap.org/data/2.5/weather?q="
const cityInput=document.getElementById("city-input");
const appId="&appid="
const apiKey = "315eda603378e9fbff3c2a69ba4984f9";

https://api.openweathermap.org/data/2.5/weather?q=essen&appid=315eda603378e9fbff3c2a69ba4984f9

searchBtn.addEventListener("click",e=>{
    e.preventDefault();
    let inputVal = cityInput.value;
    const url = `${apiDoc}${inputVal}${appId}${apiKey}`;
 fetch(url)
    .then(response => response.json())
    .then(data=>{
    const country=data.sys.country;
    const cityName=data.name;
    const temp=data.main.temp;
    const felsLike=data.main.feels_like;
    const tempDescription=data.weather[0].description
    const iconName=data.weather[0].icon;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`;
    
    const li = document.createElement("li");
    list.appendChild(li);
    li.classList.add("city");
    const markup = `
    <h2 class="city-name">
      <span>${cityName}</span>
      <sup>${country}</sup>
    </h2>

    <div class="city-temp">${Math.round(temp)}<sup>°C</sup></div>

    <figure>
    <img class="city-icon" src="${icon}" alt="${tempDescription}">
    <figcaption>${tempDescription}</figcaption>
    </figure>`;

    li.innerHTML = markup;
    })
    .catch(() => {
        msg.textContent = "Please search for a valid city";
    });

      msg.textContent = "";
})