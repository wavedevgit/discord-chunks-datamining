/** Chunk was on 40580 (29804edbfa36af1f.js) **/
"use strict";
r.d(t, {
  G: () => c,
  Q: () => a
});
var n = r(192379),
  s = r(442837),
  i = r(232567),
  o = r(594174),
  l = r(276444);
let a = 3;

function c() {
  let e = (0, s.Wu)([l.Z], () => l.Z.getSentUserIds()),
    t = (0, s.Wu)([o.default], () => e.map(e => o.default.getUser(e)).filter(e => null != e));
  return n.useEffect(() => {
    e.forEach(e => {
      (0, i.PR)(e)
    })
  }, [e]), {
    referralSentUsers: t,
    hasSentAllReferrals: e.length === a,
    refreshAt: (0, s.e7)([l.Z], () => l.Z.getRefreshAt())
  }
}