/** Chunk was on 23357 **/
/** chunk id: 884998, original params: e,t,n (module,exports,require) **/
"use strict";
var r, Chunk424353 = require("./424353.js"),
  Chunk498996 = require("./498996.js"),
  Chunk971428 = require("./971428.js"),
  Chunk560103 = require("./560103.js"),
  Chunk673574 = require("./673574.js"),
  Chunk689933 = require("./689933.js"),
  Chunk592802 = require("./592802.js"),
  d = Chunk424353.Function,
  p = /MSIE .\./.test(Chunk673574) || "BUN" === Chunk560103 && ((r = Chunk424353.Bun.version.split(".")).length < 3 || "0" === r[0] && (r[1] < 3 || "3" === r[1] && "0" === r[2]));
module.exports = function(e, t) {
  var n = t ? 2 : 1;
  return p ? function(r, o) {
    var s = u(arguments.length, 1) > n,
      c = i(r) ? r : d(r),
      p = s ? l(arguments, n) : [],
      h = s ? function() {
        a(c, this, p)
      } : c;
    return t ? e(h, o) : e(h)
  } : e
}