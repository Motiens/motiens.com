document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closePopup");

  setTimeout(() => {
    popup.style.display = "flex";
  }, 10000);

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
