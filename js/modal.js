"use strict";
const modalButton = document.querySelector(".modal-trigger");

const modalWindow = document.querySelector(".modal-window");
const closeModal = document.querySelector(".close");

modalButton.addEventListener("click", function (e) {
  modalWindow.style.display = "flex";
});

closeModal.addEventListener("click", function () {
  modalWindow.style.display = "none";
});
