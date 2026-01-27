/** Chunk was on web.js **/
/** chunk id: 544180, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk209489 = require("./209489.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = Chunk652215.wY_.UNKNOWN,
  u = Chunk652215.NKC.UNKNOWN,
  d = null;

function f(e) {
  var t;
  c = null != e.type ? e.type : s.wY_.UNKNOWN, u = null != (t = e.effectiveSpeed) ? t : s.NKC.UNKNOWN, d = e.serviceProvider, _.emitChange()
}
class p extends(r = Chunk311907.Ay.Store) {
  initialize() {
    o.A.getNetworkInformation().then(f), o.A.addChangeCallback(f)
  }
  getType() {
    return c
  }
  getEffectiveConnectionSpeed() {
    return u
  }
  getServiceProvider() {
    return d
  }
}
l(p, "displayName", "NetworkStore");
let _ = new p(Chunk73153.h, {}),
  h = _