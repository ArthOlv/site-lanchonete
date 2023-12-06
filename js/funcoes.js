
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

function total (carrinho, tipo) {
    var soma = 0;
    for (i in carrinho) {
        let prod = carrinho[i];
        soma += prod.preco * prod.qt;
    }

    if (tipo == "pix") {
        let total = soma*0.9;
    } else if (tipo == "dinheiro") {
        let total = soma*0.95;
    } else {
        let total = soma*1.1;
    }

    sessionStorage.setItem("total", soma.toFixed(2));
}

function administrativo(x) {
    document.write(`
    <div class="linha">
        <div class="coluna-1"> 
            <img src="${x.imagem}" width="160px">
        </div>
        <div class="coluna-2">
            <h4 class="texto-produtos">${x.nome}</h4>
            <h4 class="texto-produtos">R$ ${x.preco}</h4>
            <p class="texto-produtos">Novo preço:</p>
            <input type="number" id="${x.nome}_preco">
        </div>
        <div class="coluna-3">
            <h4 class="texto-produtos">Disponibilidade</h4>
            <p class="texto-produtos">No estoque</p>
            <input type="checkbox" id="${x.nome}_ativo">
        </div>
    </div>
`);
}

function atualizar(lista_produtos) {
    for (i in lista_produtos) {
        let prod = lista_produtos[i]
        var caixa = document.getElementById(`${prod.nome}_ativo`);
        console.log(caixa);
        console.log(caixa.value);

    }
}