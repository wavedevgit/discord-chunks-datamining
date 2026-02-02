/** Chunk was on 62694 **/
/** chunk id: 996353, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk871123 = require("./871123.js"),
  Chunk20424 = require("./20424.js"),
  Chunk592356 = require("./592356.js"),
  Chunk950191 = require("./950191.js"),
  Chunk721932 = require("./721932.js"),
  Chunk594832 = require("./594832.js"),
  Chunk188275 = require("./188275.js");

function d(e) {
  let {
    user: t,
    numItems: i = u.pl,
    location: d
  } = e, m = (0, a.Ay)(t.id), {
    defaultWishlistId: p,
    wishlist: f,
    popularCollectiblesProducts: _,
    isFetchingWishlist: h,
    isValidatingPopularProducts: g,
    isFetchingPopularProducts: I,
    wishlistError: S
  } = (0, u.eT)({
    giftRecipient: t,
    minNumItems: i,
    source: u.B5.USER_PROFILE
  }), x = (0, l.A)({
    displayProfile: m,
    location: d
  }), C = n.useMemo(() => [t.id], [t.id]), {
    recommendations: b
  } = (0, s.A)({
    guildId: (0, r.zf)(),
    numWishlistItems: Math.max(i, u.pl),
    location: d,
    applicationId: c.XR,
    userIds: C,
    includeWishlists: true
  }), w = n.useMemo(() => {
    var e;
    return (null != (e = null == f ? true : f.items) ? e : []).filter(e => true !== e.isOwned && (0, o.$)(e)).length > 0 || x ? b : []
  }, [null == f ? true : f.items, x, b]), {
    displayItems: y,
    totalUnownedWishlistItemCount: O
  } = (0, u.mk)({
    wishlist: f,
    popularCollectiblesProducts: _,
    popularSocialLayerStorefrontItems: w,
    wishlistError: S,
    numItems: i
  });
  return {
    displayItems: y,
    totalUnownedWishlistItemCount: O,
    fetchState: n.useMemo(() => h || g || I ? {
      status: "loading"
    } : null != S ? {
      status: "error",
      error: S
    } : {
      status: "success"
    }, [h, g, I, S]),
    defaultWishlistId: p,
    wishlist: f
  }
}