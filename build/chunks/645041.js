/** Chunk was on 76772 **/
n.d(t, {
  FT: () => b,
  Qd: () => g
});
var r = n(442837),
  o = n(704215),
  a = n(675478),
  i = n(581883),
  c = n(626135),
  l = n(915486),
  s = n(981631),
  d = n(921944),
  _ = n(526761);

function u(e, t) {
  let n = i.Z.getDismissedGuildContent(t);
  return null != n && (0, l.jl)(n, e)
}

function b(e, t) {
  return (0, r.e7)([i.Z], () => u(e, t))
}

function g(e, t, n, r) {
  (0, a.PS)(t, n => {
    if (u(e, t)) return !1;
    n.dismissedGuildContent = (0, l.GV)(n.dismissedGuildContent, e)
  }, _.fy.INFREQUENT_USER_ACTION), n && c.default.track(s.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
    type: o.C[e],
    guild_id: t,
    action: null != r ? r : d.L.UNKNOWN
  })
}