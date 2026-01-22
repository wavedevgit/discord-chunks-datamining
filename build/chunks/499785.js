/** Chunk was on web.js **/
/** chunk id: 499785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk562465 = require("./562465.js"),
  Chunk954571 = require("./954571.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = l(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function c(e, t, n) {
  let {
    trackedActionData: r
  } = t, a = o(t, ["trackedActionData"]), l = {
    url: a.url,
    request_method: n
  };
  return new Promise((t, n) => {
    e(a).then(e => {
      let n = r.properties;
      "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, s({
        status_code: e.status
      }, l, n)), t(e)
    }).catch(e => {
      var t, a;
      let o = r.properties;
      "function" == typeof r.properties && (o = r.properties(e)), (0, i.trackNetworkAction)(r.event, s({
        status_code: e.status,
        error_code: null == (t = e.body) ? true : t.code,
        error_message: null == (a = e.body) ? true : a.message
      }, l, o)), n(e)
    })
  })
}
let u = {
  get: function(e) {
    return c(r.Bo.get, e, "get")
  },
  post: function(e) {
    return c(r.Bo.post, e, "post")
  },
  put: function(e) {
    return c(r.Bo.put, e, "put")
  },
  patch: function(e) {
    return c(r.Bo.patch, e, "patch")
  },
  delete: function(e) {
    return c(r.Bo.del, e, "del")
  }
}