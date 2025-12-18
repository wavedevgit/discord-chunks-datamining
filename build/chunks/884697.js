/** Chunk was on web.js **/
/** chunk id: 884697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $W: () => et,
  Ad: () => k,
  BH: () => P,
  Cs: () => D,
  G1: () => O,
  IC: () => q,
  L9: () => J,
  OT: () => X,
  QG: () => M,
  Qf: () => ec,
  Vw: () => S,
  XM: () => I,
  Y: () => W,
  Yq: () => $,
  bl: () => V,
  eu: () => er,
  f_: () => N,
  gc: () => T,
  hC: () => el,
  iC: () => G,
  jT: () => H,
  jm: () => es,
  mO: () => K,
  ne: () => eo,
  qS: () => v,
  ql: () => A,
  rN: () => R,
  uV: () => j,
  v5: () => en,
  wO: () => eu,
  x0: () => ei,
  x6: () => ee,
  yn: () => B
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var Chunk392711 = require("./392711.js"),
  Chunk979554 = require("./979554.js"),
  Chunk134432 = require("./134432.js"),
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

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = e => (null == e ? true : e.premiumType) != null,
  v = e => (null == e ? true : e.purchaseType) === m.qc2.PREMIUM_PURCHASE,
  S = (e, t, n) => {
    let r;
    return A(e, r = n ? t ? m.tuJ.MOBILE_PREMIUM_TIER_2 : m.tuJ.MOBILE : t ? m.tuJ.PREMIUM_TIER_2 : m.tuJ.DEFAULT)
  },
  I = (e, t, n) => {
    let r = S(e, t, n);
    return null == r ? "" : (0, l.T4)(null == r ? true : r.amount, null == r ? true : r.currency)
  },
  T = e => (0, s.isAndroid)() || (0, s.isIOS)() ? e ? m.tuJ.MOBILE_PREMIUM_TIER_2 : m.tuJ.MOBILE : e ? m.tuJ.PREMIUM_TIER_2 : m.tuJ.DEFAULT,
  C = e => {
    let t = e.bundledProducts;
    if (null == t) return 0;
    let n = T(false);
    return t.reduce((e, t) => {
      var r;
      let i = A(t, n);
      return e + (null != (r = null == i ? true : i.amount) ? r : 0)
    }, 0)
  },
  A = (e, t) => {
    var n, r, i;
    let a = null != (i = e.prices[t]) ? i : null;
    return null != a ? null == (r = a.countryPrices) || null == (n = r.prices) ? true : n[0] : null
  },
  N = {
    original: false,
    discountPercentage: false
  },
  P = (e, t) => {
    let n = C(e);
    if (n <= 0) return N;
    let r = A(e, T(t));
    return null == r ? N : {
      original: n,
      discountPercentage: Math.round((n - r.amount) / n * 100)
    }
  },
  R = e => {
    var t;
    return (null == (t = A(e, m.tuJ.DEFAULT)) ? true : t.amount) === 0
  },
  w = e => e.reduce((e, t) => null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants ? (0, r.concat)(e, t.variants.map(e => y(E({}, e), {
    variantGroupStoreListingId: t.storeListingId,
    eligibleOffers: t.eligibleOffers
  }))) : (e.push(t), e), []),
  D = (e, t) => {
    let n = (0, r.flatMap)([...e.values()], "products");
    return (0, r.uniqBy)(t ? w(n) : n, "storeListingId")
  },
  x = (e, t) => {
    if (t === i.Z.AVATAR_DECORATION) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(c.M);
      return (0, r.uniqBy)(t, "skuId")
    }
    if (t === i.Z.PROFILE_EFFECT) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(d.H);
      return (0, r.uniqBy)(t, "skuId")
    }
    if (t === i.Z.NAMEPLATE) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(u.k);
      return (0, r.uniqBy)(t, "skuId")
    }
    return []
  },
  L = (e, t) => {
    let n = D(e, true);
    if (t === i.Z.AVATAR_DECORATION) {
      let e = (0, r.flatMap)(n, "items").filter(c.M);
      return (0, r.uniqBy)(e, "skuId")
    }
    if (t === i.Z.PROFILE_EFFECT) {
      let e = (0, r.flatMap)(n, "items").filter(d.H);
      return (0, r.uniqBy)(e, "skuId")
    }
    if (t === i.Z.NAMEPLATE) {
      let e = (0, r.flatMap)(n, "items").filter(u.k);
      return (0, r.uniqBy)(e, "skuId")
    }
    return []
  },
  j = (e, t) => {
    var n;
    if (null == e || "" === e) return "";
    let {
      CDN_HOST: r,
      API_ENDPOINT: i
    } = window.GLOBAL_ENV, o = (0, a.oO)(t.size * (0, a.x_)()), s = null != (n = null == t ? true : t.format) ? n : "png";
    if (null != r) return "https://".concat(r, "/app-assets/").concat(m.XAJ, "/").concat(e, ".").concat(s, "?size=").concat(o);
    let l = m.ANM.APPLICATION_ASSET(m.XAJ, e, s);
    return "".concat(location.protocol).concat(i).concat(l, "?size=").concat(o)
  },
  M = e => null != e ? f.X.fromServer(e) : true,
  k = e => x(e, i.Z.AVATAR_DECORATION),
  U = e => L(e, i.Z.AVATAR_DECORATION),
  G = (e, t) => (0, r.uniqBy)([...k(e), ...U(t)], "skuId"),
  Z = e => x(e, i.Z.PROFILE_EFFECT),
  F = e => L(e, i.Z.PROFILE_EFFECT),
  B = (e, t) => (0, r.uniqBy)([...Z(e), ...F(t)], "skuId"),
  V = (e, t) => {
    let n = Z(t),
      r = F(e).filter(e => {
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
  H = e => x(e, i.Z.NAMEPLATE),
  Y = e => L(e, i.Z.NAMEPLATE),
  W = (e, t) => (0, r.uniqBy)([...H(e), ...Y(t)], "skuId"),
  K = e => e.applicationId === m.XAJ,
  z = 3.8,
  q = e => z * e,
  Q = 864e5,
  X = e => {
    let t = new Date,
      n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / Q)
  },
  J = e => null != e && X(e) <= _.wS,
  $ = e => {
    let t = _.yf[e];
    return null != t && new Date().getTime() < t
  },
  ee = e => (null == e ? true : e.type) === i.Z.BUNDLE,
  et = e => {
    var t, n;
    if (null != e) return e.type === i.Z.BUNDLE ? i.Z.BUNDLE : null == (n = e.items) || null == (t = n[0]) ? true : t.type
  },
  en = e => {
    var t, n, r;
    let {
      selectedSkuPricePreview: i,
      paymentSourceId: a,
      selectedSkuId: s,
      skuPricePreviewsById: l,
      skusById: c,
      formatPrice: u
    } = e, d = null != i ? i : null != a && null != s ? null == (t = l[s]) ? true : t[o.c] : null, f = null == d || null == (r = d.invoice_items) || null == (n = r[0]) ? true : n.unit_price, p = null != f ? u(f.amount, f.currency) : true;
    if (null == p && null != s) {
      let e = c[s];
      (null == e ? true : e.price) != null && (p = u(e.price.amount, e.price.currency))
    }
    return p
  },
  er = (Chunk231338.pK.KZT, Chunk231338.pK.NGN, Chunk231338.pK.EGP, (e, t, n) => {
    if (ee(e)) return C(e);
    let r = A(e, t ? n ? m.tuJ.MOBILE : m.tuJ.DEFAULT : n ? m.tuJ.MOBILE_PREMIUM_TIER_2 : m.tuJ.PREMIUM_TIER_2);
    return null == r ? true : r.amount
  }),
  ei = (e, t) => {
    let n = [];
    for (let r of e) {
      let e = r.heroRanking;
      if (null != e)
        for (let r of e) {
          let e = t.get(r);
          if (null != e && !ee(e) && (n.push(r), n.length >= _.K8)) return n
        }
    }
    return ea(n)
  },
  ea = e => {
    if (e.length < _.K8) {
      let t = _.HU.slice(0, _.K8 - e.length);
      return e.concat(t)
    }
    return e
  },
  eo = e => {
    let {
      product: t,
      isPartiallyOwnedBundle: n,
      isPurchased: r
    } = e;
    return !n && !(_.Vt.ORB_PROFILE_BADGE === (null == t ? true : t.skuId) && r)
  },
  es = (e, t) => {
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
        if (t === _.Vt.FRACTIONAL_PREMIUM) return "3-day nitro credit";
        if (t === _.Vt.ORB_PROFILE_BADGE) return "orb profile badge";
        return "unknown";
      case i.Z.VARIANTS_GROUP:
        return "variants group";
      default:
        return "unknown"
    }
  },
  el = (e, t, n) => e.sort((e, r) => {
    var i, a;
    let o = n ? (0, p.T4)({
        product: e,
        isPremiumUser: t
      }) : S(e, t, false),
      s = n ? (0, p.T4)({
        product: r,
        isPremiumUser: t
      }) : S(r, t, false);
    return (null != (i = null == o ? true : o.amount) ? i : 0) - (null != (a = null == s ? true : s.amount) ? a : 0)
  }),
  ec = (e, t) => {
    if (0 === t.length || 0 === e.length) return e;
    let n = t.map(e => e.discountId);
    return e.sort((e, t) => {
      var r, i, a, o;
      let s = null != (a = null == (r = e.eligibleOffers) ? true : r.some(e => n.includes(e))) && a;
      return (null != (o = null == (i = t.eligibleOffers) ? true : i.some(e => n.includes(e))) && o) - s
    })
  },
  eu = e => e.filter(e => !e.isCategoryReward)