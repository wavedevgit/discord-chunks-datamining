/** Chunk was on web.js **/
/** chunk id: 602733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EU: () => O,
  UD: () => w,
  Yw: () => S,
  ZL: () => R,
  ao: () => D,
  kZ: () => I,
  lr: () => v,
  ny: () => T,
  p2: () => x,
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
  }({}),
  S = function(e) {
    return e.USER_PROFILE = "user_profile", e.POPOUT = "popout", e
  }({});

function I(e) {
  let {
    wishlistId: t,
    userId: n,
    source: a = "user_profile"
  } = e, o = (0, u.S)({
    location: "UserProfileModalV2"
  }), [s, l, d, f] = (0, i.Wu)([m.Z], () => null != t && o ? [m.Z.getWishlist(t), m.Z.isFetching(t), m.Z.getError(t), m.Z.getUpdatedAt(t)] : [null, false, true, true]), p = (0, i.e7)([c.Z], () => {
    var e;
    if (null != t && null != n) return null == (e = c.Z.getWishlistSettings(n, t)) ? true : e.updated_at
  });
  return (0, r.useEffect)(() => {
    !(null == t || m.Z.isFetching(t)) && o && null == d && (null == s || null != p && f !== p) && _.Z.fetchWishlist(t, p, a)
  }, [t, s, o, p, f, d, a]), {
    wishlist: s,
    isFetching: l,
    error: d
  }
}

function T(e, t) {
  return (0, i.e7)([m.Z], () => null != e && m.Z.hasSkuId(e, t))
}

function C(e) {
  if (null == e.items || 0 === e.items.length) return null;
  let t = {
    sku_id: e.skuId,
    sku_name: e.name,
    sku_product_line: g.POd.COLLECTIBLES,
    collectibles_item: e.items[0]
  };
  return h.Z.fromServer(t)
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

function N(e, t) {
  let n = e.slice(0, t),
    s = (0, i.e7)([o.Z], () => n.some(e => o.Z.isFetchingProduct(e)));
  return r.useEffect(() => {
    if (0 !== n.length)
      for (let e of n) {
        let t = o.Z.getProduct(e),
          n = o.Z.isFetchingProduct(e);
        null != t || n || (0, a.jr)(e)
      }
  }, [n]), {
    isFetching: s
  }
}

function P() {
  let e = [];
  for (let t of Chunk215023.gj) {
    let n = Chunk597688.Z.getProduct(exports);
    null != require && module.push(require)
  }
  return module
}

function R(e, t, n) {
  let {
    defaultWishlistId: a
  } = (0, i.cj)([c.Z], () => ({
    defaultWishlistId: c.Z.getFirstWishlistId(e.id)
  })), {
    wishlist: o,
    isFetching: s,
    error: l
  } = I({
    wishlistId: a,
    source: n
  }), u = r.useMemo(() => null != o && o.items.filter(e => true !== e.isOwned).length >= t, [o, t]), {
    validatedSkuIds: d,
    isValidating: f
  } = A(e.id), {
    isFetching: p
  } = N(d, t);
  return {
    defaultWishlistId: a,
    wishlist: o,
    popularCollectiblesProducts: u ? [] : P(),
    isFetchingWishlist: s,
    isValidatingPopularProducts: !u && f,
    isFetchingPopularProducts: !u && p,
    wishlistError: l
  }
}

function w(e) {
  let {
    wishlist: t,
    popularCollectiblesProducts: n,
    popularSocialLayerStorefrontItems: i,
    wishlistError: a,
    numItems: o
  } = e;
  return r.useMemo(() => {
    var e, r;
    if (null != a) return {
      displayItems: [],
      wishlistItemCountToBeDisplayed: 0,
      hasMoreItems: false,
      totalWishlistItemCount: 0
    };
    let s = (null != (e = null == t ? true : t.items) ? e : []).filter(e => true !== e.isOwned),
      l = s.slice(0, o),
      c = [];
    if (c.push(...l.map(e => ({
        item: e,
        source: "wishlist"
      }))), c.length < o) {
      let e = new Set(l.map(e => e.skuId)),
        t = i.filter(t => !e.has(t.skuId));
      for (let e = 0; e < t.length && c.length < o; e++) c.push({
        item: t[e],
        source: "popular"
      });
      let r = n.filter(t => !e.has(t.skuId));
      for (let e = 0; e < r.length && c.length < o; e++) {
        let t = C(r[e]);
        null !== t && c.push({
          item: t,
          source: "popular"
        })
      }
    }
    return {
      displayItems: c,
      wishlistItemCountToBeDisplayed: l.length,
      hasMoreItems: s.length > o,
      totalWishlistItemCount: null != (r = null == t ? true : t.items.length) ? r : 0
    }
  }, [a, null == t ? true : t.items, n, i, o])
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
  } = I({
    wishlistId: u && null != f && n && null != a ? f : null,
    userId: null == a ? true : a.id
  });
  return r.useMemo(() => {
    var e;
    returntrue === n && null != a && !!u && ((null != (e = null == p ? true : p.items.filter(e => true !== e.isOwned)) ? e : []).length > 0 || d || o)
  }, [n, a, u, p, d, o])
}

function x() {
  return L((0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getId()))
}

function L(e) {
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
  }, [t, e, n]), I({
    wishlistId: a,
    userId: e
  })
}