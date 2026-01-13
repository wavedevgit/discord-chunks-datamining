/** Chunk was on 90882 **/
/** chunk id: 828222, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk51144 = require("./51144.js"),
  Chunk790773 = require("./790773.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk233616 = require("./233616.js");

function d(e) {
  let {
    wishlist: t,
    analyticsLocations: n,
    user: i,
    isOwner: d,
    className: f
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(u.container, f),
    children: [(0, r.jsx)(a.xvT, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: d ? s.intl.string(s.t["+GB8Kt"]) : s.intl.formatToPlainString(s.t["D/FWJf"], {
        username: o.ZP.getName(i)
      })
    }), (0, r.jsx)(c.Z, {
      wishlist: t,
      className: u.grid,
      analyticsLocations: n,
      numWishlistItemsToRecommend: 15,
      maxWishlistItemsToShow: 6
    })]
  })
}