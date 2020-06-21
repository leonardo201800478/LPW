const Produto = require('../models/Produtos')

module.exports = {

  async index(req, res) {
    const produto = await Produto.find()
    return res.json(produto)
  },

  async show(req, res) {
    const { id } = req.params;
    const produto = await Produto.findById(id)
    return res.json(produto)

  },

  async store(req, res) {
    const { nomeProduto, quantidade, valorUnitario, precoTotal, precoVenda, lucro, situacaoProduto } = req.body

    precoTotal = quantidade * valorUnitario;
    precoVenda = valorUnitario * 1.2;
    lucro = precoVenda - valorUnitario;
    situacaoProduto = function sitProduto(situacao) {

      switch (situacao) {
        case quantidade < 50:
          return res.send('A situação é estável!');
          break;
        case quantidade >= 50:
          return res.send('A situação é boa!')
          break;
          case quantidade >= 100:
            return res.send('A situação é excelente!')
            break;
      }
    }
    
    await produtoEstoque.save()

//a) Crie um array com um objeto contendo o id do produto, nome do produto,
//quantidade, valor unitário, preco total, preço de venda, lucro, situação do produto
//Fórmulas:
//Preço total: quantidade * valor unitário
//Preço de venda: preço unitário + 20% sobre o preço unitário
//Lucro: Preço de venda – preço unitário
//Situação do Produto: Se a quantidade for menor que 50, a situação é estável, se
//for maior ou igual a 50 e menor que 100, a situação é boa. Se for maio ou igual a
//100 a situação é excelente.    

    const produto = await Produto.create({
      nomeProduto,
      quantidade,
      valorUnitario,
      precoTotal,
      precoVenda,
      lucro,
      situacaoProduto
    })

    return res.json(produto)
  },

  async update(req, res) {
    const { nomeProduto, quantidade, valorUnitario, precoTotal, precoVenda, lucro, situacaoProduto } = req.body

    const dados = {
      nomeProduto,
      quantidade,
      valorUnitario,
      precoTotal,
      precoVenda,
      lucro,
      situacaoProduto    
    }
    
    const { id } = req.params
    const produto = await Produto.findByIdAndUpdate(id, dados, { new: true })
    return res.json(produto)
  },

  async delete(req, res) {
    const { id } = req.params
    await Produto.findByIdAndDelete(id)
    return res.send('Produto excluído com sucesso')
  }
}
