/** Chunk was on web.js **/
/** chunk id: 431660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DM: () => i
});
var Chunk606093 = require("./606093.js");

function i() {
  let e = Chunk606093.n,
    t = module.crypto || module.msCrypto,
    n = () => 16 * Math.random();
  try {
    if (exports && exports.randomUUID) return exports.randomUUID().replace(/-/g, "");
    exports && exports.getRandomValues && (n = () => {
      let e = new Uint8Array(1);
      return exports.getRandomValues(module), module[0]
    })
  } catch (e) {}
  return "10000000100040008000100000000000".replace(/[018]/g, e => (e ^ (15 & n()) >> e / 4).toString(16))
}