/** Chunk was on web.js **/
/** chunk id: 70040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => j,
  Q: () => k
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk47671 = require("./47671.js"),
  Chunk181824 = require("./181824.jsx"),
  Chunk692798 = require("./692798.jsx"),
  Chunk793943 = require("./793943.js"),
  Chunk826673 = require("./826673.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk792656 = require("./792656.jsx"),
  Chunk511484 = require("./511484.js"),
  Chunk811611 = require("./811611.jsx"),
  Chunk97469 = require("./97469.js"),
  Chunk954571 = require("./954571.js"),
  Chunk544028 = require("./544028.js"),
  Chunk253932 = require("./253932.js"),
  Chunk358776 = require("./358776.js"),
  Chunk12901 = require("./12901.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk21082 = require("./21082.js");
let L = () => {
    (0, g.Dr)(s.M.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: w.i.PRIMARY,
      forceTrack: true
    }), (0, m.nf)(m.HP.CLIENT_THEMES), (0, N.default)()
  },
  j = () => {
    var e, t;
    let {
      analyticsLocations: n
    } = (0, f.Ay)(d.A.USER_SETTINGS), s = (0, a.bG)([p.A], () => p.A.isPreview), o = (null == (t = (0, b.V)()) || null == (e = t.subscription_trial) ? true : e.sku_id) === P.pe.TIER_2, c = (0, E.O)(), u = (0, O.U9)(c, P.pe.TIER_2), m = (0, C.dk)("UserSettingsAppearanceClientThemes"), g = () => {
      if (!s || o) return null;
      let e = u ? D.intl.formatToPlainString(D.t.bkQ4bH, {
        percent: null == c ? true : c.discount.amount
      }) : D.intl.string(D.t.mr4K7D);
      return (0, r.jsxs)("div", {
        className: x.gY,
        children: [(0, r.jsx)(l.Button, {
          variant: "secondary",
          text: D.intl.string(D.t["E+COuA"]),
          onClick: () => L()
        }), (0, r.jsx)(y.A, {
          subscriptionTier: P.pe.TIER_2,
          defaultTextOverride: e,
          premiumModalAnalyticsLocation: {
            object: R.ZSU.BUTTON_CTA,
            objectType: R.AnalyticsObjectTypes.BUY
          },
          fullWidth: true
        })]
      })
    };
    i.useEffect(() => {
      s && S.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, {
        type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: n
      })
    }, [s, n]);
    let v = o && s && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: x.c7,
          children: (0, r.jsx)(l.Button, {
            variant: "secondary",
            fullWidth: true,
            text: D.intl.string(D.t["E+COuA"]),
            onClick: () => L()
          })
        }), (0, r.jsx)("div", {
          className: x.BU
        }), (0, r.jsx)(A.Ay, {
          type: P.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
          subscriptionTier: P.pe.TIER_2
        })]
      }),
      I = (() => {
        let e = (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(h.Ay.Gradient, {
            disabled: false,
            renderCTAButtons: g
          }), v]
        });
        return s && (e = (0, r.jsx)("div", {
          className: x._$,
          children: e
        })), e
      })();
    return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(h.Ay, {
        type: h.v0.SETTINGS,
        children: [(0, r.jsx)(h.Ay.Basic, {
          className: x.a6
        }), (0, r.jsx)(M, {}), (0, r.jsx)(_.A, {}), I]
      }), !m && (0, r.jsx)(l.cGx, {
        className: x.yF
      })]
    })
  };

function M() {
  let e = (0, v.qo)(),
    {
      theme: t,
      useForcedColors: n,
      gradientPreset: i
    } = (0, a.cf)([I.A, u.A, p.A], () => ({
      theme: I.A.theme,
      useForcedColors: u.A.useForcedColors,
      gradientPreset: p.A.gradientPreset
    })),
    s = null != T.eh.useSetting().customUserThemeSettings;
  return t !== R.NJ8.LIGHT ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.cGx, {
      gap: 24
    }), (0, r.jsx)(l.dOG, {
      label: D.intl.string(D.t.yF54Ks),
      checked: e && (0, o.qB)(t) && !n,
      disabled: t !== R.NJ8.LIGHT || n || null != i || s,
      onChange: c.LO
    }), (0, r.jsx)(l.cGx, {
      gap: 24
    })]
  })
}
let k = () => (0, a.bG)([p.A], () => p.A.isPreview) ? null : (0, r.jsx)(l.Button, {
  variant: "primary",
  text: D.intl.string(D.t.qYXrkX),
  onClick: L
})