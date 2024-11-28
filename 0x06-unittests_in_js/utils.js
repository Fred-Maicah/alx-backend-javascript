// utils.js
const Utils = {
  calculateNumber: (type, a, b) => {
    if (type !== 'SUM') {
      throw new Error('Unsupported operation');
    }
    return Math.round(a) + Math.round(b);
  },
};

module.exports = Utils;
