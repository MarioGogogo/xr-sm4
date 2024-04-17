const XrSM4 = require('../dist/xr-sm4');
const sm4Config = {
  key: '956c71175f66ccf5',
  mode: 'ecb',
  cipherType: 'base64',
};

let sm4 = new XrSM4(sm4Config);
const h = sm4.encrypt('hello world');
console.log('%c Line:19 🍡 h', 'font-size:18px;color:#ffffff;background:#99CC99', h);
