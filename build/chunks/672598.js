/** Chunk was on 52657 **/
"use strict";
n.d(t, {
  Z: () => u
}), n(47120);
var r = n(209739),
  i = n.n(r),
  l = n(358085);
let o = {
  [l.PlatformTypes.WINDOWS]: {
    nvidia: ">=397.93.0"
  }
};

function u(e) {
  let t = o[(0, l.getPlatform)()];
  if (null == t) return !1;
  for (let n of Object.keys(e)) {
    let r = e[n],
      l = t[n];
    if (null == r || null == l || null != r.error) continue;
    let o = function(e) {
      var t, n;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0")
    }(r);
    if (!i().satisfies(o, l)) return !0
  }
  return !1
}