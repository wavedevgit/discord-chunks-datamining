/** Chunk was on 93886 **/
/** chunk id: 602733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  UD: () => I,
  ZL: () => y,
  kZ: () => E,
  lr: () => b,
  ny: () => S,
  zL: () => m
}), require("./388685.js"), require("./539854.js");
var r, Chunk647438 = require("./647438.js"),
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
let m = 6;
var b = ((r = {}).WISHLIST = "wishlist", r.POPULAR = "popular", r);

function E(e, t) {
  let n = (0, p.S)({
      location: "UserProfileModalV2"
    }),
    [r, l, a, s] = (0, o.Wu)([_.Z], () => null != e && n ? [_.Z.getWishlist(e), _.Z.isFetching(e), _.Z.getError(e), _.Z.getUpdatedAt(e)] : [null, false, true, true]),
    u = (0, o.e7)([d.Z], () => {
      var n;
      if (null != e && null != t) return null == (n = d.Z.getWishlistSettings(t, e)) ? true : n.updated_at
    });
  return (0, i.useEffect)(() => {
    null != e && !l && n && null == a && (null == r || null != u && s !== u) && f.Z.fetchWishlist(e, u)
  }, [e, r, l, n, u, s, a]), {
    wishlist: r,
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
    isFetching: r,
    error: p
  } = E(t), f = i.useMemo(() => null != n && n.items.filter(h.Q).length >= m, [n]), {
    shopBlocks: _,
    isFetchingShopHome: v,
    fetchShopHomeError: b
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
    popularProducts: i.useMemo(() => f || null == _ || v ? [] : function(e) {
      var t, n;
      let r = e.find(e => e.type === l.z.FEED);
      if (null == r) return [];
      let i = [];
      for (let e of null != (n = null == (t = r.sortedSkuIds) ? true : t[a.m.POPULAR]) ? n : r.rankedSkuIds) {
        if (i.length >= m) break;
        let t = s.Z.getProduct(e);
        null != t && i.push(t)
      }
      return i
    }(_), [f, _, v]),
    isFetchingWishlist: r,
    isFetchingShopHome: !f && v,
    isFetchingCategories: S,
    wishlistError: p,
    fetchShopHomeError: f ? true : b
  }
}

function I(e) {
  let {
    wishlist: t,
    defaultWishlistId: n,
    popularProducts: r,
    wishlistError: l,
    fetchShopHomeError: a
  } = e;
  return i.useMemo(() => {
    if (null == t || null == n || null != l || null != a) return {
      displayItems: [],
      wishlistLength: 0
    };
    let e = t.items.filter(h.Q),
      i = [],
      o = e.slice(0, m),
      s = o.length;
    if (i.push(...o.map(e => ({
        item: e,
        source: "wishlist"
      }))), i.length < m) {
      let e = new Set(o.map(e => e.skuId)),
        t = r.filter(t => !e.has(t.skuId));
      for (let e = 0; e < t.length && i.length < m; e++) {
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
        null !== n && i.push({
          item: n,
          source: "popular"
        })
      }
    }
    return {
      displayItems: i,
      wishlistLength: s
    }
  }, [t, n, l, r, a])
}