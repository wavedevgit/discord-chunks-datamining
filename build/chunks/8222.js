/** Chunk was on web.js **/
/** chunk id: 8222, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk360345 = require("./360345.js"),
  Chunk476858 = require("./476858.js"),
  Chunk355418 = require("./355418.js");
let s = RegExp(`([0-9]{4})[-\\.\\/\\s](?:(${(0,Chunk476858.uJ)(Chunk360345.eB)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"),
  o = 1,
  l = 2,
  c = 3,
  u = 4;
class d extends Chunk355418.c {
  strictMonthDateOrder;
  constructor(e) {
    super(), this.strictMonthDateOrder = e
  }
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = parseInt(t[o]),
      i = parseInt(t[u]),
      a = t[c] ? parseInt(t[c]) : r.eB[t[l].toLowerCase()];
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