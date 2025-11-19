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
    onAction: n,
    productLines: l
  } = e, [o, a] = (0, r.useState)(false), s = (0, r.useCallback)(e => {
    e && null != t && (n({
      action: "VIEW_WISHLIST",
      wishlistId: t,
      productLines: null != l ? l : true
    }), a(true))
  }, [t, n, l]);
  return (0, i.O)(s, true, null != t && !o)
}