/** Chunk was on 11080 **/
/** chunk id: 319396, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk621853 = require("./621853.js"),
  Chunk796483 = require("./796483.jsx"),
  Chunk465004 = require("./465004.js");

function s(e) {
  let {
    items: t,
    profileOwner: n,
    isOwner: s
  } = e, u = a.default.getCurrentUser(), {
    defaultWishlistId: d
  } = (0, i.cj)([l.Z], () => ({
    defaultWishlistId: l.Z.getFirstWishlistId(n.id)
  }));
  return null == u || null == d ? null : (0, r.jsx)("ul", {
    className: c.grid,
    children: t.map(e => (0, r.jsx)("li", {
      children: (0, r.jsx)(o.Z, {
        item: e,
        profileOwner: n,
        wishlistId: d,
        isOwner: s
      })
    }, e.skuId))
  })
}