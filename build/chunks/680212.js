/** Chunk was on web.js **/
/** chunk id: 680212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk6678 = require("./6678.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js"),
  Chunk632434 = require("./632434.js");
class o extends Chunk355418.c {
  constructor() {
    super()
  }
  innerPattern() {
    return RegExp(`il y a\\s*(${r.Pl})(?=(?:\\W|$))`, "i")
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[1]),
      a = (0, s.x4)(n);
    return i.BP.createRelativeFromReference(e.reference, a)
  }
}