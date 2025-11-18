/** Chunk was on 48899 **/
/** chunk id: 754433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    className: i,
    variant: u = "heading-md/semibold"
  } = e, d = (0, o.qr)(t, n);
  return (0, r.jsxs)(l.Text, {
    variant: u,
    className: a()(c.striked, i),
    children: [(0, r.jsx)(l.nn4, {
      children: s.intl.format(s.t["2CEGln"], {
        price: d
      })
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      children: d
    })]
  })
}