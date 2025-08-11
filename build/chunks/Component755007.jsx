/** Chunk was on 45620 **/
/** chunk id: 755007, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk595392 = require("./595392.js");

function u(e) {
  let {
    orbAmount: t,
    className: n
  } = e;
  return (0, r.jsxs)(i.Text, {
    variant: "text-md/semibold",
    className: a()(c.orbPriceTag, n),
    children: [(0, r.jsx)(i.nn4, {
      children: s.intl.format(s.t["a/Y8PD"], {
        orbAmount: t
      })
    }), (0, r.jsx)(o.Z, {
      shouldUseThemeColor: true
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      children: t
    })]
  })
}