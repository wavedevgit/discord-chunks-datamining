/** Chunk was on 88235 **/
n.d(t, {
  Z: () => c
});
var r = n(192379),
  l = n(442837),
  i = n(726542),
  o = n(122021),
  s = n(621853);
let a = [];

function c(e) {
  let t = (0, o.Xj)({
      forUserProfile: !0
    }),
    n = (0, l.e7)([s.Z], () => s.Z.getUserProfile(e));
  return (0, r.useMemo)(() => (null == n ? void 0 : n.connectedAccounts) == null ? a : n.connectedAccounts.filter(e => {
    let {
      type: n
    } = e, r = i.Z.get(n);
    return null != r && t(r)
  }), [null == n ? void 0 : n.connectedAccounts, t])
}