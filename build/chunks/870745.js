/** Chunk was on 27278 **/
n.d(t, {
  Z: () => s
});
var r = n(200651),
  o = n(442837),
  a = n(481060),
  i = n(726721),
  l = n(726521),
  c = n(592125),
  u = n(388032);

function s(e, t) {
  let n = i.Z.useExperiment({
      location: "activity_popout_overflow_menu"
    }, {
      autoTrackExposure: !0
    }).enabled,
    s = (0, o.e7)([c.Z], () => c.Z.getChannel(t)),
    d = null == s ? void 0 : s.getGuildId();
  return !1 === n ? null : (0, r.jsx)(a.sNh, {
    id: "report-app",
    color: "danger",
    label: u.NW.string(u.t.NgA5vr),
    action: () => (0, l.uu)({
      application: e,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != d ? d : void 0,
      contextualChannelId: null == s ? void 0 : s.id
    }),
    icon: a.U65
  })
}