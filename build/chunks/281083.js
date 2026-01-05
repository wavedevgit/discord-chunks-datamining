/** Chunk was on 27601 **/
/** chunk id: 281083, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk209739 = require("./209739.js"),
  l = require.n(Chunk209739),
  Chunk358085 = require("./358085.js");
let i = {
  [Chunk358085.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function s(e) {
  let t = i[(0, r.getPlatform)()];
  if (null == t) returnfalse;
  for (let a of Object.keys(e)) {
    let n = e[a],
      r = t[a];
    if (null == n || null == r || null != n.error) continue;
    let i = function(e) {
      var t, a;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (a = e.minor) ? a : 0, ".0")
    }(n);
    if (!l().satisfies(i, r)) returntrue
  }
  returnfalse
}