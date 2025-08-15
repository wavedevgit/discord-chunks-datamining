/** Chunk was on 69416 **/
/** chunk id: 281083, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk209739 = require("./209739.js"),
  n = require.n(Chunk209739),
  Chunk358085 = require("./358085.js");
let o = {
  [Chunk358085.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function a(e) {
  let t = o[(0, i.getPlatform)()];
  if (null == t) returnfalse;
  for (let r of Object.keys(e)) {
    let l = e[r],
      i = t[r];
    if (null == l || null == i || null != l.error) continue;
    let o = function(e) {
      var t, r;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (r = e.minor) ? r : 0, ".0")
    }(l);
    if (!n().satisfies(o, i)) returntrue
  }
  returnfalse
}