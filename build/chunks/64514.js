/** Chunk was on 1272 **/
/** chunk id: 64514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk960048 = require("./960048.js"),
  Chunk930446 = require("./930446.js"),
  Chunk127438 = require("./127438.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = Chunk314897.default.getToken();
class m extends Chunk317770.Z {
  _initialize() {
    this.focusedOrForegrounded = (0, d.H)(), a.default.addChangeListener(this.handleAuthenticationChange), i.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocus), i.Z.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), i.Z.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess), i.Z.subscribe("LOGIN_SUCCESS", this.handleLogin), i.Z.subscribe("LOGOUT", this.handleLogout), this.scheduleHeartbeatTracking()
  }
  _terminate() {
    this.stopAnalyticHeartbeat(), a.default.removeChangeListener(this.handleAuthenticationChange), i.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), i.Z.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), i.Z.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess), i.Z.unsubscribe("LOGIN_SUCCESS", this.handleLogin), i.Z.unsubscribe("LOGOUT", this.handleLogout)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, f(this, "focusedOrForegrounded", (0, d.H)()), f(this, "heartbeatInterval", new r.Xp), f(this, "schedulerStarted", false), f(this, "lastHeartbeatTimestamp", 0), f(this, "maybeStartHeartbeat", () => {
      this.heartbeatInterval.isStarted() || (this.trackHeartbeat(), this.heartbeatInterval.start(5 * s.Z.Millis.MINUTE, this.trackHeartbeat))
    }), f(this, "startAnalyticHeartbeat", () => {
      this.schedulerStarted || (this.schedulerStarted = true, c.Z.addBreadcrumb({
        category: "ad",
        message: "Starting ad session heartbeat"
      }), this.maybeStartHeartbeat())
    }), f(this, "trackHeartbeat", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (!t.schedulerStarted && !e) {
        c.Z.addBreadcrumb({
          category: "ad",
          message: "Ad heartbeat called but scheduler not started"
        }), t.heartbeatInterval.stop();
        return
      }
      let n = performance.now(),
        r = n - t.lastHeartbeatTimestamp,
        i = 5 * s.Z.Millis.MINUTE;
      if (!e && t.lastHeartbeatTimestamp > 0 && r < i) return;
      let l = (0, u.Gy)();
      o.default.track(p.rMx.CLIENT_AD_HEARTBEAT, {
        client_ad_session_id: l.uuid,
        client_heartbeat_initialization_timestamp: l.createdAtTimestamp,
        client_heartbeat_version: 3
      }), t.lastHeartbeatTimestamp = n
    }), f(this, "stopAnalyticHeartbeat", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "DEFAULT";
      t.schedulerStarted && (t.schedulerStarted = false, t.lastHeartbeatTimestamp = 0, c.Z.addBreadcrumb({
        category: "ad",
        message: "Stopping ad session heartbeat: ".concat(e)
      }), t.heartbeatInterval.stop())
    }), f(this, "scheduleHeartbeatTracking", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "DEFAULT";
      if (t.focusedOrForegrounded && null != g) try {
        t.startAnalyticHeartbeat()
      } catch (e) {
        c.Z.captureException(e)
      } else t.stopAnalyticHeartbeat(e)
    }), f(this, "handleLogin", () => {
      this.scheduleHeartbeatTracking(), this.trackHeartbeat(true)
    }), f(this, "handleLogout", () => {
      this.stopAnalyticHeartbeat("USER_LOGOUT"), (0, u.GG)()
    }), f(this, "handleEnrollmentSuccess", () => {
      (0, u.Gy)(true)
    }), f(this, "handleWindowFocus", e => {
      let {
        focused: t
      } = e;
      this.focusedOrForegrounded = t, this.scheduleHeartbeatTracking("WINDOW_FOCUS")
    }), f(this, "handleAppStateUpdate", e => {
      let {
        state: t
      } = e;
      this.focusedOrForegrounded = t === p.$7l.ACTIVE, this.scheduleHeartbeatTracking("APP_STATE_UPDATE")
    }), f(this, "handleAuthenticationChange", () => {
      let e = a.default.getToken();
      g !== e && (g = e, (0, u.GG)(), this.stopAnalyticHeartbeat()), this.scheduleHeartbeatTracking()
    })
  }
}
let h = new m