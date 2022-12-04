const displayData = () => {
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    header.textContent = "Super cool restaurant";

    const testText = document.createElement("p");
    testText.textContent = "This restaurant is so cool and awesome!!";

    const hamburgerImg = new Image();
    hamburgerImg.src = "/src/imgs/hamburger.jpg";
    hamburgerImg.className = "borger"

    content.append(header);
    content.append(testText);
    content.append(hamburgerImg);
    document.body.append(content)
}

export { displayData }