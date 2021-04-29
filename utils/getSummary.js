const getSolarSummary = (arr, property) => {
  let sum = 0;
  return arr.reduce((acc, curr) => {
    return {
      ...acc,
      [property]: (sum += parseFloat(curr[property])).toFixed(2)
    };
  }, {});
};

const getEnergyGrid = (arr) => {
  let gridEnergyImported = 0;
  let gridEnergyExported = 0;

  arr.forEach((item) => {
    //Import energy from the grid when your solar power is 0 or when your
    //solar power is not enough
    if (
      parseFloat(item["Site - PV Power"]) === 0 ||
      parseFloat(item["Site - PV Power"]) <
        parseFloat(item["Site - Load Power"])
    ) {
      gridEnergyImported += parseFloat(item["Site - Grid Power"]);
    } else if (
      //export energy back to the grid when there is any unused solar power or
      // if the solar power is surplus
      parseFloat(item["Site - Load Power"]) === 0 ||
      parseFloat(item["Site - PV Power"]) >
        parseFloat(item["Site - Load Power"])
    ) {
      gridEnergyExported += parseFloat(item["Site - Grid Power"]);
    }
  });

  return {
    gridEnergyImported: gridEnergyImported.toFixed(2),
    gridEnergyExported: Math.abs(gridEnergyExported).toFixed(2)
  };
};

module.exports = {
  getSolarSummary,
  getEnergyGrid
};
