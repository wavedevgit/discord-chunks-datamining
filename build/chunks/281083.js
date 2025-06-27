/** Chunk was on 58354 **/
"use strict";
r.d(t, {
  Z: () => u
}), r(388685);
var n = r(209739),
  o = r.n(n),
  l = r(358085);
let i = {
  [l.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function u(e) {
  let t = i[(0, l.getPlatform)()];
  if (null == t) return !1;
  for (let r of Object.keys(e)) {
    let n = e[r],
      l = t[r];
    if (null == n || null == l || null != n.error) continue;
    let i = function(e) {
      var t, r;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (r = e.minor) ? r : 0, ".0")
    }(n);
    if (!o().satisfies(i, l)) return !0
  }
  return !1
}