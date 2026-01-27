/** Chunk was on web.js **/
/** chunk id: 535089, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js");

function a(e) {
  let {
    wishlistId: t,
    onAction: n,
    productLines: a
  } = e, [o, s] = (0, r.useState)(false), l = (0, r.useCallback)(e => {
    e && null != t && (n({
      action: "VIEW_WISHLIST",
      wishlistId: t,
      productLines: null != a ? a : true
    }), s(true))
  }, [t, n, a]);
  return (0, i.K)(l, true, null != t && !o)
}