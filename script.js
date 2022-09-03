import{getDatas} from "./datas.js"
let obj = await getDatas(); 

let inputResp = document.getElementsByTagName("input"); 
let main = -1;
let btn = document.getElementById("confirmar")
let contador = 0;




/* btn.addEventListener('click', () => {mostrarQuestao()}); */



//Inicia o Quiz
function mostrarQuestao() { 
  document.getElementById("resultado").innerHTML = ""; 
  document.getElementById("listaRespostas").style.display = "block"; 
  
  if(main === -1 || inputResp[0].checked != false || inputResp[1].checked != false || inputResp[2].checked != false || inputResp[3].checked != false){
    if(main != -1){
      for(var i =0; i < obj[main].options.length; i++){
          contador = contador + inputResp[i].checked*obj[main]['options'][i]['value']
      }
  }
    document.getElementById("confirmar").textContent = "Próxima pergunta"; 
    main++;
    proxQuestao(); 
  };
    };

btn.addEventListener('click', mostrarQuestao, false);

    function reiniciar(){
      main = -1;
      contador = 0;
      for(let i = 0; i<obj[main].options[i].value;i++){
        document.location.reload(true);
      }
    }

    //questoes a partir da segunda    
    function proxQuestao(){
      if(main == -1){  
        document.getElementById("titulo").classList.remove('hide');
        document.getElementById("resultado").remove('hide');  
    }; 
  
    if(main < obj.length){  
        document.getElementById("titulo").innerHTML=obj[main].title;  
          
        for(var i=0 ; i < obj[main].options.length ; i++){  
            if(inputResp[i].checked === true){  
                inputResp[i].checked = false;  
            }  
            document.getElementsByTagName("span")[i].innerHTML=obj[main].options[i].answer  
            inputResp.value=obj[main].options[i].value  
        }  
          
    } 

      
    else{  
        
        finalizarQuiz();  
    }  
    }; 
 
     
    function finalizarQuiz() {
        document.getElementById("confirmar").innerHTML = "Refazer quiz";
        document.getElementById("listaRespostas").style.display = "none"; 
        document.getElementById("resultado").innerHTML = "Sua pontuação: " + contador + " pontos em 15";   
        btn.addEventListener('click', reiniciar(), false); 
    }