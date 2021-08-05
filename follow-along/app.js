// ! using selectors inside the element
// TODO: select the "<article class="question">" srticles,

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
   // * console.log(question);
   const btn = question.querySelector('.question-btn');
   // * console.log(btn);
   btn.addEventListener('click', function(){

   })
});




//! this js solves our problem by traversing the DOM
// todo: selected all buttons with a .forEach to select all but only when one is pushed by adding the parameter. param + eventlistener + listen for. listen for click + function with param2. ADDING a const-name = param2 + currenttarget + parent + parent to grab the parent of the parent div. the function: const-name 

// const btns = document.querySelectorAll('.question-btn');


// btns.forEach(function(btn) {
//     btn.addEventListener('click', function (gString) {
//         const question = gString.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });