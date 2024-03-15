let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active')
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
    
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 4,
        },
        1200:{
           slidesPerView: 5,
        },
    },
});

// Local Storage for contact

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");
const subjectInput = document.getElementById("subject");
const submit = document.getElementById("submit");

let contactData = localStorage.getItem("contactData");
if (contactData) {
    contactData = JSON.parse(contactData);
    nameInput.value = contactData.name;
    emailInput.value = contactData.email;
    subjectInput.value = contactData.subject;
}

submit.addEventListener("click", function(event){
    event.preventDefault();
    const contact = {
        name : nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value
    };
    localStorage.setItem("contactData", JSON.stringify(contact));
});

function clearLocalStorage() {
    // Clear local storage after 2 hours
    setTimeout(function() {
      localStorage.removeItem('contactData');
      console.log('Local storage cleared after 2 hours');
    }, 1 * 60 * 60 * 1000);
  }
  
