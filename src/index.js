import { mainHeader, mainContent, menuLi, homeLi, contactLi, content, } from "./home.js";
import { menuContent } from "./menu.js";
import { contactContent } from "./contact.js";
import "./style.css";

homeLi.addEventListener("click", () => {
    content.textContent = ""
    mainContent()
})

menuLi.addEventListener("click", () => {
    content.textContent = ""
    menuContent()
})

contactLi.addEventListener("click", () => {
    content.textContent = ""
    contactContent()
})

mainHeader()
mainContent()