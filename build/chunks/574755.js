/** Chunk was on 10451 **/
n.d(t, {
  Z: () => C
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(704215),
  o = n(481060),
  l = n(906732),
  c = n(605236),
  d = n(441167),
  u = n(695346),
  m = n(131951),
  g = n(924557),
  p = n(435064),
  h = n(779618),
  f = n(39604),
  b = n(703288),
  N = n(491758),
  x = n(233685),
  _ = n(388032),
  E = n(770865),
  j = n(133881),
  O = n(685786);

function C(e) {
  let {
    className: t,
    showHeader: n = !0
  } = e, C = u.tU.useSetting(), {
    enableViewerClipping: v
  } = d.Z.useExperiment({
    location: "Clips Settings"
  }, {
    autoTrackExposure: !1
  }), {
    analyticsLocations: S
  } = (0, l.ZP)(), T = (0, g.Go)(), {
    viewerClipsEnabled: I
  } = (0, s.cj)([p.Z], () => p.Z.getSettings()), y = (0, h.Z)(m.Z);
  return i.useEffect(() => {
    (0, c.EW)(a.z.CLIPS_SETTINGS_BETA_TAG)
  }), (0, r.jsxs)(l.Gt, {
    value: S,
    children: [(T || n) && (0, r.jsx)(o.hjN, {
      className: t,
      tag: o.RB0.H1,
      title: n ? (0, r.jsxs)("div", {
        className: E.headerContainer,
        children: [_.NW.string(_.t.z2jK6e), (0, r.jsx)(b.Z, {})]
      }) : null,
      children: T && (0, r.jsxs)("form", {
        onSubmit: e => e.preventDefault(),
        children: [(0, r.jsx)(N.Z, {}), (0, r.jsx)(x.Z, {})]
      })
    }), T && (0, r.jsx)(o.$i$, {}), (0, r.jsxs)(o.hjN, {
      className: n || T ? O.marginTop20 : t,
      children: [(0, r.jsx)(o.j7V, {
        hideBorder: !0,
        className: j.formItem,
        value: C,
        note: _.NW.string(_.t["wW9/zc"]),
        onChange: e => f.yg({
          allowVoiceRecording: e
        }),
        children: _.NW.string(_.t.AGDDkJ)
      }), v && y && (0, r.jsx)(o.j7V, {
        hideBorder: !0,
        className: j.formItem,
        value: I,
        note: _.NW.string(_.t["0vjy8P"]),
        onChange: e => f.yl({
          enabled: e,
          trackAnalytics: !0
        }),
        children: _.NW.string(_.t.NWw7kZ)
      })]
    })]
  })
}