/** Chunk was on 93886 **/
/** chunk id: 602733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  UD: () => D,
  ZL: () => I,
  kZ: () => S,
  lr: () => E,
  ny: () => y,
  zL: () => b
}), require("./388685.js"), require("./539854.js");
var r, Chunk647438 = require("./647438.js"),
  Chunk685816 = require("./685816.js"),
  Chunk482820 = require("./482820.js"),
  Chunk442837 = require("./442837.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
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
var E = ((r = {}).WISHLIST = "wishlist", r.POPULAR = "popular", r);

function S(e, t) {
  let n = (0, f.S)({
      location: "UserProfileModalV2"
    }),
    [r, l, a, s] = (0, o.Wu)([h.Z], () => null != e && n ? [h.Z.getWishlist(e), h.Z.isFetching(e), h.Z.getError(e), h.Z.getUpdatedAt(e)] : [null, false, true, true]),
    c = (0, o.e7)([p.Z], () => {
      var n;
      if (null != e && null != t) return null == (n = p.Z.getWishlistSettings(t, e)) ? true : n.updated_at
    });
  return (0, i.useEffect)(() => {
    null != e && !l && n && null == a && (null == r || null != c && s !== c) && _.Z.fetchWishlist(e, c)
  }, [e, r, l, n, c, s, a]), {
    wishlist: r,
    isFetching: l,
    error: a
  }
}

function y(e, t) {
  return (0, o.e7)([h.Z], () => null != e && h.Z.hasSkuId(e, t))
}

function I(e) {
  let {
    defaultWishlistId: t
  } = (0, o.cj)([p.Z], () => ({
    defaultWishlistId: p.Z.getFirstWishlistId(e.id)
  })), {
    wishlist: n,
    isFetching: r,
    error: f
  } = S(t), _ = i.useMemo(() => null != n && n.items.filter(v.Q).length >= b, [n]), {
    shopBlocks: h,
    isFetchingShopHome: g,
    fetchShopHomeError: E
  } = (0, d.E)(m.AW.HOME, {
    includeBundles: true,
    includePopularPicks: true,
    includeDynamicBlocks: true
  }), {
    isFetchingCategories: y
  } = (0, u.ZP)();
  return {
    defaultWishlistId: t,
    wishlist: n,
    popularProducts: i.useMemo(() => _ || null == h || g ? [] : function(e) {
      var t, n;
      let r = e.find(e => e.type === l.z.FEED);
      if (null == r) return [];
      let i = [];
      for (let e of null != (n = null == (t = r.sortedSkuIds) ? true : t[a.m.POPULAR]) ? n : r.rankedSkuIds) {
        if (i.length >= b) break;
        let t = s.Z.getProduct(e);
        null == t || (0, c.x6)(t) || i.push(t)
      }
      return i
    }(h), [_, h, g]),
    isFetchingWishlist: r,
    isFetchingShopHome: !_ && g,
    isFetchingCategories: y,
    wishlistError: f,
    fetchShopHomeError: _ ? true : E
  }
}

function D(e) {
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
    let e = t.items.filter(v.Q),
      i = [],
      o = e.slice(0, b),
      s = o.length;
    if (i.push(...o.map(e => ({
        item: e,
        source: "wishlist"
      }))), i.length < b) {
      let e = new Set(o.map(e => e.skuId)),
        t = r.filter(t => !e.has(t.skuId));
      for (let e = 0; e < t.length && i.length < b; e++) {
        let n = function(e) {
          if (null == e.items || 0 === e.items.length) return null;
          let t = {
            sku_id: e.skuId,
            sku_name: e.name,
            sku_product_line: g.POd.COLLECTIBLES,
            collectibles_item: e.items[0]
          };
          return v.Z.fromServer(t)
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