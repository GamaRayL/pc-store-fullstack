const { Type } = require("../models/models");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const type = await Type.findOne({ where: { id } });
    return res.json(type);
  }
  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
  async delOne(req, res) {
    const { id } = req.params;
    await Type.destroy({ where: { id } });
    return res.json({ message: `Удаление типа по id ${id} прошло успешно` });
  }
}

module.exports = new TypeController();
