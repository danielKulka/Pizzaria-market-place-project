const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
  sabor: { type: String, unique: true, required: true },
  ingredientes: { type: String, require: true },
  precoUnitario: { type: Number, required: true },
  imagem: { type: String, required: true },
  tamanho: { type: String, unique: true, required: true },
  categorias: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "categorias" },
      createdAt: { type: Date, required: true, default: Date.now() }
    },
  ],
});

const Produto = mongoose.model("produtos", ProdutoSchema);

module.exports = Produto;