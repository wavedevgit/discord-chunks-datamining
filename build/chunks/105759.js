/** Chunk was on 57301 **/
n.d(t, {
  Z: () => d
});
var r = n(192379),
  i = n(442837),
  l = n(598077),
  s = n(699516),
  o = n(431),
  a = n(786397),
  C = n(474936);

function d() {
  let e = (0, a.w)(C.a7),
    t = (0, i.e7)([o.Z], () => o.Z.getReferrer(null == e ? void 0 : e.trial_id)),
    n = (0, i.e7)([s.Z], () => null == t || s.Z.isBlockedOrIgnored(t.id));
  return r.useMemo(() => n || null == t ? null : new l.Z(t), [t, n])
}