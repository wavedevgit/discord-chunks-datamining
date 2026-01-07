/** Chunk was on web.js **/
/** chunk id: 866960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk931619 = require("./931619.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = Chunk981631.IWh.UNKNOWN,
  u = Chunk981631.IyS.UNKNOWN,
  d = null;

function f(e) {
  var t;
  c = null != e.type ? e.type : s.IWh.UNKNOWN, u = null != (t = e.effectiveSpeed) ? t : s.IyS.UNKNOWN, d = e.serviceProvider, _.emitChange()
}
class p extends(r = Chunk442837.ZP.Store) {
  initialize() {
    o.Z.getNetworkInformation().then(f), o.Z.addChangeCallback(f)
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
let _ = new p(Chunk570140.Z, {}),
  m = _