/** Chunk was on 88614 **/
/** chunk id: 602733, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  k: () => s,
  n: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk46841 = require("./46841.js"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js");

function s(e) {
  let t = (0, a.S)({
      location: "UserProfileModalV2"
    }),
    [r, s, c] = (0, i.Wu)([o.Z], () => null != e && t ? [o.Z.getWishlist(e), o.Z.isFetching(e), o.Z.getError(e)] : [null, false, true]);
  return (0, n.useEffect)(() => {
    null != e && null == r && !s && t && l.Z.fetchWishlist(e)
  }, [e, r, s, t]), {
    wishlist: r,
    isFetching: s,
    error: c
  }
}

function c(e, t) {
  return (0, i.e7)([o.Z], () => null != e && o.Z.hasSkuId(e, t))
}