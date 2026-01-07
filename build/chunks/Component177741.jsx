/** Chunk was on 67110 **/
/** chunk id: 177741, original params: e,t,a (module,exports,require) **/
let n;
require.r(exports), require.d(exports, {
  WowMomentTypes: () => U,
  default: () => O
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk554916 = require("./554916.js"),
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
  Chunk372630 = require("./372630.js"),
  Chunk172625 = require("./172625.js"),
  Chunk45254 = require("./45254.js"),
  Chunk554560 = require("./554560.js"),
  Chunk177808 = require("./177808.js"),
  Chunk739014 = require("./739014.js"),
  Chunk496059 = require("./496059.js"),
  U = ((i = {}).WUMPUS_FLIGHT = "wumpus_flight", i.GRADIENT_HIGHLIGHT = "gradient_highlight", i);
async function C(e, t) {
  try {
    l.Z.dispatch({
      type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA"
    });
    let a = e ? S.Z : g.Z;
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
    h.Z.captureException(e), l.Z.dispatch({
      type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE"
    })
  }
}

function H() {
  let e = (0, p.e7)([m.Z], () => m.Z.useReducedMotion),
    [t, a] = o.useState(null),
    {
      isFetchingMedia: i,
      canPlayWowMoment: d
    } = (0, p.cj)([T.Z], () => ({
      isFetchingMedia: T.Z.isFetchingWowMomentMedia,
      canPlayWowMoment: T.Z.canPlayWowMoment
    })),
    [u, l] = o.useState(false),
    h = (0, E.vu)(),
    S = (0, E.rO)(),
    g = h > 52 || false === h || S,
    P = S ? "video/mp4" : "video/webm",
    y = g && !e && d && null === t && false === i;
  o.useEffect(() => {
    y && C(S, a)
  }, [y, S, a]), o.useEffect(() => {
    function t() {
      !e && T.Z.canPlayWowMoment && (l(true), n = setTimeout(() => {
        l(false), F(true), _.default.track(b.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
          wow_moment_type: "gradient_highlight"
        }), (0, W.H)(false)
      }, 2e3))
    }
    return f.S.subscribe(b.CkL.PREMIUM_SUBSCRIPTION_CREATED, t), () => {
      f.S.unsubscribe(b.CkL.PREMIUM_SUBSCRIPTION_CREATED, t)
    }
  }, [e, g]);
  let [Z, F] = o.useState(false), [U, H] = o.useState(false), O = (0, M.q_F)({
    opacity: .2 * !!Z,
    config: {
      duration: 100
    }
  }), v = (0, M.q_F)({
    x: U ? "100%" : "-100%",
    config: {
      duration: 500
    }
  }, U ? "respect-motion-settings" : "animate-never");
  o.useEffect(() => {
    let e = false;
    return Z && (e = window.setTimeout(() => {
      H(true)
    }, 1e3)), () => {
      window.clearTimeout(e)
    }
  }, [Z]), o.useEffect(() => {
    let e = false;
    return U && (e = window.setTimeout(() => {
      H(false), F(false)
    }, 1e3)), () => {
      window.clearTimeout(e)
    }
  }, [U]);
  let x = u && null !== t,
    R = x || Z;
  return (0, c.jsxs)("div", {
    className: s()({
      [I.wrapper]: !R,
      [I.activeWrapper]: R
    }),
    children: [x && (0, c.jsx)(w.Z, {
      autoPlay: true,
      className: I.videoWrapper,
      onPlay: () => {
        clearTimeout(n), _.default.track(b.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
          wow_moment_type: "wumpus_flight"
        })
      },
      onEnded: () => {
        l(false), (0, W.H)(false), window.URL.revokeObjectURL(t), a(null)
      },
      children: (0, c.jsx)("source", {
        src: t,
        type: P
      })
    }), (0, c.jsx)(r.animated.div, {
      className: I.gadientHighlight,
      style: O
    }), (0, c.jsx)(r.animated.div, {
      className: I.swipeWrapper,
      style: v,
      children: (0, c.jsxs)("svg", {
        className: I.swipe,
        viewBox: "0 0 848 1024",
        fill: "none",
        children: [(0, c.jsx)("path", {
          d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z",
          fill: "white"
        }), (0, c.jsx)("path", {
          d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
          fill: "white"
        })]
      })
    })]
  })
}
let O = function() {
  return (0, p.e7)([T.Z], () => T.Z.canPlayWowMoment) ? (0, c.jsx)(H, {}) : null
}