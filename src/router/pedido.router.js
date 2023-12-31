const router = require("express").Router();

const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPedido, validaId, validaProdutoscarrinhoPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaId, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, paginacao, pedidoController.findAllPedidosController);

router.post("/create", authMiddleware, validaProdutoscarrinhoPedido, validaPedido, pedidoController.createPedidoController);

router.delete("/delete/:id", authMiddleware, validaId, pedidoController.deletePedidoController);

router.patch("/updateStatus/:id", authMiddleware, validaId, pedidoController.updateStatusPedidoController);

module.exports = router;