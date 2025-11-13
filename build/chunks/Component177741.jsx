/** Chunk was on 67110 **/
/** chunk id: 177741, original params: e,t,a (module,exports,require) **/
let n;
require.r(exports), require.d(exports, {
  WowMomentTypes: () => U,
  default: () => O
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  d = require.n(Chunk120356),
  Chunk508312 = require("./508312.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk526167 = require("./526167.js"),
  Chunk585483 = require("./585483.js"),
  Chunk960048 = require("./960048.js"),
  Chunk138464 = require("./138464.js"),
  Chunk438820 = require("./438820.js"),
  Chunk981631 = require("./981631.js"),
  Chunk577562 = require("./577562.js"),
  Chunk426401 = require("./426401.js"),
  Chunk926734 = require("./926734.js"),
  Chunk601046 = require("./601046.js"),
  Chunk421391 = require("./421391.js"),
  Chunk153911 = require("./153911.js"),
  Chunk588369 = require("./588369.js"),
  U = ((i = {}).WUMPUS_FLIGHT = "wumpus_flight", i.GRADIENT_HIGHLIGHT = "gradient_highlight", i);
async function C(e, t) {
  try {
    l.Z.dispatch({
      type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA"
    });
    let a = e ? g.Z : b.Z;
    window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches || window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches ? a = e ? P.Z : y.Z : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) && (a = e ? Z.Z : F.Z);
    let n = await u.tn.get({
        url: a,
        binary: true,
        rejectWithError: true
      }),
      i = window.URL.createObjectURL(n.body);
    t(i), l.Z.dispatch({
      type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
      wumpusMedia: i
    })
  } catch (e) {
    f.Z.captureException(e), l.Z.dispatch({
      type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE"
    })
  }
}

function H() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [t, a] = Chunk647438.useState(null),
    {
      isFetchingMedia: i,
      canPlayWowMoment: s
    } = (0, Chunk442837.cj)([Chunk438820.Z], () => ({
      isFetchingMedia: Chunk438820.Z.isFetchingWowMomentMedia,
      canPlayWowMoment: Chunk438820.Z.canPlayWowMoment
    })),
    [u, l] = Chunk647438.useState(false),
    f = (0, Chunk526167.vu)(),
    g = (0, Chunk526167.rO)(),
    b = Chunk960048 > 52 || false === Chunk960048 || Chunk426401,
    P = Chunk426401 ? "video/mp4" : "video/webm",
    y = Chunk926734 && !module && Chunk120356 && null === exports && false === i;
  Chunk647438.useEffect(() => {
    Chunk421391 && C(Chunk426401, require)
  }, [Chunk421391, Chunk426401, require]), Chunk647438.useEffect(() => {
    function t() {
      !module && Chunk438820.Z.canPlayWowMoment && (Chunk570140(true), n = setTimeout(() => {
        Chunk570140(false), Chunk588369(true), Chunk626135.default.track(Chunk981631.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
          wow_moment_type: "gradient_highlight"
        }), (0, Chunk138464.H)(false)
      }, 2e3))
    }
    return Chunk585483.S.subscribe(Chunk981631.CkL.PREMIUM_SUBSCRIPTION_CREATED, exports), () => {
      Chunk585483.S.unsubscribe(Chunk981631.CkL.PREMIUM_SUBSCRIPTION_CREATED, exports)
    }
  }, [module, Chunk926734]);
  let [Z, F] = Chunk647438.useState(false), [U, H] = Chunk647438.useState(false), O = (0, Chunk481060.q_F)({
    opacity: .2 * !!Chunk153911,
    config: {
      duration: 100
    }
  }), v = (0, Chunk481060.q_F)({
    x: U ? "100%" : "-100%",
    config: {
      duration: 500
    }
  }, U ? "respect-motion-settings" : "animate-never");
  Chunk647438.useEffect(() => {
    let e = false;
    return Chunk153911 && (e = window.setTimeout(() => {
      H(true)
    }, 1e3)), () => {
      window.clearTimeout(module)
    }
  }, [Chunk153911]), Chunk647438.useEffect(() => {
    let e = false;
    return U && (e = window.setTimeout(() => {
      H(false), Chunk588369(false)
    }, 1e3)), () => {
      window.clearTimeout(module)
    }
  }, [U]);
  let x = Chunk544891 && null !== exports,
    R = x || Chunk153911;
  return (0, Chunk951288.jsxs)("div", {
    className: d()({
      [Chunk577562.wrapper]: !R,
      [Chunk577562.activeWrapper]: R
    }),
    children: [x && (0, Chunk951288.jsx)(Chunk70097.Z, {
      autoPlay: true,
      className: Chunk577562.videoWrapper,
      onPlay: () => {
        clearTimeout(n), Chunk626135.default.track(Chunk981631.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
          wow_moment_type: "wumpus_flight"
        })
      },
      onEnded: () => {
        Chunk570140(false), (0, Chunk138464.H)(false), window.URL.revokeObjectURL(exports), require(null)
      },
      children: (0, Chunk951288.jsx)("source", {
        src: exports,
        type: Chunk601046
      })
    }), (0, Chunk951288.jsx)(Chunk508312.animated.div, {
      className: Chunk577562.gadientHighlight,
      style: O
    }), (0, Chunk951288.jsx)(Chunk508312.animated.div, {
      className: Chunk577562.swipeWrapper,
      style: v,
      children: (0, Chunk951288.jsxs)("svg", {
        className: Chunk577562.swipe,
        viewBox: "0 0 848 1024",
        fill: "none",
        children: [(0, Chunk951288.jsx)("path", {
          d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z",
          fill: "white"
        }), (0, Chunk951288.jsx)("path", {
          d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
          fill: "white"
        })]
      })
    })]
  })
}
let O = function() {
  return (0, Chunk442837.e7)([Chunk438820.Z], () => Chunk438820.Z.canPlayWowMoment) ? (0, Chunk951288.jsx)(H, {}) : null
}