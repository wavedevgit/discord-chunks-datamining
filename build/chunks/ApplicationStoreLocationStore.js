/** Chunk was on web.js **/
/** chunk id: 923834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./35282.js"), require("./415506.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
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
      o(e, t, n[t])
    })
  }
  return e
}
let l = null;

function c(e) {
  let {
    location: t
  } = e;
  l = s({}, t)
}

function u() {
  l = null
}

function d(e) {
  let t = null != e && null != e.search ? e.search : "";
  return null != e ? "".concat(e.pathname).concat(t) : null
}
class f extends(r = Chunk442837.ZP.Store) {
  getCurrentPath() {
    return null != l ? l.pathname : null
  }
  getCurrentRoute() {
    return d(l)
  }
  reset() {
    throw Error("Should not reset the store this way outside of a test environment")
  }
}
o(f, "displayName", "ApplicationStoreLocationStore");
let p = new f(Chunk570140.Z, {
  APPLICATION_STORE_LOCATION_CHANGE: c,
  APPLICATION_STORE_RESET_NAVIGATION: u
})