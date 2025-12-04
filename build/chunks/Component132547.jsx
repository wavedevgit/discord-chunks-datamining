/** Chunk was on web.js **/
/** chunk id: 132547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js");
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
  Chunk391110 = require("./391110.js"),
  Chunk71363 = require("./71363.jsx"),
  Chunk781800 = require("./781800.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk677599 = require("./677599.js"),
  Chunk865215 = require("./865215.js");
let L = e => {
  let {
    userId: t
  } = e;
  i.useEffect(() => {
    u.Z.wait(async () => {
      null != t && await (0, h.Z)(t)
    })
  }, [t]), i.useEffect(() => {
    M(true)
  }, []), (0, _.z)(p.X);
  let n = i.useRef(null),
    a = i.useRef(null),
    L = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
    [j, M] = i.useState(false),
    k = (0, y.$)(),
    U = i.useRef(null),
    [G, Z] = i.useState(false),
    [B, F] = i.useState(false),
    V = null != k && null != L && L.status === R.O0b.CANCELED,
    H = (0, O.W7)(P.Xh.PREMIUM_MONTH_TIER_2, k, L),
    Y = !B && V,
    {
      analyticsLocations: W
    } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [K, z] = i.useState(false),
    q = (0, s.e7)([m.Z], () => null != t ? m.Z.getUserProfile(t) : null),
    Q = (0, b.Z)({
      location: "SubscriberNitroHome"
    });
  return null == q ? (0, r.jsx)("div", {
    className: o()(D.container, D.loading),
    children: (0, r.jsx)(c.$jN, {})
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(c.yWw, {
      className: D.mainPageScroller,
      ref: n,
      children: [(0, r.jsx)(c.$1m, {
        color: "nitro-pink",
        className: o()(D.container, D.responsiveContainer, {
          [D.hiddenGradient]: !Q
        }),
        children: (0, r.jsxs)(f.Gt, {
          value: W,
          children: [(0, r.jsx)(l.$, {
            innerRef: U,
            onChange: e => F(e),
            threshold: .1,
            active: true,
            children: (0, r.jsx)(T.Z, {
              buttonVisibilityRef: U,
              className: D.heroHeading,
              enablePremiumBrandRefresh: Q,
              userDiscountOffer: k,
              discountedPrice: H
            })
          }), (0, r.jsx)(S.Z, {
            variant: A.gM.WHATS_NEW,
            className: D.whatsNew,
            noBackground: true,
            leftAlignHeaders: true
          }), (0, r.jsx)(S.Z, {
            className: D.perksDiscoverability,
            variant: A.gM.PERKS_DISCOVERABILITY,
            noBackground: true,
            leftAlignHeaders: true,
            showAllPerksButton: (0, r.jsx)(N.Z, {
              setIsAllPerksVisible: Z,
              previousComponent: A.MQ.HOME
            })
          }), (0, r.jsx)(I.Z, {
            className: D.giftNitro,
            location: d.Z.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: R.ZY5.NITRO_HOME,
              section: R.jXE.GIFT_BANNER
            }
          }), (0, r.jsx)("div", {
            className: D.footerSpacing
          }), (0, r.jsx)(l.$, {
            innerRef: a,
            onChange: e => {
              e && !K && (E.default.track(R.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: W
              }), z(true))
            },
            children: (0, r.jsx)("div", {
              ref: a,
              className: D.bottomOfPageVisibilitySensor
            })
          }), (0, r.jsx)("img", {
            src: x,
            className: D.bottomIllustration,
            width: 112,
            height: 85,
            alt: w.intl.string(w.t.X4IxWL)
          })]
        })
      }), V && null != H && (0, r.jsx)(v.Z, {
        isVisible: Y && j,
        premiumSubscription: L,
        churnDiscountOffer: k,
        discountedPrice: H
      })]
    }), (0, r.jsx)(C.Z, {
      isAllPerksVisible: G,
      setIsAllPerksVisible: Z,
      previousComponent: A.MQ.HOME,
      enablePremiumBrandRefresh: Q
    })]
  })
}