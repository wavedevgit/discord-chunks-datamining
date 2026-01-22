/** Chunk was on web.js **/
/** chunk id: 76334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk298362 = require("./298362.js"),
  Chunk374372 = require("./374372.js"),
  Chunk355418 = require("./355418.js");
class s extends Chunk355418.c {
  innerPattern() {
    return RegExp(`(?:en|por|durante|de|dentro de)\\s*(${r.Pl})(?=\\W|$)`, "i")
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[1]);
    return i.BP.createRelativeFromReference(e.reference, n)
  }
}