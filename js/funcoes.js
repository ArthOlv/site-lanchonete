
function produto(x) {
    document.write(`
    <div class="linha">
        <div class="coluna-1"> 
            <img src="${x.imagem}" width="160px">
        </div>
        <div class="coluna-2">
            <h4 class="texto-produtos">${x.nome}</h4>
            <p id="descricao">${x.descricao}</p>
            <p class="texto-produtos">R$ ${x.preco}</p>
        </div>
        <div class="coluna-3">
            <input type="number" id="${x.nome}" max="9" min="0" placeholder="0">
            <p id='unidade'>unidade(s)</p>
        </div>
    </div>
        `);
}

function add_carrinho(lista_produtos) {
    let sacola = sessionStorage.getItem("carrinho");
    sacola = JSON.parse(sacola);

    for (i in lista_produtos) {
        let produto = lista_produtos[i];

        try {
            let x = document.getElementById(produto["nome"]);
            let item = {"nome": produto["nome"],"preco": produto["preco"], "qt": parseInt(x.value), "imagem": produto["imagem"]};

            if (x.value >0) {
                sacola.push(item);
            }
            
        } catch (e) {
            console.log(`Erro: ${e}`);
        }
    }

    sessionStorage.setItem("carrinho", JSON.stringify(sacola));
    alert(`Adicionado ao carrinho`);
}

function produtos_carrinho(produto) {
    document.write(`
        <div class="linha">
            <div class="coluna-1"> 
                <img src="${produto.imagem}" width="160px">
            </div>
            <div class="coluna-2">
                <h4 class="texto-produtos">${produto.nome}</h4>
                <p id="descricao">Quantidade: ${produto.qt}</p>
                <p class="texto-produtos">R$ ${produto.preco}</p>
            </div>
            <div class="coluna-3">
                <p class="texto-produtos">Total: R$ ${(produto.preco*produto.qt).toFixed(2)}</p>
            </div>
        </div>
    `);
}

function total (carrinho) {
    var soma = 0;
    for (i in carrinho) {
        let prod = carrinho[i];
        soma += prod.preco * prod.qt;
    }

    document.write(`${soma.toFixed(2)}`)
}

function pagar(carrinho) {
    alert("Pedido pago com sucesso")
}

function administrativo(lista_produtos) {
    document.write(`
    <div class="linha">
        <div class="coluna-1"> 
            <img src="${produto.imagem}" width="160px">
        </div>
        <div class="coluna-2">
            <h4 class="texto-produtos">${produto.nome}</h4>
            <h4 class="texto-produtos">R$ ${produto.preco}</h4>
            <p class="texto-produtos">Novo preço:</p>
            <input>
        </div>
        <div class="coluna-3">
            <h4 class="texto-produtos">${produto.nome}</h4>
            <input Disponibilidade>
        </div>
    </div>
`);
}