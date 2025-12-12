/** Chunk was on web.js **/
/** chunk id: 3999, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk745901 = require("./745901.js"),
  Chunk86465 = require("./86465.js"),
  Chunk727916 = require("./727916.js"),
  Chunk89199 = require("./89199.js");
let s = RegExp(`(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(${Chunk745901.km})(?=\\W|$)`, "i"),
  l = 1,
  c = 2;
class u extends Chunk727916.Z {
  innerPattern() {
    return s
  }
  innerExtract(e, t) {
    let n = t[l].toLowerCase(),
      o = (0, r.RA)(t[c]);
    switch (n) {
      case "vorig":
      case "afgelopen":
      case "-":
        o = (0, a.de)(o)
    }
    return i.L.createRelativeFromReference(e.reference, o)
  }
}