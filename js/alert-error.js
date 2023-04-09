import { Modal } from "./modal.js";

export const AlertError = {
  modalError: document.querySelector(".alert-error"),

  open() {
    AlertError.modalError.classList.add("open");
  },

  close() {
    AlertError.modalError.classList.remove("open");
  },
};

const inputHeightCaptureTyping = Modal.inputHeight.addEventListener("input", removeModalErrorWhileTyping)
const inputWeightCaptureTyping = Modal.inputWeight.addEventListener("input", removeModalErrorWhileTyping)

function removeModalErrorWhileTyping() {
    AlertError.close()
}