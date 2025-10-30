/** Chunk was on web.js **/
/** chunk id: 602733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UD: () => N,
  ZL: () => C,
  ao: () => R,
  kZ: () => I,
  lr: () => v,
  ny: () => T,
  zL: () => y
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk685816 = require("./685816.js"),
  Chunk482820 = require("./482820.js"),
  Chunk442837 = require("./442837.js"),
  Chunk335131 = require("./335131.js"),
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
let y = 6,
  O = 50;
var v = function(e) {
  return e.WISHLIST = "wishlist", e.POPULAR = "popular", e
}({});

function I(e, t) {
  let n = (0, p.S)({
      location: "UserProfileModalV2"
    }),
    [i, a, s, l] = (0, o.Wu)([m.Z], () => null != e && n ? [m.Z.getWishlist(e), m.Z.isFetching(e), m.Z.getError(e), m.Z.getUpdatedAt(e)] : [null, false, true, true]),
    c = (0, o.e7)([_.Z], () => {
      var n;
      if (null != e && null != t) return null == (n = _.Z.getWishlistSettings(t, e)) ? true : n.updated_at
    });
  return (0, r.useEffect)(() => {
    null != e && !a && n && null == s && (null == i || null != c && l !== c) && h.Z.fetchWishlist(e, c)
  }, [e, i, a, n, c, l, s]), {
    wishlist: i,
    isFetching: a,
    error: s
  }
}

function T(e, t) {
  return (0, o.e7)([m.Z], () => null != e && m.Z.hasSkuId(e, t))
}

function S(e) {
  if (null == e.items || 0 === e.items.length) return null;
  let t = {
    sku_id: e.skuId,
    sku_name: e.name,
    sku_product_line: E.POd.COLLECTIBLES,
    collectibles_item: e.items[0]
  };
  return g.Z.fromServer(t)
}

function A(e) {
  var t, n;
  let r = e.find(e => e.type === i.z.FEED);
  if (null == r) return [];
  let o = [];
  for (let e of null != (n = null == (t = r.sortedSkuIds) ? true : t[a.m.POPULAR]) ? n : r.rankedSkuIds) {
    if (o.length >= O) break;
    let t = l.Z.getProduct(e);
    null == t || (0, c.x6)(t) || o.push(t)
  }
  return o
}

function C(e) {
  let {
    defaultWishlistId: t
  } = (0, o.cj)([_.Z], () => ({
    defaultWishlistId: _.Z.getFirstWishlistId(e.id)
  })), {
    wishlist: n,
    isFetching: i,
    error: a
  } = I(t), l = r.useMemo(() => null != n && n.items.filter(e => true !== e.isOwned).length >= y, [n]), {
    shopBlocks: c,
    isFetchingShopHome: f,
    fetchShopHomeError: p
  } = (0, d.E)(b.AW.HOME, {
    includeBundles: true,
    includePopularPicks: true,
    includeDynamicBlocks: true
  }), {
    isFetchingCategories: h
  } = (0, u.ZP)(), m = r.useMemo(() => l || null == c || f ? [] : A(c), [l, c, f]), [g, E] = r.useState([]), [O, v] = r.useState(false);
  return r.useEffect(() => {
    if (0 === m.length) {
      E([]), v(false);
      return
    }
    let t = false;
    v(true);
    let n = m.map(e => e.skuId);
    return (0, s._o)(e.id, n).then(e => {
      t || (E(m.filter(t => {
        var n;
        return (null == (n = e[t.skuId]) ? true : n.valid) === true
      })), v(false))
    }), () => {
      t = true
    }
  }, [m, e.id]), {
    defaultWishlistId: t,
    wishlist: n,
    popularCollectiblesProducts: g,
    isFetchingWishlist: i,
    isFetchingShopHome: !l && f,
    isFetchingCategories: h,
    isValidatingPopularProducts: !l && O,
    wishlistError: a,
    fetchShopHomeError: l ? true : p
  }
}

function N(e) {
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
      wishlistItemCountToBeDisplayed: 0,
      hasMoreItems: false,
      totalWishlistItemCount: 0
    };
    let o = (null != (e = null == t ? true : t.items) ? e : []).filter(e => true !== e.isOwned),
      s = o.slice(0, y),
      l = [];
    if (l.push(...s.map(e => ({
        item: e,
        source: "wishlist"
      }))), l.length < y) {
      let e = new Set(s.map(e => e.skuId)),
        t = n.filter(t => !e.has(t.skuId));
      for (let e = 0; e < t.length && l.length < y; e++) {
        let n = S(t[e]);
        null !== n && l.push({
          item: n,
          source: "popular"
        })
      }
    }
    return {
      displayItems: l,
      wishlistItemCountToBeDisplayed: s.length,
      hasMoreItems: o.length > y,
      totalWishlistItemCount: null != (r = null == t ? true : t.items.length) ? r : 0
    }
  }, [t, i, n, a])
}

function R(e) {
  let {
    location: t,
    isGift: n,
    giftRecipient: i
  } = e, a = (0, f.yc)({
    location: t
  }), s = (0, f.hS)({
    location: t
  }), l = (0, o.e7)([_.Z], () => (null == i ? true : i.id) == null ? null : _.Z.getFirstWishlistId(i.id)), {
    wishlist: c
  } = I(a && null != l && n && null != i ? l : null, null == i ? true : i.id);
  return r.useMemo(() => {
    var e;
    returntrue === n && null != i && !!a && ((null != (e = null == c ? true : c.items.filter(e => true !== e.isOwned)) ? e : []).length > 0 || s)
  }, [n, i, a, c, s])
}