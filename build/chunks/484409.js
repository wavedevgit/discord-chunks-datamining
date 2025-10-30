/** Chunk was on web.js **/
/** chunk id: 484409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk745901 = require("./745901.js"),
  Chunk800911 = require("./800911.js"),
  Chunk727916 = require("./727916.js");
let o = RegExp(`([0-9]{4})[\\.\\/\\s](?:(${(0,Chunk800911.q3)(Chunk745901._$)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"),
  s = 1,
  l = 2,
  c = 3,
  u = 4;
class d extends Chunk727916.Z {
  innerPattern() {
    return o
  }
  innerExtract(e, t) {
    let n = t[c] ? parseInt(t[c]) : r._$[t[l].toLowerCase()];
    if (n < 1 || n > 12) return null;
    let i = parseInt(t[s]);
    return {
      day: parseInt(t[u]),
      month: n,
      year: i
    }
  }
}