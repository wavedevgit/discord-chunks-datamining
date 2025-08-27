/** Chunk was on web.js **/
/** chunk id: 347904, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s4: () => a,
  vJ: () => o
}), require("./704826.js"), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  Chunk302221 = require("./302221.js");
let a = (e, t) => {
    let n = (0, i.WY)([t.r, t.g, t.b], 2);
    return e = (e = e.replace(/(\[1,0,0,)/g, "[".concat(n[0][0] / 255, ",").concat(n[0][1] / 255, ",").concat(n[0][2] / 255, ","))).replace(/\[0,0,1,/g, "[".concat(n[1][0] / 255, ",").concat(n[1][1] / 255, ",").concat(n[1][2] / 255, ","))
  },
  o = (0, Chunk392711.memoize)(e => {
    let t = 0;
    for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
    return Math.abs(t)
  })