//a) Crie um array com um objeto contendo o id do produto, nome do produto,
//quantidade, valor unitário, preco total, preço de venda, lucro, situação do produto
//Fórmulas:
//Preço total: quantidade * valor unitário
//Preço de venda: preço unitário + 20% sobre o preço unitário
//Lucro: Preço de venda – preço unitário
//Situação do Produto: Se a quantidade for menor que 50, a situação é estável, se
//for maior ou igual a 50 e menor que 100, a situação é boa. Se for maio ou igual a
//100 a situação é excelente.

const mongoose = require('mongoose')
const ProdutoSchema = new mongoose.Schema({
  idProduto: String,
  nomeProduto: String,
  quantidade: Number,
  valorUnitario: Number,
  precoTotal: Number,
  precoVenda: Number,
  lucro: Number,
  situacaoProduto: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Produto', ProdutoSchema)

