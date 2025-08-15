/** Chunk was on 35755 **/
/** chunk id: 79984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk75243 = require("./75243.js");

function d() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = Chunk73800.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 50 * Math.random(), "%")
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%")
      }
    }), []);
  return (0, Chunk255367.jsxs)("div", {
    className: a()(Chunk75243.container, {
      [Chunk75243.noAnimation]: module
    }),
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk75243.iconPlaceholder
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk75243.textContainer,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk75243.textPlaceholder,
        style: exports,
        children: (0, Chunk255367.jsx)(Chunk481060.X6q, {
          className: Chunk75243.hidden,
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: "_"
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk75243.textPlaceholder,
        style: require,
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          className: Chunk75243.hidden,
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk75243.underline
    })]
  })
}