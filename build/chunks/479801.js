/** Chunk was on web.js **/
/** chunk id: 479801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => h
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
  Chunk353926 = require("./353926.js"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js");

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
let p = 6e5,
  _ = 6e5,
  m = Chunk311570.v.VARIANTS_GROUP;

function h(e, t, n) {
  let i = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
    c = null == e ? true : e.includeBundles,
    [d, h, g, E, b, y, O] = (0, a.Wu)([l.Z], () => {
      var e, t;
      return [l.Z.isFetchingCategories, l.Z.lastFetchOptions, l.Z.error, null != (e = l.Z.lastErrorTimestamp) ? e : 0, null != (t = l.Z.lastSuccessfulFetch) ? t : 0, l.Z.categories, l.Z.skipNumCategories]
    });
  return (0, r.useEffect)(() => {
    if (!i || d) return;
    let r = Date.now() - E < _;
    if (g && r) return;
    let a = f(u({}, e), {
        variantsReturnStyle: m,
        includeBundles: c,
        skipNumCategories: O
      }),
      o = !(0, s.oc)(h, a),
      l = Date.now() - b < p;
    (o || !l) && (0, s.F$)(a, t, n)
  }, [i, d, h, b, e, g, c, E, t, n, O]), {
    isFetching: d,
    categories: y,
    fetchCategoriesError: g,
    refreshCategories: (0, r.useCallback)(() => {
      let t = f(u({}, e), {
        variantsReturnStyle: m,
        includeBundles: c,
        skipNumCategories: O
      });
      (0, s.F$)(t, true, n)
    }, [e, c, n, O])
  }
}