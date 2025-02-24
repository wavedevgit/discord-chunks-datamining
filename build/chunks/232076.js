/** Chunk was on 40580 (29804edbfa36af1f.js) **/
"use strict";
r.d(t, {
  B: () => p
});
var n = r(192379),
  s = r(442837),
  i = r(594174),
  o = r(111361),
  l = r(140465),
  a = r(775412),
  c = r(276444),
  u = r(912244),
  d = r(474936);
let p = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    r = (0, s.e7)([i.default], () => i.default.getCurrentUser()),
    p = (0, l.t7)(),
    f = (0, a._O)(),
    {
      eligibleToFetch: b
    } = (0, u.N)(e),
    g = b && (null == r ? void 0 : r.verified) === !0 && (0, o.M5)(r, d.p9.TIER_2) && !p && !f;
  n.useEffect(() => {
    g && !t && c.Z.checkAndFetchReferralsRemaining()
  }, [g, t])
}