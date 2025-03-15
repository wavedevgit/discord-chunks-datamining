/** Chunk was on 27278 **/
t.d(n, {
  Z: () => s
});
var o = t(200651),
  r = t(442837),
  a = t(481060),
  i = t(726721),
  c = t(726521),
  l = t(592125),
  _ = t(388032);

function s(e, n, t) {
  let s = i.Z.useExperiment({
      location: "activity_popout_overflow_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    u = (0, r.e7)([l.Z], () => l.Z.getChannel(n)),
    d = null == u ? void 0 : u.getGuildId();
  return !1 === s ? null : (0, o.jsx)(a.sNh, {
    id: "report-app",
    color: "danger",
    label: _.NW.string(_.t.NgA5vr),
    action: () => (0, c.uu)({
      application: e,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != d ? d : void 0,
      contextualChannelId: null == u ? void 0 : u.id,
      appContext: t
    }),
    icon: a.U65
  })
}