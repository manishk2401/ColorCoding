let menuBtn = document.getElementById('mobile-menu');
let menuList = document.querySelector('.navbar-menu');

menuBtn.addEventListener('click', mobileMenu);

function mobileMenu(e){
    menuList.classList.toggle('active');

    menuBtn.classList.toggle('inactive');
}

menuList.addEventListener('click', hideMenuBar);
document.getElementById('navbar-logo').addEventListener('click', hideMenuBar);

function hideMenuBar(){
    menuList.classList.remove('active');
    menuBtn.classList.remove('inactive');
}

// creating navbar links hightlight
function highlightMenu(){

    let homeLink = document.getElementById('home-page');
    let aboutLink = document.getElementById('about-page');
    let servicesLink = document.getElementById('services-page');
    let scrollpos = window.scrollY;
    
    if( scrollpos < 450){
        homeLink.classList.add('highlight');
        servicesLink.classList.remove('highlight');
        aboutLink.classList.remove('highlight');
    } else if(scrollpos > 450 && scrollpos < 1110){
        aboutLink.classList.add('highlight');
        homeLink.classList.remove('highlight');
        servicesLink.classList.remove('highlight');
        return
    } else if( scrollpos > 1110 && scrollpos < 2370 ){
        servicesLink.classList.add('highlight');
        homeLink.classList.remove('highlight');
        aboutLink.classList.remove('highlight');
        return
    } else if(scrollpos > 2370){
        servicesLink.classList.remove('highlight');
        homeLink.classList.remove('highlight');
        aboutLink.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);

// creating modal function
let joinBtn = document.getElementById('join-btn');
let modal = document.getElementById('signup-modal');

joinBtn.addEventListener('click', activeModal);

function activeModal(){
    modal.classList.add('active-modal');
}
// modal close btn
document.getElementById('modal-close-btn').addEventListener('click', function(){
    modal.classList.remove('active-modal');
})

// modal form Validation
// let small = document.querySelector('small');
let form = document.getElementById('form-modal');
let nameValue = document.getElementById('full-name');
let contact = document.getElementById('contact');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

form.addEventListener('submit', updateForm);
function updateForm(e){
    e.preventDefault();
    
    checkRequired([nameValue,contact,email,password,password2]);

    emailValidation(email);
}

function checkRequired(inputArr){
    inputArr.forEach(element => {
        if(!element.value){
            showError(element, `${userTitle(element)} is Required` );
        }else{
            showSuccess(element);
        }
        element.value =''
    });
}

function showError(input, message){
   let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    small.innerText = message   
    
    small.classList.add('active')
}

function showSuccess(input){
   let formControl = input.parentElement;
    let small = formControl.querySelector('small');    
    small.classList.remove('active')
}


// creating userTitle
function userTitle(input){
    let formControl = input.parentElement;
    console.log(formControl);
     let title = formControl.querySelector('label');    
     return title.innerText
 }


//  email validatoin
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

function emailValidation(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(input.value === re){
        showSuccess(input)
    } else{
        showError(input, `Enter the valid Format`)
    }
}