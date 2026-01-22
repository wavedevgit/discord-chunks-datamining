/** Chunk was on web.js **/
/** chunk id: 996353, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => h,
  aO: () => m,
  h: () => _
});
var Chunk64700 = require("./64700.js"),
  Chunk871123 = require("./871123.js"),
  Chunk20424 = require("./20424.js"),
  Chunk592356 = require("./592356.js"),
  Chunk166492 = require("./166492.js"),
  Chunk970354 = require("./970354.js"),
  Chunk950191 = require("./950191.js"),
  Chunk721932 = require("./721932.js"),
  Chunk594832 = require("./594832.js"),
  Chunk188275 = require("./188275.js"),
  Chunk985018 = require("./985018.jsx");
let _ = 4;

function h(e) {
  let {
    user: t,
    numItems: n = d.pl,
    location: p,
    source: _
  } = e, h = (0, c.Ay)(t.id), m = (0, o.a)({
    location: p
  }), {
    showRecommendations: g
  } = (0, l.u)({
    location: p
  }), E = r.useMemo(() => _ === d.mQ.POPOUT ? g : _ !== d.mQ.DM_SIDE_PANEL || m, [_, m, g]), b = r.useMemo(() => _ === d.mQ.POPOUT ? d.B5.POPOUT : d.B5.USER_PROFILE, [_]), {
    defaultWishlistId: y,
    wishlist: O,
    popularCollectiblesProducts: A,
    isFetchingWishlist: v,
    isValidatingPopularProducts: S,
    isFetchingPopularProducts: I,
    wishlistError: T
  } = (0, d.eT)({
    giftRecipient: t,
    minNumItems: E ? n : 0,
    source: b
  }), C = (0, a.A)({
    displayProfile: h,
    location: p
  }), N = r.useMemo(() => [t.id], [t.id]), {
    recommendations: R
  } = (0, s.A)({
    guildId: (0, i.zf)(),
    numWishlistItems: E ? Math.max(n, d.pl) : 0,
    location: p,
    applicationId: f.XR,
    userIds: N,
    includeWishlists: true
  }), w = r.useMemo(() => {
    var e;
    return E && ((null != (e = null == O ? true : O.items) ? e : []).filter(e => true !== e.isOwned && (0, u.$)(e)).length > 0 || C) ? R : []
  }, [null == O ? true : O.items, C, E, R]), {
    displayItems: P,
    hasMoreItems: D,
    totalWishlistItemCount: x,
    wishlistItemCountToBeDisplayed: L
  } = (0, d.mk)({
    wishlist: O,
    popularCollectiblesProducts: A,
    popularSocialLayerStorefrontItems: w,
    wishlistError: T,
    numItems: n
  });
  return {
    displayItems: P,
    hasMoreItems: D,
    totalWishlistItemCount: x,
    wishlistItemCountToBeDisplayed: L,
    fetchState: r.useMemo(() => v || S || I ? {
      status: "loading"
    } : null != T ? {
      status: "error",
      error: T
    } : {
      status: "success"
    }, [v, S, I, T]),
    defaultWishlistId: y,
    wishlist: O
  }
}

function m(e) {
  let {
    user: t,
    numItems: n = d.pl,
    source: i,
    location: a
  } = e, {
    displayItems: s,
    defaultWishlistId: o,
    wishlist: l
  } = h({
    user: t,
    numItems: n,
    source: i,
    location: a
  }), {
    displayedWishlistItems: c,
    title: u
  } = r.useMemo(() => {
    let e = null == l ? true : l.items.filter(e => true !== e.isOwned);
    return null == e || 0 === e.length ? {
      displayedWishlistItems: null,
      title: null
    } : e.length > 1 && e.length < n && s.length > e.length ? {
      displayedWishlistItems: s,
      title: p.intl.string(p.t.BCi1gT)
    } : {
      displayedWishlistItems: e.map(e => ({
        item: e,
        source: d.uS.WISHLIST
      })),
      title: p.intl.string(p.t["7lZ31J"])
    }
  }, [s, l, n]);
  return {
    defaultWishlistId: o,
    displayedWishlistItems: c,
    title: u
  }
}