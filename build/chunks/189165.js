/** Chunk was on web.js **/
/** chunk id: 189165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk360345 = require("./360345.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js");
let o = RegExp(`(${Chunk360345.Pl})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i"),
  s = RegExp(`(${Chunk360345.d2})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i"),
  l = 1;
class c extends Chunk355418.c {
  strictMode;
  constructor(e) {
    super(), this.strictMode = e
  }
  innerPattern() {
    return this.strictMode ? s : o
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[l]);
    return n ? i.BP.createRelativeFromReference(e.reference, n) : null
  }
}