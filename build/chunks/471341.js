/** Chunk was on web.js **/
/** chunk id: 471341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js");

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
  return (0, i.O)(l, true, null != t && !o)
}