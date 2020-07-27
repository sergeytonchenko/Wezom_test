import './css/style.css';
import './scss/main.scss';

//Функция popup Вход
const singIn = document.querySelector(".nav__button");
const popup1 = document.querySelector(".popup1");
const close = document.querySelector(".popup1__enter-close");
const wrapperBg = document.querySelector(".wrapper__bg");

singIn.addEventListener("click" , () => {
    popup1.style.display = "flex";
    wrapperBg.style.display = "block";
})

close.addEventListener("click" , () => {
    popup1.style.display = "none";
    wrapperBg.style.display = "none";    
})

//Валидность пароля
const password = document.querySelector(".popup1__enter-password");

password.oninput = () => {
    if (password.value.length < 4) password.style.border = '2px solid red';
    else password.style.border = '2px solid green';    
}

// Функция popup Заказ обратного звонка
const callMe = document.querySelector(".header__button");
const callClose = document.querySelector(".popup2__close");
const popup2 = document.querySelector(".popup2");

callMe.addEventListener("click" , () => {
    popup2.style.display = "block";
    wrapperBg.style.display = "block";
})

callClose.addEventListener("click" , () => {
    popup2.style.display = "none";
    wrapperBg.style.display = "none";    
})

//Функция валидности Поиска
const validSearch = document.querySelector('.block__search-input');

validSearch.oninput = () => {
    if (validSearch.value.length < 2) validSearch.style.border = '2px solid red';
    else validSearch.style.border = '2px solid green';    
}

//Функция сброса select & input
const btnClear = document.getElementById("btn-clear");
btnClear.addEventListener("click" , () => {
    for (let r = 1; r < 7; r++) {
        document.getElementById(`select-${r}`)
        .options[0].selected = 'selected';
        document.getElementById(`input-${r}`).value = "";        
    }
    
})

//Функция валидации Цены
const validPrice = /(^[0-9]{1}|[1-9]{1}[0-9]$)/;
const inputPrice = document.querySelector('.filterContent__select-price');

const validatePrice = (value) => validPrice.test(value);  

inputPrice.oninput = () => {
    if (validatePrice(inputPrice.value)) inputPrice.style.border = '2px solid green';
    else inputPrice.style.border = '2px solid red';
  };


//Функции Сравнение и Избранное
const btnWish = document.querySelectorAll(".btn-wish");
const btnCompare = document.querySelectorAll(".btn-compare");
const compareDigit = document.getElementById("compare-number");
const compareBlock = document.querySelector(".header__action-digit-compare");
const wishDigit = document.getElementById("wish-number");
const wishBlock = document.querySelector(".header__action-digit-wish");
let count1 = 1;
let count2 = 1;

for (let t = 0; t < btnWish.length; t++) {
    btnWish[t].addEventListener("click" , (e) => { 
        
        if (e.target.textContent === "В избранном") {            
            wishDigit.innerText = `${ count1 - 1 }`;
        } else {
        e.target.innerHTML = "В избранном";
        wishBlock.style.display = "block";
        wishDigit.innerText = `${ count1++ }`;
        }              
    })
      
}

for (let t = 0; t < btnCompare.length; t++) {
    btnCompare[t].addEventListener("click" , (e) => {
        
        if (e.target.textContent === "В сравнении") {            
            compareDigit.innerText = `${ count2 - 1 }`;
        } else {
            e.target.innerHTML = "В сравнении";
            compareBlock.style.display = "block";
            compareDigit.innerText = `${ count2++ }`; 
        } 
    })
         
}

//Функция валидности email
const emailValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const inputEmail = document.querySelector('.footer__form-email');

const validateEmail = (value) => emailValid.test(value);  

inputEmail.oninput = () => {
    if (validateEmail(inputEmail.value)) inputEmail.style.border = '2px solid green';
    else inputEmail.style.border = '2px solid red';
  };


//Функция для Рассылки подписки
const btnMailing = document.querySelector(".footer__form-btn");
const popup3 = document.querySelector(".popup3"); 
const popup3Close = document.querySelector(".popup3__close");

btnMailing.addEventListener("click" , () => {
    if (validateEmail(inputEmail.value)) {
        popup3.style.display = "block";
        wrapperBg.style.display = "block";
    }
})

popup3Close.addEventListener("click" , () => {
    popup3.style.display = "none";
    wrapperBg.style.display = "none";    
})








    
  

