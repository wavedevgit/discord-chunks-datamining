/** Chunk was on 79887 **/
"use strict";
r.d(t, {
  Z: () => u
}), r(388685);
var n = r(209739),
  l = r.n(n),
  o = r(358085);
let i = {
  [o.PlatformTypes.WINDOWS]: {
    nvidia: ">=397.93.0"
  }
};

function u(e) {
  let t = i[(0, o.getPlatform)()];
  if (null == t) return !1;
  for (let r of Object.keys(e)) {
    let n = e[r],
      o = t[r];
    if (null == n || null == o || null != n.error) continue;
    let i = function(e) {
      var t, r;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (r = e.minor) ? r : 0, ".0")
    }(n);
    if (!l().satisfies(i, o)) return !0
  }
  return !1
}