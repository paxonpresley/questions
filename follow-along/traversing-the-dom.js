//! 1/2 javascripts, this js traverses the DOM
// todo: selected all buttons with a .forEach to select all but only when one is pushed by adding the parameter. param + eventlistener + listen for. listen for click + function with param2. ADDING a const-name = param2 + currenttarget + parent + parent to grab the parent of the parent div. the function: const-name 

const btns = document.querySelectorAll('.question-btn');


btns.forEach(function(btn) {
    btn.addEventListener('click', function (gString) {
        const question = gString.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});