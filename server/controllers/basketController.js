const { Basket, BasketDevice } = require("../models/models");

class BasketController {
  async addDevice(req, res) {
    const { basketId, deviceId } = req.query;
    const basketDev = await BasketDevice.create({ basketId, deviceId });
    res.json(basketDev);
  }
}

module.exports = new BasketController();
