function produto(nome, descricao, preco, imagem) {
    document.write(`
    <style>
        .linha{
            display: flex;
            flex-flow: row wrap;
            }
        .coluna-1{
            width: 15%;
        }
        .coluna-2{
            width: 40%
        }
        .coluna-3{
            width: 20%
        }
        #descricao{
            color: grey;
        }
        .texto-produtos{
            color: #FFF;
        }
    </style>
    <div class="linha">
        <div class="coluna-1">
            <br>  
            <img src="${imagem}" width="80px">
        </div>
        <div class="coluna-2">
            <h4 class="texto-produtos">${nome}</h4>
            <p id="descricao">${descricao}</p>
            <p class="texto-produtos">R$ ${preco}</p>
        </div>
        <div class="coluna-3">
            <br>
            <input type="number" id="${nome}">
        </div>
    </div>
        `);
    
    document.write("<br>")
}