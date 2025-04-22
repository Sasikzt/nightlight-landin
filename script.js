
document.addEventListener("DOMContentLoaded", function () {
  const orderBtn = document.getElementById("orderButton");
  const modal = document.getElementById("orderModal");
  const closeBtn = document.getElementById("closeModal");

  orderBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
