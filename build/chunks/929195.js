/** Chunk was on web.js **/
/** chunk id: 929195, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk773567 = require("./773567.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js");
class o extends Chunk727916.Z {
  innerPattern() {
    return RegExp(`(?:en|por|durante|de|dentro de)\\s*(${Chunk773567.km})(?=\\W|$)`, "i")
  }
  innerExtract(e, t) {
    let n = (0, r.RA)(t[1]);
    return i.L.createRelativeFromReference(e.reference, n)
  }
}