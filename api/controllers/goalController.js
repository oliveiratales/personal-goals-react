const Goal = require("../models/Goal");

const goalController = {
  // Post
  create: async (req, res) => {
    try {
      const goalData = {
        name: req.body.name,
        description: req.body.description,
        initialDate: req.body.initialDate,
        finalDate: req.body.finalDate,
        image: req.body.image,
      };

      const createdGoal = await Goal.create(goalData);

      res
        .status(201)
        .json({ goal: createdGoal, msg: "Meta criada com sucesso!" });
    } catch (error) {
      console.error(`Erro: ${error}`);
    }
  },
  // Get (All)
  getAll: async (req, res) => {
    try {
      const goals = await Goal.find();

      res.json(goals);
    } catch (error) {
      console.error(`Erro: ${error}`);
      res.status(500).json({ msg: "Ocorreu um erro ao criar a meta." });
    }
  },
  // Get (Unique)
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const goal = await Goal.findById(id);

      if (!goal) {
        res.status(404).json({ msg: "Meta não encontrada." });
        return;
      }

      res.json(goal);
    } catch (error) {
      console.error(`Erro: ${error}`);
      res.status(500).json({ msg: "Ocorreu um erro ao consultar a meta." });
    }
  },
  // Delete
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const goal = await Goal.findById(id);

      if (!goal) {
        return res.status(404).json({ msg: "Meta não encontrada." });
      }

      const deletedGoal = await Goal.findByIdAndDelete(id);

      res.status(201).json({ deletedGoal, msg: "Meta excluída com sucesso!" });
    } catch (error) {
      console.error(`Erro: ${error}`);
      res.status(500).json({ msg: "Ocorreu um erro ao excluir a meta." });
    }
  },
  // Put
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const goalData = {
        name: req.body.name,
        description: req.body.description,
        initialDate: req.body.initialDate,
        finalDate: req.body.finalDate,
        image: req.body.image,
      };

      const updatedGoal = await Goal.findByIdAndUpdate(id, goalData);

      if (!updatedGoal) {
        return res.status(404).json({ msg: "Meta não encontrada." });
      }

      res.status(200).json({ goalData, msg: "Meta atualizada com sucesso!" });
    } catch (error) {
      console.error(`Erro: ${error}`);
      res.status(500).json({ msg: "Ocorreu um erro ao atualizar a meta." });
    }
  },
};

module.exports = goalController;
