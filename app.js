
const jumpToJoin = document.querySelector('.jump');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');
const inputs = document.querySelectorAll('input');
const fWarn = document.querySelector('.fname-warning');
const lWarn = document.querySelector('.lname-warning');
const eWarn = document.querySelector('.email-warning');
const pWarn = document.querySelector('.pass1-warning');
const confirmWarn = document.querySelector('.pass2-warning');
const signInLink = document.querySelector('.sign-in-link');
const invalidSpans = document.querySelectorAll('.invalid');
const subscribeBtn = document.querySelector('.subscribe');

const upper = document.querySelector('.upper');
const lower = document.querySelector('.lower');
const num = document.querySelector('.num');
const special = document.querySelector('.special');

const emailRegex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
const phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
const passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

const invalid = "red solid 1px";
const valid = "green solid 1px";


jumpToJoin.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
})

signInLink.addEventListener('click', (e) => {
    e.preventDefault();
})

subscribeBtn.addEventListener('click', checkBeforeSubmit);
function checkBeforeSubmit() {
    let isFormCompleted = true;
    inputs.forEach(input => {
        if (!input.value || input.classList.contains('invalid')) {
            isFormCompleted = false;
        }
    })
    if (!isFormCompleted) alert("Opps! Some details are invalid or missing. Check again!");
}

inputs.forEach(input => {
    input.addEventListener('change', (e) => {
        checkInput(e);
    })
})

function checkInput(e) {
    let info = e.target.value;
    if (e.target.id == 'fname') {
        if (info.length < 2) {
            e.target.classList.add('invalid');
            e.target.style.border = invalid;
            fWarn.style.display = 'block';
        } else if (info.length >= 2) {
            e.target.classList.remove('invalid');
            e.target.style.border = valid;
            fWarn.style.display = 'none';
        }
    } else if (e.target.id == 'lname') {
        if (info.length < 3) {
            e.target.classList.add('invalid');
            e.target.style.border = invalid;
            lWarn.style.display = 'block';
        } else if (info.length >= 3) {
            e.target.classList.remove('invalid');
            e.target.style.border = valid;
            lWarn.style.display = 'none';
        }
    } else if (e.target.id == 'email') {
        let isEmailValid = emailRegex.test(info);
        if (!isEmailValid) {
            e.target.classList.add('invalid');
            e.target.style.border = invalid;
            eWarn.style.display = 'block';
        } else if (isEmailValid) {
            e.target.classList.remove('invalid');
            e.target.style.border = valid;
            eWarn.style.display = 'none';
        }
    } else if (e.target.id == 'phone') {
        let isPhoneValid = phoneRegex.test(info);
        if (!isPhoneValid) {
            e.target.classList.add('invalid');
            e.target.style.border = invalid;
        } else if (isPhoneValid) {
            e.target.classList.remove('invalid');
            e.target.style.border = valid;
        }
    } else if (e.target.id == 'password1') {
        let isPassValid = passRegex.test(info);
        if (!isPassValid) {
            e.target.classList.add('invalid');
            e.target.style.border = invalid;
        } else if (isPassValid) {
            e.target.classList.remove('invalid');
            e.target.style.border = valid;
        }
    } else if (e.target.id == 'password2') {
        let firstPass = pass1.value;
        let confirm = pass2.value;
        if (firstPass == confirm) {
            e.target.classList.remove('invalid');
            pass2.style.border = valid;
            confirmWarn.style.display = 'none';
        } else {
            e.target.classList.add('invalid');
            pass2.style.border = invalid;
            confirmWarn.style.display = 'block';
        }
    }
}

pass1.addEventListener('input', checkPassword);

function checkPassword() {
    pWarn.style.display = 'block';

    const cap = new RegExp(/(?=.*[A-Z])/);
    const small = new RegExp(/(?=.*[a-z])/);
    const number = new RegExp(/(?=.*\d)/);
    const speCha = new RegExp(/(?=.*[@$#!%*?&])/);

    let hasCap = cap.test(pass1.value);
    let hasSmall = small.test(pass1.value);
    let hasSpecial = speCha.test(pass1.value);
    let hasNum = number.test(pass1.value);

    if (hasCap) {
        upper.style.color = 'green';
    } else {
        upper.style.color = 'var(--descr-text)';
    }

    if (hasSmall) {
        lower.style.color = 'green';
    } else {
        lower.style.color = 'var(--descr-text)';
    }

    if (hasNum) {
        num.style.color = 'green';
    } else {
        num.style.color = 'var(--descr-text)';
    }

    if (hasSpecial) {
        special.style.color = 'green';
    } else {
        special.style.color = 'var(--descr-text)';
    }

}
