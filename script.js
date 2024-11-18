const form = document.querySelector("form");
const addItem = document.getElementById("addItem");
const tag = document.getElementById("tag");
let id = 0;
let listItem = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    if (addItem.value) {
      createLi(addItem.value);
      id++;
    }
    addItem.value = "";
  } catch (error) {
    console.log(error);
  }
});

function createLi(value) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const firstDiv = document.createElement("div");
  const span = document.createElement("span");
  const checkbox = document.createElement("input");
  const p = document.createElement("p");
  const lastDiv = document.createElement("div");
  const button = document.createElement("button");
  const img = document.createElement("img");

  li.id = id;

  checkbox.type = "checkbox";
  p.innerText = value;

  firstDiv.append(span, checkbox, p);
  lastDiv.append(button);

  li.append(firstDiv, lastDiv);

  ul.append(li);

  listItem.push(li);

  if (listItem.length >= 6 && matchMedia("(min-width: 80rem)").matches) {
    ul.style.paddingRight = "1rem";
  }

  button.addEventListener("click", () => {
    removeItem(li);
    if (listItem.length < 6 && matchMedia("(min-width: 80rem)").matches) {
      ul.style.paddingRight = "0";
    }
    tag.style.animation = "none";
    requestAnimationFrame(() => {
      tag.style.animation =
        "slideUp ease 700ms both, slideDown ease 1s 1.5s both";
    });
  });
}

function removeItem(value) {
  listItem = listItem.filter((element) => element.id != value.id);
  value.remove();
}
