
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
    let sacola = sessionStorage.getItem("carrinho");
    sacola = JSON.parse(sacola);

    for (i in lista_produtos) {
        let produto = lista_produtos[i];

        try {
            let x = document.getElementById(produto["nome"]);
            let item = {"nome": produto["nome"],"preco": produto["preco"], "qt": parseInt(x.value), "img": produto["imagem"]};

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