import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderAbout } from "./about";
import "./styles.css";

const content = document.getElementById("content");

const homeBtn = document.getElementById("home-btn");
const AboutBtn = document.getElementById("about-btn");
const menuBtn = document.getElementById("menu-btn");

homeBtn.addEventListener("click", render);
AboutBtn.addEventListener("click", render);
menuBtn.addEventListener("click", render);

homeBtn.classList.add("active-tab");
content.appendChild(renderHome());

let activeTab = "home";

function render(e) {
  let id = e.target.id;
  switch (id) {
    case "home-btn":
      if (activeTab === "home") break;
      AboutBtn.classList.remove("active-tab");
      menuBtn.classList.remove("active-tab");
      homeBtn.classList.add("active-tab");
      content.replaceChildren(renderHome());
      activeTab = "home";
      break;
    case "menu-btn":
      if (activeTab === "menu") break;
      homeBtn.classList.remove("active-tab");
      AboutBtn.classList.remove("active-tab");
      menuBtn.classList.add("active-tab");
      content.replaceChildren(renderMenu());
      activeTab = "menu";
      break;
    case "about-btn":
      if (activeTab === "about") break;
      homeBtn.classList.remove("active-tab");
      menuBtn.classList.remove("active-tab");
      AboutBtn.classList.add("active-tab");
      content.replaceChildren(renderAbout());
      activeTab = "about";
      break;
  }
}

