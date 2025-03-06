/** Chunk was on 75101 **/
n.d(t, {
  E: () => p
}), n(47120);
var i = n(192379),
  r = n(442837),
  l = n(835473),
  o = n(594174),
  a = n(695103),
  c = n(823379),
  u = n(358085),
  d = n(317381),
  s = n(761122);

function p(e) {
  let t = (0, r.e7)([o.default], o.default.getCurrentUser),
    n = (0, r.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
    p = (0, r.e7)([a.Z], () => a.Z.testModeEmbeddedApplicationId),
    f = n.map(e => e.application_id),
    v = null != p ? [p, ...f] : f,
    b = (0, l.Z)(v),
    y = i.useMemo(() => b.filter(c.lm), [b]),
    g = i.useMemo(() => null != p && y.length > 0 && y[0].id === p && null != y[0].embeddedActivityConfig ? [{
      activity: y[0].embeddedActivityConfig,
      application: y[0]
    }] : [], [y, p]),
    h = i.useMemo(() => n.map(e => {
      let t = y.find(t => t.id === e.application_id);
      return null == t ? null : {
        activity: e,
        application: t
      }
    }).filter(c.lm), [n, y]);
  return i.useMemo(() => [...g, ...h].filter(e => {
    var t;
    let {
      activity: n
    } = e;
    return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, s.Z)((0, u.getOS)()))
  }).filter(e => {
    let {
      activity: n
    } = e;
    return !n.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null
  }), [null == t ? void 0 : t.nsfwAllowed, h, g])
}