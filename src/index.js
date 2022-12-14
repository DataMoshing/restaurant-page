import { mainHeader, mainContent, menuLi, homeLi, contactLi, content, } from "./home.js";
import { menuContent } from "./menu.js";
import { contactContent } from "./contact.js";
import "./style.css";
import "/src/imgs/hamburger.jpg";
import "/src/imgs/bubble-tea-svgrepo-com.svg";
import "/src/imgs/email-svgrepo-com.svg";
import "/src/imgs/location-svgrepo-com.svg";
import "/src/imgs/phone-svgrepo-com.svg"


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