


  // cria um elemento de áudio
  var audio = new Audio("path/to/sound.mp3");
  
  // função para reproduzir o áudio
  function playSound() {
    setInterval(function(){
        audio.play();
    }, 3600000);
  }

  // atribui a função de reprodução de áudio ao botão
  var playButton = document.getElementById("play-button");
  playButton.onclick = playSound;
