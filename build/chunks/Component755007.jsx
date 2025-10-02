/** Chunk was on 68255 **/
/** chunk id: 755007, original params: e,t,r (module,exports,require) **/
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
  Chunk820934 = require("./820934.js");

function u(e) {
  let {
    orbAmount: t,
    className: r
  } = e;
  return (0, n.jsxs)(a.Text, {
    variant: "text-md/semibold",
    className: i()(c.orbPriceTag, r),
    children: [(0, n.jsx)(a.nn4, {
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