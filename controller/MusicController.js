const db = require("../models");

exports.add = async function (req, res) {
  const { name, genre, author, release_date } = req.body;
  const newMusic = await db.Music.create({ name, genre, author, release_date });

  return res.status(200).json(newMusic);
};

exports.edit = async function (req, res) {
  const { name, genre, author, release_date } = req.body;
  await db.Music.update(
    { name, genre, author, release_date },
    { where: { id: req.params.id }, returning: true, plain: true }
  );
  const editedMusic = await db.Music.findByPk(req.params.id);

  return res.status(200).json(editedMusic);
};

exports.getAll = async function (req, res) {
  const music = await db.Music.findAll();

  return res.status(200).json(music);
};

exports.getById = async function (req, res) {
  console.log(req.params.id);
  const music = await db.Music.findByPk(req.params.id);

  return res.status(200).json(music);
};

exports.remove = async function (req, res) {
  await db.Music.destroy({ where: { id: req.params.id } });

  return res.status(200).json(true);
};
