/** Chunk was on 10451 **/
n.d(t, {
  g: () => w,
  i: () => D
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(704215),
  o = n(780384),
  l = n(481060),
  c = n(37234),
  d = n(857595),
  u = n(607070),
  m = n(100527),
  g = n(906732),
  p = n(238302),
  h = n(514361),
  f = n(705262),
  b = n(540059),
  N = n(605236),
  x = n(104494),
  _ = n(639119),
  E = n(311476),
  j = n(165583),
  O = n(197115),
  C = n(504983),
  v = n(626135),
  S = n(210887),
  T = n(981631),
  I = n(921944),
  y = n(474936),
  A = n(388032),
  P = n(837079);
let R = () => {
    (0, N.EW)(a.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: I.L.PRIMARY,
      forceTrack: !0
    }), (0, p.Kq)(), (0, c.xf)()
  },
  D = () => {
    var e, t;
    let {
      analyticsLocations: n
    } = (0, g.ZP)(m.Z.USER_SETTINGS), a = (0, s.e7)([h.Z], () => h.Z.isPreview), o = (null === (t = (0, _.N)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === y.Si.TIER_2, c = (0, x.Ng)(), d = (0, x.Wp)(c, y.Si.TIER_2), u = !a || o, {
      enabled: p
    } = E.Z.getCurrentConfig({
      location: "UserSettingsAppearanceClientThemes"
    }, {
      autoTrackExposure: !u,
      disable: u
    }), N = (0, b.Q3)("UserSettingsAppearanceClientThemes"), S = () => !a || o ? null : (0, r.jsxs)("div", {
      className: P.tryItOutButtons,
      children: [(0, r.jsx)(l.zxk, {
        size: l.zxk.Sizes.MEDIUM,
        color: p ? l.zxk.Colors.BRAND : l.zxk.Colors.PRIMARY,
        onClick: () => R(),
        children: p ? A.NW.string(A.t.SKNnqq) : A.NW.string(A.t["E+COuL"])
      }), (0, r.jsx)(O.Z, {
        showGradient: p,
        subscriptionTier: y.Si.TIER_2,
        buttonText: p ? A.NW.string(A.t.pj0XBA) : d ? A.NW.formatToPlainString(A.t.bkQ4bG, {
          percent: null == c ? void 0 : c.discount.amount
        }) : A.NW.string(A.t.mr4K7O),
        className: P.premiumCta
      })]
    });
    return i.useEffect(() => {
      a && v.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
        type: y.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: n
      })
    }, [a, n]), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(f.ZP, {
        type: f.yH.SETTINGS,
        children: p ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(f.ZP.BasicAndGradient, {
            className: P.basicThemeSelectors,
            renderCTAButtons: S
          }), N && (0, r.jsx)(Z, {})]
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(f.ZP.Basic, {
            className: P.basicThemeSelectors
          }), N && (0, r.jsx)(Z, {}), (0, r.jsxs)(C.Z, {
            className: P.featureBorder,
            isShown: a,
            type: C.Y.PREMIUM,
            children: [(0, r.jsx)(f.ZP.Gradient, {
              disabled: a,
              renderCTAButtons: S
            }), o && a && (0, r.jsxs)("div", {
              children: [(0, r.jsx)(l.zxk, {
                className: P.previewThemeButtonWide,
                color: l.zxk.Colors.PRIMARY,
                onClick: () => R(),
                children: A.NW.string(A.t["E+COuL"])
              }), (0, r.jsx)("div", {
                className: P.premiumTier2Divider
              }), (0, r.jsx)(j.ZP, {
                type: y.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                subscriptionTier: y.Si.TIER_2
              })]
            })]
          })]
        })
      }), (0, r.jsx)(l.$i$, {
        className: P.divider
      })]
    })
  };

function Z() {
  let {
    theme: e,
    useForcedColors: t,
    gradientPreset: n,
    darkSidebar: i
  } = (0, s.cj)([S.Z, u.Z, h.Z], () => ({
    theme: S.Z.theme,
    useForcedColors: u.Z.useForcedColors,
    darkSidebar: S.Z.darkSidebar,
    gradientPreset: h.Z.gradientPreset
  }));
  return e !== T.BRd.LIGHT ? null : (0, r.jsx)(l.j7V, {
    hideBorder: !0,
    value: i && (0, o.ap)(e) && !t,
    disabled: e !== T.BRd.LIGHT || t || null != n,
    onChange: d.lq,
    className: P.darkSidebarToggle,
    children: (0, r.jsx)("span", {
      className: P.title,
      children: A.NW.string(A.t.yF54Ki)
    })
  })
}
let w = () => {
  let e = (0, s.e7)([h.Z], () => h.Z.isPreview),
    t = (0, b.Q3)("ClientThemesSidebarButton");
  return e ? null : (0, r.jsx)(l.zxk, {
    size: t ? l.PhG.MEDIUM : l.PhG.SMALL,
    onClick: R,
    children: A.NW.string(A.t.qYXrkZ)
  })
}