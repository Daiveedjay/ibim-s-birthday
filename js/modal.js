"use strict";
const modalButton = document.querySelector(".modal-trigger");

const modalWindow = document.querySelector(".modal-window");
const closeModal = document.querySelector(".fa-xmark");

// console.log(modalButton);

modalButton.addEventListener("click", function (e) {
  // console.log("Yes");
  // console.log(e.target);
  modalWindow.style.display = "flex";
});

closeModal.addEventListener("click", function () {
  modalWindow.style.display = "none";
});
