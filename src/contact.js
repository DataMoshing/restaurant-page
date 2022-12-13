import { content } from "./home.js";

const contactContent = () => {
    const contactDiv = document.createElement("div");
    const cardHeader = document.createElement("h2")
    const locationDiv = document.createElement("div");
    const location = document.createElement("p");
    const locationPlaceholder = document.createElement("p");
    const emailDiv = document.createElement("div");
    const email = document.createElement("p");
    const emailPlaceholer = document.createElement("p");
    const numberDiv = document.createElement("div");
    const number = document.createElement("p");
    const numberPlaceholder = document.createElement("p");

    const emailSVG = new Image();
    emailSVG.src = "/src/imgs/email-svgrepo-com.svg"
    emailSVG.className = "email-svg";
    emailPlaceholer.classList = "placeholder"

    const locationSVG = new Image();
    locationSVG.src = "/src/imgs/location-svgrepo-com.svg"
    locationSVG.className = "location-svg";
    locationPlaceholder.classList = "placeholder";

    const numberSVG = new Image();
    numberSVG.src = "/src/imgs/phone-svgrepo-com.svg"
    numberSVG.className = "number-svg";
    numberPlaceholder.classList = "placeholder";

    contactDiv.className = "contact-div";
    locationDiv.className = "location-div";
    emailDiv.className = "email-div";
    numberDiv.className = "number-div";

    location.textContent = "Location: ";
    email.textContent = "Email: ";
    number.textContent = "Phone: ";

    cardHeader.textContent = "Lon Lon Cafe";
    cardHeader.className = "card-header";
    locationPlaceholder.textContent = "P Sherman, 42 Wallaby Way, Sydney";
    emailPlaceholer.textContent = "LonLon@cafe";
    numberPlaceholder.textContent = "123-456-7890";

    contactDiv.append(cardHeader, locationDiv, emailDiv, numberDiv);
    locationDiv.append(locationSVG, location, locationPlaceholder);
    emailDiv.append(emailSVG, email, emailPlaceholer);
    numberDiv.append(numberSVG, number, numberPlaceholder);
    content.append(contactDiv);
    document.body.append(content)
}

export { contactContent }