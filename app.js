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
const emailRegex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
const phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);

const valid = "red solid 1px";
const invalid = "green solid 1px";



jumpToJoin.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
})


inputs.forEach(input => {
    input.addEventListener('change', (e) => {
        checkInput(e);
    })
})

function checkInput(e) {
    let info = e.target.value;
    // Check input id and check the value length accordingly.
    if (e.target.id == 'fname') {
        if (info.length < 2) {
            e.target.style.border = valid;
            fWarn.style.display = 'block';
        } else if (info.length >= 2) {
            e.target.style.border = invalid;
            fWarn.style.display = 'none';
        }
    } else if (e.target.id == 'lname') {
        if (info.length < 3) {
            e.target.style.border = valid;
            lWarn.style.display = 'block';
        } else if (info.length >= 3) {
            e.target.style.border = invalid;
            lWarn.style.display = 'none';
        }
    } else if (e.target.id == 'email') {
        let isEmailValid = emailRegex.test(info);
        if (!isEmailValid) {
            e.target.style.border = valid;
            eWarn.style.display = 'block';
        } else if (isEmailValid) {
            e.target.style.border = invalid;
            eWarn.style.display = 'none';
        }
    } else if (e.target.id == 'phone') {
        let isPhoneValid = phoneRegex.test(info);
        if (!isPhoneValid) {
            e.target.style.border = valid;
        } else if (isPhoneValid) {
            e.target.style.border = invalid;
        }
    }
}