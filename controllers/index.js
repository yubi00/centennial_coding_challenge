const { getData } = require("../utils/getData");

const loadData = async (req, res) => {
  try {
    const data = await getData("./data/data.csv");
    const modifiedData = data.map((item) => {
      return {
        timestamp: item["Timestamp"],
        batteryPower: item["Site - Battery Power"],
        gridPower:
          parseFloat(item["Site - Grid Power"]) % 1 !== 0
            ? parseFloat(item["Site - Grid Power"]).toFixed(2)
            : item["Site - Grid Power"],
        loadPower:
          parseFloat(item["Site - Load Power"]) % 1 !== 0
            ? parseFloat(item["Site - Load Power"]).toFixed(2)
            : item["Site - Load Power"],
        pvPower:
          parseFloat(item["Site - PV Power"]) % 1 !== 0
            ? parseFloat(item["Site - PV Power"]).toFixed(2)
            : item["Site - PV Power"]
      };
    });
    res.status(200).send({
      success: true,
      data: modifiedData
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
