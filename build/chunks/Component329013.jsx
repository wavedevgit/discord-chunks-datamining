/** Chunk was on 7384 **/
/** chunk id: 329013, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => L,
  i: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk514361 = require("./514361.js"),
  Chunk803038 = require("./803038.js"),
  Chunk705262 = require("./705262.jsx"),
  Chunk550385 = require("./550385.js"),
  Chunk266454 = require("./266454.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk165583 = require("./165583.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk626135 = require("./626135.js"),
  Chunk210887 = require("./210887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk505575 = require("./505575.js");
let Z = () => {
    (0, Chunk266454.Q3)(Chunk704215.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: Chunk921944.L.PRIMARY,
      forceTrack: true
    }), (0, Chunk550385.XO)(Chunk550385.wh.CLIENT_THEMES), (0, Chunk37234.xf)()
  },
  w = () => {
    var e, t;
    let {
      analyticsLocations: n
    } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS), a = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.isPreview), l = (null == (t = (0, Chunk639119.N)()) || null == (e = exports.subscription_trial) ? true : module.sku_id) === Chunk474936.Si.TIER_2, d = (0, Chunk104494.Ng)(), u = (0, Chunk104494.Wp)(Chunk37234, Chunk474936.Si.TIER_2), {
      v2EditorEnabled: m
    } = Chunk803038.Mc.useExperiment({
      location: "UserSettingsAppearanceClientThemes"
    });
    return Chunk73800.useEffect(() => {
      Chunk704215 && Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
        type: Chunk474936.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: require
      })
    }, [Chunk704215, require]), (0, Chunk255367.jsxs)("div", {
      children: [(0, Chunk255367.jsxs)(Chunk705262.ZP, {
        type: Chunk705262.yH.SETTINGS,
        children: [(0, Chunk255367.jsx)(Chunk705262.ZP.Basic, {
          className: Chunk505575.basicThemeSelectors
        }), (0, Chunk255367.jsx)(k, {}), (0, Chunk255367.jsxs)(Chunk504983.Z, {
          className: Chunk505575.featureBorder,
          isShown: Chunk704215,
          type: Chunk504983.Y.PREMIUM,
          children: [(0, Chunk255367.jsx)(Chunk705262.ZP.Gradient, {
            disabled: Chunk704215,
            renderCTAButtons: () => {
              if (!Chunk704215 || Chunk780384) return null;
              let e = Chunk857595 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.bkQ4bG, {
                  percent: null == Chunk37234 ? true : Chunk37234.discount.amount
                }) : Chunk388032.intl.string(Chunk388032.t.mr4K7O),
                t = Chunk607070 ? Chunk505575.tryItOutButtonsV2 : Chunk505575.tryItOutButtons;
              return (0, Chunk255367.jsxs)("div", {
                className: exports,
                children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
                  variant: "secondary",
                  text: Chunk388032.intl.string(Chunk388032.t["E+COuL"]),
                  onClick: () => Z()
                }), Chunk607070 ? (0, Chunk255367.jsx)(Chunk638212.Z, {
                  subscriptionTier: Chunk474936.Si.TIER_2,
                  defaultTextOverride: module,
                  premiumModalAnalyticsLocation: {
                    object: Chunk981631.qAy.BUTTON_CTA,
                    objectType: Chunk981631.Qqv.BUY
                  },
                  fullWidth: true
                }) : (0, Chunk255367.jsx)(Chunk767714.Z, {
                  showGradient: false,
                  subscriptionTier: Chunk474936.Si.TIER_2,
                  textOptions: {
                    textOverride: module
                  },
                  className: Chunk505575.premiumCta
                })]
              })
            }
          }), Chunk780384 && Chunk704215 && (0, Chunk255367.jsxs)("div", {
            children: [(0, Chunk255367.jsx)(Chunk755721.zx, {
              className: Chunk505575.previewThemeButtonWide,
              color: Chunk755721.zx.Colors.PRIMARY,
              onClick: () => Z(),
              children: Chunk388032.intl.string(Chunk388032.t["E+COuL"])
            }), (0, Chunk255367.jsx)("div", {
              className: Chunk505575.premiumTier2Divider
            }), (0, Chunk255367.jsx)(Chunk165583.ZP, {
              type: Chunk474936.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
              subscriptionTier: Chunk474936.Si.TIER_2
            })]
          })]
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
        className: Chunk505575.divider
      })]
    })
  };

function k() {
  let e = (0, Chunk984802.A6)(),
    {
      theme: t,
      useForcedColors: n,
      gradientPreset: r
    } = (0, Chunk442837.cj)([Chunk210887.Z, Chunk607070.Z, Chunk514361.Z], () => ({
      theme: Chunk210887.Z.theme,
      useForcedColors: Chunk607070.Z.useForcedColors,
      gradientPreset: Chunk514361.Z.gradientPreset
    }));
  return exports !== Chunk981631.BRd.LIGHT ? null : (0, Chunk255367.jsx)(Chunk481060.j7V, {
    hideBorder: true,
    value: module && (0, Chunk780384.ap)(exports) && !require,
    disabled: exports !== Chunk981631.BRd.LIGHT || require || null != Chunk73800,
    onChange: Chunk857595.lq,
    className: Chunk505575.darkSidebarToggle,
    children: (0, Chunk255367.jsx)("span", {
      className: Chunk505575.title,
      children: Chunk388032.intl.string(Chunk388032.t.yF54Ki)
    })
  })
}
let L = () => (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.isPreview) ? null : (0, Chunk255367.jsx)(Chunk481060.zxk, {
  variant: "primary",
  text: Chunk388032.intl.string(Chunk388032.t.qYXrkZ),
  onClick: Z
})