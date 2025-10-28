/** Chunk was on 1272 **/
/** chunk id: 64514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk960048 = require("./960048.js"),
  Chunk930446 = require("./930446.js"),
  Chunk127438 = require("./127438.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk317770.Z {
  _initialize() {
    this.focusedOrForegrounded = (0, Chunk127438.H)(), Chunk570140.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocus), Chunk570140.Z.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), Chunk570140.Z.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess), Chunk570140.Z.subscribe("LOGIN_SUCCESS", this.handleLogin), Chunk570140.Z.subscribe("LOGOUT", this.handleLogout), this.scheduleHeartbeatTracking()
  }
  _terminate() {
    this.stopAnalyticHeartbeat(), Chunk570140.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), Chunk570140.Z.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), Chunk570140.Z.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess), Chunk570140.Z.unsubscribe("LOGIN_SUCCESS", this.handleLogin), Chunk570140.Z.unsubscribe("LOGOUT", this.handleLogout)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, p(this, "focusedOrForegrounded", (0, u.H)()), p(this, "heartbeatInterval", new r.Xp), p(this, "schedulerStarted", false), p(this, "lastHeartbeatTimestamp", 0), p(this, "maybeStartHeartbeat", () => {
      this.heartbeatInterval.isStarted() || (this.trackHeartbeat(), this.heartbeatInterval.start(5 * s.Z.Millis.MINUTE, this.trackHeartbeat))
    }), p(this, "startAnalyticHeartbeat", () => {
      this.schedulerStarted || (this.schedulerStarted = true, o.Z.addBreadcrumb({
        category: "ad",
        message: "Starting ad session heartbeat"
      }), this.maybeStartHeartbeat())
    }), p(this, "trackHeartbeat", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (!t.schedulerStarted && !e) {
        o.Z.addBreadcrumb({
          category: "ad",
          message: "Ad heartbeat called but scheduler not started"
        }), t.heartbeatInterval.stop();
        return
      }
      let n = performance.now(),
        r = n - t.lastHeartbeatTimestamp,
        i = 5 * s.Z.Millis.MINUTE;
      if (!e && t.lastHeartbeatTimestamp > 0 && r < i) return;
      let l = (0, c.Gy)();
      a.default.track(d.rMx.CLIENT_AD_HEARTBEAT, {
        client_ad_session_id: l.uuid,
        client_heartbeat_initialization_timestamp: l.createdAtTimestamp,
        client_heartbeat_version: 2
      }), t.lastHeartbeatTimestamp = n
    }), p(this, "stopAnalyticHeartbeat", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "DEFAULT";
      t.schedulerStarted && (t.schedulerStarted = false, t.lastHeartbeatTimestamp = 0, o.Z.addBreadcrumb({
        category: "ad",
        message: "Stopping ad session heartbeat: ".concat(e)
      }), t.heartbeatInterval.stop())
    }), p(this, "scheduleHeartbeatTracking", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "DEFAULT";
      if (t.focusedOrForegrounded) try {
        t.startAnalyticHeartbeat()
      } catch (e) {
        o.Z.captureException(e)
      } else t.stopAnalyticHeartbeat(e)
    }), p(this, "handleLogin", () => {
      this.scheduleHeartbeatTracking(), this.trackHeartbeat(true)
    }), p(this, "handleLogout", () => {
      this.stopAnalyticHeartbeat("USER_LOGOUT"), (0, c.GG)()
    }), p(this, "handleEnrollmentSuccess", () => {
      (0, c.Gy)(true)
    }), p(this, "handleWindowFocus", e => {
      let {
        focused: t
      } = e;
      this.focusedOrForegrounded = t, this.scheduleHeartbeatTracking("WINDOW_FOCUS")
    }), p(this, "handleAppStateUpdate", e => {
      let {
        state: t
      } = e;
      this.focusedOrForegrounded = t === d.$7l.ACTIVE, this.scheduleHeartbeatTracking("APP_STATE_UPDATE")
    })
  }
}
let h = new f