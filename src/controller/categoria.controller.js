const categoriaService = require("../service/categoria.service");

const findCategoriaByIdController = async (req, res) => {
  try{
    return res.status(200).send(await categoriaService.findCategoriaByIdService(req.params.id));
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente`});
  }
};

const findAllCategoriasController = async (req, res) => {
  try{
    return res.status(200).send(await categoriaService.findAllCategoriasService());
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente`});
  }
};

const createCategoriaController = async (req, res) => {
  try{
    const corpo = {
      ...req.body,
      createdAt: new Date()
    }
    return res.status(201).send(await categoriaService.createCategoriaService(corpo));
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente`});
  }
};

const updateCategoriaController = async (req, res) => {
  try{
    return res.status(200).send(await categoriaService.updateCategoriaService(req.params.id, req.body));
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente`});
  }
};

const deleteCategoriaController = async (req, res) => {
  try{
    return res.status(200).send(await categoriaService.deleteCategoriaService(req.params.id));
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente`});
  }
};

module.exports = {
  findCategoriaByIdController,
  findAllCategoriasController,
  createCategoriaController,
  updateCategoriaController,
  deleteCategoriaController
}