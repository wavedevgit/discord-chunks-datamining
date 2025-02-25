/** Chunk was on 27278 **/
n.d(t, {
  Z: () => _
});
var o = n(200651),
  r = n(442837),
  a = n(481060),
  i = n(726721),
  l = n(726521),
  c = n(592125),
  s = n(388032);

function _(e, t) {
  let n = i.Z.useExperiment({
      location: "activity_popout_overflow_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    _ = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
    u = null == _ ? void 0 : _.getGuildId();
  return !1 === n ? null : (0, o.jsx)(a.sNh, {
    id: "report-app",
    color: "danger",
    label: s.NW.string(s.t.NgA5vr),
    action: () => (0, l.uu)({
      application: e,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != u ? u : void 0,
      contextualChannelId: null == _ ? void 0 : _.id
    }),
    icon: a.U65
  })
}