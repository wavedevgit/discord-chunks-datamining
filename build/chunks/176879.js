/** Chunk was on web.js **/
/** chunk id: 176879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QX: () => _,
  ZP: () => p,
  fA: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk164670 = require("./164670.js"),
  Chunk765907 = require("./765907.js"),
  Chunk81939 = require("./81939.js"),
  Chunk125742 = require("./125742.js"),
  Chunk687158 = require("./687158.js"),
  Chunk321947 = require("./321947.js"),
  Chunk602733 = require("./602733.js"),
  Chunk388032 = require("./388032.jsx");
let f = 4;

function p(e) {
  let {
    user: t,
    numItems: n = u.zL,
    location: d,
    source: f
  } = e, p = (0, l.ZP)(t.id), {
    enabledInPopout: _,
    enabledInSidebar: m
  } = (0, s.u)({
    location: d
  }), h = r.useMemo(() => f === u.bd.POPOUT ? _ : f !== u.bd.DM_SIDE_PANEL || m, [f, _, m]), g = r.useMemo(() => f === u.bd.POPOUT ? u.Yw.POPOUT : u.Yw.USER_PROFILE, [f]), {
    defaultWishlistId: E,
    wishlist: b,
    popularCollectiblesProducts: y,
    isFetchingWishlist: O,
    isValidatingPopularProducts: v,
    isFetchingPopularProducts: S,
    wishlistError: I
  } = (0, u.ZL)({
    giftRecipient: t,
    minNumItems: h ? n : 0,
    source: g
  }), {
    isDisplayProfileSocialLayerStorefrontEligible: T
  } = (0, a.Z)({
    displayProfile: p,
    location: d
  }), {
    wishlistItems: C
  } = (0, o.Z)({
    guildId: (0, i.ac)(),
    numWishlistItems: n
  }), A = r.useMemo(() => {
    var e;
    return h && ((null != (e = null == b ? true : b.items) ? e : []).filter(e => true !== e.isOwned && (0, c.F)(e)).length > 0 || T) ? C : []
  }, [null == b ? true : b.items, T, h, C]), {
    displayItems: N,
    hasMoreItems: P,
    totalWishlistItemCount: R,
    wishlistItemCountToBeDisplayed: w
  } = (0, u.UD)({
    wishlist: b,
    popularCollectiblesProducts: y,
    popularSocialLayerStorefrontItems: A,
    wishlistError: I,
    numItems: n
  });
  return {
    displayItems: N,
    hasMoreItems: P,
    totalWishlistItemCount: R,
    wishlistItemCountToBeDisplayed: w,
    fetchState: r.useMemo(() => O || v || S ? {
      status: "loading"
    } : null != I ? {
      status: "error",
      error: I
    } : {
      status: "success"
    }, [O, v, S, I]),
    defaultWishlistId: E,
    wishlist: b
  }
}

function _(e) {
  let {
    user: t,
    numItems: n = u.zL,
    source: i,
    location: a
  } = e, {
    displayItems: o,
    defaultWishlistId: s,
    wishlist: l,
    hasMoreItems: c,
    totalWishlistItemCount: f,
    wishlistItemCountToBeDisplayed: _,
    fetchState: m
  } = p({
    user: t,
    numItems: n,
    source: i,
    location: a
  }), {
    displayedWishlistItems: h,
    title: g
  } = r.useMemo(() => {
    let e = null == l ? true : l.items.filter(e => true !== e.isOwned);
    return null == e || 0 === e.length ? {
      displayedWishlistItems: null,
      title: null
    } : e.length > 1 && e.length < n && o.length > e.length ? {
      displayedWishlistItems: o.map(e => e.item),
      title: d.intl.string(d.t.BCi1gT)
    } : {
      displayedWishlistItems: e,
      title: d.intl.string(d.t["7lZ31J"])
    }
  }, [o, l, n]);
  return {
    displayItems: o,
    hasMoreItems: c,
    totalWishlistItemCount: f,
    wishlistItemCountToBeDisplayed: _,
    fetchState: m,
    defaultWishlistId: s,
    wishlist: l,
    displayedWishlistItems: h,
    title: g
  }
}