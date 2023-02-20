let billTotal = document.getElementById("billTotalInput");
let tipPercent = document.getElementById("tipInput");
let perPersonTotal = document.getElementById("perPersonTotal");
let billSplitDiv = document.getElementById("numberOfPeople");
let tipTotal = document.getElementById("tipTotal");
let splitTipTotal = document.getElementById("splitTipTotal");
let split = Number(billSplitDiv.innerHTML);

const calculateBill = () => {
  const bill = Number(billTotal.value);
  const tip = Number(tipPercent.value);
  const tipAmount = Number(tip * bill);
  const splitTip = Number(tipAmount / split);
  total = ((tipAmount + bill) / split).toFixed(2);
  perPersonTotal.innerText = total;
  tipTotal.innerText = tipAmount.toFixed(2);
  if (split > 1) {
    splitTipTotal.innerText = splitTip.toFixed(2);
  } else {
    splitTipTotal.innerText = " N/A🚫";
  }
};

const decreasePeople = () => {
  if (split <= 1) {
    return;
  } else {
    split -= 1;
    billSplitDiv.innerText = split;
    calculateBill();
  }
};
const increasePeople = () => {
  split += 1;
  console.log(split);
  billSplitDiv.innerText = split;
  calculateBill();
};

const reset = () => window.location.reload();
