/** Chunk was on 79839 **/
/** chunk id: 281083, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk209739 = require("./209739.js"),
  o = require.n(Chunk209739),
  Chunk358085 = require("./358085.js");
let i = {
  [Chunk358085.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function a(e) {
  let t = i[(0, n.getPlatform)()];
  if (null == t) returnfalse;
  for (let r of Object.keys(e)) {
    let l = e[r],
      n = t[r];
    if (null == l || null == n || null != l.error) continue;
    let i = function(e) {
      var t, r;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (r = e.minor) ? r : 0, ".0")
    }(l);
    if (!o().satisfies(i, n)) returntrue
  }
  returnfalse
}