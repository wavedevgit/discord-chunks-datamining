/** Chunk was on 30202 **/
/** chunk id: 132547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let I = e => {
  let {
    userId: t
  } = e;
  r.useEffect(() => {
    d.Z.wait(async () => {
      null != t && await (0, f.Z)(t)
    })
  }, [t]), (0, g.z)(p.X);
  let n = r.useRef(null),
    s = r.useRef(null),
    [I, y] = r.useState(false),
    {
      analyticsLocations: A
    } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [P, R] = r.useState(false),
    D = (0, l.e7)([h.Z], () => null != t ? h.Z.getUserProfile(t) : null),
    Z = "true" === new URLSearchParams(window.location.search).get("autoScroll");
  return (window.history.replaceState({}, "", window.location.pathname), null == D) ? (0, i.jsx)("div", {
    className: a()(T.container, T.loading),
    children: (0, i.jsx)(c.$jN, {})
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.yWw, {
      className: T.mainPageScroller,
      ref: n,
      children: (0, i.jsx)("div", {
        className: T.container,
        children: (0, i.jsxs)(m.Gt, {
          value: A,
          children: [(0, i.jsx)(j.Z, {
            className: T.heroHeading,
            location: E.MQ.HOME
          }), (0, i.jsx)(x.Z, {
            variant: E.gM.WHATS_NEW,
            className: T.whatsNew,
            noBackground: true,
            leftAlignHeaders: true,
            shouldAutoScroll: Z
          }), (0, i.jsx)(x.Z, {
            className: T.perksDiscoverability,
            variant: E.gM.PERKS_DISCOVERABILITY,
            noBackground: true,
            leftAlignHeaders: true,
            showAllPerksButton: (0, i.jsx)(O.Z, {
              setIsAllPerksVisible: y,
              previousComponent: E.MQ.HOME
            })
          }), (0, i.jsx)(_.Z, {
            className: T.giftNitro,
            location: u.Z.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: v.ZY5.NITRO_HOME,
              section: v.jXE.GIFT_BANNER
            }
          }), (0, i.jsx)("div", {
            className: T.footerSpacing
          }), (0, i.jsx)(o.$, {
            innerRef: s,
            onChange: e => {
              e && !P && (b.default.track(v.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: A
              }), R(true))
            },
            children: (0, i.jsx)("div", {
              ref: s,
              className: T.bottomOfPageVisibilitySensor
            })
          }), (0, i.jsx)("img", {
            src: N,
            className: T.bottomIllustration,
            width: 112,
            height: 85,
            alt: S.intl.string(S.t.X4IxWF)
          })]
        })
      })
    }), (0, i.jsx)(C.Z, {
      isAllPerksVisible: I,
      setIsAllPerksVisible: y,
      previousComponent: E.MQ.HOME
    })]
  })
}