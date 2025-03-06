/** Chunk was on 63141 **/
"use strict";
n.d(t, {
  Ns: () => v
}), n(47120);
var i = n(192379),
  r = n(392711),
  o = n.n(r),
  l = n(876215),
  a = n(442837),
  s = n(146282),
  c = n(26033),
  d = n(897674),
  u = n(709054),
  p = n(206583);
let h = new Set([l.s.PLAYED_GAME, l.s.LAUNCHED_ACTIVITY]),
  f = e => h.has(e.content_type);

function v(e) {
  let {
    entries: t
  } = function() {
    let e = (0, d.Z)(p.YN.GAME_PROFILE_FEED),
      t = (0, d.Z)(p.YN.GLOBAL_FEED),
      n = i.useMemo(() => o()(t).unionBy(e, e => e.id).filter(f).orderBy(e => u.default.extractTimestamp(e.id), "desc").uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id).value(), [e, t]);
    return {
      requestId: (0, a.e7)([s.Z], () => s.Z.getFeedRequestId(p.YN.GAME_PROFILE_FEED)),
      entries: n
    }
  }();
  return i.useMemo(() => null == t ? void 0 : t.filter(t => ((0, c.dX)(t) || (0, c.Mq)(t)) && t.extra.application_id === e), [t, e])
}