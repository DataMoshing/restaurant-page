import { content } from "./home.js";

const menuContent = () => {
    const menuDiv = document.createElement("div");
    const coffeeHeader = document.createElement("h2");
    const notCoffeeHeader = document.createElement("h2");
    const foodHeader = document.createElement("h2");
    const drink_1 = document.createElement("p");
    const drink_1_Price = document.createElement("p");
    const drink_2 = document.createElement("p");
    const drink_2_Price = document.createElement("p");
    const drink_3 = document.createElement("p");
    const drink_3_Price = document.createElement("p");
    const drink_4 = document.createElement("p");
    const drink_4_Price = document.createElement("p");
    const drink_5 = document.createElement("p");
    const drink_5_Price = document.createElement("p");
    const drink_6 = document.createElement("p");
    const drink_6_Price = document.createElement("p");
    const foodItem_1 = document.createElement("p");
    const foodItem_1_Price = document.createElement("p");
    const foodItem_2 = document.createElement("p");
    const foodItem_2_Price = document.createElement("p");
    const foodItem_3 = document.createElement("p");
    const foodItem_3_Price = document.createElement("p");
    menuDiv.classList = "menu-div";

    coffeeHeader.textContent = "COFFEE  +  ESPRESSO";
    coffeeHeader.classList = "coffee-header";
    notCoffeeHeader.textContent = "NOT COFFEE";
    notCoffeeHeader.classList = "not-coffee-header";
    foodHeader.textContent = "FOOD";
    foodHeader.classList = "food-header";

    drink_1.textContent = "Cold brew";
    drink_1_Price.textContent = "5.5";
    drink_2.textContent = "Latte";
    drink_2_Price.textContent = "4.5";
    drink_3.textContent = "Espresso";
    drink_3_Price.textContent = "3.25";
    drink_4.textContent = "Hot Chocolate";
    drink_4_Price.textContent = "3.5"
    drink_5.textContent = "Iced Tea";
    drink_5_Price.textContent = "4";
    drink_6.textContent = "Matcha Latte";
    drink_6_Price.textContent = "5.5";
    foodItem_1.textContent = "Avocado Toast";
    foodItem_1_Price.textContent = "10";
    foodItem_2.textContent = "Smoked Salmon Bagel";
    foodItem_2_Price.textContent = "15";
    foodItem_3.textContent = "Granola Bowl";
    foodItem_3_Price.textContent = "9";

    content.append(menuDiv);
    menuDiv.append(coffeeHeader);
    menuDiv.append(drink_1, drink_1_Price, drink_2, drink_2_Price, drink_3, drink_3_Price);
    menuDiv.append(notCoffeeHeader);
    menuDiv.append(drink_4, drink_4_Price, drink_5, drink_5_Price, drink_6, drink_6_Price);
    menuDiv.append(foodHeader);
    menuDiv.append(foodItem_1, foodItem_1_Price, foodItem_2, foodItem_2_Price, foodItem_3, foodItem_3_Price);
    document.body.append(content);
}

export { menuContent }