// todo: select button, .addevenetlistener then add an if/else function 

const btns = document.querySelectorAll('.question-btn');


btns.forEach(function(btn) {
    btn.addEventListener('click', function (gString) {
        const question = gString.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});