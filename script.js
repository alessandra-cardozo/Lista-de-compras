const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

function adicionarItem() {
    const inputItem = document.getElementById("inputItem");
    const categoria = document.getElementById("categoria").value;
    const mensagem = document.getElementById("mensagem");
    
    let item = inputItem.value.trim();
    
    if (item === "") {
        mensagem.textContent = "Por favor, insira um item!";
        mensagem.style.color = "red";
        return;
    }

    listaDeCompras[categoria].push(item);
    
    mensagem.textContent = "Item adicionado com sucesso!";
    mensagem.style.color = "green";
    
    const listaItens = document.getElementById("listaItens");
    let novoItem = document.createElement("li");
    novoItem.textContent = `${item} (${categoria})`;
    listaItens.appendChild(novoItem);
    
    inputItem.value = "";
}

function exibirLista() {
    const listaFinal = document.getElementById("listaFinal");
    listaFinal.innerHTML = "<h3>Lista de Compras:</h3>";

    for (let categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            let categoriaTitulo = document.createElement("h4");
            categoriaTitulo.textContent = categoria;
            listaFinal.appendChild(categoriaTitulo);
            
            let ul = document.createElement("ul");
            listaDeCompras[categoria].forEach(item => {
                let li = document.createElement("li");
                li.textContent = item;
                ul.appendChild(li);
            });
            
            listaFinal.appendChild(ul);
        }
    }
}
