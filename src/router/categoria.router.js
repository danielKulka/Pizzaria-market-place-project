const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const categoriaController = require("../controller/categoria.controller");
const { route } = require("./usuario.router");

router.get("/find/:id", authMiddleware, categoriaController.findCategoriaByIdController);
router.get("/findall", authMiddleware, categoriaController.findAllCategoriasController);

router.post("/create", authMiddleware, categoriaController.createCategoriaController);

router.put("/update/:id", authMiddleware, categoriaController.updateCategoriaController);

router.delete("/delete/:id", authMiddleware, categoriaController.deleteCategoriaController);