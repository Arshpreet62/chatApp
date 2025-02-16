const inputA = document.querySelector(".inputA");
const buttonA = document.querySelector(".buttonA");
const messageA = document.querySelector(".messageA");
const inputB = document.querySelector(".inputB");
const buttonB = document.querySelector(".buttonB");
const messageB = document.querySelector(".messageB");
const removeA = document.querySelector(".removeA");
const removeB = document.querySelector(".removeB");
buttonA.addEventListener("click", () => {
  if (inputA.value.trim() == "") {
  } else {
    const reply = document.createElement("div");
    reply.innerText = inputA.value;
    messageA.appendChild(reply);
    reply.classList.add("message");
    inputA.value = "";
    const removeA = document.createElement("button");
    removeA.innerText = "X";
    reply.appendChild(removeA);
    removeA.classList.add("removeA");
    removeA.addEventListener("click", (event) => {
      const parent = event.target.parentElement;
      messageA.removeChild(parent);
    });
  }
});
buttonB.addEventListener("click", () => {
  if (inputB.value.trim() == "") {
  } else {
    const reply = document.createElement("div");
    reply.innerText = inputB.value;
    messageB.appendChild(reply);
    reply.classList.add("message");
    inputB.value = "";
    const removeB = document.createElement("button");
    removeB.innerText = "X";
    reply.appendChild(removeB);
    removeB.classList.add("removeB");
    removeB.addEventListener("click", (event) => {
      const parent = event.target.parentElement;
      messageB.removeChild(parent);
    });
  }
});
