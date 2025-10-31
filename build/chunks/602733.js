/** Chunk was on web.js **/
/** chunk id: 602733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UD: () => T,
  ZL: () => I,
  ao: () => S,
  kZ: () => g,
  lr: () => m,
  ny: () => E,
  zL: () => h
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk998030 = require("./998030.js"),
  Chunk621853 = require("./621853.js"),
  Chunk46841 = require("./46841.js"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js"),
  Chunk541699 = require("./541699.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js");
let h = 6;
var m = function(e) {
  return e.WISHLIST = "wishlist", e.POPULAR = "popular", e
}({});

function g(e, t) {
  let n = (0, c.S)({
      location: "UserProfileModalV2"
    }),
    [a, o, s, f] = (0, i.Wu)([d.Z], () => null != e && n ? [d.Z.getWishlist(e), d.Z.isFetching(e), d.Z.getError(e), d.Z.getUpdatedAt(e)] : [null, false, true, true]),
    _ = (0, i.e7)([l.Z], () => {
      var n;
      if (null != e && null != t) return null == (n = l.Z.getWishlistSettings(t, e)) ? true : n.updated_at
    });
  return (0, r.useEffect)(() => {
    !(null == e || d.Z.isFetching(e)) && n && null == s && (null == a || null != _ && f !== _) && u.Z.fetchWishlist(e, _)
  }, [e, a, n, _, f, s]), {
    wishlist: a,
    isFetching: o,
    error: s
  }
}

function E(e, t) {
  return (0, i.e7)([d.Z], () => null != e && d.Z.hasSkuId(e, t))
}

function b(e) {
  if (null == e.items || 0 === e.items.length) return null;
  let t = {
    sku_id: e.skuId,
    sku_name: e.name,
    sku_product_line: _.POd.COLLECTIBLES,
    collectibles_item: e.items[0]
  };
  return f.Z.fromServer(t)
}

function y(e) {
  let [t, n] = r.useState([]), [i, o] = r.useState(false);
  return r.useEffect(() => {
    let t = false;
    o(true);
    let r = p.gj.map(e => e);
    return (0, a._o)(e, r).then(e => {
      t || (n(r.filter(t => {
        var n;
        return (null == (n = e[t]) ? true : n.valid) === true
      })), o(false))
    }), () => {
      t = true
    }
  }, [e]), {
    validatedSkuIds: t,
    isValidating: i
  }
}

function O(e) {
  let t = e.slice(0, h),
    n = (0, i.e7)([o.Z], () => t.some(e => o.Z.isFetchingProduct(e)));
  return r.useEffect(() => {
    if (0 !== t.length)
      for (let e of t) {
        let t = o.Z.getProduct(e),
          n = o.Z.isFetchingProduct(e);
        null != t || n || (0, a.jr)(e)
      }
  }, [t]), {
    isFetching: n
  }
}

function v() {
  let e = [];
  for (let t of Chunk215023.gj) {
    let n = Chunk597688.Z.getProduct(exports);
    null != require && module.push(require)
  }
  return module
}

function I(e) {
  let {
    defaultWishlistId: t
  } = (0, i.cj)([l.Z], () => ({
    defaultWishlistId: l.Z.getFirstWishlistId(e.id)
  })), {
    wishlist: n,
    isFetching: a,
    error: o
  } = g(t), s = r.useMemo(() => null != n && n.items.filter(e => true !== e.isOwned).length >= h, [n]), {
    validatedSkuIds: c,
    isValidating: u
  } = y(e.id), {
    isFetching: d
  } = O(c);
  return {
    defaultWishlistId: t,
    wishlist: n,
    popularCollectiblesProducts: s ? [] : v(),
    isFetchingWishlist: a,
    isValidatingPopularProducts: !s && u,
    isFetchingPopularProducts: !s && d,
    wishlistError: o
  }
}

function T(e) {
  let {
    wishlist: t,
    popularCollectiblesProducts: n,
    wishlistError: i
  } = e;
  return r.useMemo(() => {
    var e, r;
    if (null != i) return {
      displayItems: [],
      wishlistItemCountToBeDisplayed: 0,
      hasMoreItems: false,
      totalWishlistItemCount: 0
    };
    let a = (null != (e = null == t ? true : t.items) ? e : []).filter(e => true !== e.isOwned),
      o = a.slice(0, h),
      s = [];
    if (s.push(...o.map(e => ({
        item: e,
        source: "wishlist"
      }))), s.length < h) {
      let e = new Set(o.map(e => e.skuId)),
        t = n.filter(t => !e.has(t.skuId));
      for (let e = 0; e < t.length && s.length < h; e++) {
        let n = b(t[e]);
        null !== n && s.push({
          item: n,
          source: "popular"
        })
      }
    }
    return {
      displayItems: s,
      wishlistItemCountToBeDisplayed: o.length,
      hasMoreItems: a.length > h,
      totalWishlistItemCount: null != (r = null == t ? true : t.items.length) ? r : 0
    }
  }, [t, i, n])
}

function S(e) {
  let {
    location: t,
    isGift: n,
    giftRecipient: a
  } = e, o = (0, s.yc)({
    location: t
  }), c = (0, s.hS)({
    location: t
  }), u = (0, i.e7)([l.Z], () => (null == a ? true : a.id) == null ? null : l.Z.getFirstWishlistId(a.id)), {
    wishlist: d
  } = g(o && null != u && n && null != a ? u : null, null == a ? true : a.id);
  return r.useMemo(() => {
    var e;
    returntrue === n && null != a && !!o && ((null != (e = null == d ? true : d.items.filter(e => true !== e.isOwned)) ? e : []).length > 0 || c)
  }, [n, a, o, d, c])
}