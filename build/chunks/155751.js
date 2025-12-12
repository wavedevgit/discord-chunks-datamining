/** Chunk was on web.js **/
/** chunk id: 155751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk765682 = require("./765682.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js"),
  Chunk89199 = require("./89199.js");
class s extends Chunk727916.Z {
  constructor() {
    super()
  }
  innerPattern() {
    return RegExp(`il y a\\s*(${Chunk765682.km})(?=(?:\\W|$))`, "i")
  }
  innerExtract(e, t) {
    let n = (0, r.RA)(t[1]),
      o = (0, a.de)(n);
    return i.L.createRelativeFromReference(e.reference, o)
  }
}