/** Chunk was on web.js **/
/** chunk id: 479801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => h
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk353926 = require("./353926.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk228624 = require("./228624.js");

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
let _ = 6e5,
  p = 6e5;

function h(e, t, n) {
  let c = (0, i.e7)([o.Z], () => o.Z.hasLoadedExperiments),
    d = null == e ? true : e.includeBundles,
    h = (0, l.hv)("useMaybeFetchCollectiblesCategoriesShared"),
    [m, g, E, b, y, O, v] = (0, i.Wu)([s.Z], () => {
      var e, t;
      return [s.Z.isFetchingCategories, s.Z.lastFetchOptions, s.Z.error, null != (e = s.Z.lastErrorTimestamp) ? e : 0, null != (t = s.Z.lastSuccessfulFetch) ? t : 0, s.Z.categories, s.Z.skipNumCategories]
    });
  return (0, r.useEffect)(() => {
    if (!c || m) return;
    let r = Date.now() - b < p;
    if (E && r) return;
    let i = f(u({}, e), {
        includeBundles: d,
        variantsReturnStyle: h,
        skipNumCategories: v
      }),
      o = !(0, a.oc)(g, i),
      s = Date.now() - y < _;
    (o || !s) && (0, a.F$)(i, t, n)
  }, [c, m, g, y, e, E, d, b, h, t, n, v]), {
    isFetching: m,
    categories: O,
    fetchCategoriesError: E,
    refreshCategories: (0, r.useCallback)(() => {
      let t = f(u({}, e), {
        includeBundles: d,
        skipNumCategories: v
      });
      (0, a.F$)(t, true, n)
    }, [e, d, n, v])
  }
}