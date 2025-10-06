/** Chunk was on web.js **/
/** chunk id: 132547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk219673 = require("./219673.js"),
  Chunk47280 = require("./47280.js"),
  Chunk331972 = require("./331972.js"),
  Chunk230916 = require("./230916.js"),
  Chunk373539 = require("./373539.jsx"),
  Chunk560223 = require("./560223.jsx"),
  Chunk347475 = require("./347475.jsx"),
  Chunk342414 = require("./342414.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk71363 = require("./71363.jsx"),
  Chunk781800 = require("./781800.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk184388 = require("./184388.js"),
  Chunk865215 = require("./865215.js");
let M = e => {
  let {
    userId: t
  } = e;
  i.useEffect(() => {
    u.Z.wait(async () => {
      null != t && await (0, m.Z)(t)
    })
  }, [t]), i.useEffect(() => {
    U(true)
  }, []), (0, p.z)(_.X);
  let n = i.useRef(null),
    a = i.useRef(null),
    M = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
    {
      enabled: j
    } = b.b.useConfig({
      location: "NitroTabButton"
    }),
    [k, U] = i.useState(false),
    G = (0, O.$)("subscriber nitro home"),
    B = i.useRef(null),
    [Z, F] = i.useState(false),
    [V, H] = i.useState(false),
    Y = j && null != G && null != M && M.status === w.O0b.CANCELED,
    W = (0, v.W7)(P.Xh.PREMIUM_MONTH_TIER_2, G, M),
    K = !V && Y,
    {
      analyticsLocations: z
    } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [q, X] = i.useState(false),
    Q = (0, s.e7)([h.Z], () => null != t ? h.Z.getUserProfile(t) : null),
    J = "true" === new URLSearchParams(window.location.search).get("autoScroll");
  window.history.replaceState({}, "", window.location.pathname);
  let $ = (0, y.ZP)({
    location: "SubscriberNitroHome"
  });
  return null == Q ? (0, r.jsx)("div", {
    className: o()(L.container, L.loading),
    children: (0, r.jsx)(c.$jN, {})
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(c.yWw, {
      className: L.mainPageScroller,
      ref: n,
      children: [(0, r.jsx)(c.$1m, {
        color: "nitro-pink",
        className: o()(L.container, L.responsiveContainer, {
          [L.hiddenGradient]: !$
        }),
        children: (0, r.jsxs)(f.Gt, {
          value: z,
          children: [(0, r.jsx)(l.$, {
            innerRef: B,
            onChange: e => H(e),
            threshold: .1,
            active: true,
            children: (0, r.jsx)(A.Z, {
              buttonVisibilityRef: B,
              className: L.heroHeading,
              enablePremiumBrandRefresh: $,
              userDiscountOffer: G,
              discountedPrice: W
            })
          }), (0, r.jsx)(T.Z, {
            variant: C.gM.WHATS_NEW,
            className: L.whatsNew,
            noBackground: true,
            leftAlignHeaders: true,
            shouldAutoScroll: J
          }), (0, r.jsx)(T.Z, {
            className: L.perksDiscoverability,
            variant: C.gM.PERKS_DISCOVERABILITY,
            noBackground: true,
            leftAlignHeaders: true,
            showAllPerksButton: (0, r.jsx)(R.Z, {
              setIsAllPerksVisible: F,
              previousComponent: C.MQ.HOME
            })
          }), (0, r.jsx)(S.Z, {
            className: L.giftNitro,
            location: d.Z.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: w.ZY5.NITRO_HOME,
              section: w.jXE.GIFT_BANNER
            }
          }), (0, r.jsx)("div", {
            className: L.footerSpacing
          }), (0, r.jsx)(l.$, {
            innerRef: a,
            onChange: e => {
              e && !q && (E.default.track(w.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: z
              }), X(true))
            },
            children: (0, r.jsx)("div", {
              ref: a,
              className: L.bottomOfPageVisibilitySensor
            })
          }), (0, r.jsx)("img", {
            src: x,
            className: L.bottomIllustration,
            width: 112,
            height: 85,
            alt: D.intl.string(D.t.X4IxWF)
          })]
        })
      }), Y && null != W && (0, r.jsx)(I.Z, {
        isVisible: K && k,
        premiumSubscription: M,
        churnDiscountOffer: G,
        discountedPrice: W
      })]
    }), (0, r.jsx)(N.Z, {
      isAllPerksVisible: Z,
      setIsAllPerksVisible: F,
      previousComponent: C.MQ.HOME,
      enablePremiumBrandRefresh: $
    })]
  })
}