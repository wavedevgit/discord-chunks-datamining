/** Chunk was on web.js **/
/** chunk id: 747198, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => m
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk635358 = require("./635358.js"),
  Chunk311907 = require("./311907.js"),
  Chunk49463 = require("./49463.js"),
  Chunk979286 = require("./979286.js"),
  Chunk590180 = require("./590180.js"),
  Chunk233525 = require("./233525.js");

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
  h = 6e5;

function m(e, t, n) {
  (0, c.n)("useMaybeFetchCollectiblesCategoriesShared");
  let u = (0, a.bG)([s.A], () => s.A.hasLoadedExperiments),
    f = null == e ? true : e.includeBundles,
    m = i.g.VARIANTS_GROUP,
    [g, E, y, b, O, v, A] = (0, a.yK)([l.A], () => {
      var e, t;
      return [l.A.isFetchingCategories, l.A.lastFetchOptions, l.A.error, null != (e = l.A.lastErrorTimestamp) ? e : 0, null != (t = l.A.lastSuccessfulFetch) ? t : 0, l.A.categories, l.A.skipNumCategories]
    });
  return (0, r.useEffect)(() => {
    if (!u || g) return;
    let r = Date.now() - b < h;
    if (y && r) return;
    let i = p(d({}, e), {
        variantsReturnStyle: m,
        includeBundles: f,
        skipNumCategories: A
      }),
      a = !(0, o.gn)(E, i),
      s = Date.now() - O < _;
    (a || !s) && (0, o.CK)(i, t, n)
  }, [u, g, E, O, e, y, f, b, t, n, A, m]), {
    isFetching: g,
    categories: v,
    fetchCategoriesError: y,
    refreshCategories: (0, r.useCallback)(() => {
      let t = p(d({}, e), {
        variantsReturnStyle: m,
        includeBundles: f,
        skipNumCategories: A
      });
      (0, o.CK)(t, true, n)
    }, [e, f, n, A, m])
  }
}