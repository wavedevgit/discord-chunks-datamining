/** Chunk was on web.js **/
/** chunk id: 531013, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  OV: () => O,
  Xo: () => v,
  sZ: () => b
});
var Chunk73153 = require("./73153.js"),
  Chunk77729 = require("./77729.js"),
  Chunk183636 = require("./183636.js"),
  Chunk626584 = require("./626584.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk209489 = require("./209489.js"),
  Chunk723702 = require("./723702.js"),
  Chunk186840 = require("./186840.js"),
  Chunk261811 = require("./261811.js"),
  Chunk500496 = require("./500496.js"),
  Chunk469177 = require("./469177.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = new Chunk626584.A("ConnectionStore"),
  b = new Chunk186840.A,
  O = new Chunk261811.A(b),
  v = new Chunk500496.A(b);
b.handleIdentify = () => {
  let e = o.default.getToken();
  if (y.verbose("handleIdentify called", {
      hasToken: null != e
    }), null == e) return null;
  let t = a.A.getState(),
    n = o.default.getInstallationForTracking();
  return {
    token: e,
    properties: m(E(m({}, l.default.getSuperProperties()), {
      client_app_state: t,
      is_fast_connect: false,
      gateway_connect_reasons: _.L7()
    }), null != n ? {
      installation_id: n
    } : {}),
    presence: O.getInitialState()
  }
}, (0, Chunk723702.isDesktop)() && Chunk77729.A.remotePowerMonitor.on("resume", () => {
  b.expeditedHeartbeat(5e3, "power monitor resumed")
}), Chunk209489.A.addOfflineCallback(() => {
  b.networkStateChange(15e3, "network detected offline.", false)
}), Chunk209489.A.addOnlineCallback(() => {
  b.networkStateChange(5e3, "network detected online.")
}), b.on("disconnect", e => {
  let {
    code: t,
    reason: n
  } = e;
  r.h.dispatch({
    type: "CONNECTION_CLOSED",
    code: t,
    reason: n
  })
}), b.on("close", e => {
  let {
    code: t,
    reason: n
  } = e;
  r.h.dispatch({
    type: "CONNECTION_INTERRUPTED",
    code: t,
    reason: n
  })
})