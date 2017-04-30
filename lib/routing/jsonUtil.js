/* eslint no-eval: "error"*/
/* eslint-env es6*/

const replacer = (key, value) => {
  if (typeof value === 'function') {
    return `/Function(${value.toString()})/`;
  }
  return value;
};


const parse = (key, value) => {
  if (typeof value === 'string' &&
      value.startsWith('/Function(') &&
      value.endsWith(')/')) {
    const evalValue = value.substring(10, value.length - 2);
    return eval(`(${evalValue})`);
  }
  return value;
};

module.exports.replacer = replacer;
module.exports.parse = parse;
