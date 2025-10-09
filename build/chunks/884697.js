/** Chunk was on web.js **/
/** chunk id: 884697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $2: () => O,
  $W: () => en,
  Ad: () => U,
  BH: () => P,
  Cs: () => L,
  G1: () => y,
  IC: () => X,
  OT: () => J,
  QG: () => k,
  Qf: () => eu,
  Vw: () => T,
  WW: () => ee,
  XM: () => S,
  XS: () => F,
  Y: () => K,
  Yq: () => $,
  bl: () => H,
  eu: () => ei,
  f_: () => R,
  fp: () => v,
  gc: () => A,
  hC: () => ec,
  iC: () => B,
  jT: () => Y,
  jm: () => el,
  mO: () => z,
  ne: () => es,
  qS: () => I,
  ql: () => N,
  rN: () => w,
  uV: () => j,
  v5: () => er,
  x0: () => ea,
  x6: () => et,
  yn: () => V
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
  O = e => e === _.cv,
  v = e => O(null == e ? true : e.categorySkuId),
  I = e => (null == e ? true : e.purchaseType) === p.qc2.PREMIUM_PURCHASE,
  T = (e, t, n) => {
    let r;
    return N(e, r = n ? t ? p.tuJ.MOBILE_PREMIUM_TIER_2 : p.tuJ.MOBILE : t ? p.tuJ.PREMIUM_TIER_2 : p.tuJ.DEFAULT)
  },
  S = (e, t, n) => {
    let r = T(e, t, n);
    return null == r ? "" : (0, l.T4)(null == r ? true : r.amount, null == r ? true : r.currency)
  },
  A = e => (0, s.isAndroid)() || (0, s.isIOS)() ? e ? p.tuJ.MOBILE_PREMIUM_TIER_2 : p.tuJ.MOBILE : e ? p.tuJ.PREMIUM_TIER_2 : p.tuJ.DEFAULT,
  C = e => {
    let t = e.bundledProducts;
    if (null == t) return 0;
    let n = A(false);
    return t.reduce((e, t) => {
      var r;
      let i = N(t, n);
      return e + (null != (r = null == i ? true : i.amount) ? r : 0)
    }, 0)
  },
  N = (e, t) => {
    var n, r, i;
    let a = null != (i = e.prices[t]) ? i : null;
    return null != a ? null == (r = a.countryPrices) || null == (n = r.prices) ? true : n[0] : null
  },
  R = {
    original: false,
    discountPercentage: false
  },
  P = (e, t) => {
    let n = C(e);
    if (n <= 0) return R;
    let r = N(e, A(t));
    return null == r ? R : {
      original: n,
      discountPercentage: Math.round((n - r.amount) / n * 100)
    }
  },
  w = e => {
    var t;
    return (null == (t = N(e, p.tuJ.DEFAULT)) ? true : t.amount) === 0
  },
  D = e => e.reduce((e, t) => null != t && t.type === i.Z.VARIANTS_GROUP && null != t.variants ? (0, r.concat)(e, t.variants.map(e => b(g({}, e), {
    variantGroupStoreListingId: t.storeListingId,
    eligibleOffers: t.eligibleOffers
  }))) : (e.push(t), e), []),
  L = (e, t) => {
    let n = (0, r.flatMap)([...e.values()], "products");
    return (0, r.uniqBy)(t ? D(n) : n, "storeListingId")
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
  M = (e, t) => {
    let n = L(e, true);
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
    if (null != r) return "https://".concat(r, "/app-assets/").concat(p.XAJ, "/").concat(e, ".").concat(s, "?size=").concat(o);
    let l = p.ANM.APPLICATION_ASSET(p.XAJ, e, s);
    return "".concat(location.protocol).concat(i).concat(l, "?size=").concat(o)
  },
  k = e => null != e ? f.X.fromServer(e) : true,
  U = e => x(e, i.Z.AVATAR_DECORATION),
  G = e => M(e, i.Z.AVATAR_DECORATION),
  B = (e, t) => (0, r.uniqBy)([...U(e), ...G(t)], "skuId"),
  Z = e => x(e, i.Z.PROFILE_EFFECT),
  F = e => M(e, i.Z.PROFILE_EFFECT),
  V = (e, t) => (0, r.uniqBy)([...Z(e), ...F(t)], "skuId"),
  H = (e, t) => {
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
  Y = e => x(e, i.Z.NAMEPLATE),
  W = e => M(e, i.Z.NAMEPLATE),
  K = (e, t) => (0, r.uniqBy)([...Y(e), ...W(t)], "skuId"),
  z = e => e.applicationId === p.XAJ,
  q = 3.8,
  X = e => q * e,
  Q = 864e5,
  J = e => {
    let t = new Date,
      n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / Q)
  },
  $ = e => {
    let t = _.yf[e];
    return null != t && new Date().getTime() < t
  },
  ee = e => {
    let t = _.i0[e];
    return null != t && new Date().getTime() < t
  },
  et = e => (null == e ? true : e.type) === i.Z.BUNDLE,
  en = e => {
    var t, n;
    if (null != e) return e.type === i.Z.BUNDLE ? i.Z.BUNDLE : null == (n = e.items) || null == (t = n[0]) ? true : t.type
  },
  er = e => {
    var t, n, r;
    let {
      selectedSkuPricePreview: i,
      paymentSourceId: a,
      selectedSkuId: s,
      skuPricePreviewsById: l,
      skusById: c,
      formatPrice: u
    } = e, d = null != i ? i : null != a && null != s ? null == (t = l[s]) ? true : t[o.c] : null, f = null == d || null == (r = d.invoice_items) || null == (n = r[0]) ? true : n.unit_price, _ = null != f ? u(f.amount, f.currency) : true;
    if (null == _ && null != s) {
      let e = c[s];
      (null == e ? true : e.price) != null && (_ = u(e.price.amount, e.price.currency))
    }
    return _
  },
  ei = (Chunk231338.pK.KZT, Chunk231338.pK.NGN, Chunk231338.pK.EGP, (e, t, n) => {
    if (et(e)) return C(e);
    let r = N(e, t ? n ? p.tuJ.MOBILE : p.tuJ.DEFAULT : n ? p.tuJ.MOBILE_PREMIUM_TIER_2 : p.tuJ.PREMIUM_TIER_2);
    return null == r ? true : r.amount
  }),
  ea = (e, t) => {
    let n = [];
    for (let r of e) {
      let e = r.heroRanking;
      if (null != e)
        for (let r of e) {
          let e = t.get(r);
          if (null != e && !et(e) && (n.push(r), n.length >= _.K8)) return n
        }
    }
    return eo(n)
  },
  eo = e => {
    if (e.length < _.K8) {
      let t = _.HU.slice(0, _.K8 - e.length);
      return e.concat(t)
    }
    return e
  },
  es = e => {
    let {
      product: t,
      isPartiallyOwnedBundle: n,
      isPurchased: r
    } = e;
    return !n && !(_.Vt.ORB_PROFILE_BADGE === (null == t ? true : t.skuId) && r)
  },
  el = (e, t) => {
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
  ec = (e, t) => e.sort((e, n) => {
    var r, i;
    let a = T(e, t, false),
      o = T(n, t, false);
    return (null != (r = null == a ? true : a.amount) ? r : 0) - (null != (i = null == o ? true : o.amount) ? i : 0)
  }),
  eu = (e, t) => {
    if (0 === t.length || 0 === e.length) return e;
    let n = t.map(e => e.discountId);
    return e.sort((e, t) => {
      var r, i, a, o;
      let s = null != (a = null == (r = e.eligibleOffers) ? true : r.some(e => n.includes(e))) && a;
      return (null != (o = null == (i = t.eligibleOffers) ? true : i.some(e => n.includes(e))) && o) - s
    })
  }