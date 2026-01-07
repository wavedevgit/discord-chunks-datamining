/** Chunk was on web.js **/
/** chunk id: 891363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk745901 = require("./745901.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js");
class o extends Chunk727916.Z {
  innerPattern() {
    return RegExp("(?:binnen|in|binnen de|voor)\\s*(" + r.km + ")(?=\\W|$)", "i")
  }
  innerExtract(e, t) {
    let n = (0, r.RA)(t[1]);
    return i.L.createRelativeFromReference(e.reference, n)
  }
}