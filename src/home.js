const content = document.getElementById("content");
const homeLi = document.createElement("button");
const menuLi = document.createElement("button");
const contactLi = document.createElement("button");

const mainHeader = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const headerUl = document.createElement("ul");
    const topHeading = document.createElement("h1");
    const headingDiv = document.createElement("div");

    homeLi.textContent = "Home";
    homeLi.className = "home";

    menuLi.textContent = "Menu";
    menuLi.className = "menu";

    contactLi.textContent = "Contact";
    contactLi.className = "contact"
    headerUl.append(homeLi, menuLi, contactLi);

    topHeading.textContent = "Lon Lon Cafe  ";
    topHeading.classList = "top-heading";
    headingDiv.className = "header-div";

    const bubbleTea = new Image();
    bubbleTea.src = "/src/imgs/bubble-tea-svgrepo-com.svg"
    bubbleTea.className = "bubble-tea";

    const hamburgerImg = new Image();
    hamburgerImg.src = "/src/imgs/hamburger.jpg";
    hamburgerImg.className = "borger"

    nav.append(headerUl);
    header.append(nav)
    content.append(header);
    content.append(headingDiv);
    headingDiv.append(topHeading, bubbleTea, hamburgerImg);
    document.body.append(header, content, headingDiv)
}

const mainContent = () => {
    const content = document.getElementById("content");
    const mainDiv = document.createElement("div");
    const mainDescription = document.createElement("p");
    const mainScheduleDiv = document.createElement("div")
    const mainSchedule = document.createElement("h2");
    const weekday_1 = document.createElement("p");
    const weekday_2 = document.createElement("p");
    const weekday_3 = document.createElement("p");
    const weekday_4 = document.createElement("p");
    const weekday_5 = document.createElement("p");
    const weekend_1 = document.createElement("p");
    const weekend_2 = document.createElement("p");



    mainDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    mainDiv.className = "main-description";
    mainScheduleDiv.className = "main-schedule-div";

    mainSchedule.textContent = "Hours";
    mainSchedule.className = "hrs-header";
    weekday_1.textContent = "Monday: 7am - 8pm";
    weekday_2.textContent = "Tuesday: 6am - 8pm";
    weekday_3.textContent = "Wednesday: 6am - 8pm";
    weekday_4.textContent = "Thursday: 9am - 8pm";
    weekday_5.textContent = "Friday: 6am - 11pm";
    weekend_1.textContent = "Saturday: Closed";
    weekend_2.textContent = "Sunday: Closed";

    const reviewDiv = document.createElement("div");
    reviewDiv.className = "review-div";
    const reviewHeader = document.createElement("h3");
    reviewHeader.textContent = "Reviews";
    reviewHeader.className = "review-header";

    const reviewPlaceholder_1 = document.createElement("p");
    const reviewPlaceholder_2 = document.createElement("p");
    const reviewPlaceholder_3 = document.createElement("p");
    const reviewPlaceholder_4 = document.createElement("p");

    reviewPlaceholder_1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    reviewPlaceholder_2.textContent = "Auctor urna nunc idcursus metus aliquam eleifend mi in. Suscipit. Sit amet risus nullam eget felis."

    reviewPlaceholder_3.textContent = "Quis auctor elit sed vulputate mi."

    reviewPlaceholder_4.textContent = "Ut tristique et egestas quis ipsum suspendisse ultrices."

    // content.append(hamburgerImg);
    content.append(mainDiv);
    mainDiv.append(mainDescription);
    content.append(mainScheduleDiv);
    mainScheduleDiv.append(mainSchedule);
    mainScheduleDiv.append(weekday_1, weekday_2, weekday_3, weekday_4, weekday_5, weekend_1, weekend_2);
    content.append(reviewHeader);
    content.append(reviewDiv);
    reviewDiv.append(reviewPlaceholder_1, reviewPlaceholder_2, reviewPlaceholder_3, reviewPlaceholder_4);
    document.body.append(content)
}

export { mainHeader, mainContent, menuLi, homeLi, contactLi, content }
