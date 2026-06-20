exports.create = (req, res) => {
  res.json({ message: "Create handler" });
};

exports.findAll = (req, res) => {
  res.json({ message: "Find all contacts." });
};

exports.findOne = (req, res) => {
  res.json({ message: "Find One handler" });
};

exports.update = (req, res) => {
  const id = req.params.id;
  res.json({ message: "Update handler" });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  res.json({ message: "Delete handler" });
};

exports.deleteAll = (req, res) => {
  res.json({ message: "Delete All handler" });
};

exports.findAllFavorite = (req, res) => {
  res.json({ message: "Find All Favorite handler" });
};
