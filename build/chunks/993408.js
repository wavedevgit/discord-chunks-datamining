/** Chunk was on web.js **/
/** chunk id: 993408, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $W: () => B,
  $b: () => z,
  Br: () => v,
  Bs: () => es,
  CE: () => el,
  Ee: () => ee,
  G0: () => b,
  H1: () => en,
  HF: () => Q,
  P_: () => P,
  R8: () => A,
  V6: () => ea,
  WU: () => Z,
  Zu: () => ei,
  aT: () => X,
  aw: () => J,
  bf: () => eo,
  c7: () => et,
  f6: () => x,
  fT: () => N,
  gA: () => O,
  hU: () => W,
  l8: () => I,
  oj: () => $,
  ps: () => k,
  rr: () => C,
  sz: () => V,
  tt: () => w,
  wo: () => F,
  x9: () => M,
  yt: () => T,
  zd: () => Y
}), require("./321073.js"), require("./896048.js"), require("./638769.js");
var Chunk735438 = require("./735438.js"),
  Chunk575593 = require("./575593.js"),
  Chunk79387 = require("./79387.js"),
  Chunk723702 = require("./723702.js"),
  Chunk580630 = require("./580630.js"),
  Chunk898461 = require("./898461.js"),
  Chunk837015 = require("./837015.js"),
  Chunk203632 = require("./203632.js"),
  Chunk719986 = require("./719986.js"),
  Chunk623373 = require("./623373.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = e => (null == e ? true : e.premiumType) != null,
  O = e => (null == e ? true : e.purchaseType) === _.zF_.PREMIUM_PURCHASE,
  v = (e, t, n) => {
    let r;
    return T(e, r = n ? t ? _.lid.MOBILE_PREMIUM_TIER_2 : _.lid.MOBILE : t ? _.lid.PREMIUM_TIER_2 : _.lid.DEFAULT)
  },
  A = (e, t, n) => {
    let r = v(e, t, n);
    return null == r ? "" : (0, s.$g)(null == r ? true : r.amount, null == r ? true : r.currency)
  },
  I = e => (0, o.isAndroid)() || (0, o.isIOS)() ? e ? _.lid.MOBILE_PREMIUM_TIER_2 : _.lid.MOBILE : e ? _.lid.PREMIUM_TIER_2 : _.lid.DEFAULT,
  S = e => {
    let t = e.bundledProducts;
    if (null == t) return 0;
    let n = I(false);
    return t.reduce((e, t) => {
      var r;
      let i = T(t, n);
      return e + (null != (r = null == i ? true : i.amount) ? r : 0)
    }, 0)
  },
  T = (e, t) => {
    var n, r, i;
    let a = null != (n = e.prices[t]) ? n : null;
    return null != a ? null == (i = a.countryPrices) || null == (r = i.prices) ? true : r[0] : null
  },
  C = {
    original: false,
    discountPercentage: false
  },
  N = (e, t) => {
    if (null == e) return C;
    let n = S(e);
    if (n <= 0) return C;
    let r = T(e, I(t));
    return null == r ? C : {
      original: n,
      discountPercentage: Math.round((n - r.amount) / n * 100)
    }
  },
  w = e => {
    var t;
    return (null == (t = T(e, _.lid.DEFAULT)) ? true : t.amount) === 0
  },
  R = e => e.reduce((e, t) => null != t && t.type === i.R.VARIANTS_GROUP && null != t.variants ? (0, r.concat)(e, t.variants.map(e => y(g({}, e), {
    variantGroupStoreListingId: t.storeListingId,
    eligibleOffers: t.eligibleOffers
  }))) : (e.push(t), e), []),
  P = (e, t) => {
    let n = (0, r.flatMap)([...e.values()], "products");
    return (0, r.uniqBy)(t ? R(n) : n, "storeListingId")
  },
  D = (e, t) => {
    if (t === i.R.AVATAR_DECORATION) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(l.T);
      return (0, r.uniqBy)(t, "skuId")
    }
    if (t === i.R.PROFILE_EFFECT) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(u.C);
      return (0, r.uniqBy)(t, "skuId")
    }
    if (t === i.R.NAMEPLATE) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(c.F);
      return (0, r.uniqBy)(t, "skuId")
    }
    return []
  },
  L = (e, t) => {
    let n = P(e, true);
    if (t === i.R.AVATAR_DECORATION) {
      let e = (0, r.flatMap)(n, "items").filter(l.T);
      return (0, r.uniqBy)(e, "skuId")
    }
    if (t === i.R.PROFILE_EFFECT) {
      let e = (0, r.flatMap)(n, "items").filter(u.C);
      return (0, r.uniqBy)(e, "skuId")
    }
    if (t === i.R.NAMEPLATE) {
      let e = (0, r.flatMap)(n, "items").filter(c.F);
      return (0, r.uniqBy)(e, "skuId")
    }
    return []
  },
  x = e => null != e ? d.M.fromServer(e) : true,
  M = e => D(e, i.R.AVATAR_DECORATION),
  j = e => L(e, i.R.AVATAR_DECORATION),
  k = (e, t) => (0, r.uniqBy)([...M(e), ...j(t)], "skuId"),
  U = e => D(e, i.R.PROFILE_EFFECT),
  G = e => L(e, i.R.PROFILE_EFFECT),
  F = (e, t) => (0, r.uniqBy)([...U(e), ...G(t)], "skuId"),
  V = (e, t) => {
    let n = U(t),
      r = G(e).filter(e => {
        let {
          skuId: t
        } = e;
        return !n.some(e => e.skuId === t)
      });
    return {
      purchased: n,
      shopPreviews: r
    }
  },
  B = e => D(e, i.R.NAMEPLATE),
  H = e => L(e, i.R.NAMEPLATE),
  Y = (e, t) => (0, r.uniqBy)([...B(e), ...H(t)], "skuId"),
  W = e => e.applicationId === _.FYj,
  K = 3.8,
  z = e => K * e,
  q = 864e5,
  Z = e => {
    let t = new Date,
      n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / q)
  },
  Q = e => null != e && Z(e) <= p.x3,
  X = e => {
    let t = p.Tq[e];
    return null != t && new Date().getTime() < t
  },
  J = e => (null == e ? true : e.type) === i.R.BUNDLE,
  $ = e => {
    var t, n;
    if (null != e) return e.type === i.R.BUNDLE ? i.R.BUNDLE : null == (n = e.items) || null == (t = n[0]) ? true : t.type
  },
  ee = e => {
    var t, n, r;
    let {
      selectedSkuPricePreview: i,
      paymentSourceId: o,
      selectedSkuId: s,
      skuPricePreviewsById: l,
      skusById: c,
      formatPrice: u
    } = e, d = null != i ? i : null != o && null != s ? null == (t = l[s]) ? true : t[a.B] : null, f = null == d || null == (r = d.invoice_items) || null == (n = r[0]) ? true : n.unit_price, p = null != f ? u(f.amount, f.currency) : true;
    if (null == p && null != s) {
      let e = c[s];
      (null == e ? true : e.price) != null && (p = u(e.price.amount, e.price.currency))
    }
    return p
  },
  et = (Chunk818348.Yr.KZT, Chunk818348.Yr.NGN, Chunk818348.Yr.EGP, (e, t, n) => {
    if (J(e)) return S(e);
    let r = T(e, t ? n ? _.lid.MOBILE : _.lid.DEFAULT : n ? _.lid.MOBILE_PREMIUM_TIER_2 : _.lid.PREMIUM_TIER_2);
    return null == r ? true : r.amount
  }),
  en = (e, t) => {
    let n = [];
    for (let r of e) {
      let e = r.heroRanking;
      if (null != e)
        for (let r of e) {
          let e = t.get(r);
          if (null != e && !J(e) && (n.push(r), n.length >= p.Bn)) return n
        }
    }
    return er(n)
  },
  er = e => {
    if (e.length < p.Bn) {
      let t = p.xG.slice(0, p.Bn - e.length);
      return e.concat(t)
    }
    return e
  },
  ei = e => {
    let {
      product: t,
      isPartiallyOwnedBundle: n,
      isPurchased: r
    } = e;
    return !n && !(p.Dp.ORB_PROFILE_BADGE === (null == t ? true : t.skuId) && r)
  },
  ea = (e, t) => {
    switch (e) {
      case i.R.AVATAR_DECORATION:
        return "avatar decoration";
      case i.R.PROFILE_EFFECT:
        return "profile effect";
      case i.R.NAMEPLATE:
        return "nameplate";
      case i.R.BUNDLE:
        return "bundle";
      case i.R.EXTERNAL_SKU:
        if (t === p.Dp.FRACTIONAL_PREMIUM) return "3-day nitro credit";
        if (t === p.Dp.ORB_PROFILE_BADGE) return "orb profile badge";
        return "unknown";
      case i.R.VARIANTS_GROUP:
        return "variants group";
      default:
        return "unknown"
    }
  },
  eo = (e, t, n) => e.sort((e, r) => {
    var i, a;
    let o = n ? (0, f.CW)({
        product: e,
        isPremiumUser: t
      }) : v(e, t, false),
      s = n ? (0, f.CW)({
        product: r,
        isPremiumUser: t
      }) : v(r, t, false);
    return (null != (i = null == o ? true : o.amount) ? i : 0) - (null != (a = null == s ? true : s.amount) ? a : 0)
  }),
  es = (e, t) => {
    if (0 === t.length || 0 === e.length) return e;
    let n = t.map(e => e.discountId);
    return e.sort((e, t) => {
      var r, i, a, o;
      let s = null != (r = null == (a = e.eligibleOffers) ? true : a.some(e => n.includes(e))) && r;
      return (null != (i = null == (o = t.eligibleOffers) ? true : o.some(e => n.includes(e))) && i) - s
    })
  },
  el = e => e.filter(e => !e.isCategoryReward)