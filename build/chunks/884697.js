/** Chunk was on web.js **/
/** chunk id: 884697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $2: () => b,
  Ad: () => M,
  BH: () => N,
  Cs: () => w,
  G1: () => E,
  IC: () => K,
  OT: () => q,
  Qf: () => ea,
  Vw: () => v,
  WW: () => Q,
  XM: () => I,
  XS: () => G,
  Y: () => H,
  Yq: () => X,
  bl: () => Z,
  eu: () => $,
  f_: () => C,
  fp: () => y,
  gc: () => T,
  hC: () => ei,
  iC: () => k,
  jT: () => F,
  jm: () => er,
  mO: () => Y,
  ne: () => en,
  qS: () => O,
  ql: () => A,
  rN: () => R,
  uV: () => x,
  x0: () => ee,
  x6: () => J,
  yn: () => B
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
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = e => (null == e ? true : e.premiumType) != null,
  b = e => e === d.cv,
  y = e => b(null == e ? true : e.categorySkuId),
  O = e => (null == e ? true : e.purchaseType) === f.qc2.PREMIUM_PURCHASE,
  v = (e, t, n) => {
    let r;
    return A(e, r = n ? t ? f.tuJ.MOBILE_PREMIUM_TIER_2 : f.tuJ.MOBILE : t ? f.tuJ.PREMIUM_TIER_2 : f.tuJ.DEFAULT)
  },
  I = (e, t, n) => {
    let r = v(e, t, n);
    return null == r ? "" : (0, s.T4)(null == r ? true : r.amount, null == r ? true : r.currency)
  },
  T = e => (0, o.isAndroid)() || (0, o.isIOS)() ? e ? f.tuJ.MOBILE_PREMIUM_TIER_2 : f.tuJ.MOBILE : e ? f.tuJ.PREMIUM_TIER_2 : f.tuJ.DEFAULT,
  S = e => {
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
  C = {
    original: false,
    discountPercentage: false
  },
  N = (e, t) => {
    let n = S(e);
    if (n <= 0) return C;
    let r = A(e, T(t));
    return null == r ? C : {
      original: n,
      discountPercentage: Math.round((n - r.amount) / n * 100)
    }
  },
  R = e => {
    var t;
    return (null == (t = A(e, f.tuJ.DEFAULT)) ? true : t.amount) === 0
  },
  P = e => e.reduce((e, t) => null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants ? (0, r.concat)(e, t.variants.map(e => g(h({}, e), {
    variantGroupStoreListingId: t.storeListingId,
    eligibleOffers: t.eligibleOffers
  }))) : (e.push(t), e), []),
  w = (e, t) => {
    let n = (0, r.flatMap)([...e.values()], "products");
    return (0, r.uniqBy)(t ? P(n) : n, "storeListingId")
  },
  D = (e, t) => {
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
  L = (e, t) => {
    let n = w(e, true);
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
  x = (e, t) => {
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
  M = e => D(e, i.Z.AVATAR_DECORATION),
  j = e => L(e, i.Z.AVATAR_DECORATION),
  k = (e, t) => (0, r.uniqBy)([...M(e), ...j(t)], "id"),
  U = e => D(e, i.Z.PROFILE_EFFECT),
  G = e => L(e, i.Z.PROFILE_EFFECT),
  B = (e, t) => (0, r.uniqBy)([...U(e), ...G(t)], "id"),
  Z = (e, t) => {
    let n = U(t),
      r = G(e).filter(e => {
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
  F = e => D(e, i.Z.NAMEPLATE),
  V = e => L(e, i.Z.NAMEPLATE),
  H = (e, t) => (0, r.uniqBy)([...F(e), ...V(t)], "id"),
  Y = e => e.applicationId === f.XAJ,
  W = 3.8,
  K = e => W * e,
  z = 864e5,
  q = e => {
    let t = new Date,
      n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / z)
  },
  X = e => {
    let t = d.yf[e];
    return null != t && new Date().getTime() < t
  },
  Q = e => {
    let t = d.i0[e];
    return null != t && new Date().getTime() < t
  },
  J = e => (null == e ? true : e.type) === i.Z.BUNDLE,
  $ = (Chunk231338.pK.KZT, Chunk231338.pK.NGN, Chunk231338.pK.EGP, (e, t, n) => {
    if (J(e)) return S(e);
    let r = A(e, t ? n ? f.tuJ.MOBILE : f.tuJ.DEFAULT : n ? f.tuJ.MOBILE_PREMIUM_TIER_2 : f.tuJ.PREMIUM_TIER_2);
    return null == r ? true : r.amount
  }),
  ee = (e, t) => {
    let n = [];
    for (let r of e) {
      let e = r.heroRanking;
      if (null != e)
        for (let r of e) {
          let e = t.get(r);
          if (null != e && !J(e) && (n.push(r), n.length >= d.K8)) return n
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
    let a = v(e, t, false),
      o = v(n, t, false);
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