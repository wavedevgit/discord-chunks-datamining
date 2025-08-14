/** Chunk was on 86031 **/
/** chunk id: 754433, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  y: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk410187 = require("./410187.js");
let u = e => {
  let {
    price: {
      amount: t,
      currency: r
    },
    className: a,
    variant: u = "heading-md/semibold"
  } = e, d = (0, o.qr)(t, r);
  return (0, n.jsxs)(l.Text, {
    variant: u,
    className: i()(c.striked, a),
    children: [(0, n.jsx)(l.nn4, {
      children: s.intl.format(s.t["2CEGlp"], {
        price: d
      })
    }), (0, n.jsx)("span", {
      "aria-hidden": true,
      children: d
    })]
  })
}