const asyncHandler = require("express-async-handler");
const Goals = require("../models/goalModel");
const Users = require("../models/userModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goals.find({ user: req.user.id });
  res.json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(404);
    throw new Error("Please keep valid Goal");
  }

  const goal = await Goals.create({ text: req.body.text, user: req.user.id });
  res.json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await Users.findById(req.params.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goals.findByIdAndUpdate(
    req.params.id,
    req.body.text,
    {
      new: true,
    }
  );
  res.json(updatedGoal);
});

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await Users.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.deleteOne({ id: req.params.id });
  res.json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoals,
};
