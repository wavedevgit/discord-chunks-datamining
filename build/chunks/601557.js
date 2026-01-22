/** Chunk was on web.js **/
/** chunk id: 601557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => l
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./679055.js"), require("./896048.js"), require("./638769.js");
var Chunk510036 = require("./510036.js"),
  Chunk74234 = require("./74234.js");
let a = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
  s = {
    N: 16384,
    r: 8,
    p: 2,
    dkLen: 64
  };

function o(e, t) {
  for (let n = 0; n < e.length && n < t.length; n++)
    if (e[n] != t[n]) return e[n] - t[n];
  return e.length - t.length
}
async function l(e, t, n, l, c) {
  let u = await Promise.all([(0, r.X)(e, t, n), (0, r.X)(e, l, c)]);
  u.sort(o);
  let d = new Uint8Array(u[0].byteLength + u[1].byteLength);
  return d.set(u[0], 0), d.set(u[1], u[0].byteLength), new Uint8Array(await (0, i.Q)(d, a, s))
}