/** Chunk was on 10451 **/
n.d(t, {
  G: () => c,
  Q: () => l
});
var r = n(192379),
  i = n(442837),
  s = n(232567),
  a = n(594174),
  o = n(276444);
let l = 3;

function c() {
  let e = (0, i.Wu)([o.Z], () => o.Z.getSentUserIds()),
    t = (0, i.Wu)([a.default], () => e.map(e => a.default.getUser(e)).filter(e => null != e));
  return r.useEffect(() => {
    e.forEach(e => {
      (0, s.PR)(e)
    })
  }, [e]), {
    referralSentUsers: t,
    hasSentAllReferrals: e.length === l,
    refreshAt: (0, i.e7)([o.Z], () => o.Z.getRefreshAt())
  }
}