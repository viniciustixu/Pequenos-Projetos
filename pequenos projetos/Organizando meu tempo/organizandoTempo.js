const audio = new Audio("music/musica.mp3"); // audio que será tocado
const now = new Date(); // importa a data e hora do sistema
const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0, 0); // Define que será de hora em hora
const timeToNextHour = nextHour - now; // diminui a hora atual do item acima
let res = document.getElementById('resultado')
let horaAgora = now.getHours()

setTimeout(function() {
    audio.play();
    setInterval(function() {
        audio.play();
    }, 3600000); // 3600000 milissegundos = 1 hora
}, timeToNextHour);

setInterval(function() {
    if (horaAgora == 9 || horaAgora == 11 || horaAgora == 13 || horaAgora == 15 || horaAgora == 17 || horaAgora == 19 || horaAgora == 21) {
        res.innerHTML = `Hora de estudar ${horaAgora}`
    } 
    else if(horaAgora == 8 || horaAgora == 12) {
        res.innerHTML = `Hora de Comer ${horaAgora}`
    } 
    else if(horaAgora == 14 || horaAgora == 16) {
        res.innerHTML = `Hora da tarefa diária ${horaAgora}`
    } 
    else if (horaAgora == 23) {
        res.innerHTML = `Hora de dormir ${horaAgora}`
    } 
    else {
        res.innerHTML = `Hora livre ${horaAgora}`
    }
}, 1000);