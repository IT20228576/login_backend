const router = require("express").Router();
const Admin = require("../models/adminModel");
const verif = require("../middleware/verif");

router.post("/", verif, async (req, res) => {
  try {
    const { name } = req.body;

    const newAdmin = new Admin({
      name,
    });

    const savedAdmin = await newAdmin.save();

    res.json(savedAdmin);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/", verif, async (req, res) => {
  try {
    const Admins = await Admin.find();
    res.json(Admins);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
