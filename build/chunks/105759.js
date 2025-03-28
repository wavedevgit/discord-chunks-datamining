/** Chunk was on 20447 **/
n.d(t, {
  Z: () => d
});
var r = n(192379),
  i = n(442837),
  s = n(598077),
  a = n(699516),
  o = n(431),
  l = n(786397),
  c = n(474936);

function d() {
  let e = (0, l.w)(c.a7),
    t = (0, i.e7)([o.Z], () => o.Z.getReferrer(null == e ? void 0 : e.trial_id)),
    n = (0, i.e7)([a.Z], () => null == t || a.Z.isBlockedOrIgnored(t.id));
  return r.useMemo(() => n || null == t ? null : new s.Z(t), [t, n])
}