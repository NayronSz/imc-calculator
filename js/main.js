import { Modal } from "./modal.js";
import { notNumber, imcFormula } from "./utils.js"
import { AlertError } from "./alert-error.js";


const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
};

export function addModalResult() {
  const weight = Modal.inputWeight.value;
  const height = Modal.inputHeight.value;
  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);
  
  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }
  
  AlertError.close();
  Modal.open();
  const result = imcFormula(weight, height);
  displayResultMessage(result);
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  Modal.modalResult.innerHTML = message;
}