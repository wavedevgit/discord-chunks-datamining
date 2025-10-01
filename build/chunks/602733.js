/** Chunk was on 18539 **/
/** chunk id: 602733, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  k: () => a,
  n: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk46841 = require("./46841.js"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js");

function a(e) {
  let t = (0, s.S)({
      location: "UserProfileModalV2"
    }),
    [r, a, c] = (0, i.Wu)([u.Z], () => null != e && t ? [u.Z.getWishlist(e), u.Z.isFetching(e), u.Z.getError(e)] : [null, false, true]);
  return (0, n.useEffect)(() => {
    null != e && null == r && !a && t && o.Z.fetchWishlist(e)
  }, [e, r, a, t]), {
    wishlist: r,
    isFetching: a,
    error: c
  }
}

function c(e, t) {
  return (0, i.e7)([u.Z], () => null != e && u.Z.hasSkuId(e, t))
}