import "./menu.css";
import menu from "./menu.json";
export const renderMenu = () => {
  console.log({ menu });
  const menuDiv = document.createElement("div");

  menuDiv.classList.add("menu");

  menu.menu.forEach((category) => {
    const section = document.createElement('div');
    const categoryName = document.createElement('h2');

    categoryName.innerText = category.category;

    section.classList.add('category')
    
    category.items.forEach((item) => {
      const card = document.createElement("div");
      const name = document.createElement("h3");
      const desc = document.createElement("p");
      const price = document.createElement("p");
      const photo = document.createElement("img");

      card.classList.add("card");

      name.innerText = item.name;
      desc.innerText = item.description;
      price.innerText = item.price;
      photo.src = item.img;

      price.classList.add('price');

      card.append(name, desc, price, photo);
    section.appendChild(card);
    });
    
    menuDiv.appendChild(categoryName);

    menuDiv.append(section);

  });

  return menuDiv;
};
