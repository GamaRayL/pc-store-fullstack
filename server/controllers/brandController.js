const { Brand } = require("../models/models");

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const brand = await Brand.findOne({
      where: { id },
    });
    return res.json(brand);
  }
  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
  async delOne(req, res) {
    const { id } = req.params;
    await Brand.destroy({
      where: { id },
    });
    return res.json({ message: `Удаление бренда по id ${id} прошло успешно` });
  }
}

module.exports = new BrandController();
