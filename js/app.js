import { DATA } from "../server/db.js";
const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const content = document.querySelector(".content");
const headerStatus = document.querySelector(".header__status");
const contentImage = document.querySelector(".content__image");

// Habar ketganda refresh bolmasligi
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let val = input.value;
  if (val.trim() === "") return null;

  // Habar yozganda stikerni yoqolishi
  contentImage.style.display = "none";

  // Vaqtni real vaqt bilan birhil korsatish
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  // Habarlar uchun yangi div yaratadi
  let div = document.createElement("div");
  div.className = "message my-message";
  div.innerHTML = `
    <p>${val}</p>
    <span>${hour}:${minute}</span>
    `;
  // Habarni yuborgandan kegin yozilgan habarni tozalaydi
  content.appendChild(div);
  input.value = "";

  // Partnyorni chaqirish
  partnerSendMessage();
});

function partnerSendMessage() {
  // Partnyor yozishini kuttirish
  setTimeout(() => {
    // Vaqtni real vaqt bilan birhil korsatish
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    // DATA ni randomni xabar chiqarish
    let index = Math.floor(Math.random() * DATA.length);

    // Habarlar uchun yangi div yaratadi
    let div = document.createElement("div");
    div.className = "message";
    div.innerHTML = `
            <p>${DATA[index]}</p>
            <span>${hour}:${minute}</span>
        `;
    // Habarni yuborgandan kegin yozilgan habarni tozalaydi
    content.appendChild(div);
  }, 1000);
}

// setInterval(setAsosiy, 1000);
// const milSoat = document.querySelector(".hourss");
// const milMinut = document.querySelector(".munut");
// const milSekund = document.querySelector(".seekund");

// function setAsosiy() {
//   const currentDate = new Date();
//   const secondsRatio = currentDate.getSeconds() / 60;
//   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
//   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
//   setRotation(seekund, secondsRatio);
//   setRotation(munut, minutesRatio);
//   setRotation(hourss, hoursRatio);
// }
// function setRotation(element, rotationRatio) {
//   element.style.setProperty("transform", rotate (`${rotationRatio * 360}deg`));
// }
// setAsosiy()
const item =document.querySelector(".item")
function updateClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2,"0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
 
 console.log(item.textContent = `${hours}:${minutes}:${seconds}`);
}

console.log(updateClock()); 
setInterval(()=>{
  updateClock()
},1000)

{
const item2 = document.querySelector(".item2");
function day() {
  let now = new Date();
  let hours = now.getDay();
  let minutes = now.getMonth();
  let seconds = now.getFullYear();

  console.log((item2.textContent = `${hours}.${minutes}.${seconds}`));
}
console.log(day());
}