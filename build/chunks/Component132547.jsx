/** Chunk was on web.js **/
/** chunk id: 132547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk433811 = require("./433811.js"),
  Chunk214852 = require("./214852.js"),
  Chunk588956 = require("./588956.js"),
  Chunk468208 = require("./468208.js"),
  Chunk165299 = require("./165299.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk283066 = require("./283066.js"),
  Chunk331972 = require("./331972.js"),
  Chunk230916 = require("./230916.js"),
  Chunk55058 = require("./55058.jsx"),
  Chunk560223 = require("./560223.jsx"),
  Chunk347475 = require("./347475.jsx"),
  Chunk342414 = require("./342414.jsx"),
  Chunk874577 = require("./874577.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk71363 = require("./71363.jsx"),
  Chunk781800 = require("./781800.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk548768 = require("./548768.js"),
  Chunk865215 = require("./865215.js");
let U = e => {
  let {
    userId: t
  } = e;
  i.useEffect(() => {
    u.Z.wait(async () => {
      let e = [(0, h.Z)()];
      null != t && e.push((0, b.Z)(t)), await Promise.all(e)
    })
  }, [t]), i.useEffect(() => {
    B(true)
  }, []), (0, _.z)(p.X);
  let n = i.useRef(null),
    a = i.useRef(null),
    U = (0, s.e7)([y.Z], () => y.Z.getPremiumTypeSubscription()),
    {
      isReady: G,
      programReward: Z
    } = (0, s.cj)([m.Z], () => ({
      isReady: m.Z.isReady(),
      programReward: m.Z.getRewardForProgram(g.f.NITRO)
    })),
    [F, B] = i.useState(false),
    V = (0, S.$)(),
    H = i.useRef(null),
    [Y, W] = i.useState(false),
    [K, z] = i.useState(false),
    q = null != V && null != U && U.status === L.O0b.CANCELED,
    Q = (0, I.W7)(x.Xh.PREMIUM_MONTH_TIER_2, V, U),
    X = !K && q,
    {
      analyticsLocations: J
    } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [$, ee] = i.useState(false),
    et = (0, s.e7)([E.Z], () => null != t ? E.Z.getUserProfile(t) : null),
    en = (0, v.Z)({
      location: "SubscriberNitroHome"
    });
  return null != et && (G || null != Z) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(c.yWw, {
      className: M.mainPageScroller,
      ref: n,
      children: [(0, r.jsx)(c.$1m, {
        color: "nitro-pink",
        className: o()(M.container, M.responsiveContainer, {
          [M.hiddenGradient]: !en
        }),
        children: (0, r.jsxs)(f.Gt, {
          value: J,
          children: [(0, r.jsx)(l.$, {
            innerRef: H,
            onChange: e => z(e),
            threshold: .1,
            active: true,
            children: (0, r.jsx)(N.Z, {
              buttonVisibilityRef: H,
              className: M.heroHeading,
              enablePremiumBrandRefresh: en,
              userDiscountOffer: V,
              discountedPrice: Q
            })
          }), (0, r.jsx)(C.Z, {
            variant: w.gM.WHATS_NEW,
            className: M.whatsNew,
            noBackground: true,
            leftAlignHeaders: true
          }), (0, r.jsx)(C.Z, {
            className: M.perksDiscoverability,
            variant: w.gM.PERKS_DISCOVERABILITY,
            noBackground: true,
            leftAlignHeaders: true,
            showAllPerksButton: (0, r.jsx)(D.Z, {
              setIsAllPerksVisible: W,
              previousComponent: w.MQ.HOME
            })
          }), null != Z && m.Z.isInProperTreatments() && (0, r.jsx)(P.Z, {
            location: d.Z.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION
          }), (0, r.jsx)(A.Z, {
            className: M.giftNitro,
            location: d.Z.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: L.ZY5.NITRO_HOME,
              section: L.jXE.GIFT_BANNER
            }
          }), (0, r.jsx)("div", {
            className: M.footerSpacing
          }), (0, r.jsx)(l.$, {
            innerRef: a,
            onChange: e => {
              e && !$ && (O.default.track(L.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: J
              }), ee(true))
            },
            children: (0, r.jsx)("div", {
              ref: a,
              className: M.bottomOfPageVisibilitySensor
            })
          }), (0, r.jsx)("img", {
            src: k,
            className: M.bottomIllustration,
            width: 112,
            height: 85,
            alt: j.intl.string(j.t.X4IxWL)
          })]
        })
      }), q && null != Q && (0, r.jsx)(T.Z, {
        isVisible: X && F,
        premiumSubscription: U,
        churnDiscountOffer: V,
        discountedPrice: Q
      })]
    }), (0, r.jsx)(R.Z, {
      isAllPerksVisible: Y,
      setIsAllPerksVisible: W,
      previousComponent: w.MQ.HOME,
      enablePremiumBrandRefresh: en
    })]
  }) : (0, r.jsx)("div", {
    className: o()(M.container, M.loading),
    children: (0, r.jsx)(c.$jN, {})
  })
}