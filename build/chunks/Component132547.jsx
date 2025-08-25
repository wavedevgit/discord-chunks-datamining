/** Chunk was on web.js **/
/** chunk id: 132547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk626135 = require("./626135.js"),
  Chunk47280 = require("./47280.js"),
  Chunk560223 = require("./560223.jsx"),
  Chunk347475 = require("./347475.jsx"),
  Chunk342414 = require("./342414.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk71363 = require("./71363.jsx"),
  Chunk781800 = require("./781800.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk677599 = require("./677599.js"),
  Chunk865215 = require("./865215.js");
let P = e => {
  let {
    userId: t
  } = e;
  i.useEffect(() => {
    d.Z.wait(async () => {
      null != t && await (0, g.Z)(t)
    })
  }, [t]), (0, h.z)(p.X);
  let n = i.useRef(null),
    o = i.useRef(null),
    [P, w] = i.useState(false),
    {
      analyticsLocations: D
    } = (0, _.ZP)(f.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [x, L] = i.useState(false),
    j = (0, s.e7)([m.Z], () => null != t ? m.Z.getUserProfile(t) : null),
    k = "true" === new URLSearchParams(window.location.search).get("autoScroll");
  window.history.replaceState({}, "", window.location.pathname);
  let M = (0, b.ZP)({
    location: "SubscriberNitroHome"
  });
  return null == j ? (0, r.jsx)("div", {
    className: a()(N.container, N.loading),
    children: (0, r.jsx)(u.$jN, {})
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.yWw, {
      className: N.mainPageScroller,
      ref: n,
      children: (0, r.jsx)(c.$, {
        color: "nitro-pink",
        className: a()(N.container, N.responsiveContainer, {
          [N.hiddenGradient]: !M
        }),
        children: (0, r.jsxs)(_.Gt, {
          value: D,
          children: [(0, r.jsx)(v.Z, {
            className: N.heroHeading,
            location: I.MQ.HOME,
            enablePremiumBrandRefresh: M
          }), (0, r.jsx)(y.Z, {
            variant: I.gM.WHATS_NEW,
            className: N.whatsNew,
            noBackground: true,
            leftAlignHeaders: true,
            shouldAutoScroll: k
          }), (0, r.jsx)(y.Z, {
            className: N.perksDiscoverability,
            variant: I.gM.PERKS_DISCOVERABILITY,
            noBackground: true,
            leftAlignHeaders: true,
            showAllPerksButton: (0, r.jsx)(S.Z, {
              setIsAllPerksVisible: w,
              previousComponent: I.MQ.HOME
            })
          }), (0, r.jsx)(O.Z, {
            className: N.giftNitro,
            location: f.Z.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: A.ZY5.NITRO_HOME,
              section: A.jXE.GIFT_BANNER
            }
          }), (0, r.jsx)("div", {
            className: N.footerSpacing
          }), (0, r.jsx)(l.$, {
            innerRef: o,
            onChange: e => {
              e && !x && (E.default.track(A.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: D
              }), L(true))
            },
            children: (0, r.jsx)("div", {
              ref: o,
              className: N.bottomOfPageVisibilitySensor
            })
          }), (0, r.jsx)("img", {
            src: R,
            className: N.bottomIllustration,
            width: 112,
            height: 85,
            alt: C.intl.string(C.t.X4IxWF)
          })]
        })
      })
    }), (0, r.jsx)(T.Z, {
      isAllPerksVisible: P,
      setIsAllPerksVisible: w,
      previousComponent: I.MQ.HOME,
      enablePremiumBrandRefresh: M
    })]
  })
}