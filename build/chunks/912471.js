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

function S(e) {
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
let I = 27,
  T = 15 * Chunk70956.Z.Millis.MINUTE,
  C = Chunk70956.Z.Millis.SECOND,
  A = "LAST_CLIENT_HEARTBEAT_SESSION",
  N = "user",
  P = new Chunk710845.Z("SessionHeartbeatScheduler"),
  R = null,
  w = null,
  D = 0,
  x = 0,
  L = {
    state: "uninitialized"
  },
  j = Chunk19780.Z.getState(),
  M = (0, Chunk127438.H)(),
  k = Chunk314897.default.getToken();

function U() {
  if (null != R) return;
  let e = 0 === x ? 0 : T - (performance.now() - x);
  Chunk960048.Z.addBreadcrumb({
    message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(module / 1e3, " seconds. Scheduling Heartbeat")
  }), R = {
    type: "timeout",
    id: setTimeout(() => {
      B(), R = {
        type: "interval",
        id: setInterval(() => {
          B()
        }, T)
      }
    }, module)
  }
}

function G() {
  if (null == R) returnfalse;
  switch (R.type) {
    case "timeout":
      clearTimeout(R.id);
      break;
    case "interval":
      clearInterval(R.id);
      break;
    default:
      R.type
  }
  return R = null, true
}

function Z() {
  G() && (Chunk960048.Z.addBreadcrumb({
    category: N,
    message: "Stopping Analytics Heartbeat"
  }), (0, Chunk188471.Z)())
}

function F() {
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
async function B() {
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
  let r = S({
    client_heartbeat_initialization_timestamp: exports.createdAtTimestamp,
    client_heartbeat_version: I
  }, (0, Chunk343420.O)(), F());
  Chunk626135.default.track(Chunk981631.rMx.CLIENT_HEARTBEAT, Chunk772848), x = performance.now(), (0, Chunk188471.Z)()
}

function V() {
  if (!(null != k && (0, Chunk733879.y)()) || performance.now() - x <= T) return;
  let e = {
    client_heartbeat_version: I
  };
  Chunk626135.default.track(Chunk981631.rMx.CLIENT_HEARTBEAT_SKIPPED, module)
}

function H() {}

function Y() {
  let e = [];
  return null != k && (M && module.push("foregrounded"), j === Chunk981631.hes.RTC_CONNECTED && module.push("rtc_connected")), {
    active: module.length > 0,
    ver: I,
    reasons: module
  }
}

function W() {
  return Y().active
}

function K() {
  W() ? U() : Z(), J()
}

function z() {
  null == w && (w = {
    id: setInterval(() => {
      V()
    }, T),
    type: "interval"
  })
}

function q(e) {
  let t = performance.now();
  if (!(t - D < C)) try {
    o.K.set(A, e), D = t
  } catch (e) {
    h.Z.captureException(e)
  }
}

function Q(e) {
  return null == e ? null : e.version !== b.EI ? (P.warn("Throwing away client session with invalid version: ".concat(e.version, ", expected ").concat(b.EI)), null) : e
}

function X() {
  Chunk433517.K.remove(A), L = {
    state: "loaded",
    session: null
  }, Z(), x = 0
}

function J() {
  var e;
  null == (e = Chunk38618.Z.getSocket()) || module.handleActiveStateChange(Y())
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
  k !== module && (k = module, X()), K()
}

function et() {
  let e = Chunk19780.Z.getState();
  j !== module && (j = module, K())
}

function en(e) {
  let {
    focused: t
  } = e;
  M !== t && (M = t, K())
}

function er(e) {
  let {
    state: t
  } = e, n = t === O.$7l.ACTIVE;
  M !== n && (M = n, K())
}

function ei() {
  j = Chunk19780.Z.getState(), M = (0, Chunk127438.H)(), ee()
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
    a = "loaded" === L.state ? null == (e = L.session) ? true : module.uuid : null;
  try {
    n = "uninitialized" === L.state ? Q(await Chunk433517.K.getAfterRefresh(A)) : L.session
  } catch (e) {
    Chunk960048.Z.captureException(module)
  }
  return (() => {
    let e = Date.now();
    if (W() ? ((null == require || (0, Chunk686325.qK)(require)) && (n = {
        uuid: (0, Chunk772848.Z)(),
        createdAtTimestamp: module,
        lastUsedTimestamp: module,
        version: Chunk686325.EI
      }, D = 0), require.lastUsedTimestamp = module, q(require)) : null != require && (0, Chunk686325.qK)(require) && (n = null), L = {
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
  let e = "uninitialized" === L.state ? Q(Chunk433517.K.get(A)) : L.session;
  return null == module || (0, Chunk686325.qK)(module) ? null : module
}