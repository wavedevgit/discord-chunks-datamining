/** Chunk was on 35755 **/
n.d(t, {
  E: () => m
}), n(47120);
var i = n(192379),
  r = n(442837),
  l = n(424602),
  o = n(835473),
  a = n(594174),
  c = n(695103),
  s = n(823379),
  d = n(358085),
  u = n(317381),
  p = n(761122);

function m(e, t) {
  let n = (0, r.e7)([a.default], a.default.getCurrentUser),
    m = (0, r.Wu)([u.ZP], () => u.ZP.getShelfActivities(e)),
    f = (0, r.e7)([c.Z], () => c.Z.testModeEmbeddedApplicationId),
    h = m.map(e => e.application_id),
    b = null != f ? [f, ...h] : h,
    v = (0, o.Z)(b),
    C = "channel" in t && (0, l.aZ)(t.channel, "useActivityShelfData()"),
    _ = i.useMemo(() => v.filter(s.lm), [v]),
    x = i.useMemo(() => null != f && _.length > 0 && _[0].id === f && null != _[0].embeddedActivityConfig ? [{
      activity: _[0].embeddedActivityConfig,
      application: _[0]
    }] : [], [_, f]),
    y = i.useMemo(() => m.map(e => {
      let t = _.find(t => t.id === e.application_id);
      return null == t ? null : {
        activity: e,
        application: t
      }
    }).filter(s.lm), [m, _]);
  return i.useMemo(() => [...x, ...y].filter(e => {
    var t;
    let {
      activity: n
    } = e;
    return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, p.Z)((0, d.getOS)()))
  }).filter(e => {
    let {
      activity: t
    } = e;
    return !t.requires_age_gate || (null == n ? void 0 : n.nsfwAllowed) === !0 || (null == n ? void 0 : n.nsfwAllowed) == null
  }).filter(e => !C || e.application.id !== l.gu), [null == n ? void 0 : n.nsfwAllowed, y, C, x])
}