function produto(nome, descricao, preco, imagem) {
    document.write(`
    <style>
        .linha{
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            }
        .coluna-1{
            width: 15%;
            margin-top: auto;
            margin-bottom: auto;
        }
        .coluna-2{
            width: 40%
        }
        .coluna-3{
            width: 20%
        }
        #descricao{
            color: burlywood;
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