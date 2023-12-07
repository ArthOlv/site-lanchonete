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

function administrativo(x) {
    document.write(`
    <div class="linha">
        <div class="coluna-1"> 
            <img src="${x.imagem}" width="160px">
        </div>
        <div class="coluna-2">
            <h4 class="texto-produtos">${x.nome}</h4>
            <h4 class="texto-produtos">R$ ${x.preco}</h4>
        </div>
        <div class="coluna-3">
            <h4 class="texto-produtos">Disponibilidade</h4>
            <p class="texto-produtos">No estoque</p>`)
            
    if (x.ativo) {        
        document.write(`
            <input type="checkbox" id="${x.nome}_ativo" checked>
            </div>
        </div>
        `);
    } else {
        document.write(`
            <input type="checkbox" id="${x.nome}_ativo">
            </div>
        </div>
        `);
    }
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

function total (carrinho, tipo) {
    var soma = 0;
    for (i in carrinho) {
        let prod = carrinho[i];
        soma += prod.preco * prod.qt;
    }

    if (tipo == "pix") {
        var desconto = soma*0.9;
    } else if (tipo == "dinheiro") {
        var desconto = soma*0.95;
    } else {
        var desconto = soma*1.1;
    }

    sessionStorage.setItem("total", desconto.toFixed(2));
    console.log(JSON.parse(sessionStorage.getItem("total")));
    var disp = document.getElementById("desconto");
    disp.innerHTML = `Total: R$ `+desconto.toFixed(2)
}

function atualizar(lista_produtos) {
    for (i in lista_produtos) {
        let prod = lista_produtos[i]
        var caixa = document.getElementById(`${prod.nome}_ativo`);
        
        lista_produtos[i]["ativo"] = caixa.checked;
    }
    sessionStorage.setItem("lista_produtos", JSON.stringify(lista_produtos));
}