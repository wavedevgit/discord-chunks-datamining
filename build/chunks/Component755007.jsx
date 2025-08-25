/** Chunk was on web.js **/
/** chunk id: 755007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820934 = require("./820934.js");

function u(e) {
  let {
    orbAmount: t,
    className: n
  } = e;
  return (0, r.jsxs)(a.Text, {
    variant: "text-md/semibold",
    className: o()(c.orbPriceTag, n),
    children: [(0, r.jsx)(a.nn4, {
      children: l.intl.format(l.t["a/Y8PD"], {
        orbAmount: t
      })
    }), (0, r.jsx)(s.Z, {
      shouldUseThemeColor: true
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      children: t
    })]
  })
}