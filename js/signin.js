const checkEl = document.querySelector(".save-id");
let isChecked = false;

checkEl.addEventListener("click", function () {
  isChecked = !isChecked;

  if (isChecked) {
    checkEl.classList.add("checked");
  } else {
    checkEl.classList.remove("checked");
  }
});
