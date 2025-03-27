/** Chunk was on 87791 **/
n.d(t, {
  FT: () => f,
  Qd: () => h
});
var r = n(442837),
  i = n(704215),
  o = n(675478),
  l = n(581883),
  a = n(626135),
  s = n(915486),
  c = n(981631),
  u = n(921944),
  d = n(526761);

function p(e, t) {
  let n = l.Z.getDismissedGuildContent(t);
  return null != n && (0, s.jl)(n, e)
}

function f(e, t) {
  return (0, r.e7)([l.Z], () => p(e, t))
}

function h(e, t, n, r) {
  (0, o.PS)(t, n => {
    if (p(e, t)) return !1;
    n.dismissedGuildContent = (0, s.GV)(n.dismissedGuildContent, e)
  }, d.fy.INFREQUENT_USER_ACTION), n && a.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
    type: i.C[e],
    guild_id: t,
    action: null != r ? r : u.L.UNKNOWN
  })
}