import { content } from "./home.js";

const menuContent = () => {
    const menuDiv = document.createElement("div");
    const coffeeHeader = document.createElement("h2");
    const coffeeHeaderDiv = document.createElement("div");
    const notCoffeeHeader = document.createElement("h2");
    const notCoffeeHeaderDiv = document.createElement("div");
    const foodHeader = document.createElement("h2");
    const foodDiv = document.createElement("div");
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
    coffeeHeaderDiv.classList = "coffee-header-div";
    notCoffeeHeader.textContent = "NOT COFFEE";
    notCoffeeHeader.classList = "not-coffee-header";
    notCoffeeHeaderDiv.classList = "not-coffee-div";
    foodHeader.textContent = "FOOD";
    foodHeader.classList = "food-header";
    foodDiv.classList = "food-div";


    drink_1.textContent = "Cold brew";
    drink_1_Price.textContent = "5.5";
    drink_1_Price.classList = "drink-price";
    drink_2.textContent = "Latte";
    drink_2_Price.textContent = "4.5";
    drink_2_Price.classList = "drink-price"
    drink_3.textContent = "Espresso";
    drink_3_Price.textContent = "3.25";
    drink_3_Price.classList = "drink-price";
    drink_4.textContent = "Hot Chocolate";
    drink_4_Price.textContent = "3.5"
    drink_4_Price.classList = "drink-price";
    drink_5.textContent = "Iced Tea";
    drink_5_Price.textContent = "4";
    drink_5_Price.classList = "drink-price";
    drink_6.textContent = "Matcha Latte";
    drink_6_Price.textContent = "5.5";
    drink_6_Price.classList = "drink-price";
    foodItem_1.textContent = "Avocado Toast";
    foodItem_1_Price.textContent = "10";
    foodItem_1_Price.classList = "food-price";
    foodItem_2.textContent = "Smoked Salmon Bagel";
    foodItem_2_Price.textContent = "15";
    foodItem_2_Price.classList = "food-price"
    foodItem_3.textContent = "Granola Bowl";
    foodItem_3_Price.textContent = "9";
    foodItem_3_Price.classList = "food-price";

    content.append(menuDiv);
    menuDiv.append(coffeeHeader)
    menuDiv.append(coffeeHeaderDiv)
    coffeeHeaderDiv.append(drink_1, drink_1_Price, drink_2, drink_2_Price, drink_3, drink_3_Price);
    menuDiv.append(notCoffeeHeader)
    menuDiv.append(notCoffeeHeaderDiv);
    notCoffeeHeaderDiv.append(drink_4, drink_4_Price, drink_5, drink_5_Price, drink_6, drink_6_Price);
    menuDiv.append(foodHeader);
    menuDiv.append(foodDiv);
    foodDiv.append(foodItem_1, foodItem_1_Price, foodItem_2, foodItem_2_Price, foodItem_3, foodItem_3_Price);
    document.body.append(content);
}

export { menuContent }