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
  let e = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = i.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 50 * Math.random(), "%")
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%")
      }
    }), []);
  return (0, r.jsxs)("div", {
    className: o()(u.container, {
      [u.noAnimation]: e
    }),
    children: [(0, r.jsx)("div", {
      className: u.iconPlaceholder
    }), (0, r.jsxs)("div", {
      className: u.textContainer,
      children: [(0, r.jsx)("div", {
        className: u.textPlaceholder,
        style: t,
        children: (0, r.jsx)(l.Heading, {
          className: u.hidden,
          variant: "heading-md/semibold",
          color: "text-strong",
          lineClamp: 1,
          children: "_"
        })
      }), (0, r.jsx)("div", {
        className: u.textPlaceholder,
        style: n,
        children: (0, r.jsx)(l.Text, {
          className: u.hidden,
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), (0, r.jsx)("div", {
      className: u.underline
    })]
  })
}