const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");
const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const form = document.querySelector("form");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validateYear() {
  const parent = yearInp.parentElement;
  if (yearInp.value > year) {
    yearInp.style.borderColor = "red";
    parent.querySelector("small").innerText = "Year must be in the past.";
    return false;
  } else {
    yearInp.style.borderColor = "black";
    parent.querySelector("small").innerText = "";
    return true;
  }
}

function validate() {
  let isValid = true;

  if (!dayInp.value || dayInp.value > 31) {
    dayInp.style.borderColor = "red";
    dayInp.parentElement.querySelector("small").innerText =
      !dayInp.value ? "Day field is required." : "Day must be valid.";
    isValid = false;
  } else {
    dayInp.style.borderColor = "black";
    dayInp.parentElement.querySelector("small").innerText = "";
  }

  if (!monthInp.value || monthInp.value > 12) {
    monthInp.style.borderColor = "red";
    monthInp.parentElement.querySelector("small").innerText =
      !monthInp.value ? "Month field is required." : "Month must be valid.";
    isValid = false;
  } else {
    monthInp.style.borderColor = "black";
    monthInp.parentElement.querySelector("small").innerText = "";
  }

  if (!yearInp.value || yearInp.value > year) {
    yearInp.style.borderColor = "red";
    yearInp.parentElement.querySelector("small").innerText =
      !yearInp.value ? "Year field is required." : "Year must be in the past.";
    isValid = false;
  } else {
    yearInp.style.borderColor = "black";
    yearInp.parentElement.querySelector("small").innerText = "";
  }

  return isValid;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 2];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}

form.addEventListener("submit", handleSubmit);
