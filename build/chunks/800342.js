/** Chunk was on web.js **/
/** chunk id: 800342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JI: () => g,
  QB: () => E,
  S5: () => A,
  VD: () => O,
  W6: () => y,
  b: () => b,
  bf: () => v,
  ct: () => I
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk10716 = require("./10716.js");
require("./587895.js");
var Chunk976860 = require("./976860.js"),
  Chunk67480 = require("./67480.js");
require("./328968.js");
var Chunk147964 = require("./147964.js"),
  Chunk371794 = require("./371794.js"),
  Chunk652215 = require("./652215.js");

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

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function g(e) {
  let t = {
    application_id: e
  };
  return (0, c.aP)({
    url: u.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
    query: t,
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (i.h.dispatch({
    type: "STORE_LISTINGS_FETCH_SUCCESS",
    storeListings: e.body.map(e => _(f({}, e), {
      published: true
    }))
  }), e.body))
}

function E(e) {
  let t = s.A.get(e),
    n = null != t && (l.A.inTestModeForApplication(t.applicationId) || a.A.inDevModeForApplication(t.applicationId));
  return i.h.dispatch({
    type: "STORE_LISTINGS_FETCH_START",
    skuId: e
  }), (0, c.aP)({
    url: n ? u.Rsh.STORE_LISTINGS_SKU(e) : u.Rsh.STORE_PUBLISHED_LISTINGS_SKU(e),
    rejectWithError: false
  }).then(e => {
    n ? i.h.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: e.body
    }) : i.h.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  }).catch(() => {
    i.h.dispatch({
      type: "SKU_FETCH_FAIL",
      skuId: e
    })
  })
}

function y(e) {
  return (0, c.aP)({
    url: u.Rsh.STORE_LISTING(e),
    rejectWithError: false
  }).then(e => {
    i.h.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function b(e) {
  return (0, c.aP)({
    url: u.Rsh.STORE_PUBLISHED_LISTINGS_APPLICATION(e),
    rejectWithError: false
  }).then(e => {
    i.h.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function O() {
  i.h.dispatch({
    type: "APPLICATION_STORE_MATURE_AGREE"
  })
}

function v() {
  (0, o.pX)(u.BVt.APPLICATION_STORE)
}

function A(e) {
  return r.Bo.post({
    url: u.Rsh.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
    oldFormErrors: true,
    rejectWithError: false
  })
}

function I(e, t) {
  let n = (0, c.vy)(e, t),
    {
      pathname: r
    } = n,
    i = h(n, ["pathname"]);
  (0, o.pX)(r, i)
}