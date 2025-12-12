/** Chunk was on web.js **/
/** chunk id: 628269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk745901 = require("./745901.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js");
let a = RegExp("(" + Chunk745901.km + ")(later|na|vanaf nu|voortaan|vooruit|uit)(?=(?:\\W|$))", "i"),
  s = RegExp("(" + Chunk745901.km + ")(later|vanaf nu)(?=(?:\\W|$))", "i"),
  l = 1;
class c extends Chunk727916.Z {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  innerPattern() {
    return this.strictMode ? s : a
  }
  innerExtract(e, t) {
    let n = (0, r.RA)(t[l]);
    return i.L.createRelativeFromReference(e.reference, n)
  }
}