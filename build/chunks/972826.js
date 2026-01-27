/** Chunk was on web.js **/
/** chunk id: 972826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk989479 = require("./989479.js"),
  Chunk374372 = require("./374372.js"),
  Chunk241738 = require("./241738.js"),
  Chunk632434 = require("./632434.js");
class s extends Chunk241738.d {
  innerPatternString(e) {
    return `(${r.Pl})\\s{0,5}назад(?=(?:\\W|$))`
  }
  innerExtract(e, t) {
    let n = (0, r.E9)(t[1]),
      a = (0, o.x4)(n);
    return i.BP.createRelativeFromReference(e.reference, a)
  }
}