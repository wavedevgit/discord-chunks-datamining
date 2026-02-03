/** Chunk was on 9207 **/
/** chunk id: 70040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => w,
  Q: () => G
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
  Chunk959443 = require("./959443.jsx"),
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
    (0, f.Dr)(s.M.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: v.i.PRIMARY,
      forceTrack: true
    }), (0, A.nf)(A.HP.CLIENT_THEMES), (0, j.default)()
  },
  w = () => {
    var e, t;
    let n, {
        analyticsLocations: s
      } = (0, _.Ay)(u.A.USER_SETTINGS),
      a = (0, l.bG)([p.A], () => p.A.isPreview),
      c = (null == (t = (0, h.V)()) || null == (e = t.subscription_trial) ? true : e.sku_id) === P.pe.TIER_2,
      d = (0, b.O)(),
      A = (0, O.U9)(d, P.pe.TIER_2),
      f = (0, N.dk)("UserSettingsAppearanceClientThemes");
    i.useEffect(() => {
      a && S.default.track(y.HAw.PREMIUM_UPSELL_VIEWED, {
        type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: s
      })
    }, [a, s]);
    let C = c && a && (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: D.c7,
          children: (0, r.jsx)(o.Button, {
            variant: "secondary",
            fullWidth: true,
            text: R.intl.string(R.t["E+COuA"]),
            onClick: () => L()
          })
        }), (0, r.jsx)("div", {
          className: D.BU
        }), (0, r.jsx)(x.Ay, {
          type: P.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL,
          subscriptionTier: P.pe.TIER_2
        })]
      }),
      T = (n = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.Ay.Gradient, {
          disabled: false,
          renderCTAButtons: () => {
            if (!a || c) return null;
            let e = A ? R.intl.formatToPlainString(R.t.bkQ4bH, {
              percent: null == d ? true : d.discount.amount
            }) : R.intl.string(R.t.mr4K7D);
            return (0, r.jsxs)("div", {
              className: D.gY,
              children: [(0, r.jsx)(o.Button, {
                variant: "secondary",
                text: R.intl.string(R.t["E+COuA"]),
                onClick: () => L()
              }), (0, r.jsx)(E.A, {
                subscriptionTier: P.pe.TIER_2,
                defaultTextOverride: e,
                premiumModalAnalyticsLocation: {
                  object: y.ZSU.BUTTON_CTA,
                  objectType: y.AnalyticsObjectTypes.BUY
                },
                fullWidth: true
              })]
            })
          }
        }), C]
      }), a && (n = (0, r.jsx)("div", {
        className: D._$,
        children: n
      })), n);
    return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(g.Ay, {
        type: g.v0.SETTINGS,
        children: [(0, r.jsx)(g.Ay.Basic, {
          className: D.a6
        }), (0, r.jsx)(M, {}), (0, r.jsx)(m.A, {}), T]
      }), !f && (0, r.jsx)(o.cGx, {
        className: D.yF
      })]
    })
  };

function M() {
  let e = (0, C.qo)(),
    {
      theme: t,
      useForcedColors: n,
      gradientPreset: i
    } = (0, l.cf)([T.A, d.A, p.A], () => ({
      theme: T.A.theme,
      useForcedColors: d.A.useForcedColors,
      gradientPreset: p.A.gradientPreset
    })),
    s = null != I.eh.useSetting().customUserThemeSettings;
  return t !== y.NJ8.LIGHT ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.cGx, {
      gap: 24
    }), (0, r.jsx)(o.dOG, {
      label: R.intl.string(R.t.yF54Ks),
      checked: e && (0, a.qB)(t) && !n,
      disabled: t !== y.NJ8.LIGHT || n || null != i || s,
      onChange: c.LO
    }), (0, r.jsx)(o.cGx, {
      gap: 24
    })]
  })
}
let G = () => (0, l.bG)([p.A], () => p.A.isPreview) ? null : (0, r.jsx)(o.Button, {
  variant: "primary",
  text: R.intl.string(R.t.qYXrkX),
  onClick: L
})