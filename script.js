const inputA = document.querySelector(".inputA");
const buttonA = document.querySelector(".buttonA");
const inputB = document.querySelector(".inputB");
const buttonB = document.querySelector(".buttonB");
const chat = document.querySelector(".chat");

buttonA.addEventListener("click", () => {
  if (inputA.value.trim() == "") {
  } else {
    const reply = document.createElement("div");
    const text = document.createElement("div");
    text.innerText = inputA.value;
    chat.appendChild(reply);
    reply.appendChild(text);
    text.classList.add("text");
    reply.classList = "A";
    inputA.value = "";
    const remove = document.createElement("button");
    remove.innerText = "X";
    reply.appendChild(remove);

    remove.addEventListener("click", (event) => {
      const parent = event.target.parentElement;
      chat.removeChild(parent);
    });
  }
});
buttonB.addEventListener("click", () => {
  if (inputB.value.trim() == "") {
  } else {
    const reply = document.createElement("div");
    const text = document.createElement("div");
    text.innerText = inputB.value;
    chat.appendChild(reply);
    reply.appendChild(text);
    text.classList.add("text");
    reply.classList = "B";
    inputB.value = "";
    const remove = document.createElement("button");
    remove.innerText = "X";
    reply.appendChild(remove);

    remove.addEventListener("click", (event) => {
      const parent = event.target.parentElement;
      chat.removeChild(parent);
    });
  }
});
