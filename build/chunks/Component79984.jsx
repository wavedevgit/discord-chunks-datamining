/** Chunk was on web.js **/
/** chunk id: 79984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk758539 = require("./758539.js");

function d() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = Chunk473749.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 50 * Math.random(), "%")
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%")
      }
    }), []);
  return (0, Chunk54381.jsxs)("div", {
    className: o()(Chunk758539.container, {
      [Chunk758539.noAnimation]: module
    }),
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk758539.iconPlaceholder
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk758539.textContainer,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk758539.textPlaceholder,
        style: exports,
        children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
          className: Chunk758539.hidden,
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: "_"
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk758539.textPlaceholder,
        style: require,
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk758539.hidden,
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk758539.underline
    })]
  })
}