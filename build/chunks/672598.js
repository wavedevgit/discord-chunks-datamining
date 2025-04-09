/** Chunk was on 50844 **/
"use strict";
n.d(t, {
  Z: () => o
}), n(388685);
var r = n(209739),
  i = n.n(r),
  l = n(358085);
let u = {
  [l.PlatformTypes.WINDOWS]: {
    nvidia: ">=397.93.0"
  }
};

function o(e) {
  let t = u[(0, l.getPlatform)()];
  if (null == t) return !1;
  for (let n of Object.keys(e)) {
    let r = e[n],
      l = t[n];
    if (null == r || null == l || null != r.error) continue;
    let u = function(e) {
      var t, n;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (n = e.minor) ? n : 0, ".0")
    }(r);
    if (!i().satisfies(u, l)) return !0
  }
  return !1
}