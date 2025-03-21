/** Chunk was on 98977 **/
n.d(e, {
  Ns: () => I
}), n(47120);
var r = n(192379),
  s = n(392711),
  i = n.n(s),
  l = n(876215),
  a = n(442837),
  u = n(146282),
  o = n(26033),
  c = n(897674),
  d = n(709054),
  A = n(206583);
let _ = new Set([l.s.PLAYED_GAME, l.s.LAUNCHED_ACTIVITY]),
  E = t => _.has(t.content_type);

function I(t) {
  let {
    entries: e
  } = function() {
    let t = (0, c.Z)(A.YN.GAME_PROFILE_FEED),
      e = (0, c.Z)(A.YN.GLOBAL_FEED),
      n = r.useMemo(() => i()(e).unionBy(t, t => t.id).filter(E).orderBy(t => d.default.extractTimestamp(t.id), "desc").uniqWith((t, e) => t.author_id === e.author_id && t.extra.application_id === e.extra.application_id).value(), [t, e]);
    return {
      requestId: (0, a.e7)([u.Z], () => u.Z.getFeedRequestId(A.YN.GAME_PROFILE_FEED)),
      entries: n
    }
  }();
  return r.useMemo(() => null == e ? void 0 : e.filter(e => ((0, o.dX)(e) || (0, o.Mq)(e)) && e.extra.application_id === t), [e, t])
}