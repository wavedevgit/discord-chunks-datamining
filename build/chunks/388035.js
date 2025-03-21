/** Chunk was on 8473 **/
n.d(t, {
  U: () => g
}), n(47120);
var r = n(200651),
  i = n(704215),
  a = n(481060),
  o = n(243778),
  l = n(970731),
  s = n(2818),
  c = n(921944),
  u = n(388032),
  d = n(731055),
  p = n(235810);
let m = i.z.FOR_LATER_POPOUT_COACHMARK,
  f = () => (0, r.jsx)("div", {
    className: d.imageContainer,
    children: (0, r.jsx)("img", {
      className: d.image,
      src: p,
      alt: ""
    })
  }),
  h = e => (0, r.jsx)(l.ZP, {
    className: d.container,
    asset: (0, r.jsx)(f, {}),
    header: u.NW.string(u.t.qPbFKy),
    content: u.NW.string(u.t.URrJq6),
    buttonCTA: u.NW.string(u.t["NX+WJC"]),
    buttonProps: {
      color: a.Ttl.WHITE,
      innerClassName: d.primaryButton
    },
    onClick: () => e(c.L.USER_DISMISS),
    markAsDismissed: e,
    caretPosition: l.DF.TOP_RIGHT
  });

function g(e) {
  let {
    location: t,
    children: n
  } = e, {
    enabled: i,
    inInbox: l
  } = s.Z.useExperiment({
    location: "ForLaterCoachmarkWeb"
  }, {
    autoTrackExposure: !1
  }), [c, u] = (0, o.US)(i && t === (l ? "inbox-button" : "bookmarks-button") ? [m] : [], void 0);
  return c !== m ? n : (0, r.jsx)(a.yRy, {
    renderPopout: () => h(u),
    position: "bottom",
    align: "right",
    animation: a.yRy.Animation.TRANSLATE,
    shouldShow: !0,
    children: () => n
  })
}