/** Chunk was on 51724 **/
n.d(t, {
  Z: () => p
}), n(653041);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(165630),
  o = n(771845),
  c = n(11844),
  d = n(300037),
  u = n(388032),
  m = n(589278);
let p = function(e) {
  let {
    canAddBoosts: t,
    canApplyBoosts: n
  } = e, p = (0, s.e7)([l.Z], () => l.Z.affinities), g = (0, s.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds()), h = i.useMemo(() => {
    let e = p.slice(0, 3).map(e => e.guildId);
    for (let t = 0; t < g.length && !(e.length >= 3); t++) {
      let n = g[t];
      e.includes(n) || e.push(n)
    }
    return e
  }, [p, g]);
  return 0 === h.length ? null : (0, r.jsxs)("div", {
    className: m.wrapper,
    children: [t && (0, r.jsx)(a.X6q, {
      variant: "heading-lg/semibold",
      className: m.header,
      children: u.NW.string(u.t.r90Wgo)
    }), h.map(e => (0, r.jsx)(d.Z, {
      className: m.recommendedServerCard,
      guildId: e,
      boostingVariant: !0
    }, e)), g.length > 3 && n && (0, r.jsx)(c.Z, {})]
  })
}