/** Chunk was on 86031 **/
/** chunk id: 755007, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820934 = require("./820934.js");

function u(e) {
  let {
    orbAmount: t,
    className: r
  } = e;
  return (0, n.jsxs)(l.Text, {
    variant: "text-md/semibold",
    className: i()(c.orbPriceTag, r),
    children: [(0, n.jsx)(l.nn4, {
      children: s.intl.format(s.t["a/Y8PD"], {
        orbAmount: t
      })
    }), (0, n.jsx)(o.Z, {
      shouldUseThemeColor: true
    }), (0, n.jsx)("span", {
      "aria-hidden": true,
      children: t
    })]
  })
}