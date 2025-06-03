import bugcat from "./bugcat drink.gif";

export default function loadAbout() {
    let bugcatGif = document.createElement("img");
    let aboutUsID = document.createElement("div");
    let aboutTitle = document.createElement("h1");
    let aboutText = document.createElement("p");

    const content = document.querySelector("#content");
    
    bugcatGif.src = bugcat;
    aboutUsID.id = "aboutUs";
    aboutTitle.textContent = "About Tastea";
    aboutText.textContent = "We make tastea tea 😃";

    aboutUsID.appendChild(aboutTitle);
    aboutUsID.appendChild(bugcatGif);
    aboutUsID.appendChild(aboutText);

    content.appendChild(aboutUsID);
}