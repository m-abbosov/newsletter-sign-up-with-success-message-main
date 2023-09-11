const form = document.querySelector("form");
const inputEl = document.querySelector("input");
const container = document.querySelector(".container");
const success = document.querySelector(".success");
const dismissBtn = document.querySelector(".dismiss-btn");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  if (!inputEl.value.includes("@") && !inputEl.value.includes(".")) {
    inputEl.parentElement.querySelector("b").innerHTML = "Valid email required";
    inputEl.style.background = "rgba(255, 98, 87, 0.2)";
    inputEl.style.borderColor = "rgb(255, 98, 87)";
  } else {
    inputEl.parentElement.querySelector("b").innerHTML = "";
    inputEl.style.background = "white";
    inputEl.style.borderColor = "hsl(231, 7%, 60%)";
    container.style.display = "none";
    success.style.display = "flex";
  }
}

dismissBtn.addEventListener("click", () => {
  container.style.display = "flex";
  success.style.display = "none";
});
