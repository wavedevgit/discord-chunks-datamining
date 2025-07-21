/** Chunk was on 69416 **/
"use strict";
r.d(t, {
  Z: () => s
}), r(388685);
var l = r(209739),
  n = r.n(l),
  i = r(358085);
let o = {
  [i.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function s(e) {
  let t = o[(0, i.getPlatform)()];
  if (null == t) return !1;
  for (let r of Object.keys(e)) {
    let l = e[r],
      i = t[r];
    if (null == l || null == i || null != l.error) continue;
    let o = function(e) {
      var t, r;
      return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (r = e.minor) ? r : 0, ".0")
    }(l);
    if (!n().satisfies(o, i)) return !0
  }
  return !1
}