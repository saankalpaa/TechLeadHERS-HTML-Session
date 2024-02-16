function printName() {
  const firstNameCopy = localStorage.getItem("firstName");
  document.getElementById("printDIV").innerHTML = firstNameCopy;
}

const printBtnDIV = document.getElementById("printBtn");
printBtnDIV.addEventListener(
  "click",
  function () {
    printName();
  },
  false
);

const parentDiv = document.getElementById("parent-div");
parentDiv.addEventListener(
  "click",
  function () {
    console.log("ma parent ma chu");
  },
  true
);

const childDiv = document.getElementById("child-div");
childDiv.addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    console.log("ma child ma chu");
  },
  false
);

function onSubmit() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", email);
  localStorage.setItem("phoneNumber", phoneNumber);

  console.log(document.getElementsByClassName("form-values"));
}
