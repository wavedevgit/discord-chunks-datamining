/** Chunk was on web.js **/
/** chunk id: 176879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QX: () => h,
  ZP: () => m,
  fA: () => _
});
var Chunk473749 = require("./473749.js"),
  Chunk164670 = require("./164670.js"),
  Chunk765907 = require("./765907.js"),
  Chunk927613 = require("./927613.js"),
  Chunk125742 = require("./125742.js"),
  Chunk896010 = require("./896010.js"),
  Chunk687158 = require("./687158.js"),
  Chunk321947 = require("./321947.js"),
  Chunk602733 = require("./602733.js"),
  Chunk582113 = require("./582113.js"),
  Chunk388032 = require("./388032.jsx");
let _ = 4;

function m(e) {
  let {
    user: t,
    numItems: n = d.zL,
    location: p,
    source: _
  } = e, m = (0, c.ZP)(t.id), h = (0, s.R)({
    location: p
  }), {
    showRecommendations: g
  } = (0, l.E)({
    location: p
  }), E = r.useMemo(() => _ === d.bd.POPOUT ? g : _ !== d.bd.DM_SIDE_PANEL || h, [_, h, g]), b = r.useMemo(() => _ === d.bd.POPOUT ? d.Yw.POPOUT : d.Yw.USER_PROFILE, [_]), {
    defaultWishlistId: y,
    wishlist: O,
    popularCollectiblesProducts: v,
    isFetchingWishlist: S,
    isValidatingPopularProducts: I,
    isFetchingPopularProducts: T,
    wishlistError: C
  } = (0, d.ZL)({
    giftRecipient: t,
    minNumItems: E ? n : 0,
    source: b
  }), {
    isDisplayProfileSocialLayerStorefrontEligible: A
  } = (0, a.Z)({
    displayProfile: m,
    location: p
  }), N = r.useMemo(() => [t.id], [t.id]), {
    recommendations: P
  } = (0, o.Z)({
    guildId: (0, i.ac)(),
    numWishlistItems: E ? Math.max(n, d.zL) : 0,
    location: p,
    applicationId: f.t9,
    userIds: N,
    includeWishlists: true
  }), R = r.useMemo(() => {
    var e;
    return E && ((null != (e = null == O ? true : O.items) ? e : []).filter(e => true !== e.isOwned && (0, u.F)(e)).length > 0 || A) ? P : []
  }, [null == O ? true : O.items, A, E, P]), {
    displayItems: w,
    hasMoreItems: D,
    totalWishlistItemCount: x,
    wishlistItemCountToBeDisplayed: L
  } = (0, d.UD)({
    wishlist: O,
    popularCollectiblesProducts: v,
    popularSocialLayerStorefrontItems: R,
    wishlistError: C,
    numItems: n
  });
  return {
    displayItems: w,
    hasMoreItems: D,
    totalWishlistItemCount: x,
    wishlistItemCountToBeDisplayed: L,
    fetchState: r.useMemo(() => S || I || T ? {
      status: "loading"
    } : null != C ? {
      status: "error",
      error: C
    } : {
      status: "success"
    }, [S, I, T, C]),
    defaultWishlistId: y,
    wishlist: O
  }
}

function h(e) {
  let {
    user: t,
    numItems: n = d.zL,
    source: i,
    location: a
  } = e, {
    displayItems: o,
    defaultWishlistId: s,
    wishlist: l
  } = m({
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
    } : e.length > 1 && e.length < n && o.length > e.length ? {
      displayedWishlistItems: o,
      title: p.intl.string(p.t.BCi1gT)
    } : {
      displayedWishlistItems: e.map(e => ({
        item: e,
        source: d.lr.WISHLIST
      })),
      title: p.intl.string(p.t["7lZ31J"])
    }
  }, [o, l, n]);
  return {
    defaultWishlistId: s,
    displayedWishlistItems: c,
    title: u
  }
}