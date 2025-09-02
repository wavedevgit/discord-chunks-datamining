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
  Chunk304789 = require("./304789.jsx"),
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
  Chunk677599 = require("./677599.js"),
  Chunk865215 = require("./865215.js");
let M = e => {
  let {
    userId: t
  } = e;
  i.useEffect(() => {
    d.Z.wait(async () => {
      null != t && await (0, g.Z)(t)
    })
  }, [t]), i.useEffect(() => {
    G(true)
  }, []), (0, h.z)(p.X);
  let n = i.useRef(null),
    a = i.useRef(null),
    M = (0, s.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
    {
      enabled: k
    } = y.b.useConfig({
      location: "NitroTabButton"
    }),
    [U, G] = i.useState(false),
    B = (0, v.$)("subscriber nitro home"),
    Z = i.useRef(null),
    [F, V] = i.useState(false),
    [H, Y] = i.useState(false),
    W = k && null != B && null != M && M.status === D.O0b.CANCELED,
    K = (0, I.W7)(w.Xh.PREMIUM_MONTH_TIER_2, B, M),
    z = !H && W,
    {
      analyticsLocations: q
    } = (0, _.ZP)(f.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [X, Q] = i.useState(false),
    J = (0, s.e7)([m.Z], () => null != t ? m.Z.getUserProfile(t) : null),
    $ = "true" === new URLSearchParams(window.location.search).get("autoScroll");
  window.history.replaceState({}, "", window.location.pathname);
  let ee = (0, O.ZP)({
    location: "SubscriberNitroHome"
  });
  return null == J ? (0, r.jsx)("div", {
    className: o()(L.container, L.loading),
    children: (0, r.jsx)(u.$jN, {})
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(u.yWw, {
      className: L.mainPageScroller,
      ref: n,
      children: [(0, r.jsx)(c.$, {
        color: "nitro-pink",
        className: o()(L.container, L.responsiveContainer, {
          [L.hiddenGradient]: !ee
        }),
        children: (0, r.jsxs)(_.Gt, {
          value: q,
          children: [(0, r.jsx)(l.$, {
            innerRef: Z,
            onChange: e => Y(e),
            threshold: .1,
            active: true,
            children: (0, r.jsx)(C.Z, {
              buttonVisibilityRef: Z,
              className: L.heroHeading,
              location: N.MQ.HOME,
              enablePremiumBrandRefresh: ee,
              userDiscountOffer: B,
              discountedPrice: K
            })
          }), (0, r.jsx)(T.Z, {
            variant: N.gM.WHATS_NEW,
            className: L.whatsNew,
            noBackground: true,
            leftAlignHeaders: true,
            shouldAutoScroll: $
          }), (0, r.jsx)(T.Z, {
            className: L.perksDiscoverability,
            variant: N.gM.PERKS_DISCOVERABILITY,
            noBackground: true,
            leftAlignHeaders: true,
            showAllPerksButton: (0, r.jsx)(P.Z, {
              setIsAllPerksVisible: V,
              previousComponent: N.MQ.HOME
            })
          }), (0, r.jsx)(A.Z, {
            className: L.giftNitro,
            location: f.Z.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: D.ZY5.NITRO_HOME,
              section: D.jXE.GIFT_BANNER
            }
          }), (0, r.jsx)("div", {
            className: L.footerSpacing
          }), (0, r.jsx)(l.$, {
            innerRef: a,
            onChange: e => {
              e && !X && (b.default.track(D.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: q
              }), Q(true))
            },
            children: (0, r.jsx)("div", {
              ref: a,
              className: L.bottomOfPageVisibilitySensor
            })
          }), (0, r.jsx)("img", {
            src: j,
            className: L.bottomIllustration,
            width: 112,
            height: 85,
            alt: x.intl.string(x.t.X4IxWF)
          })]
        })
      }), W && null != K && (0, r.jsx)(S.Z, {
        isVisible: z && U,
        premiumSubscription: M,
        churnDiscountOffer: B,
        discountedPrice: K
      })]
    }), (0, r.jsx)(R.Z, {
      isAllPerksVisible: F,
      setIsAllPerksVisible: V,
      previousComponent: N.MQ.HOME,
      enablePremiumBrandRefresh: ee
    })]
  })
}