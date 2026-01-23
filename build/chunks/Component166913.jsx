/** Chunk was on web.js **/
/** chunk id: 166913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk582754 = require("./582754.js"),
  Chunk421380 = require("./421380.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk726649 = require("./726649.js"),
  Chunk611924 = require("./611924.js"),
  Chunk166403 = require("./166403.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk40185 = require("./40185.js"),
  Chunk526292 = require("./526292.js"),
  Chunk234419 = require("./234419.js"),
  Chunk412260 = require("./412260.js"),
  Chunk396375 = require("./396375.jsx"),
  Chunk106922 = require("./106922.jsx"),
  Chunk501007 = require("./501007.jsx"),
  Chunk901125 = require("./901125.jsx"),
  Chunk729230 = require("./729230.jsx"),
  Chunk753894 = require("./753894.jsx"),
  Chunk227273 = require("./227273.jsx"),
  Chunk252711 = require("./252711.jsx"),
  Chunk244778 = require("./244778.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk639179 = require("./639179.js"),
  Chunk432221 = require("./432221.js"),
  Chunk288894 = require("./288894.js");
let G = e => {
    let {
      inOfferExperience: t
    } = e;
    return t ? (0, r.jsx)(N.A, {
      lifted: t
    }) : null
  },
  V = () => {
    var e;
    (0, m.P)(h.b);
    let t = i.useRef(null),
      n = i.useRef(null),
      a = i.useRef(null),
      N = (0, f.Ay)(),
      V = (0, u.Mw)(N),
      [F, B] = i.useState(false),
      [H, Y] = i.useState(false),
      [W, K] = i.useState(false),
      z = !F && !H,
      [q, Z] = i.useState(false),
      X = (0, l.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
      Q = null != X ? (0, y.EL)(X) : null,
      J = null != Q ? y.Ay.getSkuIdForPlan(Q.planId) : null,
      $ = null !== J && J !== x.pe.TIER_2 ? x.pe.TIER_2 : null,
      ee = (0, v.V)(),
      et = null == ee || null == (e = ee.subscription_trial) ? true : e.sku_id,
      en = (0, O.ar)(),
      er = (0, b.cg)(),
      ei = null != er && er,
      ea = (0, l.bG)([A.A], () => {
        let e = A.A.getMarketingComponentByType(o.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
        return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.billingSettingsNitroGiftBanner
      }),
      {
        analyticsLocations: es
      } = (0, _.Ay)(p.A.PREMIUM_MARKETING);
    i.useEffect(() => {
      Z(true)
    }, []);
    let eo = (0, r.jsx)("div", {
      className: k.dY,
      children: (0, r.jsx)(c.L, {
        innerRef: t,
        onChange: e => Y(e),
        threshold: .1,
        active: true,
        children: (0, r.jsx)(T.NB, {
          innerRef: t,
          tier0CTAButton: (0, r.jsx)(I.A, {
            showIcon: false,
            subscriptionTier: x.pe.TIER_0,
            className: M.Ph,
            look: d.pR.OUTLINED,
            color: d.XD.WHITE,
            buttonShineClassName: M.Qr
          }),
          tier2CTAButton: et === x.pe.TIER_0 ? (0, r.jsx)(I.A, {
            showIcon: false,
            subscriptionTier: x.pe.TIER_2,
            className: M.Ph,
            look: d.pR.OUTLINED,
            color: d.XD.WHITE,
            buttonShineClassName: M.Qr
          }) : (0, r.jsx)(I.A, {
            color: d.XD.BRAND_INVERTED,
            showIcon: false,
            subscriptionTier: x.pe.TIER_2,
            className: M.Ph,
            hasActivePromotion: ei,
            textOptions: {
              textClassName: M.Ac
            },
            buttonShineClassName: M.Qr
          })
        })
      })
    });
    return (0, r.jsxs)("div", {
      className: k.kL,
      "data-cy": "tier-0-marketing-page",
      children: [(0, r.jsx)(C.A, {
        premiumSubscription: X,
        className: s()(k.R3, {
          [k.aZ]: en
        })
      }), (0, r.jsx)(G, {
        inOfferExperience: en
      }), (0, r.jsxs)("div", {
        className: s()({
          [k.V1]: !en
        }),
        children: [null != ea && (0, r.jsx)(S.c, {
          className: k.w$,
          config: ea
        }), (0, r.jsx)(c.L, {
          innerRef: n,
          onChange: e => B(e),
          threshold: 0,
          active: true,
          children: (0, r.jsx)(w.Ay, {
            ref: n,
            subscriptionTier: $,
            className: s()({
              [k.p7]: en,
              [k.Pw]: en,
              [k.AG]: er,
              [k.Cv]: null != X
            }),
            isDarkMode: V
          })
        })]
      }), eo, (0, r.jsx)(R.A, {
        className: k.B_
      }), (0, r.jsx)("div", {
        className: k.aC,
        children: (0, r.jsx)(D.A, {
          className: k.JQ,
          hideCTAs: true
        })
      }), (0, r.jsx)("div", {
        className: k.hz
      }), (0, r.jsx)(P.A, {
        isVisible: z && q,
        subscriptionTier: $,
        isApplicationHome: false,
        isEligibleForBogoPromotion: er
      }), (0, r.jsx)(c.L, {
        innerRef: a,
        onChange: e => {
          e && !W && (E.default.track(L.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: es
          }), K(true))
        },
        children: (0, r.jsx)("div", {
          ref: a,
          className: k._Z
        })
      }), (0, r.jsx)("img", {
        src: U,
        className: k.Kw,
        width: 112,
        height: 85,
        alt: j.intl.string(j.t.X4IxWL)
      })]
    })
  }