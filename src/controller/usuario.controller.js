const userService = require("../service/usuario.service");

const findUserByIdController = async (req, res) => {
  try{
    const user = await userService.findUserByIdService(req.params.id);

    if(!user){
      return res.status(404).send({ message: "Usuario não encontrado, tente novamente"});
    }

    return res.status(200).send(user);

  }catch(err){
    if(err.kind == "ObjectId"){
      console.log(err.kind == "ObjectId");
      return res.status(400).send({ message: "Id não encontrado, tente novamente!"});
    }

    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const findAllUsersController = async (req, res) => {
  try{
    return res.status(200).send(await userService.findAllUsersService(req.query.limit, req.query.offset));

  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const createUserController = async (req, res) =>{
  try{
    
    return res.status(201).send(await userService.createUserService(req.body));

  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const updateUserController = async (req, res) => {
  try{

    const body = req.body;

    if(!body.nome){
      return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!`});
    }

    return res.status(200).send(await userService.updateUserService(req.params.id, body));


  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const removeUserController = async (req, res) => {
  try{

    const deletedUser = await userService.removeUserService(req.params.id);


    if(deletedUser == null){
      return res.status(404).send({ message: `Usuario não encontrado, tente novamente!`});
    }else{
      return res.status(200).send({ message: `Sucesso, usuario deletado!`});
    }

  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const addUserAddressController = async (req, res) => {
  try{
    const endereco = await userService.addUserAddressService(req.params.id, req.body);

    if(endereco.value == null){
      return res.status(400).send({ message: `Algo deu errado no endereço, tente novamente`});
    }else{
      return res.status(201).send({ message: `Endereço adicionado com sucesso!`});
    }

  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const removeUserAddressController = async (req, res) => {
  try{
    const endereco = await userService.removeUserAddressService(req.body.id, req.body.addressId);
    let found = false;

    endereco.value.enderecos.map((valor, chave) => {
      if(valor._id == req.body.addressId){
        found = true;
      }
    });

    if(found){
      return res.status(200).send({ message: `Endereço removido com sucesso!`});
    }else{
      return res.status(400).send({ message: `Algo deu errado no endereço, tente novamente`});
    }

  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const addUserFavProductController = async (req, res) => {
  try{
    return res.status(201).send(await userService.addUserFavProductService(req.params.id, req.body));
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

const removeUserFavProductController = async (req, res) => {
  try{
    return res.status(201).send(await userService.removeUserFavProductService(req.params.id, req.body));
  }catch(err){
    console.log(`erro: ${err.message}`);
    return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
  }
};

module.exports = {
  findUserByIdController,
  findAllUsersController,
  createUserController,
  updateUserController,
  removeUserController,
  addUserAddressController,
  removeUserAddressController,
  addUserFavProductController,
  removeUserFavProductController
}