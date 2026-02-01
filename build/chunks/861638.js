/** Chunk was on web.js **/
/** chunk id: 861638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ht: () => eo,
  Vc: () => es,
  as: () => ea
}), require("./65821.js"), require("./321073.js");
var Chunk835245 = require("./835245.js"),
  Chunk71931 = require("./71931.js"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk237774 = require("./237774.js"),
  Chunk626584 = require("./626584.js"),
  Chunk142120 = require("./142120.js"),
  Chunk961350 = require("./961350.js"),
  Chunk885576 = require("./885576.js"),
  Chunk383501 = require("./383501.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk728458 = require("./728458.js"),
  Chunk616005 = require("./616005.js"),
  Chunk789999 = require("./789999.js"),
  Chunk604594 = require("./604594.js"),
  Chunk565783 = require("./565783.js"),
  Chunk652215 = require("./652215.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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
  S = 15 * Chunk927813.A.Millis.MINUTE,
  T = Chunk927813.A.Millis.SECOND,
  C = "LAST_CLIENT_HEARTBEAT_SESSION",
  N = "user",
  w = new Chunk626584.A("SessionHeartbeatScheduler"),
  R = null,
  P = null,
  D = 0,
  L = 0,
  x = {
    state: "uninitialized"
  },
  M = Chunk383501.A.getState(),
  j = (0, Chunk789999.R)(),
  k = Chunk961350.default.getToken();

function U() {
  if (null != R) return;
  let e = 0 === L ? 0 : S - (performance.now() - L);
  m.A.addBreadcrumb({
    message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(e / 1e3, " seconds. Scheduling Heartbeat")
  }), R = {
    type: "timeout",
    id: setTimeout(() => {
      B(), R = {
        type: "interval",
        id: setInterval(() => {
          B()
        }, S)
      }
    }, e)
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

function V() {
  G() && (m.A.addBreadcrumb({
    category: N,
    message: "Stopping Analytics Heartbeat"
  }), (0, l.p)())
}

function F() {
  var e;
  let t = null != (e = f.A.getIdleSince()) ? e : 0;
  return {
    is_idle: f.A.isIdle(),
    idle_duration_ms: Date.now() - t,
    is_afk: f.A.isAFK(),
    is_system_suspended: f.A.getSystemSuspended(),
    is_system_locked: f.A.getSystemLocked()
  }
}
async function B() {
  let e = Date.now(),
    t = await eo(),
    n = Date.now();
  if (null == t) return void m.A.captureException(Error("Null session when tracking session heartbeat. Waited ".concat(n - e, "ms")));
  m.A.addBreadcrumb({
    category: N,
    message: "Tracking Heartbeat",
    data: {
      initialized: t.createdAtTimestamp
    }
  });
  let r = A({
    client_heartbeat_initialization_timestamp: t.createdAtTimestamp,
    client_heartbeat_version: I
  }, (0, g.Q)(), F());
  _.default.track(O.HAw.CLIENT_HEARTBEAT, r), L = performance.now(), (0, l.p)()
}

function H() {
  if (!(null != k && (0, b.$)()) || performance.now() - L <= S) return;
  let e = {
    client_heartbeat_version: I
  };
  _.default.track(O.HAw.CLIENT_HEARTBEAT_SKIPPED, e)
}

function Y() {}

function W() {
  let e = [];
  return null != k && (j && e.push("foregrounded"), M === O.S7L.RTC_CONNECTED && e.push("rtc_connected")), {
    active: e.length > 0,
    ver: I,
    reasons: e
  }
}

function K() {
  return W().active
}

function z() {
  K() ? U() : V(), J()
}

function q() {
  null == P && (P = {
    id: setInterval(() => {
      H()
    }, S),
    type: "interval"
  })
}

function Z(e) {
  let t = performance.now();
  if (!(t - D < T)) try {
    o.w.set(C, e), D = t
  } catch (e) {
    m.A.captureException(e)
  }
}

function Q(e) {
  return null == e ? null : e.version !== y.Ir ? (w.warn("Throwing away client session with invalid version: ".concat(e.version, ", expected ").concat(y.Ir)), null) : e
}

function X() {
  o.w.remove(C), x = {
    state: "loaded",
    session: null
  }, V(), L = 0
}

function J() {
  var e;
  null == (e = u.A.getSocket()) || e.handleActiveStateChange(W())
}
async function $() {
  let e = await eo(false);
  if (null != e) {
    var t;
    null == (t = u.A.getSocket()) || t.handleUpdateTimeSpentSessionId(e.createdAtTimestamp, e.uuid, i.C)
  }
}

function ee() {
  let e = d.default.getToken();
  k !== e && (k = e, X()), z()
}

function et() {
  let e = p.A.getState();
  M !== e && (M = e, z())
}

function en(e) {
  let {
    focused: t
  } = e;
  j !== t && (j = t, z())
}

function er(e) {
  let {
    state: t
  } = e, n = t === O.g6G.ACTIVE;
  j !== n && (j = n, z())
}

function ei() {
  M = p.A.getState(), j = (0, E.R)(), ee()
}

function ea() {
  m.A.addBreadcrumb({
    message: "Initializing SessionHeartbeatScheduler"
  }), p.A.addChangeListener(et), d.default.addChangeListener(ee), s.h.subscribe("WINDOW_FOCUS", en), s.h.subscribe("APP_STATE_UPDATE", er), s.h.subscribe("CONNECTION_OPEN", $), z(), q(), a.Ay.initialized.then(ei)
}
async function eo() {
  var e;
  let t = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    n = null,
    a = "loaded" === x.state ? null == (e = x.session) ? true : e.uuid : null;
  try {
    n = "uninitialized" === x.state ? Q(await o.w.getAfterRefresh(C)) : x.session
  } catch (e) {
    m.A.captureException(e)
  }
  return (() => {
    let e = Date.now();
    if (K() ? ((null == n || (0, y.aE)(n)) && (n = {
        uuid: (0, r.A)(),
        createdAtTimestamp: e,
        lastUsedTimestamp: e,
        version: y.Ir
      }, D = 0), n.lastUsedTimestamp = e, Z(n)) : null != n && (0, y.aE)(n) && (n = null), x = {
        state: "loaded",
        session: n
      }, null != n && a !== n.uuid && t) {
      var o;
      null == (o = u.A.getSocket()) || o.handleUpdateTimeSpentSessionId(n.createdAtTimestamp, n.uuid, i.C)
    }
    return n
  })()
}

function es() {
  let e = "uninitialized" === x.state ? Q(o.w.get(C)) : x.session;
  return null == e || (0, y.aE)(e) ? null : e
}