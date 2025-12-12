/** Chunk was on web.js **/
/** chunk id: 184047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk325854 = require("./325854.js"),
  Chunk86465 = require("./86465.js"),
  Chunk344368 = require("./344368.js"),
  Chunk89199 = require("./89199.js");
class s extends Chunk344368.M {
  innerPatternString(e) {
    return `(${r.km})\\s{0,5}тому(?=(?:\\W|$))`
  }
  innerExtract(e, t) {
    let n = (0, r.RA)(t[1]),
      o = (0, a.de)(n);
    return i.L.createRelativeFromReference(e.reference, o)
  }
}