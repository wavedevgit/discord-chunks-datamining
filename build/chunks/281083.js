/** Chunk was on 74957 **/
/** chunk id: 281083, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk209739 = require("./209739.js"),
  o = require.n(Chunk209739),
  Chunk358085 = require("./358085.js");
let c = {
  [Chunk358085.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function l(e) {
  let n = c[(0, a.getPlatform)()];
  if (null == n) returnfalse;
  for (let t of Object.keys(e)) {
    let r = e[t],
      a = n[t];
    if (null == r || null == a || null != r.error) continue;
    let c = function(e) {
      var n, t;
      return "".concat(null != (n = e.major) ? n : 0, ".").concat(null != (t = e.minor) ? t : 0, ".0")
    }(r);
    if (!o().satisfies(c, a)) returntrue
  }
  returnfalse
}