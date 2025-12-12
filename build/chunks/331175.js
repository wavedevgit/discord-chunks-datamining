/** Chunk was on web.js **/
/** chunk id: 331175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk745901 = require("./745901.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js"),
  Chunk89199 = require("./89199.js");
let s = RegExp("(" + Chunk745901.km + ")(?:geleden|voor|eerder)(?=(?:\\W|$))", "i"),
  l = RegExp("(" + Chunk745901.km + ")geleden(?=(?:\\W|$))", "i");
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