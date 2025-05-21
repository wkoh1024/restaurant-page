import "./styles.css";
import logoLink from "./Bubble Tea Icon.png";
import mottoBGLink from "./brush-stroke.webp";

console.log("connected!");

let content = document.querySelector("#content");

// title section
let titleClass = document.createElement("div");
let textLogo = document.createElement("h1");
let logo = document.createElement("img");

titleClass.className = "title";
logo.id = "bubbleTea";

textLogo.textContent = 'TASTEA';
logo.id = "bubbleTea";
logo.src = logoLink;

titleClass.appendChild(textLogo);
titleClass.appendChild(logo);

content.appendChild(titleClass);

// motto section
let mottoClass = document.createElement("div");
let mottoBG = document.createElement("img");
let motto = document.createElement("span");

mottoClass.className = "motto";
mottoBG.id = "brushStroke";
mottoBG.src = mottoBGLink;
motto.textContent = "Steep in the moment. Our artisanal teas transform ordinary breaks into extraordinary experiences, one perfectly brewed cup at a time.";

mottoClass.appendChild(mottoBG);
mottoClass.appendChild(motto);

content.appendChild(mottoClass);

// bottom section
let bottomClass =  document.createElement("div");
let hoursBlock = document.createElement("div");
let hoursTitle = document.createElement("h2");
let hoursClass = document.createElement("div");
let daysClass = document.createElement("div");
let daysContainer = document.createElement("div");
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let timesClass = document.createElement("div");
let timesContainer = document.createElement("div");
let sundayTimes = "9AM - 5PM";
let weekdayTimes = "9AM - 9PM";
let saturdayTimes = "10AM - 4PM";


hoursTitle.textContent = "Hours";
bottomClass.className = "bottom";
hoursBlock.id = "hoursBlock";
hoursClass.className = "hours";
timesClass.className = "times";
daysClass.className = "days";

bottomClass.appendChild(hoursBlock);
hoursBlock.appendChild(hoursTitle);
hoursBlock.appendChild(hoursClass);
hoursClass.appendChild(daysClass);
hoursClass.appendChild(timesClass);
timesClass.appendChild(timesContainer);
daysClass.appendChild(daysContainer);

// hours and times labeling
for (let i = 0; i < dayList.length; i++) {
    let timeElement = document.createElement("div");
    if (i == 0) timeElement.textContent = sundayTimes;
    else if (i == dayList.length - 1) timeElement.textContent = saturdayTimes;
    else timeElement.textContent = weekdayTimes;
    timesContainer.appendChild(timeElement);
    let dayElement = document.createElement("div");
    dayElement.textContent = dayList[i];
    daysContainer.appendChild(dayElement);
};

content.appendChild(bottomClass);

// contact section
let contactClass = document.createElement("div");
let contactTitle = document.createElement("h2");
let contactContainer = document.createElement("div");
let contactEmail = document.createElement("a");
let contactNum = document.createElement("p");
let contactAddress = document.createElement("p");

contactClass.className = "contact";
contactTitle.textContent = "Contact Info";
contactEmail.textContent = "helpme@tastea.com";
contactEmail.href = "mailto:helpme@tastea.com";
contactNum.textContent = "1-800-TASTEAS (827-8327)";
contactAddress.textContent = "1842 Jasmine Avenue Oakwood, CA 94703 P.O. Box 5724";

contactContainer.appendChild(contactEmail);
contactContainer.appendChild(contactNum);
contactContainer.appendChild(contactAddress);
contactClass.appendChild(contactTitle);
contactClass.appendChild(contactContainer);

bottomClass.appendChild(contactClass);

// footer 
let footerClass = document.createElement("div");
let footerText = document.createElement("div");

footerClass.className = "footer";
footerText.textContent = "Made with 🍵";

footerClass.appendChild(footerText);

content.appendChild(footerClass);