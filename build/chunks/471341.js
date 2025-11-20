/** Chunk was on 90347 **/
/** chunk id: 471341, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js");

function a(e) {
  let {
    wishlistId: t,
    onAction: r,
    productLines: a
  } = e, [s, o] = (0, i.useState)(false), l = (0, i.useCallback)(e => {
    e && null != t && (r({
      action: "VIEW_WISHLIST",
      wishlistId: t,
      productLines: null != a ? a : true
    }), o(true))
  }, [t, r, a]);
  return (0, n.O)(l, true, null != t && !s)
}