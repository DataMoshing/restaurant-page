const displayData = () => {
    const content = document.getElementById("content");
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const headerUl = document.createElement("ul");
    const homeLi = document.createElement("li");
    const menuLi = document.createElement("li");
    const contactLi = document.createElement("li");
    const mainHeading = document.createElement("h1");

    homeLi.textContent = "Home";
    homeLi.className = "home";

    menuLi.textContent = "Menu";
    menuLi.className = "menu";

    contactLi.textContent = "Contact";
    contactLi.className = "contact"
    headerUl.append(homeLi, menuLi, contactLi);

    mainHeading.textContent = "Lon Lon Cafe";

    const hamburgerImg = new Image();
    hamburgerImg.src = "/src/imgs/hamburger.jpg";
    hamburgerImg.className = "borger"


    nav.append(headerUl);
    header.append(nav)
    content.append(header);
    content.append(mainHeading);
    content.append(hamburgerImg);
    document.body.append(header, content)
}

export { displayData }