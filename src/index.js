import loadHome from "./home.js";

document.querySelector("#content").textContent = ""; //  clears content

let buttons = document.querySelectorAll("nav button");
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', (e)=> {
        switch(e.target.textContent) {
            case 'Home':
                loadHome();
                console.log("swirtch caseeee");
                break;
            case 'Menu':
                console.log("21213");
                break;
            case 'About':
                
                console.log("asd");
                break;
            default:
        }
    })
})

loadHome();