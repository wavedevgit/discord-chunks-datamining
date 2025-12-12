/** Chunk was on web.js **/
/** chunk id: 471341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js");

function o(e) {
  let {
    wishlistId: t,
    onAction: n,
    productLines: o
  } = e, [a, s] = (0, r.useState)(false), l = (0, r.useCallback)(e => {
    e && null != t && (n({
      action: "VIEW_WISHLIST",
      wishlistId: t,
      productLines: null != o ? o : true
    }), s(true))
  }, [t, n, o]);
  return (0, i.O)(l, true, null != t && !a)
}