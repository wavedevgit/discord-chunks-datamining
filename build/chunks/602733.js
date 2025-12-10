/** Chunk was on web.js **/
/** chunk id: 602733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EU: () => O,
  UD: () => R,
  ZL: () => P,
  ao: () => D,
  kZ: () => S,
  lr: () => v,
  ny: () => I,
  p2: () => w,
  rq: () => y,
  zL: () => b
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk998030 = require("./998030.js"),
  Chunk765907 = require("./765907.js"),
  Chunk621853 = require("./621853.js"),
  Chunk46841 = require("./46841.js"),
  Chunk484459 = require("./484459.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk277511 = require("./277511.js"),
  Chunk607550 = require("./607550.js"),
  Chunk541699 = require("./541699.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js");
let b = 6,
  y = 350,
  O = 16;
var v = function(e) {
  return e.WISHLIST = "wishlist", e.POPULAR = "popular", e
}({});

function S(e, t) {
  let n = (0, u.S)({
      location: "UserProfileModalV2"
    }),
    [a, o, s, l] = (0, i.Wu)([m.Z], () => null != e && n ? [m.Z.getWishlist(e), m.Z.isFetching(e), m.Z.getError(e), m.Z.getUpdatedAt(e)] : [null, false, true, true]),
    d = (0, i.e7)([c.Z], () => {
      var n;
      if (null != e && null != t) return null == (n = c.Z.getWishlistSettings(t, e)) ? true : n.updated_at
    });
  return (0, r.useEffect)(() => {
    !(null == e || m.Z.isFetching(e)) && n && null == s && (null == a || null != d && l !== d) && _.Z.fetchWishlist(e, d)
  }, [e, a, n, d, l, s]), {
    wishlist: a,
    isFetching: o,
    error: s
  }
}

function I(e, t) {
  return (0, i.e7)([m.Z], () => null != e && m.Z.hasSkuId(e, t))
}

function T(e) {
  if (null == e.items || 0 === e.items.length) return null;
  let t = {
    sku_id: e.skuId,
    sku_name: e.name,
    sku_product_line: g.POd.COLLECTIBLES,
    collectibles_item: e.items[0]
  };
  return h.Z.fromServer(t)
}

function C(e) {
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

function A(e) {
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
  } = (0, i.cj)([c.Z], () => ({
    defaultWishlistId: c.Z.getFirstWishlistId(e.id)
  })), {
    wishlist: n,
    isFetching: a,
    error: o
  } = S(t), s = r.useMemo(() => null != n && n.items.filter(e => true !== e.isOwned).length >= b, [n]), {
    validatedSkuIds: l,
    isValidating: u
  } = C(e.id), {
    isFetching: d
  } = A(l);
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
      l = [];
    if (l.push(...s.map(e => ({
        item: e,
        source: "wishlist"
      }))), l.length < b) {
      let e = new Set(s.map(e => e.skuId)),
        t = i.filter(t => !e.has(t.skuId));
      for (let e = 0; e < t.length && l.length < b; e++) l.push({
        item: t[e],
        source: "popular"
      });
      let r = n.filter(t => !e.has(t.skuId));
      for (let e = 0; e < r.length && l.length < b; e++) {
        let t = T(r[e]);
        null !== t && l.push({
          item: t,
          source: "popular"
        })
      }
    }
    return {
      displayItems: l,
      wishlistItemCountToBeDisplayed: s.length,
      hasMoreItems: o.length > b,
      totalWishlistItemCount: null != (r = null == t ? true : t.items.length) ? r : 0
    }
  }, [a, null == t ? true : t.items, n, i])
}

function D(e) {
  let {
    location: t,
    isGift: n,
    giftRecipient: a
  } = e, {
    isDisplayProfileSocialLayerStorefrontEligible: o
  } = (0, l.Q)({
    userId: null == a ? true : a.id,
    location: t
  }), u = (0, s.yc)({
    location: t
  }), d = (0, s.hS)({
    location: t
  }), f = (0, i.e7)([c.Z], () => (null == a ? true : a.id) == null ? null : c.Z.getFirstWishlistId(a.id)), {
    wishlist: p
  } = S(u && null != f && n && null != a ? f : null, null == a ? true : a.id);
  return r.useMemo(() => {
    var e;
    returntrue === n && null != a && !!u && ((null != (e = null == p ? true : p.items.filter(e => true !== e.isOwned)) ? e : []).length > 0 || d || o)
  }, [n, a, u, p, d, o])
}

function w() {
  return x((0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getId()))
}

function x(e) {
  let t = (0, i.e7)([p.default], () => p.default.getUser(e)),
    {
      userProfile: n,
      wishlistId: a
    } = (0, i.cj)([c.Z], () => ({
      userProfile: null != e ? c.Z.getUserProfile(e) : null,
      wishlistId: null != e ? c.Z.getFirstWishlistId(e) : null
    }), [e]);
  return r.useEffect(() => {
    null != e && null == n && null != t && null == n && (0, d.Z)(t.id, t.getAvatarURL(null, 80))
  }, [t, e, n]), S(a, e)
}