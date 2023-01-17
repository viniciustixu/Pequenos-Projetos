  // cria um elemento de áudio
  var audio = new Audio("music/musica.mp3");
  
  // atribui a função de reprodução de áudio ao botão
  var playButton = document.getElementById("play-button");
  playButton.onclick = playSound;

  // função para reproduzir o áudio
  function playSound() {
    setInterval(function(){
        audio.play();
    }, 3600000);
  }

