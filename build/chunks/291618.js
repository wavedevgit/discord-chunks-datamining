/** Chunk was on web.js **/
/** chunk id: 291618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk150816 = require("./150816.js"),
  Chunk86465 = require("./86465.js"),
  Chunk522677 = require("./522677.js"),
  Chunk89199 = require("./89199.js");
class s extends Chunk522677.F {
  innerPatternString(e) {
    return `(эти|последние|прошлые|следующие|после|спустя|через|\\+|-)\\s*(${r.km})`
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      o = (0, r.RA)(t[2]);
    switch (n) {
      case "последние":
      case "прошлые":
      case "-":
        o = (0, a.de)(o)
    }
    return i.L.createRelativeFromReference(e.reference, o)
  }
}