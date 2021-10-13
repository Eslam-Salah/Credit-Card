let cardNumber = document.querySelector("#card-number");
let cardHolder = document.querySelector("#card-holder");
// Select
let selectMonth = document.querySelector(".month-input");
let selectYear = document.querySelector(".year-input");
// Cvv
let cvvInput = document.querySelector(".cvv-input");

console.log(cvvInput);

cardNumber.oninput = () => {
  document.querySelector(".card-number-box").innerHTML = cardNumber.value;
};

cardHolder.oninput = () => {
  document.querySelector(".card-name").innerHTML = cardHolder.value;
};

// Select
selectMonth.oninput = () => {
  document.querySelector(".exp-month").innerHTML = selectMonth.value;
};

selectYear.oninput = () => {
  document.querySelector(".exp-year").innerHTML = selectYear.value;
};

// Cvv
cvvInput.onfocus = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};

cvvInput.onblur = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

cvvInput.oninput = () => {
  document.querySelector(".cvv-box").innerHTML = cvvInput.value;
};
