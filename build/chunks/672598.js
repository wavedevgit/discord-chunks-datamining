/** Chunk was on 59416 **/
/** chunk id: 672598, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk209739 = require("./209739.js"),
  l = require.n(Chunk209739),
  Chunk358085 = require("./358085.js");
let u = {
  [Chunk358085.PlatformTypes.WINDOWS]: {
    nvidia: ">=397.93.0"
  }
};

function a(e) {
  let t = u[(0, i.getPlatform)()];
  if (null == t) returnfalse;
  for (let r of Object.keys(e)) {
    let n = e[r],
      i = t[r];
    if (null == n || null == i || null != n.error) continue;
    let u = function(e) {
      var t, r;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (r = e.minor) ? r : 0, ".0")
    }(n);
    if (!l().satisfies(u, i)) returntrue
  }
  returnfalse
}