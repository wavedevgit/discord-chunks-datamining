/** Chunk was on 86546 **/
n.d(t, {
  Ns: () => g
}), n(47120);
var r = n(192379),
  l = n(392711),
  i = n.n(l),
  o = n(876215),
  a = n(442837),
  s = n(146282),
  c = n(26033),
  u = n(897674),
  d = n(709054),
  f = n(206583);
let p = new Set([o.s.PLAYED_GAME, o.s.LAUNCHED_ACTIVITY]),
  m = e => p.has(e.content_type);

function g(e) {
  let {
    entries: t
  } = function() {
    let e = (0, u.Z)(f.YN.GAME_PROFILE_FEED),
      t = (0, u.Z)(f.YN.GLOBAL_FEED),
      n = r.useMemo(() => i()(t).unionBy(e, e => e.id).filter(m).orderBy(e => d.default.extractTimestamp(e.id), "desc").uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id).value(), [e, t]);
    return {
      requestId: (0, a.e7)([s.Z], () => s.Z.getFeedRequestId(f.YN.GAME_PROFILE_FEED)),
      entries: n
    }
  }();
  return r.useMemo(() => null == t ? void 0 : t.filter(t => ((0, c.dX)(t) || (0, c.Mq)(t)) && t.extra.application_id === e), [t, e])
}