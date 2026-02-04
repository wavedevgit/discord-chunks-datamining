/** Chunk was on 83782 **/
/** chunk id: 996353, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk20424 = require("./20424.js"),
  Chunk592356 = require("./592356.js"),
  Chunk950191 = require("./950191.js"),
  Chunk721932 = require("./721932.js"),
  Chunk594832 = require("./594832.js"),
  Chunk188275 = require("./188275.js");

function c(e) {
  let {
    user: t,
    numItems: i = o.pl,
    location: c
  } = e, d = (0, s.Ay)(t.id), {
    defaultWishlistId: m,
    wishlist: p,
    popularCollectiblesProducts: f,
    isFetchingWishlist: _,
    isValidatingPopularProducts: h,
    isFetchingPopularProducts: g,
    wishlistError: I
  } = (0, o.eT)({
    giftRecipient: t,
    minNumItems: i,
    source: o.B5.USER_PROFILE
  }), S = (0, r.A)({
    displayProfile: d,
    location: c
  }), x = n.useMemo(() => [t.id], [t.id]), {
    recommendations: C
  } = (0, l.A)({
    numWishlistItems: Math.max(i, o.pl),
    location: c,
    applicationId: u.XR,
    userIds: x,
    includeWishlists: true
  }), b = n.useMemo(() => {
    var e;
    return (null != (e = null == p ? true : p.items) ? e : []).filter(e => true !== e.isOwned && (0, a.$)(e)).length > 0 || S ? C : []
  }, [null == p ? true : p.items, S, C]), {
    displayItems: w,
    totalUnownedWishlistItemCount: y
  } = (0, o.mk)({
    wishlist: p,
    popularCollectiblesProducts: f,
    popularSocialLayerStorefrontItems: b,
    wishlistError: I,
    numItems: i
  });
  return {
    displayItems: w,
    totalUnownedWishlistItemCount: y,
    fetchState: n.useMemo(() => _ || h || g ? {
      status: "loading"
    } : null != I ? {
      status: "error",
      error: I
    } : {
      status: "success"
    }, [_, h, g, I]),
    defaultWishlistId: m,
    wishlist: p
  }
}