/** Chunk was on 26766 **/
/** chunk id: 996353, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk871123 = require("./871123.js"),
  Chunk20424 = require("./20424.js"),
  Chunk592356 = require("./592356.js"),
  Chunk950191 = require("./950191.js"),
  Chunk721932 = require("./721932.js"),
  Chunk594832 = require("./594832.js"),
  Chunk188275 = require("./188275.js");

function c(e) {
  let {
    user: t,
    numItems: i = d.pl,
    location: c
  } = e, m = (0, s.Ay)(t.id), {
    defaultWishlistId: f,
    wishlist: _,
    popularCollectiblesProducts: p,
    isFetchingWishlist: g,
    isValidatingPopularProducts: h,
    isFetchingPopularProducts: I,
    wishlistError: x
  } = (0, d.eT)({
    giftRecipient: t,
    minNumItems: i,
    source: d.B5.USER_PROFILE
  }), C = (0, a.A)({
    displayProfile: m,
    location: c
  }), S = r.useMemo(() => [t.id], [t.id]), {
    recommendations: A
  } = (0, l.A)({
    guildId: (0, n.zf)(),
    numWishlistItems: Math.max(i, d.pl),
    location: c,
    applicationId: u.XR,
    userIds: S,
    includeWishlists: true
  }), b = r.useMemo(() => {
    var e;
    return (null != (e = null == _ ? true : _.items) ? e : []).filter(e => true !== e.isOwned && (0, o.$)(e)).length > 0 || C ? A : []
  }, [null == _ ? true : _.items, C, A]), {
    displayItems: T,
    hasMoreItems: j,
    totalWishlistItemCount: v,
    wishlistItemCountToBeDisplayed: O
  } = (0, d.mk)({
    wishlist: _,
    popularCollectiblesProducts: p,
    popularSocialLayerStorefrontItems: b,
    wishlistError: x,
    numItems: i
  });
  return {
    displayItems: T,
    hasMoreItems: j,
    totalWishlistItemCount: v,
    wishlistItemCountToBeDisplayed: O,
    fetchState: r.useMemo(() => g || h || I ? {
      status: "loading"
    } : null != x ? {
      status: "error",
      error: x
    } : {
      status: "success"
    }, [g, h, I, x]),
    defaultWishlistId: f,
    wishlist: _
  }
}