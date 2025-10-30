/** Chunk was on web.js **/
/** chunk id: 290717, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk684758 = require("./684758.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js");
let o = RegExp(`([0-9]{4})[-\\.\\/\\s](?:(${(0,Chunk800911.q3)(Chunk684758._$)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"),
  s = 1,
  l = 2,
  c = 3,
  u = 4;
class d extends Chunk727916.Z {
  strictMonthDateOrder;
  constructor(e) {
    super(), this.strictMonthDateOrder = e
  }
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = parseInt(t[s]),
      i = parseInt(t[u]),
      a = t[c] ? parseInt(t[c]) : r._$[t[l].toLowerCase()];
    if (a < 1 || a > 12) {
      if (this.strictMonthDateOrder) return null;
      i >= 1 && i <= 12 && ([a, i] = [i, a])
    }
    return i < 1 || i > 31 ? null : {
      day: i,
      month: a,
      year: n
    }
  }
}