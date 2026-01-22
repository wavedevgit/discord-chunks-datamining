/** Chunk was on web.js **/
/** chunk id: 297494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H4: () => s,
  vc: () => a
}), require("./747238.js"), require("./812715.js");
var Chunk735438 = require("./735438.js"),
  Chunk998304 = require("./998304.js");
let a = (e, t) => {
    let n = (0, i.Q7)([t.r, t.g, t.b], 2);
    return (e = e.replace(/(\[1,0,0,)/g, "[".concat(n[0][0] / 255, ",").concat(n[0][1] / 255, ",").concat(n[0][2] / 255, ","))).replace(/\[0,0,1,/g, "[".concat(n[1][0] / 255, ",").concat(n[1][1] / 255, ",").concat(n[1][2] / 255, ","))
  },
  s = (0, Chunk735438.memoize)(e => {
    let t = 0;
    for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
    return Math.abs(t)
  })