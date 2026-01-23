/** Chunk was on web.js **/
/** chunk id: 166913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
  Chunk552736 = require("./552736.js"),
  Chunk234419 = require("./234419.js"),
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
let U = e => {
    let {
      inOfferExperience: t
    } = e;
    return t ? (0, r.jsx)(C.A, {
      lifted: t
    }) : null
  },
  G = () => {
    var e, t;
    (0, h.P)(_.b);
    let n = i.useRef(null),
      a = i.useRef(null),
      C = i.useRef(null),
      G = (0, d.Ay)(),
      V = (0, c.Mw)(G),
      [F, B] = i.useState(false),
      [H, Y] = i.useState(false),
      [W, K] = i.useState(false),
      z = !F && !H,
      [q, X] = i.useState(false),
      Z = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
      Q = null != Z ? (0, E.EL)(Z) : null,
      $ = null != Q ? E.Ay.getSkuIdForPlan(Q.planId) : null,
      J = null !== $ && $ !== D.pe.TIER_2 ? D.pe.TIER_2 : null,
      ee = (0, v.V)(),
      et = null == ee || null == (e = ee.subscription_trial) ? true : e.sku_id,
      en = (0, b.ar)(),
      er = (0, y.cg)(),
      ei = null != er && er,
      ea = null == (t = (0, O.A)()) ? true : t.billingSettingsMarketingBanner,
      {
        analyticsLocations: es
      } = (0, p.Ay)(f.A.PREMIUM_MARKETING);
    i.useEffect(() => {
      X(true)
    }, []);
    let eo = (0, r.jsx)("div", {
      className: M.dY,
      children: (0, r.jsx)(l.L, {
        innerRef: n,
        onChange: e => Y(e),
        threshold: .1,
        active: true,
        children: (0, r.jsx)(S.NB, {
          innerRef: n,
          tier0CTAButton: (0, r.jsx)(A.A, {
            showIcon: false,
            subscriptionTier: D.pe.TIER_0,
            className: j.Ph,
            look: u.pR.OUTLINED,
            color: u.XD.WHITE,
            buttonShineClassName: j.Qr
          }),
          tier2CTAButton: et === D.pe.TIER_0 ? (0, r.jsx)(A.A, {
            showIcon: false,
            subscriptionTier: D.pe.TIER_2,
            className: j.Ph,
            look: u.pR.OUTLINED,
            color: u.XD.WHITE,
            buttonShineClassName: j.Qr
          }) : (0, r.jsx)(A.A, {
            color: u.XD.BRAND_INVERTED,
            showIcon: false,
            subscriptionTier: D.pe.TIER_2,
            className: j.Ph,
            hasActivePromotion: ei,
            textOptions: {
              textClassName: j.Ac
            },
            buttonShineClassName: j.Qr
          })
        })
      })
    });
    return (0, r.jsxs)("div", {
      className: M.kL,
      "data-cy": "tier-0-marketing-page",
      children: [(0, r.jsx)(T.A, {
        premiumSubscription: Z,
        className: s()(M.R3, {
          [M.aZ]: en
        })
      }), (0, r.jsx)(U, {
        inOfferExperience: en
      }), (0, r.jsxs)("div", {
        className: s()({
          [M.V1]: !en
        }),
        children: [null != ea && (0, r.jsx)(I.c, {
          className: M.w$,
          config: ea
        }), (0, r.jsx)(l.L, {
          innerRef: a,
          onChange: e => B(e),
          threshold: 0,
          active: true,
          children: (0, r.jsx)(N.Ay, {
            ref: a,
            subscriptionTier: J,
            className: s()({
              [M.p7]: en,
              [M.Pw]: en,
              [M.AG]: er,
              [M.Cv]: null != Z
            }),
            isDarkMode: V
          })
        })]
      }), eo, (0, r.jsx)(R.A, {
        className: M.B_
      }), (0, r.jsx)("div", {
        className: M.aC,
        children: (0, r.jsx)(P.A, {
          className: M.JQ,
          hideCTAs: true
        })
      }), (0, r.jsx)("div", {
        className: M.hz
      }), (0, r.jsx)(w.A, {
        isVisible: z && q,
        subscriptionTier: J,
        isApplicationHome: false,
        isEligibleForBogoPromotion: er
      }), (0, r.jsx)(l.L, {
        innerRef: C,
        onChange: e => {
          e && !W && (g.default.track(x.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: es
          }), K(true))
        },
        children: (0, r.jsx)("div", {
          ref: C,
          className: M._Z
        })
      }), (0, r.jsx)("img", {
        src: k,
        className: M.Kw,
        width: 112,
        height: 85,
        alt: L.intl.string(L.t.X4IxWL)
      })]
    })
  }