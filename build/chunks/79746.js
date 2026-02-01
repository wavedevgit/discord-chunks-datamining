/** Chunk was on 21738 **/
/** chunk id: 79746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk728458 = require("./728458.js"),
  Chunk881615 = require("./881615.js"),
  Chunk789999 = require("./789999.js"),
  Chunk652215 = require("./652215.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = Chunk961350.default.getToken();
class m extends Chunk272355.A {
  _initialize() {
    this.focusedOrForegrounded = (0, d.R)(), a.default.addChangeListener(this.handleAuthenticationChange), i.h.subscribe("WINDOW_FOCUS", this.handleWindowFocus), i.h.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), i.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess), i.h.subscribe("LOGIN_SUCCESS", this.handleLogin), i.h.subscribe("LOGOUT", this.handleLogout), this.scheduleHeartbeatTracking()
  }
  _terminate() {
    this.stopAnalyticHeartbeat(), a.default.removeChangeListener(this.handleAuthenticationChange), i.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), i.h.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), i.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess), i.h.unsubscribe("LOGIN_SUCCESS", this.handleLogin), i.h.unsubscribe("LOGOUT", this.handleLogout)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, h(this, "focusedOrForegrounded", (0, d.R)()), h(this, "heartbeatInterval", new r.IX), h(this, "schedulerStarted", false), h(this, "lastHeartbeatTimestamp", 0), h(this, "maybeStartHeartbeat", () => {
      this.heartbeatInterval.isStarted() || (this.trackHeartbeat(), this.heartbeatInterval.start(5 * o.A.Millis.MINUTE, this.trackHeartbeat))
    }), h(this, "startAnalyticHeartbeat", () => {
      this.schedulerStarted || (this.schedulerStarted = true, c.A.addBreadcrumb({
        category: "ad",
        message: "Starting ad session heartbeat"
      }), this.maybeStartHeartbeat())
    }), h(this, "trackHeartbeat", function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (!t.schedulerStarted && !e) {
        c.A.addBreadcrumb({
          category: "ad",
          message: "Ad heartbeat called but scheduler not started"
        }), t.heartbeatInterval.stop();
        return
      }
      let n = performance.now(),
        r = n - t.lastHeartbeatTimestamp,
        i = 5 * o.A.Millis.MINUTE;
      if (!e && t.lastHeartbeatTimestamp > 0 && r < i) return;
      let l = (0, u.sN)();
      s.default.track(p.HAw.CLIENT_AD_HEARTBEAT, {
        client_ad_session_id: l.uuid,
        client_heartbeat_initialization_timestamp: l.createdAtTimestamp,
        client_heartbeat_version: 3
      }), t.lastHeartbeatTimestamp = n
    }), h(this, "stopAnalyticHeartbeat", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "DEFAULT";
      t.schedulerStarted && (t.schedulerStarted = false, t.lastHeartbeatTimestamp = 0, c.A.addBreadcrumb({
        category: "ad",
        message: "Stopping ad session heartbeat: ".concat(e)
      }), t.heartbeatInterval.stop())
    }), h(this, "scheduleHeartbeatTracking", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "DEFAULT";
      if (t.focusedOrForegrounded && null != g) try {
        t.startAnalyticHeartbeat()
      } catch (e) {
        c.A.captureException(e)
      } else t.stopAnalyticHeartbeat(e)
    }), h(this, "handleLogin", () => {
      this.scheduleHeartbeatTracking(), this.trackHeartbeat(true)
    }), h(this, "handleLogout", () => {
      this.stopAnalyticHeartbeat("USER_LOGOUT"), (0, u.Db)()
    }), h(this, "handleEnrollmentSuccess", () => {
      (0, u.sN)(true)
    }), h(this, "handleWindowFocus", e => {
      let {
        focused: t
      } = e;
      this.focusedOrForegrounded = t, this.scheduleHeartbeatTracking("WINDOW_FOCUS")
    }), h(this, "handleAppStateUpdate", e => {
      let {
        state: t
      } = e;
      this.focusedOrForegrounded = t === p.g6G.ACTIVE, this.scheduleHeartbeatTracking("APP_STATE_UPDATE")
    }), h(this, "handleAuthenticationChange", () => {
      let e = a.default.getToken();
      g !== e && (g = e, (0, u.Db)(), this.stopAnalyticHeartbeat()), this.scheduleHeartbeatTracking()
    })
  }
}
let f = new m