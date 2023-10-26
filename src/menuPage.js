import menuItems from "./menuItems.json";

export default function menuPage(container) {
  const pageContainer = document.createElement("div");
  pageContainer.classList.add("page-content");
  const header = document.createElement("div");
  header.textContent = "MENU";
  header.classList.add("header-text");
  pageContainer.appendChild(header);

  const menuContainer = document.createElement("ul");
  menuContainer.classList.add("menu-container");
  for (const food of menuItems) {
    const item = document.createElement("li");
    item.classList.add("menu-item");
    //   Menu item values
    const foodName = document.createElement("div");
    foodName.textContent = food.name;
    foodName.classList.add("food-name");
    item.appendChild(foodName);

    const foodPrice = document.createElement("div");
    foodPrice.textContent = food.price;
    foodPrice.classList.add("food-price");
    item.appendChild(foodPrice);

    const foodDescription = document.createElement("div");
    foodDescription.textContent = food.ingredients;
    foodDescription.classList.add("food-description");
    item.appendChild(foodDescription);

    menuContainer.appendChild(item);
  }
  pageContainer.appendChild(menuContainer);
  container.appendChild(pageContainer);
}
