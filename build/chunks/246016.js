/** Chunk was on 82670 **/
r.d(t, {
  Y: () => c
});
var n = r(192379),
  i = r(442837),
  l = r(699516),
  s = r(594174),
  a = r(320582);
let o = [];

function c(e) {
  let {
    userId: t
  } = e, r = (0, i.e7)([l.Z, s.default], () => {
    var e;
    return l.Z.isFriend(t) || (null == (e = s.default.getUser(t)) ? void 0 : e.isProvisional)
  }), c = (0, a.ML)(t);
  return n.useMemo(() => r ? o : c.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }), [c, r])
}