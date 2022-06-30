const name = document.getElementById('name');

const email = document.getElementById('email');

const phone = document.getElementById('number');

let nameValid = false;
let emailValid = false;
let numberValid = false;


// NAME VALIDATION========

name.addEventListener('blur', () => {

    let regex = /^[a-zA-Z][0-9a-zA-Z]{4,10}$/;

    if (regex.test(name.value)) {
        console.log('your input name is write');
        let warningMsg = document.getElementById('warning-msg-name');
        warningMsg.classList.add('warning-msg');
        nameValid = true;
        name.style.borderColor = '';

    } else {
        console.log('enter valid name');
        let warningMsg = document.getElementById('warning-msg-name');
        warningMsg.classList.remove('warning-msg');

        warningMsg.style.color = 'red';

        name.style.borderColor = 'red';

        nameValid = false;



    }

});


// email VALIDATION========

email.addEventListener('blur', () => {

    let regex = /^([_\-\.0-9a-z])+@([a-z]){1,7}\.([a-z]){2,7}$/;

    if (regex.test(email.value)) {
        console.log('your email is valid');
        let warningMsg = document.getElementById('warning-msg-email');
        warningMsg.classList.add('warning-msg');
        email.style.borderColor = '';

        emailValid = true;

    } else {
        console.log('enter valid email');
        let warningMsg = document.getElementById('warning-msg-email');
        warningMsg.classList.remove('warning-msg');

        warningMsg.style.color = 'red';

        email.style.borderColor = 'red';

        emailValid = false;



    }

});


// Number validation

phone.addEventListener('blur', () => {

    let regex = /([0-9]){11}$/;

    if (regex.test(phone.value)) {
        console.log('your number is valid');
        let warningMsg = document.getElementById('warning-msg-phone');
        warningMsg.classList.add('warning-msg');
        phone.style.borderColor = '';

        numberValid = true;

    } else {
        console.log('your number is  invalid');
        let warningMsg = document.getElementById('warning-msg-phone');
        warningMsg.classList.remove('warning-msg');

        warningMsg.style.color = 'red';

        phone.style.borderColor = 'red';
        numberValid = false;


    }

});

$('#alert-success').hide();
$('#alert-error').hide();



document.getElementById('submit');



submit.addEventListener('click', (e) => {
    e.preventDefault();



    if (nameValid && emailValid && numberValid) {
        $('#alert-success').show(400);
        $('#alert-error').hide(400);
    } else {
        $('#alert-success').hide(400);
        $('#alert-error').show(400);
    }
})