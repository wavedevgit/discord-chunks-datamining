/** Chunk was on web.js **/
/** chunk id: 132547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
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
  Chunk626135 = require("./626135.js"),
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
let N = e => {
  let {
    userId: t
  } = e;
  i.useEffect(() => {
    u.Z.wait(async () => {
      null != t && await (0, m.Z)(t)
    })
  }, [t]), (0, p.z)(_.X);
  let n = i.useRef(null),
    a = i.useRef(null),
    [N, R] = i.useState(false),
    {
      analyticsLocations: P
    } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [w, D] = i.useState(false),
    x = (0, s.e7)([h.Z], () => null != t ? h.Z.getUserProfile(t) : null),
    L = "true" === new URLSearchParams(window.location.search).get("autoScroll");
  return (window.history.replaceState({}, "", window.location.pathname), null == x) ? (0, r.jsx)("div", {
    className: o()(A.container, A.loading),
    children: (0, r.jsx)(c.$jN, {})
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.yWw, {
      className: A.mainPageScroller,
      ref: n,
      children: (0, r.jsx)("div", {
        className: o()(A.container, A.responsiveContainer),
        children: (0, r.jsxs)(f.Gt, {
          value: P,
          children: [(0, r.jsx)(y.Z, {
            className: A.heroHeading,
            location: O.MQ.HOME
          }), (0, r.jsx)(E.Z, {
            variant: O.gM.WHATS_NEW,
            className: A.whatsNew,
            noBackground: true,
            leftAlignHeaders: true,
            shouldAutoScroll: L
          }), (0, r.jsx)(E.Z, {
            className: A.perksDiscoverability,
            variant: O.gM.PERKS_DISCOVERABILITY,
            noBackground: true,
            leftAlignHeaders: true,
            showAllPerksButton: (0, r.jsx)(I.Z, {
              setIsAllPerksVisible: R,
              previousComponent: O.MQ.HOME
            })
          }), (0, r.jsx)(b.Z, {
            className: A.giftNitro,
            location: d.Z.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: T.ZY5.NITRO_HOME,
              section: T.jXE.GIFT_BANNER
            }
          }), (0, r.jsx)("div", {
            className: A.footerSpacing
          }), (0, r.jsx)(l.$, {
            innerRef: a,
            onChange: e => {
              e && !w && (g.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: P
              }), D(true))
            },
            children: (0, r.jsx)("div", {
              ref: a,
              className: A.bottomOfPageVisibilitySensor
            })
          }), (0, r.jsx)("img", {
            src: C,
            className: A.bottomIllustration,
            width: 112,
            height: 85,
            alt: S.intl.string(S.t.X4IxWF)
          })]
        })
      })
    }), (0, r.jsx)(v.Z, {
      isAllPerksVisible: N,
      setIsAllPerksVisible: R,
      previousComponent: O.MQ.HOME
    })]
  })
}