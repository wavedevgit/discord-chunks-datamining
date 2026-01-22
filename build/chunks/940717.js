/** Chunk was on web.js **/
/** chunk id: 940717, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk615339 = require("./615339.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js");
let s = RegExp(`(${Chunk615339.Pl})\\s{0,5}(?:dopo|pi\xf9 tardi|da adesso|avanti|oltre|a seguire)(?=(?:\\W|$))`, "i"),
  o = RegExp("(" + Chunk615339.Pl + ")(dopo|pi\xf9 tardi)(?=(?:\\W|$))", "i"),
  l = 1;
class c extends Chunk355418.c {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  innerPattern() {
    return this.strictMode ? o : s
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[l]);
    return i.BP.createRelativeFromReference(e.reference, n)
  }
}