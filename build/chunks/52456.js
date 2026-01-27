/** Chunk was on web.js **/
/** chunk id: 52456, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk147426 = require("./147426.js"),
  Chunk374372 = require("./374372.js"),
  Chunk972409 = require("./972409.js"),
  Chunk632434 = require("./632434.js");
class s extends Chunk972409.d {
  innerPatternString(e) {
    return `(${r.Pl})\\s{0,5}тому(?=(?:\\W|$))`
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[1]),
      a = (0, o.x4)(n);
    return i.BP.createRelativeFromReference(e.reference, a)
  }
}