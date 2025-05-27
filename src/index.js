import loadHome from "./home.js";
import "./styles.css";

// document.querySelector("#content").textContent = ""; //  clears content

let buttons = document.querySelectorAll("nav button");
console.log(buttons);

// loadHome();

buttons.forEach(button => {
    button.addEventListener('click', (e)=> {
        switch(e.target.textContent) {
            case 'Home':
                loadHome();
                break;
            case 'Menu':
                break;
            case 'About':
                
                console.log("asd");
                break;
            default:
        }
    })
});