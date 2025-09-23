/** Chunk was on 12556 **/
/** chunk id: 602733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => l,
  n: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk46841 = require("./46841.js"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js");

function l(e) {
  let t = (0, c.S)({
      location: "UserProfileModalV2"
    }),
    [n, l, s] = (0, r.Wu)([a.Z], () => null != e && t ? [a.Z.getWishlist(e), a.Z.isFetching(e), a.Z.getError(e)] : [null, false, true]);
  return (0, o.useEffect)(() => {
    null != e && null == n && !l && t && i.Z.fetchWishlist(e)
  }, [e, n, l, t]), {
    wishlist: n,
    isFetching: l,
    error: s
  }
}

function s(e, t) {
  return (0, r.e7)([a.Z], () => a.Z.hasSkuId(e, t))
}