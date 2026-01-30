/** Chunk was on 20941 **/
/** chunk id: 454993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk864605 = require("./864605.js"),
  Chunk615300 = require("./615300.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854987 = require("./854987.js"),
  Chunk639797 = require("./639797.js");
let u = Chunk615300.A.Easing.bezier(.4, 0, 0, 1);

function d(e) {
  let {
    playEntryAnimation: t,
    children: n,
    isLeaving: i,
    onRest: d
  } = e, [m, f] = l.useState(false), p = l.useContext(o.P), h = (0, s.rdh)(p.primaryColor).hex(), b = (0, s.zhh)({
    from: i ? {
      height: "100%",
      blurHeight: "110%"
    } : {
      height: "0%",
      blurHeight: "0%"
    },
    to: i ? {
      height: "0%",
      blurHeight: "0%"
    } : {
      height: "100%",
      blurHeight: "110%"
    },
    config: {
      duration: 400,
      easing: u
    },
    pause: !t
  }), g = (0, s.zhh)({
    from: {
      background: i ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)"
    },
    to: {
      background: i ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.8)"
    },
    config: {
      duration: i ? 400 : 200,
      easing: u
    },
    onRest: d
  });
  return l.useEffect(() => {
    if (t) return;
    let e = setTimeout(() => {
      f(true)
    }, 500);
    return () => clearTimeout(e)
  }, [t]), (0, r.jsx)(a.animated.div, {
    className: c.iE,
    style: {
      background: g.background
    },
    children: t ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.animated.div, {
        className: c.Ge,
        style: {
          height: b.blurHeight,
          color: h
        }
      }), (0, r.jsx)(a.animated.div, {
        className: c.PJ,
        style: {
          height: b.height
        },
        children: (0, r.jsx)("div", {
          className: c.TQ,
          children: n
        })
      })]
    }) : m ? (0, r.jsx)(s.y$y, {
      className: c.u1
    }) : null
  })
}