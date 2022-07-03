const jumpToJoin = document.querySelector('.jump');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');
const inputs = document.querySelector('input');
const fWarn = document.querySelector('.fname-warning');
const lWarn = document.querySelector('.lname-warning');


jumpToJoin.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
})

fname.addEventListener('change', (e) => {
    checkInput(e);
});

lname.addEventListener('change', (e) => {
    checkInput(e);
});

function checkInput(e) {
    let info = e.target.value;
    // Check input id and check the value length accordingly.
    if (e.target.id == 'fname') {
        if (info.length < 2) {
            e.target.style.border = "red solid 1px";
            fWarn.style.display = 'block';
        } else if (info.length >= 2) {
            e.target.style.border = "green solid 1px";
            fWarn.style.display = 'none';

        }
    } else if (e.target.id == 'lname') {
        if (info.length < 3) {
            e.target.style.border = "red solid 1px";
            lWarn.style.display = 'block';
        } else if (info.length >= 3) {
            e.target.style.border = "green solid 1px";
            lWarn.style.display = 'none';
        }
    }
}