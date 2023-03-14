var container = document.getElementById("container");

fetch('arquivo.json')
  .then(response => response.json())
  .then(data => {
    data.itens.forEach(function(item) {
        var div = document.createElement("div");
        div.classList.add("classe-de-teste");
        var nome = document.createElement("h3");
        var preco = document.createElement("p");
        var tipo = document.createElement("p");
        var origem = document.createElement("p");
      
        nome.innerText = item.nome;
        preco.innerText = item.preco;
        tipo.innerText = item.tipo;
        origem.innerText = item.origem;
      
        div.appendChild(nome);
        div.appendChild(preco);
        div.appendChild(tipo);
        div.appendChild(origem);
      
        container.appendChild(div);
      });
  });
