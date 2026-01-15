/** Chunk was on web.js **/
/** chunk id: 955132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GC: () => v,
  RR: () => O,
  Wb: () => y
});
var Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk15624 = require("./15624.js"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk931619 = require("./931619.js"),
  Chunk358085 = require("./358085.js"),
  Chunk548570 = require("./548570.js"),
  Chunk616810 = require("./616810.js"),
  Chunk755278 = require("./755278.js"),
  Chunk866483 = require("./866483.js");

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
let b = new Chunk710845.Z("ConnectionStore"),
  y = new Chunk548570.Z,
  O = new Chunk616810.Z(y),
  v = new Chunk755278.Z(y);
y.handleIdentify = () => {
  let e = s.default.getToken();
  if (b.verbose("handleIdentify called", {
      hasToken: null != e
    }), null == e) return null;
  let t = a.Z.getState(),
    n = s.default.getInstallationForTracking();
  return {
    token: e,
    properties: m(E(m({}, l.default.getSuperProperties()), {
      client_app_state: t,
      is_fast_connect: false,
      gateway_connect_reasons: _.Pf()
    }), null != n ? {
      installation_id: n
    } : {}),
    presence: O.getInitialState()
  }
}, (0, Chunk358085.isDesktop)() && Chunk579806.Z.remotePowerMonitor.on("resume", () => {
  y.expeditedHeartbeat(5e3, "power monitor resumed")
}), Chunk931619.Z.addOfflineCallback(() => {
  y.networkStateChange(15e3, "network detected offline.", false)
}), Chunk931619.Z.addOnlineCallback(() => {
  y.networkStateChange(5e3, "network detected online.")
}), y.on("disconnect", e => {
  let {
    code: t,
    reason: n
  } = e;
  r.Z.dispatch({
    type: "CONNECTION_CLOSED",
    code: t,
    reason: n
  })
}), y.on("close", e => {
  let {
    code: t,
    reason: n
  } = e;
  r.Z.dispatch({
    type: "CONNECTION_INTERRUPTED",
    code: t,
    reason: n
  })
})