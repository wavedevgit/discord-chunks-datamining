/** Chunk was on 35755 **/
n.d(t, {
  E: () => m
}), n(47120);
var i = n(192379),
  l = n(442837),
  r = n(424602),
  o = n(835473),
  a = n(594174),
  s = n(695103),
  c = n(823379),
  u = n(358085),
  d = n(317381),
  p = n(761122);

function m(e, t) {
  let n = (0, l.e7)([a.default], a.default.getCurrentUser),
    m = (0, l.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
    h = (0, l.e7)([s.Z], () => s.Z.testModeEmbeddedApplicationId),
    f = m.map(e => e.application_id),
    v = null != h ? [h, ...f] : f,
    N = (0, o.Z)(v),
    x = "channel" in t && (0, r.aZ)(t.channel, "useActivityShelfData()"),
    y = i.useMemo(() => N.filter(c.lm), [N]),
    b = i.useMemo(() => null != h && y.length > 0 && y[0].id === h && null != y[0].embeddedActivityConfig ? [{
      activity: y[0].embeddedActivityConfig,
      application: y[0]
    }] : [], [y, h]),
    g = i.useMemo(() => m.map(e => {
      let t = y.find(t => t.id === e.application_id);
      return null == t ? null : {
        activity: e,
        application: t
      }
    }).filter(c.lm), [m, y]);
  return i.useMemo(() => [...b, ...g].filter(e => {
    var t;
    let {
      activity: n
    } = e;
    return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, p.Z)((0, u.getOS)()))
  }).filter(e => {
    let {
      activity: t
    } = e;
    return !t.requires_age_gate || (null == n ? void 0 : n.nsfwAllowed) === !0 || (null == n ? void 0 : n.nsfwAllowed) == null
  }).filter(e => !x || e.application.id !== r.gu), [null == n ? void 0 : n.nsfwAllowed, g, x, b])
}