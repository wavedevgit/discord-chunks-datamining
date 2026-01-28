/** Chunk was on 94682 **/
/** chunk id: 535089, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js");

function i(e) {
  let {
    wishlistId: t,
    onAction: n,
    productLines: i
  } = e, [a, o] = (0, r.useState)(false), s = (0, r.useCallback)(e => {
    e && null != t && (n({
      action: "VIEW_WISHLIST",
      wishlistId: t,
      productLines: null != i ? i : true
    }), o(true))
  }, [t, n, i]);
  return (0, l.K)(s, true, null != t && !a)
}