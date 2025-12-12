/** Chunk was on web.js **/
/** chunk id: 593784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk150816 = require("./150816.js"),
  Chunk86465 = require("./86465.js"),
  Chunk522677 = require("./522677.js"),
  Chunk89199 = require("./89199.js");
class s extends Chunk522677.M {
  innerPatternString(e) {
    return `(${r.km})\\s{0,5}назад(?=(?:\\W|$))`
  }
  innerExtract(e, t) {
    let n = (0, r.RA)(t[1]),
      o = (0, a.de)(n);
    return i.L.createRelativeFromReference(e.reference, o)
  }
}