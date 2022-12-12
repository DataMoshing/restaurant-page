import { mainHeader, mainContent, menuLi, homeLi, contactLi, content, } from "./home.js";
import { menuContent } from "./menu.js";
import "./style.css";


homeLi.addEventListener("click", () => {
    content.textContent = ""
    mainContent()
})

menuLi.addEventListener("click", () => {
    content.textContent = ""
    menuContent()
})

mainHeader()
mainContent()