// ! using selectors inside the element
// TODO: select the "<article class="question">" srticles,

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
   // * console.log(question);
   const btn = question.querySelector('question-btn');
   console.log(btn);
});