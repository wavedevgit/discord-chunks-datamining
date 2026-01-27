/** Chunk was on web.js **/
/** chunk id: 594832, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B5: () => O,
  Q8: () => y,
  Zh: () => E,
  eT: () => w,
  fw: () => A,
  mQ: () => v,
  mk: () => R,
  pE: () => D,
  pl: () => g,
  rJ: () => I,
  tA: () => P,
  uS: () => b
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk979286 = require("./979286.js"),
  Chunk590180 = require("./590180.js"),
  Chunk20424 = require("./20424.js"),
  Chunk622543 = require("./622543.js"),
  Chunk576622 = require("./576622.js"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk808247 = require("./808247.js"),
  Chunk107563 = require("./107563.js"),
  Chunk872472 = require("./872472.js"),
  Chunk652215 = require("./652215.js"),
  Chunk758836 = require("./758836.js");
let g = 6,
  E = 350,
  y = 16;
var b = function(e) {
    return e.WISHLIST = "wishlist", e.POPULAR = "popular", e
  }({}),
  O = function(e) {
    return e.USER_PROFILE = "user_profile", e.POPOUT = "popout", e
  }({}),
  v = function(e) {
    return e.DM_SIDE_PANEL = "dm_side_panel", e.POPOUT = "popout", e.WISHLIST_BANNER = "wishlist_banner", e
  }({});

function A(e) {
  let {
    wishlistId: t,
    userId: n,
    source: a = "user_profile"
  } = e, [o, s, c, u] = (0, i.yK)([p.A], () => null == t ? [null, false, true, true] : [p.A.getWishlist(t), p.A.isFetching(t), p.A.getError(t), p.A.getUpdatedAt(t)]), d = (0, i.bG)([l.A], () => {
    var e;
    if (null != t && null != n) return null == (e = l.A.getWishlistSettings(n, t)) ? true : e.updated_at
  });
  return (0, r.useEffect)(() => {
    null == t || p.A.isFetching(t) || null != c || (null == o || null != d && u !== d) && f.A.fetchWishlist(t, d, a)
  }, [t, o, d, u, c, a]), {
    wishlist: o,
    isFetching: s,
    error: c
  }
}

function I(e, t) {
  return (0, i.bG)([p.A], () => null != e && p.A.hasSkuId(e, t))
}

function S(e) {
  if (null == e.items || 0 === e.items.length) return null;
  let t = {
    sku_id: e.skuId,
    sku_name: e.name,
    sku_product_line: h.EZt.COLLECTIBLES,
    collectibles_item: e.items[0]
  };
  return _.A.fromServer(t)
}

function T(e) {
  let [t, n] = r.useState([]), [i, o] = r.useState(false);
  return r.useEffect(() => {
    let t = false;
    o(true);
    let r = m.PI.map(e => e);
    return (0, a.Og)(e, r).then(e => {
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

function C(e, t) {
  let n = e.slice(0, t),
    s = (0, i.bG)([o.A], () => n.some(e => o.A.isFetchingProduct(e)));
  return r.useEffect(() => {
    if (0 !== n.length)
      for (let e of n) {
        let t = o.A.getProduct(e),
          n = o.A.isFetchingProduct(e);
        null != t || n || (0, a.Jp)(e)
      }
  }, [n]), {
    isFetching: s
  }
}

function N() {
  let e = [];
  for (let t of m.PI) {
    let n = o.A.getProduct(t);
    null != n && e.push(n)
  }
  return e
}

function w(e) {
  let {
    giftRecipient: t,
    minNumItems: n,
    source: a
  } = e, {
    defaultWishlistId: o
  } = (0, i.cf)([l.A], () => ({
    defaultWishlistId: l.A.getFirstWishlistId(t.id)
  })), {
    wishlist: s,
    isFetching: c,
    error: u
  } = A({
    wishlistId: o,
    source: a
  }), d = r.useMemo(() => null != s && s.items.filter(e => true !== e.isOwned).length >= n, [s, n]), {
    validatedSkuIds: f,
    isValidating: p
  } = T(t.id), {
    isFetching: _
  } = C(f, n);
  return {
    defaultWishlistId: o,
    wishlist: s,
    popularCollectiblesProducts: r.useMemo(() => {
      if (d) return [];
      let e = new Set(f);
      return N().filter(t => e.has(t.skuId))
    }, [d, f]),
    isFetchingWishlist: c,
    isValidatingPopularProducts: !d && p,
    isFetchingPopularProducts: !d && _,
    wishlistError: u
  }
}

function R(e) {
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
        let t = S(r[e]);
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

function P(e) {
  let {
    location: t,
    isGift: n,
    giftRecipient: a
  } = e, o = (0, s.c)({
    userId: null == a ? true : a.id,
    location: t
  }), c = (0, i.bG)([l.A], () => (null == a ? true : a.id) == null ? null : l.A.getFirstWishlistId(a.id)), {
    wishlist: u
  } = A({
    wishlistId: null != c && n && null != a ? c : null,
    userId: null == a ? true : a.id
  });
  return r.useMemo(() => {
    var e;
    returntrue === n && null != a && ((null != (e = null == u ? true : u.items.filter(e => true !== e.isOwned)) ? e : []).length > 0 || o)
  }, [n, a, u, o])
}

function D() {
  return L((0, i.bG)([u.default], () => u.default.getId()))
}

function L(e) {
  let t = (0, i.bG)([d.default], () => d.default.getUser(e)),
    {
      userProfile: n,
      wishlistId: a
    } = (0, i.cf)([l.A], () => ({
      userProfile: null != e ? l.A.getUserProfile(e) : null,
      wishlistId: null != e ? l.A.getFirstWishlistId(e) : null
    }), [e]);
  return r.useEffect(() => {
    null != e && null == n && null != t && null == n && (0, c.A)(t.id, t.getAvatarURL(null, 80))
  }, [t, e, n]), A({
    wishlistId: a,
    userId: e
  })
}