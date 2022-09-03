export async function getDatas(){
    let res = await fetch('https://quiz-trainee.herokuapp.com/questions');
    let data = await res.json();
    return data;
};