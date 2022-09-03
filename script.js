var content; 
var obj; 
var inputResp = document.getElementsByTagName("input"); 
var main = -1; 
 

var requestURL = 'https://quiz-trainee.herokuapp.com/questions'; 
var request = new XMLHttpRequest(); 
request.open('GET', requestURL); 
request.send(); 
request.onreadystatechange = function(){ 
    if(request.readyState === 4){ 
        if(request.status === 200) 
        obj = JSON.parse(request.responseText);     
    }; 
}; 
 
    //Inicia o Quiz 
    function mostrarQuestao() { 
        document.getElementById("resultado").innerHTML = ""; 
        document.getElementById("listaRespostas").style.display = "block"; 
      
        if(main === -1 || inputResp[0].checked != false || inputResp[1].checked != false || inputResp[2].checked != false || inputResp[3].checked != false){
            document.getElementById("confirmar").textContent = "Próxima pergunta"; 
            main++; 
            proxQuestao(); 
        };
    };
 
    //questoes a partir da segunda    
    function proxQuestao(){
      let i = 0;
      document.getElementById('titulo').textContent = obj[i].title;  
      itens = document.querySelectorAll('span');  
      itens.forEach((item, index) => {  
        item.textContent =  
          obj[i].options[index].answer; 
      });  
      i++;
    }; 
 
     
    function finalizarQuiz() { 
        document.getElementById("listainputResps").style.display = "none"; 
        document.getElementById("resultado").innerHTML = "Sua pontuação: " ; 
         
    }