/** Chunk was on 84957 **/
/** chunk id: 602733, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  k: () => a,
  n: () => u
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
    [r, a, u] = (0, i.Wu)([l.Z], () => null != e && t ? [l.Z.getWishlist(e), l.Z.isFetching(e), l.Z.getError(e)] : [null, false, true]);
  return (0, n.useEffect)(() => {
    null != e && null == r && !a && t && o.Z.fetchWishlist(e)
  }, [e, r, a, t]), {
    wishlist: r,
    isFetching: a,
    error: u
  }
}

function u(e, t) {
  return (0, i.e7)([l.Z], () => null != e && l.Z.hasSkuId(e, t))
}