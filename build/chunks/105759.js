/** Chunk was on 54433 **/
t.d(n, {
  Z: () => d
});
var i = t(73800),
  l = t(442837),
  r = t(598077),
  s = t(699516),
  a = t(431),
  o = t(786397),
  C = t(474936);

function d() {
  let e = (0, o.w)(C.a7),
    n = (0, l.e7)([a.Z], () => a.Z.getReferrer(null == e ? void 0 : e.trial_id)),
    t = (0, l.e7)([s.Z], () => null == n || s.Z.isBlockedOrIgnored(n.id));
  return i.useMemo(() => t || null == n ? null : new r.Z(n), [n, t])
}