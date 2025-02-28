/** Chunk was on 40580 **/
"use strict";
r.d(t, {
  Z: () => P
});
var n = r(200651);
r(192379);
var s = r(120356),
  i = r.n(s),
  o = r(442837),
  l = r(704215),
  a = r(605236),
  c = r(650032),
  u = r(351367),
  d = r(104494),
  p = r(639119),
  f = r(655525),
  b = r(52188),
  g = r(346497),
  O = r(924540),
  m = r(474486),
  h = r(227140),
  x = r(351402),
  j = r(170671),
  y = r(474936),
  C = r(388032),
  v = r(663407);

function P(e) {
  let t, {
      decoration: r,
      label: s,
      isSelected: P
    } = e,
    _ = (0, p.N)(),
    S = (0, d.Ng)(),
    N = (0, g.Vi)(),
    E = (0, o.e7)([x.Z], () => x.Z.isLocalizedPromoEnabled) && null == _ && null == r,
    {
      enabled: w
    } = c._.useExperiment({
      location: "UserSettingsPremiumLabel"
    }, {
      autoTrackExposure: !1
    }),
    T = w && (null == _ ? void 0 : _.trial_id) === y.a7,
    R = (0, u.m)({
      location: "UserSettingsPremiumLabel"
    }),
    L = (0, a.wE)(l.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE);
  return t = !0 === R ? !0 === L ? (0, n.jsx)(m.Du, {}) : (0, n.jsx)(h.Z, {
    copy: C.NW.string(C.t.OS9KPj),
    showStars: !1
  }) : N ? (0, n.jsx)(f.Z, {}) : null != S ? (0, n.jsx)(O.GN, {
    isTabSelected: P,
    userDiscount: S,
    includesAmountOff: !1
  }) : null == _ || T ? null != r ? r : E ? (0, n.jsx)(b.k, {
    entryPoint: b.U.SettingsMenu
  }) : (0, n.jsx)(j.Z, {
    isSelected: P
  }) : (0, n.jsx)(O.$H, {
    isTabSelected: P,
    trialOffer: _
  }), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: i()(v.premiumLabel, {
        [v.selected]: (P || E) && !N
      }),
      children: [s, t]
    }), (0, n.jsx)("div", {
      className: i()(v.background, {
        [v.auPromo]: E && !P,
        [v.auPromoSelected]: E && P,
        [v.selectedBackground]: !E && !N && P
      })
    })]
  })
}