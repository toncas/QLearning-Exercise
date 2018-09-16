const Environment = require('../models/Environment.js');

module.exports = {
  getEnvironment: async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    try {
      const environment = await Environment.findById(id);
      return res.status(200).send(environment);
    } catch (error) {
      return res.status(500).send(String(error));
    }
  },

  getEnvironmentIdList: async (req, res) => {
    try {
      const environments = await Environment.find();
      return res.status(200).send(environments);
    } catch (error) {
      return res.status(500).send(String(error));
    }
  },

  postEnvironment: async (req, res) => {
    const { map, exit, obstacles } = req.body;
    const newEnv = new Environment({ map, exit, obstacles });

    try {
      const saved = await newEnv.save();
      return res.status(200).send(saved);
    } catch (error) {
      return res.status(500).send(String(error));
    }
  },
}