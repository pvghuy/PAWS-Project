const form = document.getElementById("form");
const submit = document.getElementById("submit");
const select = document.getElementById("select");
const fullName = document.getElementById("name");
const email = document.getElementById("mail");
const phone = document.getElementById("phone");
const wrong = document.querySelectorAll(".wrong");
const popup = document.querySelector(".popup");
const arr = Array.prototype.slice.call(wrong);
const body = document.querySelector("body");
const btnPopup = document.querySelector(".btn--popup");
// console.log(arr.every((str) => (str = "none")));

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidName = (str) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]))/;
  return re.test(String(str).toLowerCase());
};

function removeNone(index) {
  wrong[index].classList.remove("none");
}

function addNone(index) {
  wrong[index].classList.add("none");
}

function init() {
  popup.classList.toggle("none");
  select.value = "";
  fullName.value = "";
  email.value = "";
  phone.value = "";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  select.value != "adopt" && select.value != "donate"
    ? removeNone(0)
    : addNone(0);

  fullName.value.length < 2 || isValidName(fullName.value) === false
    ? removeNone(1)
    : addNone(1);

  isValidEmail(email.value) === false ? removeNone(2) : addNone(2);

  phone.value.length != 10 || !phone.value.startsWith("0")
    ? removeNone(3)
    : addNone(3);

  submit.blur();

  if (
    arr.every((str) => (str = "none")) &&
    select.value != "" &&
    fullName.value != "" &&
    email.value != "" &&
    phone.value != ""
  ) {
    popup.classList.toggle("none");
  }
});

btnPopup.addEventListener("click", () => {
  init();
});

body.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    init();
  }
});
