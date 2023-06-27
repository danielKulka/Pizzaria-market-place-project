const CarrinhoService = require("../service/carrinho.service");

const findCarrinhoByIdController = async (req, res) => {
  try{
    return res.status(200).send(await CarrinhoService.findCarrinhoByIdService(req.params.id));
  }catch(err){
    console.log(err.message);
    return res.status(500).send({ message: "Erro inesperado, tente novamente!"});
  }
}

const findAllCarrinhosController = async (req, res) => {
  try{
    return res.status(200).send(await CarrinhoService.findAllCarrinhosService(req.query.limit, req.query.offset));
  }catch(err){
    console.log(err.message);
    return res.status(500).send({ message: "Erro inesperado, tente novamente!"});
  }
}

const createCarrinhoController = async (req, res) => {
  try{
    const corpo ={
      ...req.body,
      userId: req.userId
    }
    return res.status(201).send(await CarrinhoService.createCarrinhoService(corpo));
  }catch(err){
    console.log(err.message);
    return res.status(500).send({ message: "Erro inesperado, tente novamente!"});
  }
}

const updateCarrinhoController = async (req, res) => {
  try{
    return res.status(200).send(await CarrinhoService.updateCarrinhoService(req.params.id, req.body));
  }catch(err){
    console.log(err.message);
    return res.status(500).send({ message: "Erro inesperado, tente novamente!"});
  }
}

const deleteCarrinhoController = async (req, res) => {
  try{
    return res.status(200).send(await CarrinhoService.deleteCarrinhoService(req.params.id));
  }catch(err){
    console.log(err.message);
    return res.status(500).send({ message: "Erro inesperado, tente novamente!"});
  }
}

module.exports = {
  findCarrinhoByIdController,
  findAllCarrinhosController,
  createCarrinhoController,
  updateCarrinhoController,
  deleteCarrinhoController
}