/** Chunk was on web.js **/
/** chunk id: 746178, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => l
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./724083.js"), require("./388685.js"), require("./642613.js");
var Chunk214908 = require("./214908.js"),
  Chunk972164 = require("./972164.js");
let a = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
  o = {
    N: 16384,
    r: 8,
    p: 2,
    dkLen: 64
  };

function s(e, t) {
  for (let n = 0; n < e.length && n < t.length; n++)
    if (e[n] != t[n]) return e[n] - t[n];
  return e.length - t.length
}
async function l(e, t, n, l, c) {
  let u = await Promise.all([(0, r.x)(e, t, n), (0, r.x)(e, l, c)]);
  u.sort(s);
  let d = new Uint8Array(u[0].byteLength + u[1].byteLength);
  return d.set(u[0], 0), d.set(u[1], u[0].byteLength), new Uint8Array(await (0, i.E)(d, a, o))
}