const objectId = require("mongoose").Types.ObjectId;

const validaUsuario = (req, res, next) => {
  if(!req.body.nome){
    return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido!`});
  }
  if(!req.body.email){
    return res.status(400).send({ message: `O campo 'email' precisa ser preenchido!`});
  }
  if(!req.body.senha){
    return res.status(400).send({ message: `O campo 'senha' precisa ser preenchido!`});
  }
  if(!req.body.imagem){
    return res.status(400).send({ message: `O campo 'imagem' precisa ser preenchido!`});
  }
  if(!req.body.admin){
    return res.status(400).send({ message: `O campo 'admin' precisa ser preenchido!`});
  }

  return next()
}

const validaProduto = (req, res, next) => {
  let erros = []; //variavel para acumular os erros

  if(!req.body.sabor){
    erros.push("sabor");
  }
  if(!req.body.tamanho){
    erros.push("tamanho");
  }
  if(!req.body.ingredientes){
    erros.push("ingredientes");
  }
  if(!req.body.precoUnitario){
    erros.push("precoUnitario");
  }
  if(!req.body.imagem){
    erros.push("imagem");
  }

  //testando quantos erros temos e tomando decisoes em relacao a isso
  if(erros.length == 0){
    return next();
  }else{
    if(erros.length > 1){
      return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos`});
    }else{
      return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido`});
    }
  }

}

const validaCategoria = (req, res, next) => {
  if(!req.body.nome){
    return res.status(400).send({ message: `O campo nome precisa ser preenchido!`});
  }

  return next();
}

const validaPedido = (req, res, next) => {
  let erros = []; //variavel para acumular os erros

  if(!req.body.precoTotal){
    erros.push("precoTotal");
  }

  if(!req.body.frete){
    erros.push("frete");
  }
  
  if(req.body.concluido == undefined){
    erros.push("concluido");
  }

  //testando quantos erros temos e tomando decisoes em relacao a isso
  if(erros.length == 0){
    return next();
  }else{
    if(erros.length > 1){
      return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos`});
    }else{
      return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido`});
    }
  }
}

const validaCarrinho = (req, res, next) => {
  let erros = []; //variavel para acumular os erros

  if(!req.body.precoTotal){
    erros.push("precoTotal");
  }

  if(!req.body.frete){
    erros.push("frete");
  }

  //testando quantos erros temos e tomando decisoes em relacao a isso
  if(erros.length == 0){
    return next();
  }else{
    if(erros.length > 1){
      return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos`});
    }else{
      return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido`});
    }
  }
}

const validaId = (req, res, next) => { 
  if(objectId.isValid(req.params.id)){
    return next();
  }else{
    return res.status(400).send({ message: `O ID não corresponde aos padroes necessarios`});
  }
}

const validaLogin = (req, res, next) => {
  let erros = []; //variavel para acumular os erros

  if(!req.body.email){
    erros.push("email");
  }

  if(!req.body.senha){
    erros.push("senha");
  }

  if(erros.length == 0){
    return next();
  }else{
    if(erros.length > 1){
      return res.status(400).send({ message: `Os campos ${erros} precisam ser preenchidos`});
    }else{
      return res.status(400).send({ message: `O campo ${erros} precisa ser preenchido`});
    }
  }
}

module.exports = {
  validaUsuario,
  validaProduto,
  validaCategoria,
  validaPedido,
  validaCarrinho,
  validaId,
  validaLogin
}