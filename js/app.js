const slides = document.querySelector('.slides');
const slidesCount = slides.childElementCount;
const maxLet = (slidesCount -1) * 100 * -1;
let current = 0;
setInterval(function(){
    if(current > maxLet){
        current-= 100;
        slides.style.left = current +'%';
    }else{
        current = 0;
        slides.style.left = 0;
    }
},5000)

const search = document.querySelector('.search-box');
const input = document.querySelector('.input');

search.addEventListener('click', () => {
input.classList.toggle('active')
})

const navMenu = document.querySelector('.nav-icon-menu');
const navigation = document.querySelector('.mobile-navigation');
const navClose = document.querySelector('.nav-icon-close');
const logInIcon = document.querySelector('.login-icon');
const closeLogIn = document.querySelector('.close-card');
const closeSignUp = document.querySelector('.close-card-sign-up');
const logIn = document.querySelector('.login-account');
const signUp = document.querySelector('.sign-up-account');
const signUpLink = document.querySelector('.sign');
const logInLink = document.querySelector('.log');
const haveAccount = document.querySelector('.Have-account');
const dontHaveAccount = document.querySelector('.Dont-have');




logInIcon.addEventListener('click', () => {
    logIn.style.display ="block";
});
closeLogIn.addEventListener('click', () => {
logIn.style.display ="none";
});
dontHaveAccount.addEventListener('click', () => {
signUp.style.display ="block";
})
closeSignUp.addEventListener('click', () => {
signUp.style.display ="none";
})
dontHaveAccount.addEventListener('click', () => {
logIn.style.display ="none";
})
haveAccount.addEventListener('click', () => {
logIn.style.display ="block";
})
haveAccount.addEventListener('click', () => {
signUp.style.display ="none";
})
navMenu.addEventListener('click', () => {
navigation.style.visibility=('visible');
navMenu.style.visibility=('hidden');
navClose.style.visibility=('visible');
})
navClose.addEventListener('click', () => {
navClose.style.visibility=('hidden');
navigation.style.visibility=('hidden');
navMenu.style.visibility=('visible');
})
logInLink.addEventListener('click', () => {
logIn.style.display ="block";
navigation.style.display ="none";
navMenu.style.visibility=('visible');
navClose.style.display ="none";
})
signUpLink.addEventListener('click', () => {
signUp.style.display ="block";
navigation.style.display ="none";
navClose.style.display ="none";
navMenu.style.visibility=('visible');
})

//  form validation 
const submit = document.querySelector('.log-btn');
const submit2 = document.querySelector('.sign-btn');

//  showError
const password = document.getElementById('password');
const Message = document.getElementById('message');
Message.innerHTML = "";
submit.addEventListener('click', () => {
    
    if ( password.value === ""){
        Message.innerHTML = "Field is empty";
        password.style.borderBottomColor="red";
        Message.style.color="red";
        password.focus();
        password.select();
        password.preventDefault();
    }else if ( password.value.length > 10){
        Message.innerHTML = "Password must be less then 10 character";
        password.style.borderBottomColor="red";
        Message.style.color="red";
        password.focus();
        password.select();
        password.preventDefault();
    }else if(password.value.length < 5 ){
        Message.innerHTML = "Password must be moer then 5 character";
        password.style.borderBottomColor="red";
        Message.style.color="red";
        password.focus();
        password.select();
        password.preventDefault();
    }else{
        password.style.borderBottomColor="green";
        Message.innerHTML = "";
    }
})

const fullName = document.getElementById('full-name');
const Message2 = document.getElementById('message-2');
Message.innerHTML = "";
submit.addEventListener('click', () => {
    
    if ( fullName.value === ""){
        Message2.innerHTML = "Field is empty";
        fullName.style.borderBottomColor="red";
        Message2.style.color="red";
        fullName.focus();
        fullName.select();
        fullName.preventDefault();
    }else if ( fullName.value.length > 10){
        Message2.innerHTML = "Password must be less then 10 character";
        fullName.style.borderBottomColor="red";
        Message2.style.color="red";
        fullName.focus();
        fullName.select();
        fullName.preventDefault();
    }else if(fullName.value.length < 5 ){
        Message2.innerHTML = "Password must be moer then 5 character";
        fullName.style.borderBottomColor="red";
        Message2.style.color="red";
        fullName.focus();
        fullName.select();
        fullName.preventDefault();
    }else{
        fullName.style.borderBottomColor="green";
        Message2.innerHTML = "";
    }
})
const passwordSign = document.getElementById('password-sign');
const messageSign = document.getElementById('message-sign');
messageSign.innerHTML = "";
submit2.addEventListener('click', () => {
    
    if ( passwordSign.value === ""){
        messageSign.innerHTML = "Field is empty";
        passwordSign.style.borderBottomColor="red";
        messageSign.style.color="red";
        passwordSign.focus();
        passwordSign.select();
        passwordSign.preventDefault();
    }else if ( passwordSign.value.length > 10){
        messageSign.innerHTML = "Password must be less then 10 character";
        passwordSign.style.borderBottomColor="red";
        messageSign.style.color="red";
        passwordSign.focus();
        passwordSign.select();
        passwordSign.preventDefault();
    }else if(passwordSign.value.length < 5 ){
        messageSign.innerHTML = "Password must be moer then 5 character";
        passwordSign.style.borderBottomColor="red";
        messageSign.style.color="red";
        passwordSign.focus();
        passwordSign.select();
        passwordSign.preventDefault();
    }else{
        passwordSign.style.borderBottomColor="green";
        messageSign.innerHTML = "";
    }
})
const fullNameSign = document.getElementById('full-name-sign');
const MessageSign2 = document.getElementById('message-sign-name');
MessageSign2.innerHTML = "";
submit2.addEventListener('click', () => {
    
    if ( fullNameSign.value === ""){
        MessageSign2.innerHTML = "Field is empty";
        fullNameSign.style.borderBottomColor="red";
        MessageSign2.style.color="red";
        fullNameSign.focus();
        fullNameSign.select();
        fullNameSign.preventDefault();
    }else if ( fullNameSign.value.length > 10){
        MessageSign2.innerHTML = "Password must be less then 10 character";
        fullNameSign.style.borderBottomColor="red";
        MessageSign2.style.color="red";
        fullNameSign.focus();
        fullNameSign.select();
        fullNameSign.preventDefault();
    }else if(fullNameSign.value.length < 5 ){
        MessageSign2.innerHTML = "Password must be moer then 5 character";
        fullNameSign.style.borderBottomColor="red";
        MessageSign2.style.color="red";
        fullNameSign.focus();
        fullNameSign.select();
        fullNameSign.preventDefault();
    }else{
        fullNameSign.style.borderBottomColor="green";
        MessageSign2.innerHTML = "";
    }
})
const email = document.getElementById('email');
submit2.addEventListener('click', () => {
    
    if ( email.value === ""){
        email.style.borderBottomColor="red";
        email.focus();
        email.select();
        email.preventDefault();
    }else if ( email.value.length < 12){
        email.style.borderBottomColor="red";
        email.focus();
        email.select();
        email.preventDefault();
    }else{
        email.style.borderBottomColor="green";


        }
})






const titleCard = document.querySelector('.product-shoping h2');
const shopImage = document.querySelector('.shop-img');
const shopPrice = document.querySelector('.price-shop');
const buyBtn = document.querySelector('.buy-btn-shop');
const colorBtn = document.querySelector('.color-btn');
const colorItemsSpan = document.querySelectorAll('.shop-color span');

const colorSpan = document.querySelector('.shop-color');
const colorBtnShow = document.querySelector('.color-btn');

colorBtnShow.addEventListener('click', () => {
colorSpan.classList.toggle('active');
    })

colorItemsSpan.forEach(span => {
    span.addEventListener('click', () => {
        let colorAtt = span.getAttribute('data-color');
        let imgArr = span.getAttribute('data-img');
        
        colorItemsSpan.forEach(span => {
            span.classList.remove('selected');
        });
        span.classList.add('selected');


       titleCard.style.color= colorAtt;
       shopPrice.style.color = colorAtt;
       buyBtn.style.color = colorAtt;
       colorBtn.style.color = colorAtt;
       shopImage.style.background = imgArr;

    })
    
});

buyBtn.addEventListener('click', () => {
    signUp.style.display ="block";
})