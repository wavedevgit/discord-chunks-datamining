/** Chunk was on 13323 **/
n.d(t, {
  g: () => w,
  i: () => D
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(704215),
  l = n(780384),
  o = n(481060),
  c = n(37234),
  d = n(857595),
  u = n(607070),
  m = n(100527),
  g = n(906732),
  p = n(238302),
  h = n(514361),
  f = n(705262),
  N = n(540059),
  b = n(605236),
  x = n(104494),
  _ = n(639119),
  E = n(311476),
  j = n(165583),
  C = n(197115),
  O = n(504983),
  S = n(626135),
  v = n(210887),
  T = n(981631),
  I = n(921944),
  A = n(474936),
  y = n(388032),
  P = n(837079);
let R = () => {
    (0, b.EW)(a.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: I.L.PRIMARY,
      forceTrack: !0
    }), (0, p.Kq)(), (0, c.xf)()
  },
  D = () => {
    var e, t;
    let {
      analyticsLocations: n
    } = (0, g.ZP)(m.Z.USER_SETTINGS), a = (0, s.e7)([h.Z], () => h.Z.isPreview), l = (null === (t = (0, _.N)()) || void 0 === t ? void 0 : null === (e = t.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === A.Si.TIER_2, c = (0, x.Ng)(), d = (0, x.Wp)(c, A.Si.TIER_2), u = !a || l, {
      enabled: p
    } = E.Z.getCurrentConfig({
      location: "UserSettingsAppearanceClientThemes"
    }, {
      autoTrackExposure: !u,
      disable: u
    }), b = (0, N.Q3)("UserSettingsAppearanceClientThemes"), v = () => !a || l ? null : (0, r.jsxs)("div", {
      className: P.tryItOutButtons,
      children: [(0, r.jsx)(o.zxk, {
        size: o.zxk.Sizes.MEDIUM,
        color: p ? o.zxk.Colors.BRAND : o.zxk.Colors.PRIMARY,
        onClick: () => R(),
        children: p ? y.NW.string(y.t.SKNnqq) : y.NW.string(y.t["E+COuL"])
      }), (0, r.jsx)(C.Z, {
        showGradient: p,
        subscriptionTier: A.Si.TIER_2,
        buttonText: p ? y.NW.string(y.t.pj0XBA) : d ? y.NW.formatToPlainString(y.t.bkQ4bG, {
          percent: null == c ? void 0 : c.discount.amount
        }) : y.NW.string(y.t.mr4K7O),
        className: P.premiumCta
      })]
    });
    return i.useEffect(() => {
      a && S.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
        type: A.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: n
      })
    }, [a, n]), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(f.ZP, {
        type: f.yH.SETTINGS,
        children: p ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(f.ZP.BasicAndGradient, {
            className: P.basicThemeSelectors,
            renderCTAButtons: v
          }), b && (0, r.jsx)(Z, {})]
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(f.ZP.Basic, {
            className: P.basicThemeSelectors
          }), b && (0, r.jsx)(Z, {}), (0, r.jsxs)(O.Z, {
            className: P.featureBorder,
            isShown: a,
            type: O.Y.PREMIUM,
            children: [(0, r.jsx)(f.ZP.Gradient, {
              disabled: a,
              renderCTAButtons: v
            }), l && a && (0, r.jsxs)("div", {
              children: [(0, r.jsx)(o.zxk, {
                className: P.previewThemeButtonWide,
                color: o.zxk.Colors.PRIMARY,
                onClick: () => R(),
                children: y.NW.string(y.t["E+COuL"])
              }), (0, r.jsx)("div", {
                className: P.premiumTier2Divider
              }), (0, r.jsx)(j.ZP, {
                type: A.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
                subscriptionTier: A.Si.TIER_2
              })]
            })]
          })]
        })
      }), (0, r.jsx)(o.$i$, {
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
  } = (0, s.cj)([v.Z, u.Z, h.Z], () => ({
    theme: v.Z.theme,
    useForcedColors: u.Z.useForcedColors,
    darkSidebar: v.Z.darkSidebar,
    gradientPreset: h.Z.gradientPreset
  }));
  return e !== T.BRd.LIGHT ? null : (0, r.jsx)(o.j7V, {
    hideBorder: !0,
    value: i && (0, l.ap)(e) && !t,
    disabled: e !== T.BRd.LIGHT || t || null != n,
    onChange: d.lq,
    className: P.darkSidebarToggle,
    children: (0, r.jsx)("span", {
      className: P.title,
      children: y.NW.string(y.t.yF54Ki)
    })
  })
}
let w = () => {
  let e = (0, s.e7)([h.Z], () => h.Z.isPreview),
    t = (0, N.Q3)("ClientThemesSidebarButton");
  return e ? null : (0, r.jsx)(o.zxk, {
    size: t ? o.PhG.MEDIUM : o.PhG.SMALL,
    onClick: R,
    children: y.NW.string(y.t.qYXrkZ)
  })
}