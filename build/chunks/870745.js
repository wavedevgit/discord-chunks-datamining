/** Chunk was on 27278 (bd601620f7125751.js) **/
n.d(t, {
  Z: () => u
});
var r = n(200651),
  o = n(442837),
  i = n(481060),
  l = n(726721),
  a = n(726521),
  c = n(592125),
  d = n(388032);

function u(e, t) {
  let n = l.Z.useExperiment({
      location: "activity_popout_overflow_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    u = (0, o.e7)([c.Z], () => c.Z.getChannel(t)),
    s = null == u ? void 0 : u.getGuildId();
  return !1 === n ? null : (0, r.jsx)(i.sNh, {
    id: "report-app",
    color: "danger",
    label: d.NW.string(d.t.NgA5vr),
    action: () => (0, a.uu)({
      application: e,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != s ? s : void 0,
      contextualChannelId: null == u ? void 0 : u.id
    }),
    icon: i.U65
  })
}