/** Chunk was on 56784 **/
/** chunk id: 281083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk209739 = require("./209739.js"),
  i = require.n(Chunk209739),
  Chunk358085 = require("./358085.js");
let u = {
  [Chunk358085.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function a(e) {
  let t = u[(0, l.getPlatform)()];
  if (null == t) returnfalse;
  for (let n of Object.keys(e)) {
    let r = e[n],
      l = t[n];
    if (null == r || null == l || null != r.error) continue;
    let u = function(e) {
      var t, n;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (n = e.minor) ? n : 0, ".0")
    }(r);
    if (!i().satisfies(u, l)) returntrue
  }
  returnfalse
}