/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => N
}), n(627341), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(278074),
  a = n(442837),
  s = n(704215),
  l = n(481060),
  c = n(980591),
  u = n(381586),
  d = n(243778),
  f = n(970731),
  _ = n(158776),
  p = n(594174),
  h = n(81570),
  m = n(652853),
  g = n(228168),
  E = n(981631),
  v = n(388032),
  b = n(937349),
  y = n(425637),
  O = n(685741);
let I = 200,
  S = 32,
  T = 30;

function N(e) {
  let {
    sourceType: t,
    children: n,
    user: N
  } = e, {
    profileType: A
  } = (0, m.z)(), C = (0, h.T)({
    location: "UserProfilePopoutInteractionCoachmark"
  }), R = (0, a.e7)([p.default], () => {
    var e;
    return (null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === N.id
  }), P = (0, a.e7)([_.Z], () => _.Z.findActivity(N.id, e => {
    let {
      type: t
    } = e;
    return t === E.IIU.CUSTOM_STATUS
  })), w = !R && A === g.y0.BITE_SIZE && (0, o.EQ)(t).with(g.n_.AVATAR, () => C && null == P).with(g.n_.STATUS, () => C).with(g.n_.ACTIVITY, () => !C).exhaustive(), [D, L] = i.useState(!1);
  (0, c.Z)(() => L(!0), w ? I : null);
  let {
    asset: x,
    assetClassName: M,
    className: k,
    content: j,
    header: U,
    spacing: G,
    dismissibleContentType: B
  } = C ? {
    asset: O,
    assetClassName: b.profileImage,
    className: b.profileCoachmark,
    content: v.NW.string(v.t.HEGlIC),
    header: v.NW.string(v.t["R/RaKy"]),
    spacing: T,
    dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
  } : {
    asset: y,
    assetClassName: void 0,
    className: b.activityCoachmark,
    content: v.NW.string(v.t.LQ32TU),
    header: v.NW.string(v.t.XDBiPT),
    spacing: S,
    dismissibleContentType: s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
  }, V = (0, u.N)(s.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK), F = D && !V ? [B] : [], [Z, H] = (0, d.US)(F);
  return (0, r.jsx)(l.yRy, {
    align: "center",
    position: t === g.n_.AVATAR ? "left" : "right",
    shouldShow: null != Z,
    spacing: G,
    renderPopout: e => {
      let {
        position: t,
        closePopout: n,
        setPopoutRef: i
      } = e;
      return (0, r.jsx)(l.VqE, {
        ref: i,
        children: (0, r.jsx)(f.ZP, {
          className: k,
          asset: (0, r.jsx)("img", {
            alt: "",
            src: x,
            className: M
          }),
          buttonCTA: v.NW.string(v.t["+IrDzM"]),
          buttonLayout: f._F.STACKED,
          buttonProps: {
            color: l.Ttl.BRAND_INVERTED,
            size: l.zxk.Sizes.SMALL
          },
          caretPosition: "right" === t ? f.DF.LEFT_CENTER : f.DF.RIGHT_CENTER,
          content: (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: j
          }),
          header: U,
          headerClassName: b.tooltipHeader,
          markAsDismissed: H,
          onClick: n
        })
      })
    },
    children: () => n
  })
}