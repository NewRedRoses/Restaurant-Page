import restaurantImg from "./Dish on white plate.jpg";

export default function startPage(container) {
  //   const container = document.querySelector("div#content");

  const homeMsg = document.createElement("div");
  homeMsg.classList.add("home-message");
  homeMsg.textContent =
    "Welcome to Giorno's where elegance meets exceptional dining. Our carefully curated menu and sophisticated ambiance promise an unforgettable culinary experience. Explore a symphony of flavors in an atmosphere designed to elevate your dining journey. We invite you to join us and savor the perfect blend of taste and elegance.";
  container.appendChild(homeMsg);

  const myImg = new Image();
  myImg.classList.add("image");
  myImg.src = restaurantImg;
  container.appendChild(myImg);
}
