
const modal = document.getElementById("modal");
const btns = document.querySelectorAll(".order-button");
const span = document.querySelector(".close");

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Дякуємо! Заявка прийнята.");
  modal.style.display = "none";
});
