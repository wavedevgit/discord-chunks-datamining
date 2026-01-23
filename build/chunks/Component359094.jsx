/** Chunk was on 99063 **/
/** chunk id: 359094, original params: e,t,a (module,exports,require) **/
let n;
require.r(exports), require.d(exports, {
  WowMomentTypes: () => F,
  default: () => H
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  d = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk676279 = require("./676279.js"),
  Chunk203982 = require("./203982.js"),
  Chunk728458 = require("./728458.js"),
  Chunk598653 = require("./598653.js"),
  Chunk639735 = require("./639735.js"),
  Chunk652215 = require("./652215.js"),
  Chunk427800 = require("./427800.js"),
  Chunk666642 = require("./666642.js"),
  Chunk951091 = require("./951091.js"),
  Chunk475158 = require("./475158.js"),
  Chunk239871 = require("./239871.js"),
  Chunk941182 = require("./941182.js"),
  Chunk925191 = require("./925191.js"),
  F = ((i = {}).WUMPUS_FLIGHT = "wumpus_flight", i.GRADIENT_HIGHLIGHT = "gradient_highlight", i);
async function O(e, t) {
  try {
    r.h.dispatch({
      type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA"
    });
    let a = e ? S.A : b.A;
    window.matchMedia("(min-width: 1012px) and (max-width: 1980px)").matches || window.matchMedia("(min-height: 720px) and (max-height: 1408px)").matches ? a = e ? g.A : y.A : (window.matchMedia("(min-width: 1980px)").matches || window.matchMedia("(min-height: 1408px)").matches) && (a = e ? P.A : U.A);
    let n = await l.Bo.get({
        url: a,
        binary: true,
        rejectWithError: true
      }),
      i = window.URL.createObjectURL(n.body);
    t(i), r.h.dispatch({
      type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
      wumpusMedia: i
    })
  } catch (e) {
    T.A.captureException(e), r.h.dispatch({
      type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE"
    })
  }
}

function C() {
  let e = (0, _.bG)([u.A], () => u.A.useReducedMotion),
    [t, a] = o.useState(null),
    {
      isFetchingMedia: i,
      canPlayWowMoment: s
    } = (0, _.cf)([I.A], () => ({
      isFetchingMedia: I.A.isFetchingWowMomentMedia,
      canPlayWowMoment: I.A.canPlayWowMoment
    })),
    [l, r] = o.useState(false),
    T = (0, p.Z5)(),
    S = (0, p.TM)(),
    b = T > 52 || false === T || S,
    g = S ? "video/mp4" : "video/webm",
    y = b && !e && s && null === t && false === i;
  o.useEffect(() => {
    y && O(S, a)
  }, [y, S, a]), o.useEffect(() => {
    function t() {
      !e && I.A.canPlayWowMoment && (r(true), n = setTimeout(() => {
        r(false), U(true), h.default.track(W.HAw.PREMIUM_WOW_MOMENT_VIEWED, {
          wow_moment_type: "gradient_highlight"
        }), (0, f.o)(false)
      }, 2e3))
    }
    return E._.subscribe(W.jej.PREMIUM_SUBSCRIPTION_CREATED, t), () => {
      E._.unsubscribe(W.jej.PREMIUM_SUBSCRIPTION_CREATED, t)
    }
  }, [e, b]);
  let [P, U] = o.useState(false), [F, C] = o.useState(false), H = (0, m.zhh)({
    opacity: .2 * !!P,
    config: {
      duration: 100
    }
  }), N = (0, m.zhh)({
    x: F ? "100%" : "-100%",
    config: {
      duration: 500
    }
  }, F ? "respect-motion-settings" : "animate-never");
  o.useEffect(() => {
    let e = false;
    return P && (e = window.setTimeout(() => {
      C(true)
    }, 1e3)), () => {
      window.clearTimeout(e)
    }
  }, [P]), o.useEffect(() => {
    let e = false;
    return F && (e = window.setTimeout(() => {
      C(false), U(false)
    }, 1e3)), () => {
      window.clearTimeout(e)
    }
  }, [F]);
  let R = l && null !== t,
    x = R || P;
  return (0, c.jsxs)("div", {
    className: d()({
      [A.iE]: !x,
      [A.iV]: x
    }),
    children: [R && (0, c.jsx)(w.A, {
      autoPlay: true,
      className: A.tN,
      onPlay: () => {
        clearTimeout(n), h.default.track(W.HAw.PREMIUM_WOW_MOMENT_VIEWED, {
          wow_moment_type: "wumpus_flight"
        })
      },
      onEnded: () => {
        r(false), (0, f.o)(false), window.URL.revokeObjectURL(t), a(null)
      },
      children: (0, c.jsx)("source", {
        src: t,
        type: g
      })
    }), (0, c.jsx)(M.animated.div, {
      className: A.$D,
      style: H
    }), (0, c.jsx)(M.animated.div, {
      className: A.AX,
      style: N,
      children: (0, c.jsxs)("svg", {
        className: A.By,
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
let H = function() {
  return (0, _.bG)([I.A], () => I.A.canPlayWowMoment) ? (0, c.jsx)(C, {}) : null
}