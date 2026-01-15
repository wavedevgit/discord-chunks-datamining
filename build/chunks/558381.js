/** Chunk was on web.js **/
/** chunk id: 558381, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hq: () => y,
  M9: () => v,
  Oj: () => S,
  cj: () => O,
  km: () => E,
  oJ: () => g,
  rV: () => b,
  yt: () => I
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk115130 = require("./115130.js");
require("./812206.js");
var Chunk703656 = require("./703656.js"),
  Chunk55563 = require("./55563.js");
require("./551428.js");
var Chunk695103 = require("./695103.js"),
  Chunk73346 = require("./73346.js"),
  Chunk981631 = require("./981631.js");

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
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  let t = {
    application_id: e
  };
  return (0, c.Kb)({
    url: u.ANM.STORE_PUBLISHED_LISTINGS_SKUS,
    query: t,
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => (i.Z.dispatch({
    type: "STORE_LISTINGS_FETCH_SUCCESS",
    storeListings: e.body.map(e => _(f({}, e), {
      published: true
    }))
  }), e.body))
}

function E(e) {
  let t = s.Z.get(e),
    n = null != t && (l.Z.inTestModeForApplication(t.applicationId) || a.Z.inDevModeForApplication(t.applicationId));
  return i.Z.dispatch({
    type: "STORE_LISTINGS_FETCH_START",
    skuId: e
  }), (0, c.Kb)({
    url: n ? u.ANM.STORE_LISTINGS_SKU(e) : u.ANM.STORE_PUBLISHED_LISTINGS_SKU(e),
    rejectWithError: false
  }).then(e => {
    n ? i.Z.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: e.body
    }) : i.Z.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  }).catch(() => {
    i.Z.dispatch({
      type: "SKU_FETCH_FAIL",
      skuId: e
    })
  })
}

function b(e) {
  return (0, c.Kb)({
    url: u.ANM.STORE_LISTING(e),
    rejectWithError: false
  }).then(e => {
    i.Z.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function y(e) {
  return (0, c.Kb)({
    url: u.ANM.STORE_PUBLISHED_LISTINGS_APPLICATION(e),
    rejectWithError: false
  }).then(e => {
    i.Z.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function O() {
  i.Z.dispatch({
    type: "APPLICATION_STORE_MATURE_AGREE"
  })
}

function v() {
  (0, o.uL)(u.Z5c.APPLICATION_STORE)
}

function S(e) {
  return r.tn.post({
    url: u.ANM.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
    oldFormErrors: true,
    rejectWithError: false
  })
}

function I(e, t) {
  let n = (0, c.ZI)(e, t),
    {
      pathname: r
    } = n,
    i = h(n, ["pathname"]);
  (0, o.uL)(r, i)
}