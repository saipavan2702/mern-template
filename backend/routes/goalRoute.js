const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoals,
} = require("../controller/goalControl");

router.route("/").get(protect, getGoals).post(protect, setGoals);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoals);

module.exports = router;
