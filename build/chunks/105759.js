/** Chunk was on 54433 **/
n.d(t, {
  Z: () => d
});
var l = n(192379),
  s = n(442837),
  i = n(598077),
  r = n(699516),
  a = n(431),
  o = n(786397),
  C = n(474936);

function d() {
  let e = (0, o.w)(C.a7),
    t = (0, s.e7)([a.Z], () => a.Z.getReferrer(null == e ? void 0 : e.trial_id)),
    n = (0, s.e7)([r.Z], () => null == t || r.Z.isBlockedOrIgnored(t.id));
  return l.useMemo(() => n || null == t ? null : new i.Z(t), [t, n])
}