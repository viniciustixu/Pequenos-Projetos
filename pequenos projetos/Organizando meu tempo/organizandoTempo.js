// Importando ID's e eventListeners
var audio = new Audio("music/musica.mp3");
var playButton = document.getElementById("play-button");
playButton.onclick = playSound;
var res = document.getElementById('resultado')
var tempo = new Date()
var horaAgora = tempo.getHours()



// função para reproduzir o áudio
function playSound() {

setInterval(function(){
    audio.play();


    switch (horaAgora) {
        case 8:
            // 8 horas
            break;
        
        case 9:
            // 9 horas
            break;
        
        case 10:
            // 10 horas
            break;
        
        case 11:
            // 11 horas
            break;
        
        case 12:
            // 12 horas
            break;
        
        case 13:
            // 13 horas
            res.innerHTML = `Estudar`
            break;  
        
        case 14:
            // 14 horas
            res.innerHTML = `Rotina diária`
            break;            
        
        case 15:
            // 15 horas
            break;            
        
        case 16:
            // 16 horas
            break;
        
        case 17:
            // 17 horas
            break;
        
        case 18:
            // 18 horas
            break;
        
        case 19:
            // 19 horas
            break;
        
        case 20:
            // 20 horas
            break;
        
        case 21:
            // 21 horas
            break;                    
        
        case 22:
            // 22 horas
            break;
        
        case 23:
            // 23 horas
            break;

        default:
            res.innerHTML = `Você deveria estar dormindo!`
    }
}, 3600000); // Intervalo de 1 hora = 3600000

 res.innerHTML += `&#10004;`
}
