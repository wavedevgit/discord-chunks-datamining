/** Chunk was on web.js **/
/** chunk id: 548354, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk684758 = require("./684758.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js");
let a = RegExp(`(${Chunk684758.km})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i"),
  s = RegExp(`(${Chunk684758.U0})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i"),
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
    return n ? i.L.createRelativeFromReference(e.reference, n) : null
  }
}