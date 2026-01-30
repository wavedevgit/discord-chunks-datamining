/** Chunk was on 78376 **/
/** chunk id: 166913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => B
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
let k = e => {
    let {
      inOfferExperience: t
    } = e;
    return t ? (0, r.jsx)(N.A, {
      lifted: t
    }) : null
  },
  B = () => {
    var e;
    (0, A.P)(g.b);
    let t = i.useRef(null),
      n = i.useRef(null),
      l = i.useRef(null),
      N = (0, _.Ay)(),
      B = (0, d.Mw)(N),
      [H, V] = i.useState(false),
      [F, Y] = i.useState(false),
      [W, K] = i.useState(false),
      [z, Z] = i.useState(false),
      X = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
      q = null != X ? (0, h.EL)(X) : null,
      J = null != q ? h.Ay.getSkuIdForPlan(q.planId) : null,
      Q = null !== J && J !== D.pe.TIER_2 ? D.pe.TIER_2 : null,
      $ = (0, C.V)(),
      ee = null == $ || null == (e = $.subscription_trial) ? true : e.sku_id,
      et = (0, O.ar)(),
      en = (0, E.cg)(),
      er = null != en && en,
      ei = (0, o.bG)([x.A], () => {
        let e = x.A.getMarketingComponentByType(a.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
        return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.billingSettingsNitroGiftBanner
      }),
      {
        analyticsLocations: el
      } = (0, m.Ay)(p.A.PREMIUM_MARKETING);
    i.useEffect(() => {
      Z(true)
    }, []);
    let es = (0, r.jsx)("div", {
      className: G.dY,
      children: (0, r.jsx)(c.L, {
        innerRef: t,
        onChange: e => Y(e),
        threshold: .1,
        active: true,
        children: (0, r.jsx)(I.NB, {
          innerRef: t,
          tier0CTAButton: (0, r.jsx)(S.A, {
            showIcon: false,
            subscriptionTier: D.pe.TIER_0,
            className: M.Ph,
            look: u.pR.OUTLINED,
            color: u.XD.WHITE,
            buttonShineClassName: M.Qr
          }),
          tier2CTAButton: ee === D.pe.TIER_0 ? (0, r.jsx)(S.A, {
            showIcon: false,
            subscriptionTier: D.pe.TIER_2,
            className: M.Ph,
            look: u.pR.OUTLINED,
            color: u.XD.WHITE,
            buttonShineClassName: M.Qr
          }) : (0, r.jsx)(S.A, {
            color: u.XD.BRAND_INVERTED,
            showIcon: false,
            subscriptionTier: D.pe.TIER_2,
            className: M.Ph,
            hasActivePromotion: er,
            textOptions: {
              textClassName: M.Ac
            },
            buttonShineClassName: M.Qr
          })
        })
      })
    });
    return (0, r.jsxs)("div", {
      className: G.kL,
      "data-cy": "tier-0-marketing-page",
      children: [(0, r.jsx)(y.A, {
        premiumSubscription: X,
        className: s()(G.R3, {
          [G.aZ]: et
        })
      }), (0, r.jsx)(k, {
        inOfferExperience: et
      }), (0, r.jsxs)("div", {
        className: s()({
          [G.V1]: !et
        }),
        children: [null != ei && (0, r.jsx)(T.c, {
          className: G.w$,
          config: ei
        }), (0, r.jsx)(c.L, {
          innerRef: n,
          onChange: e => V(e),
          threshold: 0,
          active: true,
          children: (0, r.jsx)(j.Ay, {
            ref: n,
            subscriptionTier: Q,
            className: s()({
              [G.p7]: et,
              [G.Pw]: et,
              [G.AG]: en,
              [G.Cv]: null != X
            }),
            isDarkMode: B
          })
        })]
      }), es, (0, r.jsx)(v.A, {
        className: G.B_
      }), (0, r.jsx)("div", {
        className: G.aC,
        children: (0, r.jsx)(R.A, {
          className: G.JQ,
          hideCTAs: true
        })
      }), (0, r.jsx)("div", {
        className: G.hz
      }), (0, r.jsx)(P.A, {
        isVisible: !H && !F && z,
        subscriptionTier: Q,
        isApplicationHome: false,
        isEligibleForBogoPromotion: en
      }), (0, r.jsx)(c.L, {
        innerRef: l,
        onChange: e => {
          e && !W && (b.default.track(L.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: el
          }), K(true))
        },
        children: (0, r.jsx)("div", {
          ref: l,
          className: G._Z
        })
      }), (0, r.jsx)("img", {
        src: U,
        className: G.Kw,
        width: 112,
        height: 85,
        alt: w.intl.string(w.t.X4IxWL)
      })]
    })
  }