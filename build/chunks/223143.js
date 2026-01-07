/** Chunk was on web.js **/
/** chunk id: 223143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QJ: () => h,
  QN: () => m,
  ZP: () => g,
  c7: () => _,
  mw: () => E
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk335131 = require("./335131.js"),
  Chunk1870 = require("./1870.js"),
  Chunk267097 = require("./267097.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require("./25251.js");
let p = Chunk311570.v.VARIANTS_GROUP;

function _() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    [t, n, i, l, c, u] = (0, a.Wu)([s.Z], () => [s.Z.isFetching, s.Z.isClaiming, s.Z.fetchError, s.Z.claimError, s.Z.purchases, s.Z.hasPreviouslyFetched]),
    d = (0, r.useRef)(s.Z.hasPreviouslyFetched);
  (0, r.useEffect)(() => {
    d.current = u
  }, [u]);
  let f = (0, r.useRef)(s.Z.fetchError);
  (0, r.useEffect)(() => {
    f.current = i
  }, [i]);
  let _ = (0, r.useRef)(s.Z.isFetching);
  return (0, r.useEffect)(() => {
    _.current = t
  }, [t]), (0, r.useEffect)(() => {
    _.current || true === e && d.current && null == f.current || (0, o.qg)({
      variantsReturnStyle: p
    })
  }, [e]), {
    isClaiming: n,
    fetchPurchasesError: i,
    claimError: l,
    isFetching: t,
    purchases: c,
    hasPreviouslyFetched: u
  }
}
let m = () => _(true),
  h = e => {
    let {
      purchases: t
    } = _(true);
    return null != e ? t.get(e) : true
  };

function g(e, t) {
  let n = null == e ? true : e.paymentGateway,
    {
      isFetching: r,
      categories: i,
      fetchCategoriesError: a,
      refreshCategories: o
    } = (0, l.Z)({
      paymentGateway: n,
      noOp: null == e ? true : e.noOp,
      logPerf: null == e ? true : e.logPerf,
      countryCode: null == e ? true : e.countryCode
    }, t),
    {
      isClaiming: s,
      fetchPurchasesError: c,
      claimError: u,
      isFetching: d,
      purchases: f,
      hasPreviouslyFetched: p
    } = _(null == e ? true : e.stalePurchasesOK);
  return {
    isFetching: r || d,
    isFetchingCategories: r,
    isFetchingPurchases: d,
    isClaiming: s,
    categories: i,
    purchases: f,
    fetchCategoriesError: a,
    fetchPurchasesError: c,
    claimError: u,
    refreshCategories: o,
    hasPreviouslyFetched: p
  }
}
let E = e => g(f(u({}, null != e ? e : {}), {
  stalePurchasesOK: true
}))