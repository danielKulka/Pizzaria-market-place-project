const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaUsuario, validaEndereco, validaId, valida_IdBody } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

//rotas GET
router.get("/findById/:id", authMiddleware, validaId, usuarioController.findUserByIdController);
router.get("/findAll", authMiddleware, paginacao, usuarioController.findAllUsersController);

//rotas POST
router.post("/create", authMiddleware, validaUsuario, usuarioController.createUserController);
router.post("/addAddress/:id", authMiddleware, validaId, validaEndereco, usuarioController.addUserAddressController);
router.post("/addFavProduct/:id", authMiddleware, validaId, valida_IdBody, usuarioController.addUserFavProductController);

//rotas PUT
router.put("/update/:id", authMiddleware,validaId, validaUsuario, usuarioController.updateUserController);

//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaId, usuarioController.removeUserController);
router.delete("/removeAddress", authMiddleware, usuarioController.removeUserAddressController);
router.delete("/removeFavProduct/:id", authMiddleware, validaId, usuarioController.removeUserFavProductController);

module.exports = router;