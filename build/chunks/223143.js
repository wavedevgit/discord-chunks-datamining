/** Chunk was on web.js **/
/** chunk id: 223143, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => p,
  c7: () => _,
  mw: () => h
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk335131 = require("./335131.js"),
  Chunk1870 = require("./1870.js"),
  Chunk228624 = require("./228624.js"),
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

function _() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = arguments.length > 1 ? arguments[1] : true,
    n = (0, Chunk228624.hv)("useFetchPurchases"),
    [l, c, u, d, f, _] = (0, Chunk399606.Wu)([Chunk1870.Z], () => [Chunk1870.Z.isFetching, Chunk1870.Z.isClaiming, Chunk1870.Z.fetchError, Chunk1870.Z.claimError, Chunk1870.Z.purchases, Chunk1870.Z.hasPreviouslyFetched]),
    p = (0, Chunk73800.useRef)(Chunk1870.Z.hasPreviouslyFetched);
  (0, Chunk73800.useEffect)(() => {
    p.current = _
  }, [_]);
  let h = (0, Chunk73800.useRef)(Chunk1870.Z.fetchError);
  return (0, Chunk73800.useEffect)(() => {
    h.current = u
  }, [u]), (0, Chunk73800.useEffect)(() => {
    true === module && p.current && null == h.current || (0, Chunk335131.qg)({
      variantsReturnStyle: require,
      location: exports
    })
  }, [exports, module, require]), {
    isClaiming: c,
    fetchPurchasesError: u,
    claimError: d,
    isFetching: Chunk267097,
    purchases: f,
    hasPreviouslyFetched: _
  }
}

function p(e, t) {
  let n = null == e ? true : e.paymentGateway,
    {
      isFetching: r,
      categories: i,
      fetchCategoriesError: o,
      refreshCategories: a
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
    } = _(null == e ? true : e.stalePurchasesOK, null == e ? true : e.location);
  return {
    isFetching: r || d,
    isFetchingCategories: r,
    isFetchingPurchases: d,
    isClaiming: s,
    categories: i,
    purchases: f,
    fetchCategoriesError: o,
    fetchPurchasesError: c,
    claimError: u,
    refreshCategories: a,
    hasPreviouslyFetched: p
  }
}
let h = e => p(f(u({}, null != e ? e : {}), {
  stalePurchasesOK: true
}))