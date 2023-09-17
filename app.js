const billAmount = document.getElementById("bill");
const numberOfPeople = document.getElementById("people");
const tipPercentage = document.getElementById("custom");
const tipAmountPerPerson = document.getElementById("tipAmount");
const totalPerPerson = document.getElementById("total");
const resetButton = document.getElementById("resetBtn");
const tipButtons = document.querySelectorAll(".tip-btns button");

tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipValue = e.target.innerHTML;
    tipValue = tipValue.substr(0, tipValue.length - 1);
    if (billAmount.value === "") return;

    if (numberOfPeople.value === "") {
      numberOfPeople.value = 1;
    }

    calculateTip(
      parseFloat(billAmount.value),
      parseFloat(tipValue),
      parseInt(numberOfPeople.value)
    );
  });
});

tipPercentage.addEventListener("blur", (e) => {
  if (billAmount.value === "") {
    reset();
    return;
  }

  if (numberOfPeople.value === "") {
    numberOfPeople.value = 1;
  }

  calculateTip(
    parseFloat(billAmount.value),
    parseFloat(e.target.value),
    parseInt(numberOfPeople.value)
  );
});

function calculateTip(billAmount, tipPercentage, numberOfPeople) {
  let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);
  let total = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
  console.log(typeof total);
  total = total.toFixed(2);
  console.log(total);

  tipAmountPerPerson.innerHTML = `$${tip}`;
  totalPerPerson.innerHTML = `$${total}`;
}

resetButton.addEventListener("click", reset);

function reset() {
  tipAmountPerPerson.innerHTML = "$0.00";
  totalPerPerson.innerHTML = "$0.00";
  billAmount.value = "";
  numberOfPeople.value = "";
  tipPercentage.value = "";
}
