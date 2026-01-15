/** Chunk was on web.js **/
/** chunk id: 223143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QJ: () => g,
  QN: () => m,
  ZP: () => E,
  c7: () => h,
  mw: () => b
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk353926 = require("./353926.js"),
  Chunk335131 = require("./335131.js"),
  Chunk1870 = require("./1870.js"),
  Chunk952597 = require("./952597.js"),
  Chunk267097 = require("./267097.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  (0, c.a)("useFetchPurchases");
  let t = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
    n = i.v.VARIANTS_GROUP,
    [u, d, f, p, _, h] = (0, a.Wu)([l.Z], () => [l.Z.isFetching, l.Z.isClaiming, l.Z.fetchError, l.Z.claimError, l.Z.purchases, l.Z.hasPreviouslyFetched]),
    m = (0, r.useRef)(l.Z.hasPreviouslyFetched);
  (0, r.useEffect)(() => {
    m.current = h
  }, [h]);
  let g = (0, r.useRef)(l.Z.fetchError);
  (0, r.useEffect)(() => {
    g.current = f
  }, [f]);
  let E = (0, r.useRef)(l.Z.isFetching);
  return (0, r.useEffect)(() => {
    E.current = u
  }, [u]), (0, r.useEffect)(() => {
    !t || E.current || true === e && m.current && null == g.current || (0, s.qg)({
      variantsReturnStyle: n
    })
  }, [e, n, t]), {
    isClaiming: d,
    fetchPurchasesError: f,
    claimError: p,
    isFetching: u,
    purchases: _,
    hasPreviouslyFetched: h
  }
}
require("./25251.js");
let m = () => h(true),
  g = function(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      {
        purchases: n
      } = h(t);
    return null != e ? n.get(e) : true
  };

function E(e, t) {
  let n = null == e ? true : e.paymentGateway,
    {
      isFetching: r,
      categories: i,
      fetchCategoriesError: a,
      refreshCategories: o
    } = (0, u.Z)({
      paymentGateway: n,
      noOp: null == e ? true : e.noOp,
      logPerf: null == e ? true : e.logPerf,
      countryCode: null == e ? true : e.countryCode
    }, t),
    {
      isClaiming: s,
      fetchPurchasesError: l,
      claimError: c,
      isFetching: d,
      purchases: f,
      hasPreviouslyFetched: p
    } = h(null == e ? true : e.stalePurchasesOK);
  return {
    isFetching: r || d,
    isFetchingCategories: r,
    isFetchingPurchases: d,
    isClaiming: s,
    categories: i,
    purchases: f,
    fetchCategoriesError: a,
    fetchPurchasesError: l,
    claimError: c,
    refreshCategories: o,
    hasPreviouslyFetched: p
  }
}
let b = e => E(_(f({}, null != e ? e : {}), {
  stalePurchasesOK: true
}))