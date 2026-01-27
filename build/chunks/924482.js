/** Chunk was on web.js **/
/** chunk id: 924482, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk528352 = require("./528352.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js");
class o extends Chunk355418.c {
  innerPattern() {
    return RegExp("(?:binnen|in|binnen de|voor)\\s*(" + r.Pl + ")(?=\\W|$)", "i")
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[1]);
    return i.BP.createRelativeFromReference(e.reference, n)
  }
}