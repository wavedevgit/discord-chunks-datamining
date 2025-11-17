/** Chunk was on 65354 **/
/** chunk id: 471341, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js");

function l(e) {
  let {
    wishlistId: t,
    onAction: n
  } = e, [l, o] = (0, r.useState)(false), a = (0, r.useCallback)(e => {
    e && null != t && (n({
      action: "VIEW_WISHLIST",
      wishlistId: t,
      skuId: null
    }), o(true))
  }, [n, t]);
  return (0, i.O)(a, true, null != t && !l)
}