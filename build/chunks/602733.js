/** Chunk was on 18539 **/
/** chunk id: 602733, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  k: () => u,
  n: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk46841 = require("./46841.js"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js");

function u(e) {
  let t = (0, o.S)({
      location: "UserProfileModalV2"
    }),
    [r, u, a] = (0, i.Wu)([c.Z], () => null != e && t ? [c.Z.getWishlist(e), c.Z.isFetching(e), c.Z.getError(e)] : [null, false, true]);
  return (0, n.useEffect)(() => {
    null != e && null == r && !u && t && s.Z.fetchWishlist(e)
  }, [e, r, u, t]), {
    wishlist: r,
    isFetching: u,
    error: a
  }
}

function a(e, t) {
  return (0, i.e7)([c.Z], () => null != e && c.Z.hasSkuId(e, t))
}