/** Chunk was on web.js **/
/** chunk id: 955132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GC: () => I,
  RR: () => v,
  Wb: () => O
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
  Chunk866483 = require("./866483.js"),
  Chunk58 = require("./58.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = new Chunk710845.Z("ConnectionStore"),
  O = new Chunk548570.Z,
  v = new Chunk616810.Z(O),
  I = new Chunk755278.Z(O);
O.handleIdentify = () => {
  let e = Chunk314897.default.getToken();
  if (y.verbose("handleIdentify called", {
      hasToken: null != module
    }), null == module) return null;
  let t = Chunk15624.Z.getState(),
    n = Chunk58.Z.getLatestTaskRunOn(),
    r = null != require ? (Date.now() - require) / 1e3 : null,
    i = {
      token: module,
      properties: b(g({}, Chunk626135.default.getSuperProperties()), {
        client_app_state: exports,
        is_fast_connect: false,
        latest_headless_tasks: Chunk58.Z.getHeadlessTasks(),
        latest_headless_task_run_seconds_before: Chunk570140,
        gateway_connect_reasons: Chunk866483.Pf()
      }),
      presence: v.getInitialState()
    };
  return Chunk58.Z.clear(), Chunk579806
}, (0, Chunk358085.isDesktop)() && Chunk579806.Z.remotePowerMonitor.on("resume", () => {
  O.expeditedHeartbeat(5e3, "power monitor resumed")
}), Chunk931619.Z.addOfflineCallback(() => {
  Chunk58.Z.recordStartHeadlessTask("GatewaySocket.offline"), O.networkStateChange(15e3, "network detected offline.", false)
}), Chunk931619.Z.addOnlineCallback(() => {
  Chunk58.Z.recordStartHeadlessTask("GatewaySocket.online"), O.networkStateChange(5e3, "network detected online.")
}), O.on("disconnect", e => {
  let {
    code: t,
    reason: n
  } = e;
  r.Z.dispatch({
    type: "CONNECTION_CLOSED",
    code: t,
    reason: n
  })
}), O.on("close", e => {
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