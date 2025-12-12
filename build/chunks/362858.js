/** Chunk was on web.js **/
/** chunk id: 362858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk684758 = require("./684758.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js"),
  Chunk89199 = require("./89199.js");
let s = RegExp(`(${Chunk684758.km})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i"),
  l = RegExp(`(${Chunk684758.U0})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class c extends Chunk727916.Z {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  innerPattern() {
    return this.strictMode ? l : s
  }
  innerExtract(e, t) {
    let n = (0, r.RA)(t[1]);
    return n ? i.L.createRelativeFromReference(e.reference, (0, a.de)(n)) : null
  }
}