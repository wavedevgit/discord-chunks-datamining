/** Chunk was on web.js **/
/** chunk id: 364111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => b
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
  Chunk353926 = require("./353926.js"),
  Chunk358085 = require("./358085.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk52030 = require("./52030.js"),
  Chunk447988 = require("./447988.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = 6e5,
  g = 6e5,
  E = Chunk311570.v.VARIANTS_GROUP;

function b(e, t, n) {
  let i = arguments.length > 3 && true !== arguments[3] && arguments[3],
    f = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
    p = (0, a.e7)([c.Z], () => c.Z.skipNumCategories),
    b = (0, s.isDesktop)() || (0, s.isWeb)(),
    [y, O, v, I, T, S, A, C] = (0, a.Wu)([u.Z], () => {
      var t, n;
      return [u.Z.getShopBlocks(e), null != (t = u.Z.getLastSuccessfulFetch(e)) ? t : 0, null != (n = u.Z.getLastErrorTimestamp(e)) ? n : 0, u.Z.getLastFetchOptions(e), u.Z.getFetchShopHomeError(e), u.Z.getIsFetchingShopHome(e), u.Z.getHasKnownStaleData(e), u.Z.getShopHomeConfigOverride()]
    }),
    N = (0, r.useMemo)(() => h(_({}, t), {
      variantsReturnStyle: E,
      includeBundles: b,
      includePopularPicks: true,
      includeDynamicBlocks: true,
      shopHomeConfig: C,
      skipNumCategories: p
    }), [t, b, C, p]),
    R = (0, r.useMemo)(() => !(0, l.oc)(I, N), [I, N]),
    P = (0, d.J)(y, null != S && S, i),
    w = (0, r.useMemo)(() => !P && Date.now() - O < m, [O, P]);
  return (0, r.useEffect)(() => {
    if (!f || S) return;
    let t = Date.now() - v < g;
    (null == T || !t) && (R || !w || A) && (0, l.Ov)(e, N, n)
  }, [f, S, T, v, w, A, R, N, e, n]), {
    isFetchingShopHome: S,
    fetchShopHomeError: T,
    shopBlocks: y,
    refreshShopHome: (0, r.useCallback)(() => {
      (0, l.Ov)(e, N, n)
    }, [e, N, n])
  }
}