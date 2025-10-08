/** Chunk was on 70820 **/
/** chunk id: 755007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk314336 = require("./314336.js");

function u(e) {
  let {
    orbAmount: t,
    className: n
  } = e;
  return (0, r.jsxs)(a.Text, {
    variant: "text-md/semibold",
    className: i()(c.orbPriceTag, n),
    children: [(0, r.jsx)(a.nn4, {
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