/** Chunk was on web.js **/
/** chunk id: 884697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $2: () => E,
  Ad: () => x,
  BH: () => C,
  Cs: () => P,
  G1: () => g,
  IC: () => W,
  OT: () => z,
  Qf: () => ea,
  Vw: () => O,
  WW: () => X,
  XM: () => v,
  XS: () => U,
  Y: () => V,
  Yq: () => q,
  bl: () => B,
  eu: () => $,
  f_: () => A,
  fp: () => b,
  gc: () => I,
  hC: () => ei,
  iC: () => M,
  iP: () => J,
  jT: () => Z,
  jm: () => er,
  mO: () => H,
  ne: () => en,
  qS: () => y,
  ql: () => S,
  rN: () => N,
  uV: () => L,
  x0: () => ee,
  x6: () => Q,
  yn: () => G
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var Chunk392711 = require("./392711.js"),
  Chunk979554 = require("./979554.js"),
  Chunk134432 = require("./134432.js"),
  Chunk358085 = require("./358085.js"),
  Chunk937615 = require("./937615.js"),
  Chunk922347 = require("./922347.js"),
  Chunk135483 = require("./135483.js"),
  Chunk212161 = require("./212161.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = e => (null == e ? true : e.premiumType) != null,
  E = e => e === d.cv,
  b = e => E(null == e ? true : e.categorySkuId),
  y = e => (null == e ? true : e.purchaseType) === f.qc2.PREMIUM_PURCHASE,
  O = (e, t, n) => {
    let r;
    return S(e, r = n ? t ? f.tuJ.MOBILE_PREMIUM_TIER_2 : f.tuJ.MOBILE : t ? f.tuJ.PREMIUM_TIER_2 : f.tuJ.DEFAULT)
  },
  v = (e, t, n) => {
    let r = O(e, t, n);
    return null == r ? "" : (0, s.T4)(null == r ? true : r.amount, null == r ? true : r.currency)
  },
  I = e => (0, o.isAndroid)() || (0, o.isIOS)() ? e ? f.tuJ.MOBILE_PREMIUM_TIER_2 : f.tuJ.MOBILE : e ? f.tuJ.PREMIUM_TIER_2 : f.tuJ.DEFAULT,
  T = e => {
    let t = e.bundledProducts;
    if (null == t) return 0;
    let n = I(false);
    return t.reduce((e, t) => {
      var r;
      let i = S(t, n);
      return e + (null != (r = null == i ? true : i.amount) ? r : 0)
    }, 0)
  },
  S = (e, t) => {
    var n, r, i;
    let a = null != (i = e.prices[t]) ? i : null;
    return null != a ? null == (r = a.countryPrices) || null == (n = r.prices) ? true : n[0] : null
  },
  A = {
    original: false,
    discountPercentage: false
  },
  C = (e, t) => {
    let n = T(e);
    if (n <= 0) return A;
    let r = S(e, I(t));
    return null == r ? A : {
      original: n,
      discountPercentage: Math.round((n - r.amount) / n * 100)
    }
  },
  N = e => {
    var t;
    return (null == (t = S(e, f.tuJ.DEFAULT)) ? true : t.amount) === 0
  },
  R = e => e.reduce((e, t) => null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants ? (0, r.concat)(e, t.variants.map(e => m(p({}, e), {
    variantGroupStoreListingId: t.storeListingId,
    eligibleOffers: t.eligibleOffers
  }))) : (e.push(t), e), []),
  P = (e, t) => {
    let n = (0, r.flatMap)([...e.values()], "products");
    return (0, r.uniqBy)(t ? R(n) : n, "storeListingId")
  },
  w = (e, t) => {
    if (t === i.Z.AVATAR_DECORATION) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(l.M);
      return (0, r.uniqBy)(t, "id")
    }
    if (t === i.Z.PROFILE_EFFECT) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(u.H);
      return (0, r.uniqBy)(t, "id")
    }
    if (t === i.Z.NAMEPLATE) {
      let t = (0, r.flatMap)([...e.values()], "items").filter(c.k);
      return (0, r.uniqBy)(t, "id")
    }
    return []
  },
  D = (e, t) => {
    let n = P(e, true);
    if (t === i.Z.AVATAR_DECORATION) {
      let e = (0, r.flatMap)(n, "items").filter(l.M);
      return (0, r.uniqBy)(e, "id")
    }
    if (t === i.Z.PROFILE_EFFECT) {
      let e = (0, r.flatMap)(n, "items").filter(u.H);
      return (0, r.uniqBy)(e, "id")
    }
    if (t === i.Z.NAMEPLATE) {
      let e = (0, r.flatMap)(n, "items").filter(c.k);
      return (0, r.uniqBy)(e, "id")
    }
    return []
  },
  L = (e, t) => {
    var n;
    if (null == e || "" === e) return "";
    let {
      CDN_HOST: r,
      API_ENDPOINT: i
    } = window.GLOBAL_ENV, o = (0, a.oO)(t.size * (0, a.x_)()), s = null != (n = null == t ? true : t.format) ? n : "png";
    if (null != r) return "https://".concat(r, "/app-assets/").concat(f.XAJ, "/").concat(e, ".").concat(s, "?size=").concat(o);
    let l = f.ANM.APPLICATION_ASSET(f.XAJ, e, s);
    return "".concat(location.protocol).concat(i).concat(l, "?size=").concat(o)
  },
  x = e => w(e, i.Z.AVATAR_DECORATION),
  j = e => D(e, i.Z.AVATAR_DECORATION),
  M = (e, t) => (0, r.uniqBy)([...x(e), ...j(t)], "id"),
  k = e => w(e, i.Z.PROFILE_EFFECT),
  U = e => D(e, i.Z.PROFILE_EFFECT),
  G = (e, t) => (0, r.uniqBy)([...k(e), ...U(t)], "id"),
  B = (e, t) => {
    let n = k(t),
      r = U(e).filter(e => {
        let {
          id: t
        } = e;
        return !n.some(e => e.id === t)
      });
    return {
      purchased: n,
      shopPreviews: r
    }
  },
  Z = e => w(e, i.Z.NAMEPLATE),
  F = e => D(e, i.Z.NAMEPLATE),
  V = (e, t) => (0, r.uniqBy)([...Z(e), ...F(t)], "id"),
  H = e => e.applicationId === f.XAJ,
  Y = 3.8,
  W = e => Y * e,
  K = 864e5,
  z = e => {
    let t = new Date,
      n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / K)
  },
  q = e => {
    let t = d.yf[e];
    return null != t && new Date().getTime() < t
  },
  X = e => {
    let t = d.i0[e];
    return null != t && new Date().getTime() < t
  },
  Q = e => (null == e ? true : e.type) === i.Z.BUNDLE,
  J = e => !!e && !f.w2V.has(e),
  $ = (e, t, n) => {
    if (Q(e)) return T(e);
    let r = S(e, t ? n ? f.tuJ.MOBILE : f.tuJ.DEFAULT : n ? f.tuJ.MOBILE_PREMIUM_TIER_2 : f.tuJ.PREMIUM_TIER_2);
    return null == r ? true : r.amount
  },
  ee = (e, t) => {
    let n = [];
    for (let r of e) {
      let e = r.heroRanking;
      if (null != e)
        for (let r of e) {
          let e = t.get(r);
          if (null != e && !Q(e) && (n.push(r), n.length >= d.K8)) return n
        }
    }
    return et(n)
  },
  et = e => {
    if (e.length < d.K8) {
      let t = d.HU.slice(0, d.K8 - e.length);
      return e.concat(t)
    }
    return e
  },
  en = e => {
    let {
      product: t,
      isPartiallyOwnedBundle: n,
      isPurchased: r
    } = e;
    return !n && !(d.Vt.ORB_PROFILE_BADGE === (null == t ? true : t.skuId) && r)
  },
  er = (e, t) => {
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
        if (t === d.Vt.FRACTIONAL_PREMIUM) return "3-day nitro credit";
        if (t === d.Vt.ORB_PROFILE_BADGE) return "orb profile badge";
        return "unknown";
      case i.Z.VARIANTS_GROUP:
        return "variants group";
      default:
        return "unknown"
    }
  },
  ei = (e, t) => e.sort((e, n) => {
    var r, i;
    let a = O(e, t, false),
      o = O(n, t, false);
    return (null != (r = null == a ? true : a.amount) ? r : 0) - (null != (i = null == o ? true : o.amount) ? i : 0)
  }),
  ea = (e, t) => {
    if (0 === t.length || 0 === e.length) return e;
    let n = t.map(e => e.discountId);
    return e.sort((e, t) => {
      var r, i, a, o;
      let s = null != (a = null == (r = e.eligibleOffers) ? true : r.some(e => n.includes(e))) && a;
      return (null != (o = null == (i = t.eligibleOffers) ? true : i.some(e => n.includes(e))) && o) - s
    })
  }