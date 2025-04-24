/** Chunk was on 90564 **/
n.d(t, {
  Ns: () => N
}), n(388685);
var r = n(192379),
  l = n(392711),
  a = n.n(l),
  i = n(876215),
  o = n(442837),
  u = n(146282),
  s = n(26033),
  c = n(897674),
  p = n(709054),
  m = n(206583);
let d = new Set([i.s.PLAYED_GAME, i.s.LAUNCHED_ACTIVITY]),
  f = e => d.has(e.content_type);

function N(e) {
  let {
    entries: t
  } = function() {
    let e = (0, c.Z)(m.YN.GAME_PROFILE_FEED),
      t = (0, c.Z)(m.YN.GLOBAL_FEED),
      n = r.useMemo(() => a()(t).unionBy(e, e => e.id).filter(f).orderBy(e => p.default.extractTimestamp(e.id), "desc").uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id).value(), [e, t]);
    return {
      requestId: (0, o.e7)([u.Z], () => u.Z.getFeedRequestId(m.YN.GAME_PROFILE_FEED)),
      entries: n
    }
  }();
  return r.useMemo(() => null == t ? void 0 : t.filter(t => ((0, s.dX)(t) || (0, s.Mq)(t)) && t.extra.application_id === e), [t, e])
}