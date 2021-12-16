//Javascript validation

let form = document.body.getElementsByTagName('form')[0];

form.addEventListener('submit', (e) => {
    let first = document.getElementById('first-name');
    let last = document.getElementById('last-name');
    let email = document.getElementById('email-address');
    let question = document.getElementById('your-question');
    
    if (!first.value.length) {
        first.previousElementSibling.classList.add('required');
    
        e.preventDefault();
    }
    
    if (!last.value.length) {
        last.previousElementSibling.classList.add('required');
    
        e.preventDefault();
    }
    
    if (!email.value.length) {
        email.previousElementSibling.classList.add('required');
    
        e.preventDefault();
    }
    
    if (!question.value.length) {
        question.previousElementSibling.classList.add('required');
    
        e.preventDefault();
    }
    return false;
})
