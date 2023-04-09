import { addModalResult } from "./main.js";
import { handleKeydown } from "./utils.js";

export const Modal = {
  btnForm: document.querySelector("#btn-form"),
  buttonClose: document.querySelector(".btn-close"),

  wrapper: document.querySelector(".modal-wrapper"),
  modalResult: document.querySelector("#popup-result"),

  inputWeight: document.querySelector("#input-weight"),
  inputHeight: document.querySelector("#input-height"),

  open() {
    Modal.wrapper.classList.add("open");
  },

  close() {
    Modal.wrapper.classList.remove("open");
  },
};

const removelModalResult = Modal.buttonClose.addEventListener("click", Modal.close);
const escapeModalResult = window.addEventListener("keydown", handleKeydown);
const modalResult = Modal.btnForm.addEventListener("click", addModalResult);
