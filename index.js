const CorrectAnswers = ['A','A','A','A','B','B','B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e=>{
    e.preventDefault(); // prevent refreshing
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
    

    //checking answers
    userAnswers.forEach((answer,index) => {
    if(answer === CorrectAnswers[index]){
    score +=10;
    
     }
    
    });
    //results
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let out= 0;

    const timer = setInterval(()=> {

        result.querySelector('span').textContent = `${out}%`;
        if (out === score) {
            clearInterval(timer);
        } else{
        out++;
        }
    },10);
    
});

