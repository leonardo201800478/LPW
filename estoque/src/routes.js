const { Router } = require('express')

const ProdutosController = 
    require('./controllers/ProdutosController')

const routes = new Router();

//c) Crie uma rota (/produtos) para listar todos os produtos. (0,5)
routes.get('/produtos', ProdutosController.index)
//d) Crie uma rota (/produtos/:id) para listar os produtos pelo id. Se o id não existir
//deverá retornar a mensagem: Não existe Produto om este id. (0,5)
routes.get('/produtos/:id', ProdutosController.show)
//e) Crie uma rota (/produtos) para incluir o produto no array. Deverá ser enviado um
//json com a id do produto, nome do produto, quantidade, valor unitário e
//complemento como um array vazio, por exemplo, complemento: [] Se um destes
//campos não for enviado a aplicação exibirá a mensagem: O campo id do produto
//ou nome do produto ou quantidade ou valor unitario ou complemento não
//existe no corpo da requisição. Retornar um json para o usuário contendo id do
//produto, nome do produto, quantidade, valor unitário, preço total, preço de
//venda, lucro, situação e complemento. (1,0)
routes.post('/produtos', ProdutosController.store)
//f) Crie uma rota (/produtos) para alterar o produto. Deverá ser enviado um json com
//a id do produto, nome do produto, quantidade, valor unitário. Se um destes
//campos não for enviado a aplicação exibirá a mensagem: O campo id do produto
//ou nome do produto ou quantidade ou valor unitario não existe no corpo da
//requisição. Se o id do produto que está sendo alterado não existir, deverá ser
//exibida a mensagem. Não existe Produto com este ID. Retornar um json para o
//usuário contendo id do produto, nome do produto, quantidade, valor unitário,
//preço total, preço de venda, lucro e situação. (1,0).
routes.put('/produtos/:id', ProdutosController.update)
//g) Crie uma rota (/produtos) para excluir um produto pelo id. Se o id do produto que
//está sendo excluído não existir, deverá ser exibida a mensagem. Não existe
//produto com este id. Exiba no console os dados do produto antes de ser excluído.
//(0,5)
routes.delete('/produtos/:id', ProdutosController.delete)
//Crie uma rota (/produtos/:id/complemento). A rota deve receber um campo
//complemento e armazenar um novo complemento no array de complemento
//de um produto específico, escolhido através do id presente nos parâmetros da
//rota. (1,0)
routes.post('/produtos/:id/complemento', ProdutosController.store)

module.exports = routes