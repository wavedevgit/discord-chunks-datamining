/** Chunk was on 45620 **/
/** chunk id: 754433, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  y: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk843819 = require("./843819.js");
let u = e => {
  let {
    price: {
      amount: t,
      currency: r
    },
    className: l,
    variant: u = "heading-md/semibold"
  } = e, d = (0, o.qr)(t, r);
  return (0, n.jsxs)(i.Text, {
    variant: u,
    className: a()(c.striked, l),
    children: [(0, n.jsx)(i.nn4, {
      children: s.intl.format(s.t["2CEGlp"], {
        price: d
      })
    }), (0, n.jsx)("span", {
      "aria-hidden": true,
      children: d
    })]
  })
}