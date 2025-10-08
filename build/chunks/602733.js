/** Chunk was on 18539 **/
/** chunk id: 602733, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  k: () => l,
  n: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk621853 = require("./621853.js"),
  Chunk46841 = require("./46841.js"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js");

function l(t, e) {
  let r = (0, o.S)({
      location: "UserProfileModalV2"
    }),
    [l, c, d, S] = (0, i.Wu)([a.Z], () => null != t && r ? [a.Z.getWishlist(t), a.Z.isFetching(t), a.Z.getError(t), a.Z.getUpdatedAt(t)] : [null, false, true, true]),
    f = (0, i.e7)([s.Z], () => {
      var r;
      if (null != t && null != e) return null == (r = s.Z.getWishlistSettings(e, t)) ? true : r.updated_at
    });
  return (0, n.useEffect)(() => {
    null != t && !c && r && null == d && (null == l || null != f && S !== f) && u.Z.fetchWishlist(t, f)
  }, [t, l, c, r, f, S, d]), {
    wishlist: l,
    isFetching: c,
    error: d
  }
}

function c(t, e) {
  return (0, i.e7)([a.Z], () => null != t && a.Z.hasSkuId(t, e))
}