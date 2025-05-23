/** Chunk was on 54433 **/
n.d(t, {
  Z: () => d
});
var i = n(73800),
  l = n(442837),
  s = n(598077),
  r = n(699516),
  a = n(431),
  C = n(786397),
  o = n(474936);

function d() {
  let e = (0, C.w)(o.a7),
    t = (0, l.e7)([a.Z], () => a.Z.getReferrer(null == e ? void 0 : e.trial_id)),
    n = (0, l.e7)([r.Z], () => null == t || r.Z.isBlockedOrIgnored(t.id));
  return i.useMemo(() => n || null == t ? null : new s.Z(t), [t, n])
}