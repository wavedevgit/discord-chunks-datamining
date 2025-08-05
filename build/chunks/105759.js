/** Chunk was on 54433 **/
n.d(t, {
  Z: () => d
});
var i = n(73800),
  r = n(442837),
  l = n(598077),
  s = n(699516),
  a = n(431),
  o = n(786397),
  C = n(474936);

function d() {
  let e = (0, o.w)(C.a7),
    t = (0, r.e7)([a.Z], () => a.Z.getReferrer(null == e ? void 0 : e.trial_id)),
    n = (0, r.e7)([s.Z], () => null == t || s.Z.isBlockedOrIgnored(t.id));
  return i.useMemo(() => n || null == t ? null : new l.Z(t), [t, n])
}