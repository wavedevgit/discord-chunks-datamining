/** Chunk was on 35755 **/
/** chunk id: 79984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk619834 = require("./619834.js");

function d() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = Chunk647438.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 50 * Math.random(), "%")
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%")
      }
    }), []);
  return (0, Chunk951288.jsxs)("div", {
    className: a()(Chunk619834.container, {
      [Chunk619834.noAnimation]: module
    }),
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk619834.iconPlaceholder
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk619834.textContainer,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk619834.textPlaceholder,
        style: exports,
        children: (0, Chunk951288.jsx)(Chunk481060.Heading, {
          className: Chunk619834.hidden,
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: "_"
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk619834.textPlaceholder,
        style: require,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk619834.hidden,
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk619834.underline
    })]
  })
}