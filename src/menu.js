import xinfutang from "./xinfutang dabin.png"
import heytea from "./heytea oolong 3.3.png";
import grapeIcedTea from "./grape iced tea.png";
import snowy from "./SNOWY WHIPPED CREAM SERIES.png";
import tiger from "./tiger sugar.png";
import herbal from "./herbal jelly wow.png";

export default function loadMenu() {

    let content = document.querySelector("#content");

    let imgSrc = [
        xinfutang, heytea, grapeIcedTea,
        snowy, tiger, herbal
    ]
    let imgAlt = [
        "Photo shared by Xing Fu Tang USA on Instagram. Depicts a limited edition pinkish purple drink called the Night Bloom. Consists of Butterfly pea limeade w/strawberry boba",
        "HEYTEA's Oolong 3.3 as shared on Instagram. Depicts a brown cup with white foam on the rim and a green layers on the drink",
        "Grape Iced Tea from Teazzi. Depicts a drink with an orange and red gradient with whipped cream on top",
        "Snowy jasmine from Teazzi. Depicts a pink cup that says 'Oriental Jasmine' with a flower on it and has whipped cream on top",
        "Brown sugar milk tea. Depicts a light brown milk tea with brown sugar on the sides",
        "The Herbal Jelly Wow from Kung Fu Tea. Also depicts a mix of brown sugar and whole milk"
    ]
    let drinkNames = [
        "Night Bloom", "Oolong 3.3", 
        "Grape Iced Tea", "Snowy Whipped Cream",
        "Brown Sugar Milk Tea", "Herbal Jelly Wow"
    ]
    let drinkDesc = [
        "Butterfly pea limeade w/strawberry boba",
        "Fresh milk with layered oolong",
        "Grape infused oolong tea topped with whipped cream",
        "Green Tea + Milk + Jasmine Cream Frappe Cold / Hot",
        "Signature brown sugar glazed milk tea, hot/cold",
        "Brown sugar with whole milk, also has option of grass jelly"
    ]
    let teaMenu = document.createElement("div");
    teaMenu.classList.add("tea-menu")
    // six menu items
    for (let i = 0; i < imgSrc.length; i++) {
        let teaItem = document.createElement("div");
        let descriptionClass = document.createElement("div");
        let drinkImg = document.createElement("img");
        let name = document.createElement("h2");
        let desc = document.createElement("p");

        teaItem.classList.add("tea-item");
        descriptionClass.classList.add("description");

        name.textContent = drinkNames[i];
        desc.textContent = drinkDesc[i];

        descriptionClass.appendChild(name);
        descriptionClass.appendChild(desc);

        drinkImg.src = imgSrc[i];
        drinkImg.alt = imgAlt[i];

        teaItem.appendChild(drinkImg);
        teaItem.appendChild(descriptionClass);

        teaMenu.appendChild(teaItem);
    }

    content.appendChild(teaMenu);
}