/** Chunk was on web.js **/
/** chunk id: 454993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk432022 = require("./432022.js"),
  Chunk615300 = require("./615300.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854987 = require("./854987.js"),
  Chunk639797 = require("./639797.js");
let u = 400,
  d = Chunk615300.A.Easing.bezier(.4, 0, 0, 1),
  f = 500;

function p(e) {
  let {
    playEntryAnimation: t,
    children: n,
    isLeaving: s,
    onRest: p
  } = e, [_, h] = i.useState(false), m = i.useContext(l.P), g = (0, o.rdh)(m.primaryColor).hex(), E = (0, o.zhh)({
    from: s ? {
      height: "100%",
      blurHeight: "110%"
    } : {
      height: "0%",
      blurHeight: "0%"
    },
    to: s ? {
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
  }), b = (0, o.zhh)({
    from: {
      background: s ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)"
    },
    to: {
      background: s ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.8)"
    },
    config: {
      duration: s ? u : u / 2,
      easing: d
    },
    onRest: p
  });
  return i.useEffect(() => {
    if (t) return;
    let e = setTimeout(() => {
      h(true)
    }, f);
    return () => clearTimeout(e)
  }, [t]), (0, r.jsx)(a.animated.div, {
    className: c.iE,
    style: {
      background: b.background
    },
    children: t ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.animated.div, {
        className: c.Ge,
        style: {
          height: E.blurHeight,
          color: g
        }
      }), (0, r.jsx)(a.animated.div, {
        className: c.PJ,
        style: {
          height: E.height
        },
        children: (0, r.jsx)("div", {
          className: c.TQ,
          children: n
        })
      })]
    }) : _ ? (0, r.jsx)(o.y$y, {
      className: c.u1
    }) : null
  })
}