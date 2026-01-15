/** Chunk was on web.js **/
/** chunk id: 884697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $W: () => $,
  Ad: () => j,
  BH: () => N,
  Cs: () => R,
  G1: () => y,
  IC: () => K,
  L9: () => Q,
  OT: () => q,
  QG: () => L,
  Qf: () => es,
  Vw: () => v,
  XM: () => S,
  Y: () => H,
  Yq: () => X,
  bl: () => F,
  eu: () => et,
  f_: () => A,
  gc: () => I,
  hC: () => eo,
  iC: () => k,
  jT: () => B,
  jm: () => ea,
  mO: () => Y,
  ne: () => ei,
  qS: () => O,
  ql: () => C,
  rN: () => P,
  v5: () => ee,
  wO: () => el,
  x0: () => en,
  x6: () => J,
  yn: () => Z
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var Chunk392711 = require("./392711.js"),
  Chunk979554 = require("./979554.js"),
  Chunk855775 = require("./855775.js"),
  Chunk358085 = require("./358085.js"),
  Chunk937615 = require("./937615.js"),
  Chunk922347 = require("./922347.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js"),
  Chunk889577 = require("./889577.js"),
  Chunk27123 = require("./27123.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = e => (null == e ? true : e.premiumType) != null,
  O = e => (null == e ? true : e.purchaseType) === _.qc2.PREMIUM_PURCHASE,
  v = (e, t, n) => {
    let r;
    return C(e, r = n ? t ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.MOBILE : t ? _.tuJ.PREMIUM_TIER_2 : _.tuJ.DEFAULT)
  },
  S = (e, t, n) => {
    let r = v(e, t, n);
    return null == r ? "" : (0, s.T4)(null == r ? true : r.amount, null == r ? true : r.currency)
  },
  I = e => (0, o.isAndroid)() || (0, o.isIOS)() ? e ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.MOBILE : e ? _.tuJ.PREMIUM_TIER_2 : _.tuJ.DEFAULT,
  T = e => {
    let t = e.bundledProducts;
    if (null == t) return 0;
    let n = I(false);
    return t.reduce((e, t) => {
      var r;
      let i = C(t, n);
      return e + (null != (r = null == i ? true : i.amount) ? r : 0)
    }, 0)
  },
  C = (e, t) => {
    var n, r, i;
    let a = null != (i = e.prices[t]) ? i : null;
    return null != a ? null == (r = a.countryPrices) || null == (n = r.prices) ? true : n[0] : null
  },
  A = {
    original: false,
    discountPercentage: false
  },
  N = (e, t) => {
    let n = T(e);
    if (n <= 0) return A;
    let r = C(e, I(t));
    return null == r ? A : {
      original: n,
      discountPercentage: Math.round((n - r.amount) / n * 100)
    }
  },
  P = e => {
    var t;
    return (null == (t = C(e, _.tuJ.DEFAULT)) ? true : t.amount) === 0
  },
  w = e => e.reduce((e, t) => null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants ? (0, r.concat)(e, t.variants.map(e => b(g({}, e), {
    variantGroupStoreListingId: t.storeListingId,
    eligibleOffers: t.eligibleOffers
  }))) : (e.push(t), e), []),
  R = (e, t) => {
    let n = (0, r.flatMap)([...e.values()], "products");
    return (0, r.uniqBy)(t ? w(n) : n, "storeListingId")
  },
  D = (e, t) => {
    if (t === i.Z.AVATAR_DECORATION) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(l.M);
      return (0, r.uniqBy)(t, "skuId")
    }
    if (t === i.Z.PROFILE_EFFECT) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(u.H);
      return (0, r.uniqBy)(t, "skuId")
    }
    if (t === i.Z.NAMEPLATE) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(c.k);
      return (0, r.uniqBy)(t, "skuId")
    }
    return []
  },
  x = (e, t) => {
    let n = R(e, true);
    if (t === i.Z.AVATAR_DECORATION) {
      let e = (0, r.flatMap)(n, "items").filter(l.M);
      return (0, r.uniqBy)(e, "skuId")
    }
    if (t === i.Z.PROFILE_EFFECT) {
      let e = (0, r.flatMap)(n, "items").filter(u.H);
      return (0, r.uniqBy)(e, "skuId")
    }
    if (t === i.Z.NAMEPLATE) {
      let e = (0, r.flatMap)(n, "items").filter(c.k);
      return (0, r.uniqBy)(e, "skuId")
    }
    return []
  },
  L = e => null != e ? d.X.fromServer(e) : true,
  j = e => D(e, i.Z.AVATAR_DECORATION),
  M = e => x(e, i.Z.AVATAR_DECORATION),
  k = (e, t) => (0, r.uniqBy)([...j(e), ...M(t)], "skuId"),
  U = e => D(e, i.Z.PROFILE_EFFECT),
  G = e => x(e, i.Z.PROFILE_EFFECT),
  Z = (e, t) => (0, r.uniqBy)([...U(e), ...G(t)], "skuId"),
  F = (e, t) => {
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
  B = e => D(e, i.Z.NAMEPLATE),
  V = e => x(e, i.Z.NAMEPLATE),
  H = (e, t) => (0, r.uniqBy)([...B(e), ...V(t)], "skuId"),
  Y = e => e.applicationId === _.XAJ,
  W = 3.8,
  K = e => W * e,
  z = 864e5,
  q = e => {
    let t = new Date,
      n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / z)
  },
  Q = e => null != e && q(e) <= p.wS,
  X = e => {
    let t = p.yf[e];
    return null != t && new Date().getTime() < t
  },
  J = e => (null == e ? true : e.type) === i.Z.BUNDLE,
  $ = e => {
    var t, n;
    if (null != e) return e.type === i.Z.BUNDLE ? i.Z.BUNDLE : null == (n = e.items) || null == (t = n[0]) ? true : t.type
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
    } = e, d = null != i ? i : null != o && null != s ? null == (t = l[s]) ? true : t[a.c] : null, f = null == d || null == (r = d.invoice_items) || null == (n = r[0]) ? true : n.unit_price, p = null != f ? u(f.amount, f.currency) : true;
    if (null == p && null != s) {
      let e = c[s];
      (null == e ? true : e.price) != null && (p = u(e.price.amount, e.price.currency))
    }
    return p
  },
  et = (Chunk231338.pK.KZT, Chunk231338.pK.NGN, Chunk231338.pK.EGP, (e, t, n) => {
    if (J(e)) return T(e);
    let r = C(e, t ? n ? _.tuJ.MOBILE : _.tuJ.DEFAULT : n ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.PREMIUM_TIER_2);
    return null == r ? true : r.amount
  }),
  en = (e, t) => {
    let n = [];
    for (let r of e) {
      let e = r.heroRanking;
      if (null != e)
        for (let r of e) {
          let e = t.get(r);
          if (null != e && !J(e) && (n.push(r), n.length >= p.K8)) return n
        }
    }
    return er(n)
  },
  er = e => {
    if (e.length < p.K8) {
      let t = p.HU.slice(0, p.K8 - e.length);
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
    return !n && !(p.Vt.ORB_PROFILE_BADGE === (null == t ? true : t.skuId) && r)
  },
  ea = (e, t) => {
    switch (e) {
      case i.Z.AVATAR_DECORATION:
        return "avatar decoration";
      case i.Z.PROFILE_EFFECT:
        return "profile effect";
      case i.Z.NAMEPLATE:
        return "nameplate";
      case i.Z.BUNDLE:
        return "bundle";
      case i.Z.EXTERNAL_SKU:
        if (t === p.Vt.FRACTIONAL_PREMIUM) return "3-day nitro credit";
        if (t === p.Vt.ORB_PROFILE_BADGE) return "orb profile badge";
        return "unknown";
      case i.Z.VARIANTS_GROUP:
        return "variants group";
      default:
        return "unknown"
    }
  },
  eo = (e, t, n) => e.sort((e, r) => {
    var i, a;
    let o = n ? (0, f.T4)({
        product: e,
        isPremiumUser: t
      }) : v(e, t, false),
      s = n ? (0, f.T4)({
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
      let s = null != (a = null == (r = e.eligibleOffers) ? true : r.some(e => n.includes(e))) && a;
      return (null != (o = null == (i = t.eligibleOffers) ? true : i.some(e => n.includes(e))) && o) - s
    })
  },
  el = e => e.filter(e => !e.isCategoryReward)