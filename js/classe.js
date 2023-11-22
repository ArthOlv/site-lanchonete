class Lanche {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }

}

var carne = new Lanche("carne", 13, "pão, carne e queijo");
console.log(carne);
console.log(carne.descricao)