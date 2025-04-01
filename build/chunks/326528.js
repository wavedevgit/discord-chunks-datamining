/** Chunk was on 13323 **/
n.d(t, {
  b: () => d
});
var r = n(481060),
  i = n(358085),
  s = n(991346),
  a = n(168308),
  o = n(726985),
  l = n(332325),
  c = n(388032);

function d() {
  return function(e, t) {
    let n = [{
      id: l.Z.MY_GAMES,
      title: c.NW.string(c.t["5DMgp6"]),
      icon: r.xoD,
      predicate: () => !i.isPlatformEmbedded,
      setting: o.s6.GAMES_MY_GAMES
    }, {
      id: l.Z.CLIPS,
      title: c.NW.string(c.t.z2jK6e),
      icon: r.AlX,
      setting: o.s6.GAMES_CLIPS
    }, {
      id: l.Z.OVERLAY,
      title: c.NW.string(c.t.bNqkDw),
      icon: r.n6r,
      predicate: () => !e,
      setting: o.s6.GAMES_OVERLAY
    }, {
      id: l.Z.ACTIVITY_PRIVACY,
      title: c.NW.string(c.t.Cq98yM),
      icon: r.qOE,
      setting: o.s6.GAMES_ACTIVITY_PRIVACY
    }].filter(e => null == e.predicate || !e.predicate());
    if (null != t && t.size > 0) {
      let e = n.filter(e => t.has(e.setting));
      return e.length > 0 ? e : n
    }
    return n
  }((0, a.bC)(), (0, s.Gj)(o.s6.GAMES))
}