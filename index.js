"use strict";
//  FORM
const form = document.querySelector(".form");
//  INPUTS
const billInput = document.querySelector(".bill");
const rateInput = document.querySelector(".rate");
// ERROR
const error = document.querySelector(".error");
// AMOUNTS
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
// ERROR MESSAGE
const showErrorMessage = (message) => {
  error.textContent = message;
};

const checkInputs = () => {
  const bill = billInput.value;
  const rate = rateInput.value;

  if (bill === "" || bill === "0") {
    showErrorMessage("Enter Bill Amount");
    return;
  }
  if (rate === "" || rate === "0") {
    showErrorMessage("Enter Amount");
    return;
  }
  if (rate.length > 3) {
    showErrorMessage("Maximum service rate is 999%");
    return;
  }

  let tipCalculation = Math.ceil(+bill * (rate / 100));
  tipAmount.textContent = `${tipCalculation},-`;

  let totalBillAmount = +bill + tipCalculation;
  totalAmount.textContent = `${totalBillAmount},-`;

  const resetValues = () => {
    billInput.value = "";
    rateInput.value = "";
    tipAmount.textContent = ".";
    totalAmount.textContent = ".";
  };

  billInput.addEventListener("click", resetValues);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

// Created by coding cat
