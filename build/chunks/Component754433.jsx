/** Chunk was on 70820 **/
/** chunk id: 754433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk662404 = require("./662404.js");
let u = e => {
  let {
    price: {
      amount: t,
      currency: n
    },
    className: l,
    variant: u = "heading-md/semibold"
  } = e, d = (0, o.qr)(t, n);
  return (0, r.jsxs)(a.Text, {
    variant: u,
    className: i()(c.striked, l),
    children: [(0, r.jsx)(a.nn4, {
      children: s.intl.format(s.t["2CEGlp"], {
        price: d
      })
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      children: d
    })]
  })
}