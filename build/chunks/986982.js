/** Chunk was on web.js **/
/** chunk id: 986982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk325854 = require("./325854.js"),
  Chunk86465 = require("./86465.js"),
  Chunk344368 = require("./344368.js"),
  Chunk89199 = require("./89199.js");
class s extends Chunk344368.F {
  innerPatternString(e) {
    return `(ці|останні|минулі|майбутні|наступні|після|через|\\+|-)\\s*(${r.km})`
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      a = (0, r.RA)(t[3]);
    switch (n) {
      case "останні":
      case "минулі":
      case "-":
        a = (0, o.de)(a)
    }
    return i.L.createRelativeFromReference(e.reference, a)
  }
}