/** Chunk was on 67000 **/
/** chunk id: 862149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk972237 = require("./972237.js");

function u(e) {
  let {
    withHeader: t = true,
    size: n = 15
  } = e, i = (0, o.e7)([s.Z], () => s.Z.useReducedMotion);
  return (0, r.jsxs)(a.Kqy, {
    gap: 4,
    children: [t && (0, r.jsx)("div", {
      className: l()(c.wrapper, {
        [c.noAnimation]: i
      }),
      style: {
        paddingTop: 8,
        paddingBottom: 8
      },
      children: (0, r.jsx)(d, {
        className: l()(c.lineShort, c.loadingAnimation)
      })
    }), Array.from({
      length: n
    }).map((e, t) => (0, r.jsx)(f, {}, t))]
  })
}

function d(e) {
  let {
    className: t
  } = e;
  return (0, r.jsx)("div", {
    className: l()(c.line, t)
  })
}

function f() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  return (0, Chunk54381.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: 4
    },
    className: l()(Chunk972237.wrapper, {
      [Chunk972237.noAnimation]: module
    }),
    children: [(0, Chunk54381.jsx)("div", {
      className: l()(Chunk972237.avatar, Chunk972237.loadingAnimation)
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk972237.lineContainer,
      children: [(0, Chunk54381.jsx)(d, {
        className: l()(Chunk972237.lineMedium, Chunk972237.loadingAnimation)
      }), (0, Chunk54381.jsx)(d, {
        className: l()(Chunk972237.lineShort, Chunk972237.loadingAnimation)
      }), (0, Chunk54381.jsx)(d, {
        className: l()(Chunk972237.lineLong, Chunk972237.loadingAnimation)
      })]
    })]
  })
}