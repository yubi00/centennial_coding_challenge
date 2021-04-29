const getSolarSummary = (arr, property) => {
  let sum = 0;
  return arr.reduce((acc, curr) => {
    return {
      ...acc,
      [property]: (sum += parseFloat(curr[property])).toFixed(2)
    };
  }, {});
};

module.exports = {
  getSolarSummary
};
