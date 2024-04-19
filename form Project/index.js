const firstName = document.getElementById("user");
const lastName = document.getElementById("Last");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let password = document.getElementById("pass");
const form = document.getElementById("form");
const gender = document.getElementById("gender");
const addInput = document.getElementById("add");
const address = document.getElementById("address");
const radio1 = document.getElementById("male");
const radio2 = document.getElementById("female");
const paras = document.querySelectorAll(".color");
const eyeIcon = document.getElementById('icon');

let nums = 0;
let alphas = 0;

function passValid(pass,key) {
    const unicode = pass.charCodeAt(pass.length-1);
    // console.log(unicode);
    if(unicode > 47 && unicode < 60){
      if(!(key === 'Backspace')){
        nums++
      }else{
        nums--
      }
    } 
     if (unicode > 65 && unicode < 122){
      if(key === 'Backspace'){
        alphas--
      }else{
        alphas++
      }
    }
  //    if(unicode > 47 && unicode < 60){
  //   if(key === null){
  //     nums--
  //   }else{
  //     nums++
  //   }}
  
  //  if (unicode > 65 && unicode < 122){
  //   if(key === null){
  //     alphas--
  //   }else{
  //     alphas++
  //   }
  // }
    // console.log('[alphas]', alphas, '[nums]', nums)
    if (pass.length > 8 && nums > 0 && alphas > 0) {
      paras[3].classList.add("hide");
    password.classList.add("border-green");
    password.classList.remove("border-red");
    } else if(pass.length < 8 && nums < 1 || alphas < 1)  {
      paras[3].classList.remove("hide");
    password.classList.remove("border-green");
    password.classList.add("border-red");
      };}
  
    // let letter = false;
    // let special = false;
    // if(key >= 'a' || key <= 'z'){
    //   letter = true;
    // } else if(key >= 0 || key <= 9){
    //   special = true;
    // }
      // console.log('[letter]', letter, '[special]', special);
  


form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstName.value.length < 5) {
    paras[0].classList.remove("hide");
    firstName.classList.add("border-red");
    console.log(paras[0]);
  }
  if (lastName.value.length < 5) {
    paras[1].classList.remove("hide");
    lastName.classList.add("border-red");
    console.log(paras[1]);
  }
  if (email.value.length < 3 || !email.value.includes("@")  ) {  //email.indexOf('@') == -1;
    paras[2].classList.remove("hide");
    email.classList.add("border-red");
    console.log(paras[2]);
  }


  if (password.value.length < 8 && nums < 1 || alphas < 1) {
    paras[3].classList.remove("hide");
    password.classList.add("border-red");
  }

  if (!(radio1.checked || radio2.checked)) {
    gender.classList.add("border-red");
  }
  if (address.value.length < 8) {
    paras[4].classList.remove("hide");
    addInput.classList.add("border-red");
  }
  if (phone.value.length < 10 || !(phone.value[0] == 0)) {
    paras[5].classList.remove("hide");
    phone.classList.add("border-red");
  }

  if (
    firstName.value.length > 4 &&
    lastName.value.length > 4 &&
    email.value.length > 3 &&
    email.value.includes("@") &&
    (password.value.length > 8 && nums > 0 && alphas > 0) &&
    (radio1.checked || radio2.checked) &&
    address.value.length > 8 &&
    phone.value.length > 10 &&
    phone.value[0] == 0
  ) {
    form.reset();
    alert("form successfully submitted");
    firstName.classList.remove("border-green");
    lastName.classList.remove("border-green");
    email.classList.remove("border-green");
    password.classList.remove("border-green");
    nums = 0;
    alphas = 0;
  }
});

firstName.addEventListener("keyup", () => {
  if (firstName.value.length < 5) {
    paras[0].classList.remove("hide");
    firstName.classList.remove("border-green");
    firstName.classList.add("border-red");
  } else {
    paras[0].classList.add("hide");
    firstName.classList.remove("border-red");
    firstName.classList.add("border-green");
  }
});
firstName.addEventListener("focus", () => {
  paras[0].classList.remove("hide");
  firstName.classList.add("border-red");
});
firstName.addEventListener("blur", () => {
  paras[0].classList.add("hide");
  firstName.classList.remove("border-red");
});
lastName.addEventListener("keyup", () => {
  if (lastName.value.length < 5) {
    paras[1].classList.remove("hide");
    lastName.classList.remove("border-green");
    lastName.classList.add("border-red");
  } else {
    paras[1].classList.add("hide");
    lastName.classList.remove("border-red");
    lastName.classList.add("border-green");
  }
});
lastName.addEventListener("focus", () => {
  paras[1].classList.remove("hide");
  lastName.classList.add("border-red");
});
lastName.addEventListener("blur", () => {
  paras[1].classList.add("hide");
  lastName.classList.remove("border-red");
});
email.addEventListener("keyup", () => {
  if (email.value.length < 3 || !email.value.includes("@")) {
    paras[2].classList.remove("hide");
    email.classList.remove("border-green");
    email.classList.add("border-red");
  } else {
    paras[2].classList.add("hide");
    email.classList.remove("border-red");
    email.classList.add("border-green");
  }
});
email.addEventListener("focus", () => {
  paras[2].classList.remove("hide");
  email.classList.add("border-red");
});
email.addEventListener("blur", () => {
  paras[2].classList.add("hide");
  email.classList.remove("border-red");
});
password.addEventListener("keyup", (e) => {
  passValid(e.target.value,e.key);
  // console.log(nums,alphas);
});
// password.addEventListener('input',(e) => {
//   passValid(e.target.value,e.data);  
//   console.log(e.data)
// })
password.addEventListener("focus", () => {
  paras[3].classList.remove("hide");
  password.classList.add("border-red");
});
password.addEventListener("blur", () => {
  paras[3].classList.add("hide");
  password.classList.remove("border-red");
});

phone.addEventListener("focus", () => {
  paras[5].classList.remove("hide");
});
phone.addEventListener("blur", () => {
  paras[5].classList.add("hide");
});
address.addEventListener("focus", () => {
  paras[4].classList.remove("hide");
});
address.addEventListener("blur", () => {
  paras[4].classList.add("hide");
});

eyeIcon.addEventListener('click', () => {
  if(password.type === 'password'){
    eyeIcon.className = 'fa-solid fa-eye-slash' ;
    password.type = 'text';
  }  else{
    eyeIcon.className = 'fa-solid fa-eye' ;
    password.type = 'password';
  }
});
// phone.addEventListener('input',(e) => {
// console.log(e,e.target.value);
// if(e.data == null){
//   alert('do not delete');
// }
// });
