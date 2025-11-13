/** Chunk was on 11788 **/
/** chunk id: 862149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk495940 = require("./495940.js");

function u(e) {
  let {
    withHeader: t = true,
    size: n = 15
  } = e, i = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
  return (0, r.jsxs)(o.Kqy, {
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
    }).map((e, t) => (0, r.jsx)(p, {}, t))]
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

function p() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  return (0, Chunk951288.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: 4
    },
    className: l()(Chunk495940.wrapper, {
      [Chunk495940.noAnimation]: module
    }),
    children: [(0, Chunk951288.jsx)("div", {
      className: l()(Chunk495940.avatar, Chunk495940.loadingAnimation)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk495940.lineContainer,
      children: [(0, Chunk951288.jsx)(d, {
        className: l()(Chunk495940.lineMedium, Chunk495940.loadingAnimation)
      }), (0, Chunk951288.jsx)(d, {
        className: l()(Chunk495940.lineShort, Chunk495940.loadingAnimation)
      }), (0, Chunk951288.jsx)(d, {
        className: l()(Chunk495940.lineLong, Chunk495940.loadingAnimation)
      })]
    })]
  })
}