/** Chunk was on 1784 **/
/** chunk id: 506742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk580630 = require("./580630.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk812640 = require("./812640.js");
let d = e => {
  let {
    price: {
      amount: t,
      currency: n
    },
    className: l,
    variant: d = "heading-md/semibold"
  } = e, u = (0, s.RS)(t, n);
  return (0, r.jsxs)(i.Text, {
    variant: d,
    className: a()(o.v, l),
    children: [(0, r.jsx)(i.AC4, {
      children: c.intl.format(c.t["2CEGln"], {
        price: u
      })
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      children: u
    })]
  })
}