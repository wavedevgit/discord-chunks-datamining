/** Chunk was on 79839 **/
"use strict";
r.d(t, {
  Z: () => a
}), r(388685);
var l = r(209739),
  o = r.n(l),
  n = r(358085);
let i = {
  [n.PlatformTypes.WINDOWS]: {
    nvidia: ">=397.93.0"
  }
};

function a(e) {
  let t = i[(0, n.getPlatform)()];
  if (null == t) return !1;
  for (let r of Object.keys(e)) {
    let l = e[r],
      n = t[r];
    if (null == l || null == n || null != l.error) continue;
    let i = function(e) {
      var t, r;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (r = e.minor) ? r : 0, ".0")
    }(l);
    if (!o().satisfies(i, n)) return !0
  }
  return !1
}