export default function contactPage(container) {
  const contactContainer = document.createElement("div");
  const phoneNumber = document.createElement("div");
  phoneNumber.textContent = "(232)-212-3421";
  contactContainer.appendChild(phoneNumber);

  const address = document.createElement("div");
  address.textContent = "28983 Nolan Shoals, Greenbury, NY, 62637 ";
  contactContainer.appendChild(address);

  const email = document.createElement("div");
  email.textContent = "restaurant@email.com";
  contactContainer.appendChild(email);
  container.appendChild(contactContainer);
}
