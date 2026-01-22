/** Chunk was on 38663 **/
/** chunk id: 531755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk427262 = require("./427262.js"),
  Chunk228053 = require("./228053.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk401775 = require("./401775.js");

function d(e) {
  let {
    wishlist: t,
    analyticsLocations: n,
    user: l,
    isOwner: d,
    className: f
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(u.k, f),
    children: [(0, r.jsx)(a.EYj, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: d ? c.intl.string(c.t["+GB8Kt"]) : c.intl.formatToPlainString(c.t["D/FWJf"], {
        username: s.Ay.getName(l)
      })
    }), (0, r.jsx)(o.A, {
      wishlist: t,
      className: u.V,
      analyticsLocations: n,
      numWishlistItemsToRecommend: 15,
      maxWishlistItemsToShow: 6
    })]
  })
}