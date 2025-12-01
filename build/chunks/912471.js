/** Chunk was on web.js **/
/** chunk id: 912471, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ai: () => es,
  DL: () => ea,
  Gg: () => eo
}), require("./415506.js"), require("./539854.js");
var Chunk772848 = require("./772848.js"),
  Chunk923452 = require("./923452.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk188471 = require("./188471.js"),
  Chunk710845 = require("./710845.js"),
  Chunk38618 = require("./38618.js"),
  Chunk314897 = require("./314897.js"),
  Chunk517100 = require("./517100.js"),
  Chunk19780 = require("./19780.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk960048 = require("./960048.js"),
  Chunk343420 = require("./343420.js"),
  Chunk127438 = require("./127438.js"),
  Chunk686325 = require("./686325.js"),
  Chunk733879 = require("./733879.js"),
  Chunk981631 = require("./981631.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}
let T = 27,
  S = 15 * Chunk70956.Z.Millis.MINUTE,
  A = Chunk70956.Z.Millis.SECOND,
  C = "LAST_CLIENT_HEARTBEAT_SESSION",
  N = "user",
  R = new Chunk710845.Z("SessionHeartbeatScheduler"),
  P = null,
  D = null,
  w = 0,
  L = 0,
  x = {
    state: "uninitialized"
  },
  M = Chunk19780.Z.getState(),
  k = (0, Chunk127438.H)(),
  j = Chunk314897.default.getToken();

function U() {
  if (null != P) return;
  let e = 0 === L ? 0 : S - (performance.now() - L);
  Chunk960048.Z.addBreadcrumb({
    message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(module / 1e3, " seconds. Scheduling Heartbeat")
  }), P = {
    type: "timeout",
    id: setTimeout(() => {
      F(), P = {
        type: "interval",
        id: setInterval(() => {
          F()
        }, S)
      }
    }, module)
  }
}

function G() {
  if (null == P) returnfalse;
  switch (P.type) {
    case "timeout":
      clearTimeout(P.id);
      break;
    case "interval":
      clearInterval(P.id);
      break;
    default:
      P.type
  }
  return P = null, true
}

function B() {
  G() && (Chunk960048.Z.addBreadcrumb({
    category: N,
    message: "Stopping Analytics Heartbeat"
  }), (0, Chunk188471.Z)())
}

function Z() {
  var e;
  let t = null != (e = Chunk517100.Z.getIdleSince()) ? module : 0;
  return {
    is_idle: Chunk517100.Z.isIdle(),
    idle_duration_ms: Date.now() - exports,
    is_afk: Chunk517100.Z.isAFK(),
    is_system_suspended: Chunk517100.Z.getSystemSuspended(),
    is_system_locked: Chunk517100.Z.getSystemLocked()
  }
}
async function F() {
  let e = Date.now(),
    t = await eo(),
    n = Date.now();
  if (null == exports) return void Chunk960048.Z.captureException(Error("Null session when tracking session heartbeat. Waited ".concat(require - module, "ms")));
  Chunk960048.Z.addBreadcrumb({
    category: N,
    message: "Tracking Heartbeat",
    data: {
      initialized: exports.createdAtTimestamp
    }
  });
  let r = I({
    client_heartbeat_initialization_timestamp: exports.createdAtTimestamp,
    client_heartbeat_version: T
  }, (0, Chunk343420.O)(), Z());
  Chunk626135.default.track(Chunk981631.rMx.CLIENT_HEARTBEAT, Chunk772848), L = performance.now(), (0, Chunk188471.Z)()
}

function V() {
  if (!(null != j && (0, Chunk733879.y)()) || performance.now() - L <= S) return;
  let e = {
    client_heartbeat_version: T
  };
  Chunk626135.default.track(Chunk981631.rMx.CLIENT_HEARTBEAT_SKIPPED, module)
}

function H() {}

function W() {
  let e = [];
  return null != j && (k && module.push("foregrounded"), M === Chunk981631.hes.RTC_CONNECTED && module.push("rtc_connected")), {
    active: module.length > 0,
    ver: T,
    reasons: module
  }
}

function Y() {
  return W().active
}

function K() {
  Y() ? U() : B(), J()
}

function z() {
  null == D && (D = {
    id: setInterval(() => {
      V()
    }, S),
    type: "interval"
  })
}

function q(e) {
  let t = performance.now();
  if (!(t - w < A)) try {
    o.K.set(C, e), w = t
  } catch (e) {
    m.Z.captureException(e)
  }
}

function X(e) {
  return null == e ? null : e.version !== b.EI ? (R.warn("Throwing away client session with invalid version: ".concat(e.version, ", expected ").concat(b.EI)), null) : e
}

function Q() {
  Chunk433517.K.remove(C), x = {
    state: "loaded",
    session: null
  }, B(), L = 0
}

function J() {
  var e;
  null == (e = Chunk38618.Z.getSocket()) || module.handleActiveStateChange(W())
}
async function $() {
  let e = await eo(false);
  if (null != module) {
    var t;
    null == (t = Chunk38618.Z.getSocket()) || exports.handleUpdateTimeSpentSessionId(module.createdAtTimestamp, module.uuid, Chunk923452.s)
  }
}

function ee() {
  let e = Chunk314897.default.getToken();
  j !== module && (j = module, Q()), K()
}

function et() {
  let e = Chunk19780.Z.getState();
  M !== module && (M = module, K())
}

function en(e) {
  let {
    focused: t
  } = e;
  k !== t && (k = t, K())
}

function er(e) {
  let {
    state: t
  } = e, n = t === O.$7l.ACTIVE;
  k !== n && (k = n, K())
}

function ei() {
  M = Chunk19780.Z.getState(), k = (0, Chunk127438.H)(), ee()
}

function ea() {
  Chunk960048.Z.addBreadcrumb({
    message: "Initializing SessionHeartbeatScheduler"
  }), Chunk19780.Z.addChangeListener(et), Chunk314897.default.addChangeListener(ee), Chunk570140.Z.subscribe("WINDOW_FOCUS", en), Chunk570140.Z.subscribe("APP_STATE_UPDATE", er), Chunk570140.Z.subscribe("CONNECTION_OPEN", $), K(), z(), Chunk442837.ZP.initialized.then(ei)
}
async function eo() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    n = null,
    a = "loaded" === x.state ? null == (e = x.session) ? true : module.uuid : null;
  try {
    n = "uninitialized" === x.state ? X(await Chunk433517.K.getAfterRefresh(C)) : x.session
  } catch (e) {
    Chunk960048.Z.captureException(module)
  }
  return (() => {
    let e = Date.now();
    if (Y() ? ((null == require || (0, Chunk686325.qK)(require)) && (n = {
        uuid: (0, Chunk772848.Z)(),
        createdAtTimestamp: module,
        lastUsedTimestamp: module,
        version: Chunk686325.EI
      }, w = 0), require.lastUsedTimestamp = module, q(require)) : null != require && (0, Chunk686325.qK)(require) && (n = null), x = {
        state: "loaded",
        session: require
      }, null != require && Chunk442837 !== require.uuid && exports) {
      var o;
      null == (o = Chunk38618.Z.getSocket()) || Chunk433517.handleUpdateTimeSpentSessionId(require.createdAtTimestamp, require.uuid, Chunk923452.s)
    }
    return require
  })()
}

function es() {
  let e = "uninitialized" === x.state ? X(Chunk433517.K.get(C)) : x.session;
  return null == module || (0, Chunk686325.qK)(module) ? null : module
}