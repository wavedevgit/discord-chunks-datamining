/** Chunk was on 90320 **/
/** chunk id: 471341, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk907331 = require("./907331.js");

function a(e) {
  let {
    wishlistId: t,
    onAction: r
  } = e, [a, l] = (0, i.useState)(false), n = (0, i.useCallback)(e => {
    e && null != t && (r({
      action: "VIEW_WISHLIST",
      wishlistId: t,
      skuId: null
    }), l(true))
  }, [r, t]);
  return (0, s.O)(n, true, null != t && !a)
}