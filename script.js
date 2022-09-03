import{getDatas} from "./datas.js"
let obj = await getDatas(); 

let inputResp = document.getElementsByTagName("input"); 
let main = -1;
let itens;


let btn = document.getElementById("confirmar").addEventListener('click', mostrarQuestao, false);


/* btn.addEventListener('click', () => {mostrarQuestao()}); */

    

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
      let input = document.querySelectorAll('input');

      document.getElementById('titulo').textContent = obj[i].title;  
      itens = document.querySelectorAll('span');  
      itens.forEach((item, index) => {  
        item.textContent =  
          obj[i].options[index].answer;
          if(input.checked){

          } 
      });  
      i++;
    }; 
 
     
    function finalizarQuiz() { 
        document.getElementById("listainputResps").style.display = "none"; 
        document.getElementById("resultado").innerHTML = "Sua pontuação: " ; 
         
    }