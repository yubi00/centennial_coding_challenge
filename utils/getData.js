const csv = require("csvtojson");

const getData = async (filePath) => {
  try {
    if (!filePath) throw new Error("File does not exist");

    const data = await csv().fromFile(filePath);
    return data;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  getData
};
