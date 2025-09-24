/** Chunk was on 49902 **/
/** chunk id: 414655, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk602733 = require("./602733.js"),
  Chunk319396 = require("./319396.jsx");

function a() {
  let {
    wishlist: e,
    isFetching: t,
    error: n
  } = (0, Chunk602733.k)("123");
  return exports ? (0, Chunk951288.jsx)("div", {
    children: "Loading wishlist"
  }) : null != require ? (0, Chunk951288.jsx)("div", {
    children: "Error loading wishlist"
  }) : null == module || 0 === module.items.length ? (0, Chunk951288.jsx)("div", {
    children: "Empty State"
  }) : (0, Chunk951288.jsx)(Chunk319396.Z, {
    items: module.items
  })
}