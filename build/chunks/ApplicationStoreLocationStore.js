/** Chunk was on web.js **/
/** chunk id: 839067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./747238.js"), require("./65821.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let l = null;

function c(e) {
  let {
    location: t
  } = e;
  l = o({}, t)
}

function u() {
  l = null
}

function d(e) {
  let t = null != e && null != e.search ? e.search : "";
  return null != e ? "".concat(e.pathname).concat(t) : null
}
class f extends(r = Chunk311907.Ay.Store) {
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
s(f, "displayName", "ApplicationStoreLocationStore");
let p = new f(Chunk73153.h, {
  APPLICATION_STORE_LOCATION_CHANGE: c,
  APPLICATION_STORE_RESET_NAVIGATION: u
})