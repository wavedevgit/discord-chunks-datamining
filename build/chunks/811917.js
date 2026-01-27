/** Chunk was on web.js **/
/** chunk id: 811917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk835245 = require("./835245.js"),
  Chunk451988 = require("./451988.js"),
  Chunk439372 = require("./439372.js"),
  Chunk847521 = require("./847521.js"),
  Chunk760751 = require("./760751.js"),
  Chunk383501 = require("./383501.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk973522 = require("./973522.js"),
  Chunk15285 = require("./15285.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 5 * Chunk927813.A.Millis.MINUTE;

function m(e) {
  return e.distributor === p.d3x.ROBLOX ? (0, o.hD)(e) : null
}

function g(e) {
  var t;
  let n = null != e.name ? e.name : "",
    r = "".concat(null != (t = e.id) ? t : e.exePath, ":").concat(n),
    i = m(e);
  return null != i && (r += ":".concat(i)), r
}
class E extends Chunk439372.A {
  _terminate() {
    this.heartbeatInterval.stop()
  }
  handleLogout() {
    this.gameSessions.clear(), this.heartbeatInterval.stop()
  }
  scheduleHeartbeatTracking() {
    (this.processSessionChanges(), 0 === this.gameSessions.size) ? this.heartbeatInterval.stop(): this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(h, this.logRunningGameHeartbeats)
  }
  logHeartbeat(e, t, n) {
    var r, i;
    let a = e.runningGame,
      u = performance.now(),
      _ = t ? 0 : Math.round(u - e.lastHeartbeatTime),
      h = null != (r = a.id) ? r : null == (i = s.A.getGameByName(a.name)) ? true : i.id;
    c.default.track(p.HAw.RUNNING_GAME_HEARTBEAT, {
      game_id: h,
      game_name: a.name,
      game_distributor: a.distributor,
      game_distributor_game_id: a.sku,
      game_metadata: (0, o.MT)(a),
      game_executable: (0, d.Ic)(a.exePath),
      game_detection_enabled: (0, f.Xr)(a),
      initial_heartbeat: t,
      final_heartbeat: n,
      game_session_id: e.sessionId,
      duration_tracked_ms: _,
      rtc_connection_id: l.A.getRTCConnectionId(),
      media_session_id: l.A.getMediaSessionId()
    }), e.lastHeartbeatTime = u
  }
  processSessionChanges() {
    let e = f.Ay.getRunningGames(),
      t = performance.now(),
      n = new Set;
    for (let i of e) {
      if (i.isLauncher) continue;
      let e = g(i);
      if (n.add(e), !this.gameSessions.has(e)) {
        let n = {
          sessionId: (0, r.A)(),
          lastHeartbeatTime: t,
          runningGame: i
        };
        this.gameSessions.set(e, n), this.logHeartbeat(n, true, false)
      }
    }
    for (let [e, t] of this.gameSessions) n.has(e) || (this.logHeartbeat(t, false, true), this.gameSessions.delete(e))
  }
  constructor(...e) {
    super(...e), _(this, "heartbeatInterval", new i.IX), _(this, "gameSessions", new Map), _(this, "actions", {
      RUNNING_GAMES_CHANGE: e => this.handleRunningGamesChanged(e),
      POST_CONNECTION_OPEN: () => this.scheduleHeartbeatTracking(),
      LOGOUT: () => this.handleLogout()
    }), _(this, "handleRunningGamesChanged", e => {
      this.scheduleHeartbeatTracking()
    }), _(this, "logRunningGameHeartbeats", () => {
      for (let e of this.gameSessions.values()) this.logHeartbeat(e, false, false)
    })
  }
}
let y = new E