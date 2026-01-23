/** Chunk was on web.js **/
/** chunk id: 841702, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => g,
  Bf: () => E,
  Mv: () => m,
  Wg: () => h
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk635358 = require("./635358.js"),
  Chunk417597 = require("./417597.js"),
  Chunk49463 = require("./49463.js"),
  Chunk979286 = require("./979286.js"),
  Chunk4227 = require("./4227.js"),
  Chunk233525 = require("./233525.js"),
  Chunk315949 = require("./315949.js");

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
  (0, c.n)("useFetchPurchases");
  let t = (0, a.bG)([s.A], () => s.A.hasLoadedExperiments),
    n = i.g.VARIANTS_GROUP,
    [u, d, f, p, _, h] = (0, a.yK)([l.A], () => [l.A.isFetching, l.A.isClaiming, l.A.fetchError, l.A.claimError, l.A.purchases, l.A.hasPreviouslyFetched]),
    m = (0, r.useRef)(l.A.hasPreviouslyFetched);
  (0, r.useEffect)(() => {
    m.current = h
  }, [h]);
  let g = (0, r.useRef)(l.A.fetchError);
  (0, r.useEffect)(() => {
    g.current = f
  }, [f]);
  let E = (0, r.useRef)(l.A.isFetching);
  return (0, r.useEffect)(() => {
    E.current = u
  }, [u]), (0, r.useEffect)(() => {
    !t || E.current || true === e && m.current && null == g.current || (0, o.gB)({
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
require("./259248.js");
let m = function(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    {
      purchases: n
    } = h(t);
  return null != e ? n.get(e) : true
};

function g(e, t) {
  let n = null == e ? true : e.paymentGateway,
    {
      isFetching: r,
      categories: i,
      fetchCategoriesError: a,
      refreshCategories: s
    } = (0, u.A)({
      paymentGateway: n,
      noOp: null == e ? true : e.noOp,
      logPerf: null == e ? true : e.logPerf,
      countryCode: null == e ? true : e.countryCode
    }, t),
    {
      isClaiming: o,
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
    isClaiming: o,
    categories: i,
    purchases: f,
    fetchCategoriesError: a,
    fetchPurchasesError: l,
    claimError: c,
    refreshCategories: s,
    hasPreviouslyFetched: p
  }
}
let E = e => g(_(f({}, null != e ? e : {}), {
  stalePurchasesOK: true
}))