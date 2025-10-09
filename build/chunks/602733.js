/** Chunk was on 93886 **/
/** chunk id: 602733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  UD: () => I,
  ZL: () => y,
  kZ: () => E,
  lr: () => m,
  ny: () => S,
  zL: () => b
}), require("./388685.js"), require("./539854.js");
var i, Chunk647438 = require("./647438.js"),
  Chunk685816 = require("./685816.js"),
  Chunk482820 = require("./482820.js"),
  Chunk442837 = require("./442837.js"),
  Chunk597688 = require("./597688.js"),
  Chunk223143 = require("./223143.js"),
  Chunk364111 = require("./364111.js"),
  Chunk621853 = require("./621853.js"),
  Chunk46841 = require("./46841.js"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js"),
  Chunk541699 = require("./541699.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js");
let b = 6;
var m = ((i = {}).WISHLIST = "wishlist", i.POPULAR = "popular", i);

function E(e, t) {
  let n = (0, p.S)({
      location: "UserProfileModalV2"
    }),
    [i, l, a, s] = (0, o.Wu)([_.Z], () => null != e && n ? [_.Z.getWishlist(e), _.Z.isFetching(e), _.Z.getError(e), _.Z.getUpdatedAt(e)] : [null, false, true, true]),
    u = (0, o.e7)([d.Z], () => {
      var n;
      if (null != e && null != t) return null == (n = d.Z.getWishlistSettings(t, e)) ? true : n.updated_at
    });
  return (0, r.useEffect)(() => {
    null != e && !l && n && null == a && (null == i || null != u && s !== u) && f.Z.fetchWishlist(e, u)
  }, [e, i, l, n, u, s, a]), {
    wishlist: i,
    isFetching: l,
    error: a
  }
}

function S(e, t) {
  return (0, o.e7)([_.Z], () => null != e && _.Z.hasSkuId(e, t))
}

function y(e) {
  let {
    defaultWishlistId: t
  } = (0, o.cj)([d.Z], () => ({
    defaultWishlistId: d.Z.getFirstWishlistId(e.id)
  })), {
    wishlist: n,
    isFetching: i,
    error: p
  } = E(t), f = r.useMemo(() => null != n && n.items.filter(h.Q).length >= b, [n]), {
    shopBlocks: _,
    isFetchingShopHome: v,
    fetchShopHomeError: m
  } = (0, c.E)(g.AW.HOME, {
    includeBundles: true,
    includePopularPicks: true,
    includeDynamicBlocks: true
  }), {
    isFetchingCategories: S
  } = (0, u.ZP)();
  return {
    defaultWishlistId: t,
    wishlist: n,
    popularProducts: r.useMemo(() => f || null == _ || v ? [] : function(e) {
      var t, n;
      let i = e.find(e => e.type === l.z.FEED);
      if (null == i) return [];
      let r = [];
      for (let e of null != (n = null == (t = i.sortedSkuIds) ? true : t[a.m.POPULAR]) ? n : i.rankedSkuIds) {
        if (r.length >= b) break;
        let t = s.Z.getProduct(e);
        null != t && r.push(t)
      }
      return r
    }(_), [f, _, v]),
    isFetchingWishlist: i,
    isFetchingShopHome: !f && v,
    isFetchingCategories: S,
    wishlistError: p,
    fetchShopHomeError: f ? true : m
  }
}

function I(e) {
  let {
    wishlist: t,
    defaultWishlistId: n,
    popularProducts: i,
    wishlistError: l,
    fetchShopHomeError: a
  } = e;
  return r.useMemo(() => {
    if (null == t || null == n || null != l || null != a) return {
      displayItems: [],
      wishlistLength: 0
    };
    let e = t.items.filter(h.Q),
      r = [],
      o = e.slice(0, b),
      s = o.length;
    if (r.push(...o.map(e => ({
        item: e,
        source: "wishlist"
      }))), r.length < b) {
      let e = new Set(o.map(e => e.skuId)),
        t = i.filter(t => !e.has(t.skuId));
      for (let e = 0; e < t.length && r.length < b; e++) {
        let n = function(e) {
          if (null == e.items || 0 === e.items.length) return null;
          let t = {
            sku_id: e.skuId,
            sku_name: e.name,
            sku_product_line: v.POd.COLLECTIBLES,
            collectibles_item: e.items[0]
          };
          return h.Z.fromServer(t)
        }(t[e]);
        null !== n && r.push({
          item: n,
          source: "popular"
        })
      }
    }
    return {
      displayItems: r,
      wishlistLength: s
    }
  }, [t, n, l, i, a])
}