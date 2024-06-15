const cursor = document.querySelector(".gradient");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

const inputs = document.querySelectorAll(".container input");
inputs.forEach((input) => input.addEventListener("change", update));
inputs.forEach((input) => input.addEventListener("mousemove", update));
function update() {
  const start_color = document.getElementById("color1").value;
  const end_color = document.getElementById("color2").value;
  const angle = document.getElementById("rangeInput").value;

  cursor.style.backgroundImage = `linear-gradient(${angle}deg, ${start_color} 10%, ${end_color})`;

  const box = document.querySelector(".box");
  box.style.background = `linear-gradient(${angle}deg, ${start_color} 0%, ${end_color} 100%)`;
  box.style.background = `-webkit-linear-gradient(${angle}deg, ${start_color} 0%, ${end_color} 100%)`;
  document.querySelector(".bg").innerHTML = `background : #474bff`;

  document.querySelector(
    ".bglg"
  ).innerHTML = `background : linear-gradient(${angle}deg, ${start_color} 0%, ${end_color} 100%)`;
  document.querySelector(
    ".bgwlg"
  ).innerHTML = `background : -webkit-linear-gradient(${angle}deg, ${start_color} 0%, ${end_color} 100%)`;
}

const rangeValue = document.getElementById("rangeValue");
const rangeInput = document.getElementById("rangeInput");

rangeInput.addEventListener("input", function () {
  rangeValue.textContent = rangeInput.value + "°";
});
