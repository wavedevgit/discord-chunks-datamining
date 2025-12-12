/** Chunk was on web.js **/
/** chunk id: 474507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk53851 = require("./53851.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js"),
  Chunk89199 = require("./89199.js");
let s = RegExp(`(${Chunk53851.km})\\s{0,5}(?:fa|prima|precedente)(?=(?:\\W|$))`, "i"),
  l = RegExp(`(${Chunk53851.km})\\s{0,5}fa(?=(?:\\W|$))`, "i");
class c extends Chunk727916.Z {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  innerPattern() {
    return this.strictMode ? l : s
  }
  innerExtract(e, t) {
    let n = (0, r.RA)(t[1]),
      o = (0, a.de)(n);
    return i.L.createRelativeFromReference(e.reference, o)
  }
}