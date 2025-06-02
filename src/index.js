import loadHome from "./home.js";
import loadMenu from "./menu.js";
import "./styles.css";


let buttons = document.querySelectorAll("nav button");

let clearContent = () => {
    document.querySelector("#content").textContent = "";
}; //  clears content

loadHome();

buttons.forEach(button => {
    button.addEventListener('click', (e)=> {
        switch(e.target.textContent) {
            case 'Home':
                clearContent();
                loadHome();
                break;
            case 'Menu':
                clearContent();
                loadMenu();
                break;
            case 'About':
                clearContent();
                console.log("asd");
                break;
            default:
        }
    })
});