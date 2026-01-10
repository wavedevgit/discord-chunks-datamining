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
  Chunk597688 = require("./597688.js"),
  Chunk952597 = require("./952597.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = 6e5,
  m = 6e5;

function h(e, t, n) {
  (0, c.a)("useMaybeFetchCollectiblesCategoriesShared");
  let u = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
    f = null == e ? true : e.includeBundles,
    h = i.v.VARIANTS_GROUP,
    [g, E, b, y, O, v, S] = (0, a.Wu)([l.Z], () => {
      var e, t;
      return [l.Z.isFetchingCategories, l.Z.lastFetchOptions, l.Z.error, null != (e = l.Z.lastErrorTimestamp) ? e : 0, null != (t = l.Z.lastSuccessfulFetch) ? t : 0, l.Z.categories, l.Z.skipNumCategories]
    });
  return (0, r.useEffect)(() => {
    if (!u || g) return;
    let r = Date.now() - y < m;
    if (b && r) return;
    let i = p(d({}, e), {
        variantsReturnStyle: h,
        includeBundles: f,
        skipNumCategories: S
      }),
      a = !(0, s.oc)(E, i),
      o = Date.now() - O < _;
    (a || !o) && (0, s.F$)(i, t, n)
  }, [u, g, E, O, e, b, f, y, t, n, S, h]), {
    isFetching: g,
    categories: v,
    fetchCategoriesError: b,
    refreshCategories: (0, r.useCallback)(() => {
      let t = p(d({}, e), {
        variantsReturnStyle: h,
        includeBundles: f,
        skipNumCategories: S
      });
      (0, s.F$)(t, true, n)
    }, [e, f, n, S, h])
  }
}