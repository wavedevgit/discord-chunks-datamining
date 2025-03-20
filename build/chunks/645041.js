/** Chunk was on 79536 **/
n.d(t, {
  FT: () => b,
  Qd: () => g
});
var r = n(442837),
  o = n(704215),
  i = n(675478),
  a = n(581883),
  c = n(626135),
  l = n(915486),
  s = n(981631),
  u = n(921944),
  d = n(526761);

function _(e, t) {
  let n = a.Z.getDismissedGuildContent(t);
  return null != n && (0, l.jl)(n, e)
}

function b(e, t) {
  return (0, r.e7)([a.Z], () => _(e, t))
}

function g(e, t, n, r) {
  (0, i.PS)(t, n => {
    if (_(e, t)) return !1;
    n.dismissedGuildContent = (0, l.GV)(n.dismissedGuildContent, e)
  }, d.fy.INFREQUENT_USER_ACTION), n && c.default.track(s.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
    type: o.C[e],
    guild_id: t,
    action: null != r ? r : u.L.UNKNOWN
  })
}