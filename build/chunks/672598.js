/** Chunk was on 87668 **/
"use strict";
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(209739),
  o = n.n(r),
  c = n(358085);
let i = {
  [c.PlatformTypes.WINDOWS]: {
    nvidia: ">=397.93.0"
  }
};

function a(e) {
  let t = i[(0, c.getPlatform)()];
  if (null == t) return !1;
  for (let n of Object.keys(e)) {
    let r = e[n],
      c = t[n];
    if (null == r || null == c || null != r.error) continue;
    let i = function(e) {
      var t, n;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0")
    }(r);
    if (!o().satisfies(i, c)) return !0
  }
  return !1
}