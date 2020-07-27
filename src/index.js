import './css/style.css';
import './scss/main.scss';


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

const callMe = document.querySelector(".header__button");
callMe.addEventListener("click" , () => alert('Позвони мне, позвони'))

const btnClear = document.getElementById("btn-clear");// 
btnClear.addEventListener("click" , () => {
    for (let r = 1; r < 7; r++) {
        document.getElementById(`select-${r}`)
        .options[0].selected = 'selected'        
    }
    
})

// const btnTab = document.querySelectorAll('.filterContent__tabs-btn');
// for (let i = 0; i < btnTab.length; i++) {
//     btnTab[i].onclick = function () {
//         btnTab[i].classList.add('active');    
//     }   
    
// }




    
  

