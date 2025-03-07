/** Chunk was on 27278 **/
t.d(n, {
  Z: () => u
});
var o = t(200651),
  r = t(442837),
  a = t(481060),
  i = t(726721),
  l = t(726521),
  c = t(592125),
  s = t(388032);

function u(e, n, t) {
  let u = i.Z.useExperiment({
      location: "activity_popout_overflow_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    d = (0, r.e7)([c.Z], () => c.Z.getChannel(n)),
    _ = null == d ? void 0 : d.getGuildId();
  return !1 === u ? null : (0, o.jsx)(a.sNh, {
    id: "report-app",
    color: "danger",
    label: s.NW.string(s.t.NgA5vr),
    action: () => (0, l.uu)({
      application: e,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != _ ? _ : void 0,
      contextualChannelId: null == d ? void 0 : d.id,
      appContext: t
    }),
    icon: a.U65
  })
}