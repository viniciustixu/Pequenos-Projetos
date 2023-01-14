let texto = document.getElementById('txta1')
let res = document.getElementById('resultado')





    


function calcular() {
    let c = texto.match(/@\w+\s/g)
    let result = '';
    c.forEach( (item) => {
        result += item;
    });
    res.innerHTML = `${result}`
}

