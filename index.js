var randomNum = (max, min = 0, options) => {
  if (min >= max) return Error('max must be greater than min');
  if (options !== undefined && options.skip && !Array.isArray(options.skip)) return Error('options.skip must be an array');

  var defaultObj = {
    float: false,
    decimal: 14,
    skip: false
  };

  var userObj = options === undefined ? Object.assign({}, defaultObj) : Object.assign({}, defaultObj, options);

  if (!userObj.skip) {
    if (!userObj.float) {
      return Math.floor( Math.random() * (max - min + 1) + min );
    } else {
      return parseFloat( (Math.random() * (max - min + 1) + min).toFixed(userObj.decimal) );
    }
  } else {
    var num = 0;
    if (!userObj.float) {
      num = Math.floor( Math.random() * (max - min + 1) + min );
      return userObj.skip.includes(num) ? randomNum(max, min, userObj) : num;
    } else {
      num = parseFloat( (Math.random() * (max - min + 1) + min).toFixed(userObj.decimal) );
      return userObj.skip.includes( Math.floor( parseInt(num).toFixed(0) ) ) ? randomNum(max, min, userObj) : num;
    }
  }
};

exports.rng = function(max, min, options) {
  return randomNum(max, min, options);
};
