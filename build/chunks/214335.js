/** Chunk was on 45565 **/
/** chunk id: 214335, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk299855 = require("./299855.js"),
  r = require.n(Chunk299855),
  Chunk723702 = require("./723702.js");
let i = {
  [Chunk723702.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function s(e) {
  let t = i[(0, n.getPlatform)()];
  if (null == t) returnfalse;
  for (let a of Object.keys(e)) {
    let l = e[a],
      n = t[a];
    if (null == l || null == n || null != l.error) continue;
    let i = function(e) {
      var t, a;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (a = e.minor) ? a : 0, ".0")
    }(l);
    if (!r().satisfies(i, n)) returntrue
  }
  returnfalse
}