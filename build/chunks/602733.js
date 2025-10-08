/** Chunk was on 69033 **/
/** chunk id: 602733, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  k: () => l,
  n: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk621853 = require("./621853.js"),
  Chunk46841 = require("./46841.js"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js");

function l(t, e) {
  let r = (0, u.S)({
      location: "UserProfileModalV2"
    }),
    [l, a, d, S] = (0, i.Wu)([c.Z], () => null != t && r ? [c.Z.getWishlist(t), c.Z.isFetching(t), c.Z.getError(t), c.Z.getUpdatedAt(t)] : [null, false, true, true]),
    f = (0, i.e7)([s.Z], () => {
      var r;
      if (null != t && null != e) return null == (r = s.Z.getWishlistSettings(e, t)) ? true : r.updated_at
    });
  return (0, n.useEffect)(() => {
    null != t && !a && r && null == d && (null == l || null != f && S !== f) && o.Z.fetchWishlist(t, f)
  }, [t, l, a, r, f, S, d]), {
    wishlist: l,
    isFetching: a,
    error: d
  }
}

function a(t, e) {
  return (0, i.e7)([c.Z], () => null != t && c.Z.hasSkuId(t, e))
}