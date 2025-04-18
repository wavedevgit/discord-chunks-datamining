/** Chunk was on 26011 **/
n.d(t, {
  m: () => c
});
var i = n(442837),
  r = n(440051),
  l = n(695346),
  o = n(314897),
  s = n(709054),
  a = n(7093);
let c = () => {
  let {
    showNewHelpTooltip: e
  } = r.Y.useExperiment({
    location: "useCanSeeExpiringStatusCoachmark"
  }, {
    autoTrackExposure: !1
  }), t = l.Cr.useSetting(), n = (0, a.Z)(e => e.isOpen), c = (0, i.e7)([o.default], () => o.default.getId());
  return !((null != c ? s.default.extractTimestamp(c) : 0) > new Date("2025-02-01").getTime()) && !n && e && null != t && "0" !== t
}