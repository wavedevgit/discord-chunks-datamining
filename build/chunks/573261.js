/** Chunk was on web.js **/
/** chunk id: 573261, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk544891 = require("./544891.js"),
  Chunk626135 = require("./626135.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  if (null == e) return {};
  var n, r, i = l(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function c(e, t, n) {
  let {
    trackedActionData: r
  } = t, o = s(t, ["trackedActionData"]), l = {
    url: o.url,
    request_method: n
  };
  return new Promise((t, n) => {
    e(o).then(e => {
      let n = r.properties;
      "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, a({
        status_code: e.status
      }, l, n)), t(e)
    }).catch(e => {
      var t, o;
      let s = r.properties;
      "function" == typeof r.properties && (s = r.properties(e)), (0, i.trackNetworkAction)(r.event, a({
        status_code: e.status,
        error_code: null == (t = e.body) ? true : t.code,
        error_message: null == (o = e.body) ? true : o.message
      }, l, s)), n(e)
    })
  })
}
let u = {
  get: function(e) {
    return c(r.tn.get, e, "get")
  },
  post: function(e) {
    return c(r.tn.post, e, "post")
  },
  put: function(e) {
    return c(r.tn.put, e, "put")
  },
  patch: function(e) {
    return c(r.tn.patch, e, "patch")
  },
  delete: function(e) {
    return c(r.tn.del, e, "del")
  }
}