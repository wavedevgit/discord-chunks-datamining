/** Chunk was on 1784 **/
/** chunk id: 506742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk580630 = require("./580630.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk812640 = require("./812640.js");
let u = e => {
  let {
    price: {
      amount: t,
      currency: n
    },
    className: l,
    variant: u = "heading-md/semibold"
  } = e, d = (0, s.RS)(t, n);
  return (0, r.jsxs)(a.Text, {
    variant: u,
    className: i()(c.v, l),
    children: [(0, r.jsx)(a.AC4, {
      children: o.intl.format(o.t["2CEGln"], {
        price: d
      })
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      children: d
    })]
  })
}