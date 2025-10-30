/** Chunk was on 74957 **/
/** chunk id: 281083, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk209739 = require("./209739.js"),
  o = require.n(Chunk209739),
  Chunk358085 = require("./358085.js");
let a = {
  [Chunk358085.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function l(e) {
  let n = a[(0, c.getPlatform)()];
  if (null == n) returnfalse;
  for (let t of Object.keys(e)) {
    let r = e[t],
      c = n[t];
    if (null == r || null == c || null != r.error) continue;
    let a = function(e) {
      var n, t;
      return "".concat(null != (n = e.major) ? n : 0, ".").concat(null != (t = e.minor) ? t : 0, ".0")
    }(r);
    if (!o().satisfies(a, c)) returntrue
  }
  returnfalse
}