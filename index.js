const CorrectAnswers = ['B','B','B','B','B','B','B','B','B','B'];
const form = document.querySelector('.quiz-form');



form.addEventListener('submit', e=>{
    e.preventDefault(); // prevent refreshing
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value];
    
    userAnswers.forEach((answer,index) => {
    if(answer === CorrectAnswers[index]){
    score +=10;
    
     }
    
    });
    console.log(score);
});