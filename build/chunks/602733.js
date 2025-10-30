/** Chunk was on web.js **/
/** chunk id: 602733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UD: () => A,
  ZL: () => S,
  ao: () => C,
  kZ: () => O,
  lr: () => y,
  ny: () => v,
  zL: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk685816 = require("./685816.js"),
  Chunk482820 = require("./482820.js"),
  Chunk442837 = require("./442837.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk223143 = require("./223143.js"),
  Chunk364111 = require("./364111.js"),
  Chunk998030 = require("./998030.js"),
  Chunk621853 = require("./621853.js"),
  Chunk46841 = require("./46841.js"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js"),
  Chunk541699 = require("./541699.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js");
let b = 6;
var y = function(e) {
  return e.WISHLIST = "wishlist", e.POPULAR = "popular", e
}({});

function O(e, t) {
  let n = (0, _.S)({
      location: "UserProfileModalV2"
    }),
    [i, a, s, l] = (0, o.Wu)([h.Z], () => null != e && n ? [h.Z.getWishlist(e), h.Z.isFetching(e), h.Z.getError(e), h.Z.getUpdatedAt(e)] : [null, false, true, true]),
    c = (0, o.e7)([f.Z], () => {
      var n;
      if (null != e && null != t) return null == (n = f.Z.getWishlistSettings(t, e)) ? true : n.updated_at
    });
  return (0, r.useEffect)(() => {
    null != e && !a && n && null == s && (null == i || null != c && l !== c) && p.Z.fetchWishlist(e, c)
  }, [e, i, a, n, c, l, s]), {
    wishlist: i,
    isFetching: a,
    error: s
  }
}

function v(e, t) {
  return (0, o.e7)([h.Z], () => null != e && h.Z.hasSkuId(e, t))
}

function I(e) {
  if (null == e.items || 0 === e.items.length) return null;
  let t = {
    sku_id: e.skuId,
    sku_name: e.name,
    sku_product_line: g.POd.COLLECTIBLES,
    collectibles_item: e.items[0]
  };
  return m.Z.fromServer(t)
}

function T(e) {
  var t, n;
  let r = e.find(e => e.type === i.z.FEED);
  if (null == r) return [];
  let o = [];
  for (let e of null != (n = null == (t = r.sortedSkuIds) ? true : t[a.m.POPULAR]) ? n : r.rankedSkuIds) {
    if (o.length >= b) break;
    let t = s.Z.getProduct(e);
    null == t || (0, l.x6)(t) || o.push(t)
  }
  return o
}

function S(e) {
  let {
    defaultWishlistId: t
  } = (0, o.cj)([f.Z], () => ({
    defaultWishlistId: f.Z.getFirstWishlistId(e.id)
  })), {
    wishlist: n,
    isFetching: i,
    error: a
  } = O(t), s = r.useMemo(() => null != n && n.items.filter(e => true !== e.isOwned).length >= b, [n]), {
    shopBlocks: l,
    isFetchingShopHome: d,
    fetchShopHomeError: _
  } = (0, u.E)(E.AW.HOME, {
    includeBundles: true,
    includePopularPicks: true,
    includeDynamicBlocks: true
  }), {
    isFetchingCategories: p
  } = (0, c.ZP)();
  return {
    defaultWishlistId: t,
    wishlist: n,
    popularCollectiblesProducts: r.useMemo(() => s || null == l || d ? [] : T(l), [s, l, d]),
    isFetchingWishlist: i,
    isFetchingShopHome: !s && d,
    isFetchingCategories: p,
    wishlistError: a,
    fetchShopHomeError: s ? true : _
  }
}

function A(e) {
  let {
    wishlist: t,
    popularCollectiblesProducts: n,
    wishlistError: i,
    fetchShopHomeError: a
  } = e;
  return r.useMemo(() => {
    var e, r;
    if (null != i || null != a) return {
      displayItems: [],
      displayItemsFromWishlistCount: 0,
      hasMoreItems: false,
      totalWishlistItemCount: 0
    };
    let o = (null != (e = null == t ? true : t.items) ? e : []).filter(e => true !== e.isOwned),
      s = o.slice(0, b),
      l = [];
    if (l.push(...s.map(e => ({
        item: e,
        source: "wishlist"
      }))), l.length < b) {
      let e = new Set(s.map(e => e.skuId)),
        t = n.filter(t => !e.has(t.skuId));
      for (let e = 0; e < t.length && l.length < b; e++) {
        let n = I(t[e]);
        null !== n && l.push({
          item: n,
          source: "popular"
        })
      }
    }
    return {
      displayItems: l,
      displayItemsFromWishlistCount: s.length,
      hasMoreItems: o.length > b,
      totalWishlistItemCount: null != (r = null == t ? true : t.items.length) ? r : 0
    }
  }, [t, i, n, a])
}

function C(e) {
  let {
    location: t,
    isGift: n,
    giftRecipient: i
  } = e, a = (0, d.yc)({
    location: t
  }), s = (0, d.hS)({
    location: t
  }), l = (0, o.e7)([f.Z], () => (null == i ? true : i.id) == null ? null : f.Z.getFirstWishlistId(i.id)), {
    wishlist: c
  } = O(a && null != l && n && null != i ? l : null, null == i ? true : i.id);
  return r.useMemo(() => {
    var e;
    returntrue === n && null != i && !!a && ((null != (e = null == c ? true : c.items.filter(e => true !== e.isOwned)) ? e : []).length > 0 || s)
  }, [n, i, a, c, s])
}