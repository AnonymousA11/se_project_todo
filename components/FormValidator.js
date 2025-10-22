// create class
import { hideInputError, showInputError } from './utils'; // adjust the path as needed



class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
  }

  _toggleButtonState() {
  // logic to enable/disable the submit button
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }   
}

_hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  } 

  _checkInputValidity(inputElement) {
   if (!inputElement.validity.valid) {
    showInputError(
      this._formElement,
      inputElement,
      inputElement.validationMessage,
      this._settings,
    );
  } else {
    hideInputError(this._formElement, inputElement, this._settings);
  }
  }

  _setEventListeners() {
    this._inputList = Array.from(
    this._formElement.querySelectorAll(this._settings.inputSelector),
    );
  this._buttonElement = this._formElement.querySelector(
    this._settings.submitButtonSelector,
  );

  this._toggleButtonState();

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
 
}

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;


