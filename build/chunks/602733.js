/** Chunk was on web.js **/
/** chunk id: 602733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EU: () => O,
  UD: () => R,
  ZL: () => P,
  ao: () => w,
  kZ: () => S,
  lr: () => v,
  ny: () => I,
  p2: () => D,
  rq: () => y,
  zL: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk998030 = require("./998030.js"),
  Chunk621853 = require("./621853.js"),
  Chunk46841 = require("./46841.js"),
  Chunk484459 = require("./484459.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js"),
  Chunk541699 = require("./541699.js"),
  Chunk321947 = require("./321947.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js");
let b = 6,
  y = 350,
  O = 16;
var v = function(e) {
  return e.WISHLIST = "wishlist", e.POPULAR = "popular", e
}({});

function S(e, t) {
  let n = (0, c.S)({
      location: "UserProfileModalV2"
    }),
    [a, o, s, u] = (0, i.Wu)([_.Z], () => null != e && n ? [_.Z.getWishlist(e), _.Z.isFetching(e), _.Z.getError(e), _.Z.getUpdatedAt(e)] : [null, false, true, true]),
    d = (0, i.e7)([l.Z], () => {
      var n;
      if (null != e && null != t) return null == (n = l.Z.getWishlistSettings(t, e)) ? true : n.updated_at
    });
  return (0, r.useEffect)(() => {
    !(null == e || _.Z.isFetching(e)) && n && null == s && (null == a || null != d && u !== d) && p.Z.fetchWishlist(e, d)
  }, [e, a, n, d, u, s]), {
    wishlist: a,
    isFetching: o,
    error: s
  }
}

function I(e, t) {
  return (0, i.e7)([_.Z], () => null != e && _.Z.hasSkuId(e, t))
}

function T(e) {
  if (null == e.items || 0 === e.items.length) return null;
  let t = {
    sku_id: e.skuId,
    sku_name: e.name,
    sku_product_line: g.POd.COLLECTIBLES,
    collectibles_item: e.items[0]
  };
  return m.Z.fromServer(t)
}

function A(e) {
  let [t, n] = r.useState([]), [i, o] = r.useState(false);
  return r.useEffect(() => {
    let t = false;
    o(true);
    let r = E.gj.map(e => e);
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

function C(e) {
  let t = e.slice(0, b),
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

function N() {
  let e = [];
  for (let t of Chunk215023.gj) {
    let n = Chunk597688.Z.getProduct(exports);
    null != require && module.push(require)
  }
  return module
}

function P(e) {
  let {
    defaultWishlistId: t
  } = (0, i.cj)([l.Z], () => ({
    defaultWishlistId: l.Z.getFirstWishlistId(e.id)
  })), {
    wishlist: n,
    isFetching: a,
    error: o
  } = S(t), s = r.useMemo(() => null != n && n.items.filter(e => true !== e.isOwned).length >= b, [n]), {
    validatedSkuIds: c,
    isValidating: u
  } = A(e.id), {
    isFetching: d
  } = C(c);
  return {
    defaultWishlistId: t,
    wishlist: n,
    popularCollectiblesProducts: s ? [] : N(),
    isFetchingWishlist: a,
    isValidatingPopularProducts: !s && u,
    isFetchingPopularProducts: !s && d,
    wishlistError: o
  }
}

function R(e) {
  let {
    wishlist: t,
    popularCollectiblesProducts: n,
    popularSocialLayerStorefrontItems: i,
    wishlistError: a
  } = e;
  return r.useMemo(() => {
    var e, r;
    if (null != a) return {
      displayItems: [],
      wishlistItemCountToBeDisplayed: 0,
      hasMoreItems: false,
      totalWishlistItemCount: 0
    };
    let o = (null != (e = null == t ? true : t.items) ? e : []).filter(e => true !== e.isOwned),
      s = o.slice(0, b),
      l = s.some(e => (0, h.F)(e)),
      c = [];
    if (c.push(...s.map(e => ({
        item: e,
        source: "wishlist"
      }))), c.length < b) {
      let e = new Set(s.map(e => e.skuId));
      if (l) {
        let t = i.filter(t => !e.has(t.skuId));
        for (let e = 0; e < t.length && c.length < b; e++) c.push({
          item: t[e],
          source: "popular"
        })
      }
      let t = n.filter(t => !e.has(t.skuId));
      for (let e = 0; e < t.length && c.length < b; e++) {
        let n = T(t[e]);
        null !== n && c.push({
          item: n,
          source: "popular"
        })
      }
    }
    return {
      displayItems: c,
      wishlistItemCountToBeDisplayed: s.length,
      hasMoreItems: o.length > b,
      totalWishlistItemCount: null != (r = null == t ? true : t.items.length) ? r : 0
    }
  }, [a, null == t ? true : t.items, n, i])
}

function w(e) {
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
  } = S(o && null != u && n && null != a ? u : null, null == a ? true : a.id);
  return r.useMemo(() => {
    var e;
    returntrue === n && null != a && !!o && ((null != (e = null == d ? true : d.items.filter(e => true !== e.isOwned)) ? e : []).length > 0 || c)
  }, [n, a, o, d, c])
}

function D() {
  return x((0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getId()))
}

function x(e) {
  let t = (0, i.e7)([f.default], () => f.default.getUser(e)),
    {
      userProfile: n,
      wishlistId: a
    } = (0, i.cj)([l.Z], () => ({
      userProfile: null != e ? l.Z.getUserProfile(e) : null,
      wishlistId: null != e ? l.Z.getFirstWishlistId(e) : null
    }), [e]);
  return r.useEffect(() => {
    null != e && null == n && null != t && null == n && (0, u.Z)(t.id, t.getAvatarURL(null, 80))
  }, [t, e, n]), S(a, e)
}