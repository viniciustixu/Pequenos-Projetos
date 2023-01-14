let texto = '@MosFazli	Mostafa Fazli MosFazli\nAn Ordinary Programmer\n Shahroud university of technology  Mashhad\n\n@LukeberryPi	Lukeberry Pi LukeberryPi\nBritish-brazilian Software Engineer at Hostgator @lucasInutil'
let matches = texto.match(/^@\w+/gm);

console.log(matches);