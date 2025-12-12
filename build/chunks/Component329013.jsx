/** Chunk was on web.js **/
/** chunk id: 329013, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => M,
  i: () => L
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
  Chunk342386 = require("./342386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk505575 = require("./505575.js");
let x = () => {
    (0, Chunk266454.Q3)(Chunk704215.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: Chunk921944.L.PRIMARY,
      forceTrack: true
    }), (0, Chunk550385.XO)(Chunk550385.wh.CLIENT_THEMES), (0, Chunk342386.default)()
  },
  L = () => {
    var e, t;
    let {
      analyticsLocations: n
    } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS), a = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.isPreview), s = (null == (t = (0, Chunk639119.N)()) || null == (e = exports.subscription_trial) ? true : module.sku_id) === Chunk474936.Si.TIER_2, c = (0, Chunk622909.N)(), u = (0, Chunk230916.Wp)(Chunk857595, Chunk474936.Si.TIER_2), h = () => {
      if (!Chunk704215 || Chunk780384) return null;
      let e = Chunk607070 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.bkQ4bH, {
        percent: null == Chunk857595 ? true : Chunk857595.discount.amount
      }) : Chunk388032.intl.string(Chunk388032.t.mr4K7D);
      return (0, Chunk54381.jsxs)("div", {
        className: Chunk505575.tryItOutButtons,
        children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["E+COuA"]),
          onClick: () => x()
        }), (0, Chunk54381.jsx)(Chunk638212.Z, {
          subscriptionTier: Chunk474936.Si.TIER_2,
          defaultTextOverride: module,
          premiumModalAnalyticsLocation: {
            object: Chunk981631.qAy.BUTTON_CTA,
            objectType: Chunk981631.AnalyticsObjectTypes.BUY
          },
          fullWidth: true
        })]
      })
    };
    Chunk473749.useEffect(() => {
      Chunk704215 && Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
        type: Chunk474936.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: require
      })
    }, [Chunk704215, require]);
    let g = Chunk780384 && Chunk704215 && (0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk505575.previewThemeButton,
          children: (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "secondary",
            fullWidth: true,
            text: Chunk388032.intl.string(Chunk388032.t["E+COuA"]),
            onClick: () => x()
          })
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk505575.premiumTier2Divider
        }), (0, Chunk54381.jsx)(Chunk165583.ZP, {
          type: Chunk474936.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
          subscriptionTier: Chunk474936.Si.TIER_2
        })]
      }),
      S = (() => {
        let e = (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(Chunk705262.ZP.Gradient, {
            disabled: false,
            renderCTAButtons: Chunk550385
          }), Chunk266454]
        });
        return Chunk704215 && (e = (0, Chunk54381.jsx)("div", {
          className: Chunk505575.colorThemesBackground,
          children: module
        })), module
      })();
    return (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsxs)(Chunk705262.ZP, {
        type: Chunk705262.yH.SETTINGS,
        children: [(0, Chunk54381.jsx)(Chunk705262.ZP.Basic, {
          className: Chunk505575.basicThemeSelectors
        }), (0, Chunk54381.jsx)(j, {}), (0, Chunk54381.jsx)(Chunk607270.Z, {}), Chunk984802]
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk505575.divider
      })]
    })
  };

function j() {
  let e = (0, Chunk984802.A6)(),
    {
      theme: t,
      useForcedColors: n,
      gradientPreset: i
    } = (0, Chunk442837.cj)([Chunk210887.Z, Chunk607070.Z, Chunk514361.Z], () => ({
      theme: Chunk210887.Z.theme,
      useForcedColors: Chunk607070.Z.useForcedColors,
      gradientPreset: Chunk514361.Z.gradientPreset
    })),
    a = null != Chunk695346.L1.useSetting().customUserThemeSettings;
  return exports !== Chunk981631.BRd.LIGHT ? null : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {
      gap: 24
    }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.yF54Ks),
      checked: module && (0, Chunk780384.ap)(exports) && !require,
      disabled: exports !== Chunk981631.BRd.LIGHT || require || null != Chunk473749 || Chunk704215,
      onChange: Chunk857595.lq
    }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
      gap: 24
    })]
  })
}
let M = () => (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.isPreview) ? null : (0, Chunk54381.jsx)(Chunk481060.Button, {
  variant: "primary",
  text: Chunk388032.intl.string(Chunk388032.t.qYXrkX),
  onClick: x
})