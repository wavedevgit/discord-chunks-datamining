/** Chunk was on 54030 **/
n.d(t, {
  FT: () => f,
  Qd: () => b
});
var r = n(442837),
  o = n(704215),
  a = n(675478),
  i = n(581883),
  c = n(626135),
  l = n(915486),
  _ = n(981631),
  u = n(921944),
  s = n(526761);

function d(e, t) {
  let n = i.Z.getDismissedGuildContent(t);
  return null != n && (0, l.jl)(n, e)
}

function f(e, t) {
  return (0, r.e7)([i.Z], () => d(e, t))
}

function b(e, t, n, r) {
  (0, a.PS)(t, n => {
    if (d(e, t)) return !1;
    n.dismissedGuildContent = (0, l.GV)(n.dismissedGuildContent, e)
  }, s.fy.INFREQUENT_USER_ACTION), n && c.default.track(_.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
    type: o.C[e],
    guild_id: t,
    action: null != r ? r : u.L.UNKNOWN
  })
}