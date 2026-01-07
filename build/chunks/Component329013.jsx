/** Chunk was on web.js **/
/** chunk id: 329013, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => k,
  i: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk514361 = require("./514361.js"),
  Chunk607270 = require("./607270.jsx"),
  Chunk705262 = require("./705262.jsx"),
  Chunk550385 = require("./550385.js"),
  Chunk266454 = require("./266454.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk230916 = require("./230916.js"),
  Chunk165583 = require("./165583.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk626135 = require("./626135.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk526665 = require("./526665.js"),
  Chunk342386 = require("./342386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830597 = require("./830597.js");
let L = () => {
    (0, g.Q3)(o.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: R.L.PRIMARY,
      forceTrack: true
    }), (0, h.XO)(h.wh.CLIENT_THEMES), (0, N.default)()
  },
  j = () => {
    var e, t;
    let {
      analyticsLocations: n
    } = (0, f.ZP)(d.Z.USER_SETTINGS), o = (0, a.e7)([p.Z], () => p.Z.isPreview), s = (null == (t = (0, b.N)()) || null == (e = t.subscription_trial) ? true : e.sku_id) === w.Si.TIER_2, c = (0, E.N)(), u = (0, O.Wp)(c, w.Si.TIER_2), h = (0, A.gN)("UserSettingsAppearanceClientThemes"), g = () => {
      if (!o || s) return null;
      let e = u ? D.intl.formatToPlainString(D.t.bkQ4bH, {
        percent: null == c ? true : c.discount.amount
      }) : D.intl.string(D.t.mr4K7D);
      return (0, r.jsxs)("div", {
        className: x.tryItOutButtons,
        children: [(0, r.jsx)(l.Button, {
          variant: "secondary",
          text: D.intl.string(D.t["E+COuA"]),
          onClick: () => L()
        }), (0, r.jsx)(y.Z, {
          subscriptionTier: w.Si.TIER_2,
          defaultTextOverride: e,
          premiumModalAnalyticsLocation: {
            object: P.qAy.BUTTON_CTA,
            objectType: P.AnalyticsObjectTypes.BUY
          },
          fullWidth: true
        })]
      })
    };
    i.useEffect(() => {
      o && I.default.track(P.rMx.PREMIUM_UPSELL_VIEWED, {
        type: w.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: n
      })
    }, [o, n]);
    let S = s && o && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: x.previewThemeButton,
          children: (0, r.jsx)(l.Button, {
            variant: "secondary",
            fullWidth: true,
            text: D.intl.string(D.t["E+COuA"]),
            onClick: () => L()
          })
        }), (0, r.jsx)("div", {
          className: x.premiumTier2Divider
        }), (0, r.jsx)(v.ZP, {
          type: w.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
          subscriptionTier: w.Si.TIER_2
        })]
      }),
      T = (() => {
        let e = (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.ZP.Gradient, {
            disabled: false,
            renderCTAButtons: g
          }), S]
        });
        return o && (e = (0, r.jsx)("div", {
          className: x.colorThemesBackground,
          children: e
        })), e
      })();
    return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(m.ZP, {
        type: m.yH.SETTINGS,
        children: [(0, r.jsx)(m.ZP.Basic, {
          className: x.basicThemeSelectors
        }), (0, r.jsx)(M, {}), (0, r.jsx)(_.Z, {}), T]
      }), !h && (0, r.jsx)(l.izJ, {
        className: x.divider
      })]
    })
  };

function M() {
  let e = (0, S.A6)(),
    {
      theme: t,
      useForcedColors: n,
      gradientPreset: i
    } = (0, a.cj)([T.Z, u.Z, p.Z], () => ({
      theme: T.Z.theme,
      useForcedColors: u.Z.useForcedColors,
      gradientPreset: p.Z.gradientPreset
    })),
    o = null != C.L1.useSetting().customUserThemeSettings;
  return t !== P.BRd.LIGHT ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.izJ, {
      gap: 24
    }), (0, r.jsx)(l.rsf, {
      label: D.intl.string(D.t.yF54Ks),
      checked: e && (0, s.ap)(t) && !n,
      disabled: t !== P.BRd.LIGHT || n || null != i || o,
      onChange: c.lq
    }), (0, r.jsx)(l.izJ, {
      gap: 24
    })]
  })
}
let k = () => (0, a.e7)([p.Z], () => p.Z.isPreview) ? null : (0, r.jsx)(l.Button, {
  variant: "primary",
  text: D.intl.string(D.t.qYXrkX),
  onClick: L
})