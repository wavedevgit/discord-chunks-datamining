/** Chunk was on 97710 **/
/** chunk id: 471341, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js");

function a(e) {
  let {
    wishlistId: t,
    onAction: n
  } = e, [a, o] = (0, r.useState)(false), l = (0, r.useCallback)(e => {
    e && null != t && (n({
      action: "VIEW_WISHLIST",
      wishlistId: t,
      skuId: null
    }), o(true))
  }, [n, t]);
  return (0, i.O)(l, true, null != t && !a)
}