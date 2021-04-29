const { getData } = require("../utils/getData");

const loadData = async (req, res) => {
  try {
    const data = await getData("./data/data.csv");
    res.status(200).send({
      success: true,
      data
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      error: err.message
    });
  }
};

module.exports = {
  loadData
};
