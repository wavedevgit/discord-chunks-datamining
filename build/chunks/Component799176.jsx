/** Chunk was on 67544 **/
/** chunk id: 799176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk284539 = require("./284539.js"),
  Chunk406561 = require("./406561.js"),
  Chunk814322 = require("./814322.jsx"),
  Chunk178043 = require("./178043.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk499152 = require("./499152.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let h = {
  [Chunk477839.Vx.DEFAULT]: Chunk499152.cursorDefault,
  [Chunk477839.Vx.CAT]: Chunk499152.cursorCat,
  [Chunk477839.Vx.SWORD]: Chunk499152.cursorSword,
  [Chunk477839.Vx.PIZZA]: Chunk499152.cursorPizza
};

function x(e) {
  var t;
  let [n, o] = (0, s.useState)(false), x = (0, s.useCallback)(e => o(e), []);
  (0, f.Z)(x);
  let {
    analyticsLocations: v
  } = (0, u.ZP)(l.Z.CLICKER_GAME), [O] = (0, d.Z)(g.yN.CURSORS), j = null != (t = O.selectedCursor) ? t : g.Vx.DEFAULT, N = (0, c.Yzy)(n, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: i.config.gentle
  });
  return (0, r.jsx)(u.Gt, {
    value: v,
    children: (0, r.jsxs)("div", {
      className: a()(b.container, h[j]),
      children: [(0, r.jsx)("div", {
        className: b.background,
        children: (0, r.jsx)("div", {
          className: b.backgroundGradient
        })
      }), N((t, n) => (0, r.jsx)(i.animated.div, {
        style: t,
        className: b.animationContainer,
        children: n ? (0, r.jsx)(m.Z, y({}, e)) : (0, r.jsx)(p.Z, y({}, e))
      }))]
    })
  })
}