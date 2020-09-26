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
const emailForm = document.querySelector('.popup1__enter-email');
const btnFormLogin = document.querySelector('.popup1__enter-btn');

password.oninput = () => {
    if (password.value.length < 4 ) {
        password.style.border = '2px solid red';
        btnFormLogin.disabled = true;
    } else {
        password.style.border = '2px solid green';
        btnFormLogin.disabled = false;
    }        
};
    
emailForm.oninput = () => {
    if (validateEmail(emailForm.value)) {
        emailForm.style.border = '2px solid green';
        btnFormLogin.disabled = false;
    } else {
        emailForm.style.border = '2px solid red';
        btnFormLogin.disabled = true;
    }    
};

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

//Функция валидации телефона
const maskPhone = /^(?!\+.*\(.*\).*\-\-.*$)(?!\+.*\(.*\).*\-$)(\+[3][8]\([0][0-9]{2}\)\d{3}[-]{1}\d{2}[-]{1}\d{2})$/;
const validPhone = document.querySelector('.popup2__input');
const btnPhone = document.querySelector('.popup2__btn');

const validatePhone = (value) => maskPhone.test(value);  

validPhone.oninput = () => {
    if (validatePhone(validPhone.value)) {
        validPhone.style.border = '2px solid green';
        btnPhone.disabled = false;
    } else {
        validPhone.style.border = '2px solid red';
        btnPhone.disabled = true;
      }
  };

//Функция валидности Поиска
const validSearch = document.querySelector('.search__input');
const btnSearch = document.querySelector('.search__btn');

validSearch.oninput = () => {
    if (validSearch.value.length < 2) {
        validSearch.style.border = '2px solid red';
        btnSearch.disabled = true;
    } else {
        validSearch.style.border = '2px solid green';
        btnSearch.disabled = false;  
    }   
}

//Функция переключение Tab1, Tab 2
const tabs = document.querySelectorAll('.filter__content-tab');

tabs.forEach( item => {
    item.addEventListener('click', selectTabs)
});

function selectTabs () {
    tabs.forEach( item => {
        item.classList.remove('tab-active');
    });
    this.classList.add('tab-active');
}

//Функция переключение табов в панели навигации
const tabNav = document.querySelectorAll('.filter__nav-item');

tabNav.forEach( item => {
    item.addEventListener('click', selectTabNav)
});

function selectTabNav () {
    tabNav.forEach( item => {
        item.classList.remove('is-active');
    });
    this.classList.add('is-active');    
}

//Функция сброса select & input
const btnClear = document.getElementById("btn-clear");
btnClear.addEventListener("click" , () => {
    for (let r = 1; r < 6; r++) {
        document.getElementById(`select-${r}`)
        .options[0].selected = 'selected';                      
    }
    for (let d = 1; d < 3; d++) {
        document.getElementById(`input-${d}`).value = "";              
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
const footerBtnForm = document.querySelector('.footer__form-btn');

const validateEmail = (value) => emailValid.test(value);  

inputEmail.oninput = () => {
    if (validateEmail(inputEmail.value)) {
        inputEmail.style.border = '2px solid green';
        footerBtnForm.disabled = false;
    } else {
        inputEmail.style.border = '2px solid red';
        footerBtnForm.disabled = true;
    } 
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








    
  

