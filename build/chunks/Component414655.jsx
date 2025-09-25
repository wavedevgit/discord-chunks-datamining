/** Chunk was on 49902 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk602733 = require("./602733.js"),
  Chunk319396 = require("./319396.jsx");

function a(e) {
  let {
    profileOwner: t
  } = e, {
    wishlist: n,
    isFetching: a,
    error: o
  } = (0, i.k)("123");
  return a ? (0, r.jsx)("div", {
    children: "Loading wishlist"
  }) : null != o ? (0, r.jsx)("div", {
    children: "Error loading wishlist"
  }) : null == n || 0 === n.items.length ? (0, r.jsx)("div", {
    children: "Empty State"
  }) : (0, r.jsx)(l.Z, {
    items: n.items,
    profileOwner: t
  })
}