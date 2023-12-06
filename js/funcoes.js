
function produto(nome, descricao, preco, imagem) {
    document.write(`
    <div class="linha">
        <div class="coluna-1"> 
            <img src="${imagem}" width="160px">
        </div>
        <div class="coluna-2">
            <h4 class="texto-produtos">${nome}</h4>
            <p id="descricao">${descricao}</p>
            <p class="texto-produtos">R$ ${preco}</p>
        </div>
        <div class="coluna-3">
            <input type="number" id="${nome}" max="9" min="0" placeholder="0">
            <p id='unidade'>unidade(s)</p>
        </div>
    </div>
        `);
}

function add_carrinho(lista_produtos) {
    for (i in lista_produtos) {
        let carrinho = sessionStorage.getItem("carrinho");
        let produto = lista_produtos[i];

        try {
            let x = document.getElementById(produto["nome"]);
            console.log(`${x.value} ${produto["nome"]}`);
        } catch {
            console.log("Erro");
        }
    }
    alert(`Adicionado ao carrinho`);
}