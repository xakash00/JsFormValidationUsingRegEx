console.log("Hello Akash ");
const name = document.getElementById('uname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false;
let validEmail = false;
let validPhone = false;



//console.log(Uname ,email,phone)

uname.addEventListener('blur', () => {
    console.log("name  is blurred");
    //validate name here
    let regx = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str = uname.value;
    console.log(regx, str);
    if (regx.test(str)) {
        console.log('your name is valid ');
        uname.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log("your name is not valid");
        uname.classList.add('is-invalid');
        validUser = false;
    }
})

email.addEventListener('blur', () => {
    console.log("email  is blurred");
    //validate email here
    let regx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regx, str);
    if (regx.test(str)) {
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log("phone  is blurred");
    //validate phone here
    let regx = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(regx, str);
    if (regx.test(str)) {
        console.log('your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('your phone is not valid');
        phone.classList.add('your phone nuber is not valid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You Clicked on submit');
    //submit form here
    if (validEmail && validPhone && validUser) {
        console.log('Phone ,Email and username are valid.Submitting the form.');
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');


    }
    else {
        console.log('One of Phone, email and username are not valid ...please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');

    }






})