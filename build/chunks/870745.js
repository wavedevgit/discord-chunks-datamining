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
  _ = t(388032);

function u(e, n, t) {
  let u = i.Z.useExperiment({
      location: "activity_popout_overflow_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    s = (0, r.e7)([c.Z], () => c.Z.getChannel(n)),
    d = null == s ? void 0 : s.getGuildId();
  return !1 === u ? null : (0, o.jsx)(a.sNh, {
    id: "report-app",
    color: "danger",
    label: _.NW.string(_.t.NgA5vr),
    action: () => (0, l.uu)({
      application: e,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != d ? d : void 0,
      contextualChannelId: null == s ? void 0 : s.id,
      appContext: t
    }),
    icon: a.U65
  })
}