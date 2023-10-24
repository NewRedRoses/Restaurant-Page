import restaurantImg from "./Dish on white plate.jpg";

export default function startPage() {
  const container = document.querySelector("div#content");

  const welcomeMsg = document.createElement("div");
  welcomeMsg.classList.add("header-text");
  welcomeMsg.textContent = "Fancy Restaurant page";
  container.appendChild(welcomeMsg);

  const myImg = new Image();
  myImg.classList.add("image");
  myImg.src = restaurantImg;
  container.appendChild(myImg);
}
