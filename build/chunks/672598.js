/** Chunk was on 65174 **/
/** chunk id: 672598, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk209739 = require("./209739.js"),
  l = require.n(Chunk209739),
  Chunk358085 = require("./358085.js");
let o = {
  [Chunk358085.PlatformTypes.WINDOWS]: {
    nvidia: ">=397.93.0"
  }
};

function i(e) {
  let t = o[(0, a.getPlatform)()];
  if (null == t) returnfalse;
  for (let r of Object.keys(e)) {
    let n = e[r],
      a = t[r];
    if (null == n || null == a || null != n.error) continue;
    let o = function(e) {
      var t, r;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (r = e.minor) ? r : 0, ".0")
    }(n);
    if (!l().satisfies(o, a)) returntrue
  }
  returnfalse
}