/** Chunk was on 26628 **/
/** chunk id: 862149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk804466 = require("./804466.js");

function u(e) {
  let {
    withHeader: t = true,
    size: n = 15
  } = e, i = (0, s.e7)([a.Z], () => a.Z.useReducedMotion);
  return (0, r.jsxs)(o.Kq, {
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
    }).map((e, t) => (0, r.jsx)(h, {}, t))]
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

function h() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  return (0, Chunk255367.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: 4
    },
    className: l()(Chunk804466.wrapper, {
      [Chunk804466.noAnimation]: module
    }),
    children: [(0, Chunk255367.jsx)("div", {
      className: l()(Chunk804466.avatar, Chunk804466.loadingAnimation)
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk804466.lineContainer,
      children: [(0, Chunk255367.jsx)(d, {
        className: l()(Chunk804466.lineMedium, Chunk804466.loadingAnimation)
      }), (0, Chunk255367.jsx)(d, {
        className: l()(Chunk804466.lineShort, Chunk804466.loadingAnimation)
      }), (0, Chunk255367.jsx)(d, {
        className: l()(Chunk804466.lineLong, Chunk804466.loadingAnimation)
      })]
    })]
  })
}