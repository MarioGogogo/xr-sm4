const XrSM4 = require('../dist/xr-sm4');

let sm4Config = {
  // encrypt/decypt main key; cannot be omitted
  key: 'JeF8U9wHFOMfs2Y8',

  // optional; can be 'cbc' or 'ecb'
  mode: 'cbc', // default

  // optional; when use cbc mode, it's �necessary
  iv: 'UISwD9fW6cFh9SNS', // default is null

  // optional: this is the cipher data's type; Can be 'base64' or 'text'
  cipherType: 'base64', // default is base64
};

let sm4 = new XrSM4(sm4Config);
console.log('%c Line:18 🥟 sm4', 'font-size:18px;color:#ffffff;background:#99CC99', sm4);
