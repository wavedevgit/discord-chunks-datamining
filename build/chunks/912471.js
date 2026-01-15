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
  w = null,
  R = null,
  D = 0,
  x = 0,
  L = {
    state: "uninitialized"
  },
  j = Chunk19780.Z.getState(),
  M = (0, Chunk127438.H)(),
  k = Chunk314897.default.getToken();

function U() {
  if (null != w) return;
  let e = 0 === x ? 0 : T - (performance.now() - x);
  m.Z.addBreadcrumb({
    message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(e / 1e3, " seconds. Scheduling Heartbeat")
  }), w = {
    type: "timeout",
    id: setTimeout(() => {
      B(), w = {
        type: "interval",
        id: setInterval(() => {
          B()
        }, T)
      }
    }, e)
  }
}

function G() {
  if (null == w) returnfalse;
  switch (w.type) {
    case "timeout":
      clearTimeout(w.id);
      break;
    case "interval":
      clearInterval(w.id);
      break;
    default:
      w.type
  }
  return w = null, true
}

function Z() {
  G() && (m.Z.addBreadcrumb({
    category: N,
    message: "Stopping Analytics Heartbeat"
  }), (0, l.Z)())
}

function F() {
  var e;
  let t = null != (e = f.Z.getIdleSince()) ? e : 0;
  return {
    is_idle: f.Z.isIdle(),
    idle_duration_ms: Date.now() - t,
    is_afk: f.Z.isAFK(),
    is_system_suspended: f.Z.getSystemSuspended(),
    is_system_locked: f.Z.getSystemLocked()
  }
}
async function B() {
  let e = Date.now(),
    t = await eo(),
    n = Date.now();
  if (null == t) return void m.Z.captureException(Error("Null session when tracking session heartbeat. Waited ".concat(n - e, "ms")));
  m.Z.addBreadcrumb({
    category: N,
    message: "Tracking Heartbeat",
    data: {
      initialized: t.createdAtTimestamp
    }
  });
  let r = S({
    client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
    client_heartbeat_version: I
  }, (0, g.O)(), F());
  _.default.track(O.rMx.CLIENT_HEARTBEAT, r), x = performance.now(), (0, l.Z)()
}

function V() {
  if (!(null != k && (0, y.y)()) || performance.now() - x <= T) return;
  let e = {
    client_heartbeat_version: I
  };
  _.default.track(O.rMx.CLIENT_HEARTBEAT_SKIPPED, e)
}

function H() {}

function Y() {
  let e = [];
  return null != k && (M && e.push("foregrounded"), j === O.hes.RTC_CONNECTED && e.push("rtc_connected")), {
    active: e.length > 0,
    ver: I,
    reasons: e
  }
}

function W() {
  return Y().active
}

function K() {
  W() ? U() : Z(), J()
}

function z() {
  null == R && (R = {
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
    m.Z.captureException(e)
  }
}

function Q(e) {
  return null == e ? null : e.version !== b.EI ? (P.warn("Throwing away client session with invalid version: ".concat(e.version, ", expected ").concat(b.EI)), null) : e
}

function X() {
  o.K.remove(A), L = {
    state: "loaded",
    session: null
  }, Z(), x = 0
}

function J() {
  var e;
  null == (e = u.Z.getSocket()) || e.handleActiveStateChange(Y())
}
async function $() {
  let e = await eo(false);
  if (null != e) {
    var t;
    null == (t = u.Z.getSocket()) || t.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, i.s)
  }
}

function ee() {
  let e = d.default.getToken();
  k !== e && (k = e, X()), K()
}

function et() {
  let e = p.Z.getState();
  j !== e && (j = e, K())
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
  j = p.Z.getState(), M = (0, E.H)(), ee()
}

function ea() {
  m.Z.addBreadcrumb({
    message: "Initializing SessionHeartbeatScheduler"
  }), p.Z.addChangeListener(et), d.default.addChangeListener(ee), s.Z.subscribe("WINDOW_FOCUS", en), s.Z.subscribe("APP_STATE_UPDATE", er), s.Z.subscribe("CONNECTION_OPEN", $), K(), z(), a.ZP.initialized.then(ei)
}
async function eo() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    n = null,
    a = "loaded" === L.state ? null == (e = L.session) ? true : e.uuid : null;
  try {
    n = "uninitialized" === L.state ? Q(await o.K.getAfterRefresh(A)) : L.session
  } catch (e) {
    m.Z.captureException(e)
  }
  return (() => {
    let e = Date.now();
    if (W() ? ((null == n || (0, b.qK)(n)) && (n = {
        uuid: (0, r.Z)(),
        createdAtTimestamp: e,
        lastUsedTimestamp: e,
        version: b.EI
      }, D = 0), n.lastUsedTimestamp = e, q(n)) : null != n && (0, b.qK)(n) && (n = null), L = {
        state: "loaded",
        session: n
      }, null != n && a !== n.uuid && t) {
      var o;
      null == (o = u.Z.getSocket()) || o.handleUpdateTimeSpentSessionId(n.createdAtTimestamp, n.uuid, i.s)
    }
    return n
  })()
}

function es() {
  let e = "uninitialized" === L.state ? Q(o.K.get(A)) : L.session;
  return null == e || (0, b.qK)(e) ? null : e
}