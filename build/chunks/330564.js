/** Chunk was on web.js **/
/** chunk id: 330564, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk53851 = require("./53851.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js");
let a = RegExp(`(${Chunk53851.km})\\s{0,5}(?:dopo|pi\xf9 tardi|da adesso|avanti|oltre|a seguire)(?=(?:\\W|$))`, "i"),
  s = RegExp("(" + Chunk53851.km + ")(dopo|pi\xf9 tardi)(?=(?:\\W|$))", "i"),
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