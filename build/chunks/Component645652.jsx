/** Chunk was on web.js **/
/** chunk id: 645652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk819758 = require("./819758.jsx"),
  Chunk759735 = require("./759735.js");

function l(e) {
  let {
    className: t,
    children: n,
    forceUseColor: i = false,
    hideStars: l
  } = e;
  return (0, r.jsxs)("span", {
    className: a()(s.container, t, {
      [s.containerColored]: i
    }),
    children: [n, l ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.Z, {
        foreground: s.sparkleStarTopRight
      }), (0, r.jsx)(o.Z, {
        foreground: s.sparkleStarRight
      }), (0, r.jsx)(o.Z, {
        foreground: s.sparkleStarBottomLeft
      })]
    })]
  })
}