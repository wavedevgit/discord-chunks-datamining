/** Chunk was on 49902 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk602733 = require("./602733.js"),
  Chunk621853 = require("./621853.js"),
  Chunk319396 = require("./319396.jsx");

function s(e) {
  let {
    profileOwner: t
  } = e, {
    defaultWishlistId: n
  } = (0, i.cj)([a.Z], () => ({
    defaultWishlistId: a.Z.getFirstWishlistId(t.id)
  })), {
    wishlist: s,
    isFetching: c,
    error: u
  } = (0, l.k)(n);
  return c ? (0, r.jsx)("div", {
    children: "Loading wishlist"
  }) : null != u ? (0, r.jsx)("div", {
    children: "Error loading wishlist"
  }) : null == s || 0 === s.items.length ? (0, r.jsx)("div", {
    children: "Empty State"
  }) : (0, r.jsx)(o.Z, {
    items: s.items,
    profileOwner: t
  })
}