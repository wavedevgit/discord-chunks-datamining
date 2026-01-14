/** Chunk was on web.js **/
/** chunk id: 77691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk853590 = require("./853590.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk324060 = require("./324060.js"),
  Chunk386403 = require("./386403.js");
let u = 400,
  d = Chunk748780.Z.Easing.bezier(.4, 0, 0, 1),
  f = 500;

function p(e) {
  let {
    playEntryAnimation: t,
    children: n,
    isLeaving: o,
    onRest: p
  } = e, [_, m] = i.useState(false), h = i.useContext(l.Q), g = (0, s.dQu)(h.primaryColor).hex(), E = (0, s.q_F)({
    from: o ? {
      height: "100%",
      blurHeight: "110%"
    } : {
      height: "0%",
      blurHeight: "0%"
    },
    to: o ? {
      height: "0%",
      blurHeight: "0%"
    } : {
      height: "100%",
      blurHeight: "110%"
    },
    config: {
      duration: u,
      easing: d
    },
    pause: !t
  }), b = (0, s.q_F)({
    from: {
      background: o ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)"
    },
    to: {
      background: o ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.8)"
    },
    config: {
      duration: o ? u : u / 2,
      easing: d
    },
    onRest: p
  });
  return i.useEffect(() => {
    if (t) return;
    let e = setTimeout(() => {
      m(true)
    }, f);
    return () => clearTimeout(e)
  }, [t]), (0, r.jsx)(a.animated.div, {
    className: c.wrapper,
    style: {
      background: b.background
    },
    children: t ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.animated.div, {
        className: c.blur,
        style: {
          height: E.blurHeight,
          color: g
        }
      }), (0, r.jsx)(a.animated.div, {
        className: c.introAnimation,
        style: {
          height: E.height
        },
        children: (0, r.jsx)("div", {
          className: c.introInner,
          children: n
        })
      })]
    }) : _ ? (0, r.jsx)(s.$jN, {
      className: c.spinner
    }) : null
  })
}