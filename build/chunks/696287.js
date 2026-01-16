/** Chunk was on web.js **/
/** chunk id: 696287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk772848 = require("./772848.js"),
  Chunk846519 = require("./846519.js"),
  Chunk147913 = require("./147913.js"),
  Chunk509003 = require("./509003.js"),
  Chunk404577 = require("./404577.js"),
  Chunk19780 = require("./19780.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk581567 = require("./581567.js"),
  Chunk594190 = require("./594190.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 5 * Chunk70956.Z.Millis.MINUTE;

function m(e) {
  return e.distributor === p.GQo.ROBLOX ? (0, o.x3)(e) : null
}

function g(e) {
  var t;
  let n = null != e.name ? e.name : "",
    r = "".concat(null != (t = e.id) ? t : e.exePath, ":").concat(n),
    i = m(e);
  return null != i && (r += ":".concat(i)), r
}
class E extends Chunk147913.Z {
  _terminate() {
    this.heartbeatInterval.stop()
  }
  handleLogout() {
    this.gameSessions.clear(), this.heartbeatInterval.stop()
  }
  scheduleHeartbeatTracking() {
    if (this.processSessionChanges(), 0 === this.gameSessions.size) return void this.heartbeatInterval.stop();
    this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(h, this.logRunningGameHeartbeats)
  }
  logHeartbeat(e, t, n) {
    var r, i;
    let a = e.runningGame,
      u = performance.now(),
      _ = t ? 0 : Math.round(u - e.lastHeartbeatTime),
      h = null != (i = a.id) ? i : null == (r = s.Z.getGameByName(a.name)) ? true : r.id;
    c.default.track(p.rMx.RUNNING_GAME_HEARTBEAT, {
      game_id: h,
      game_name: a.name,
      game_distributor: a.distributor,
      game_distributor_game_id: a.sku,
      game_metadata: (0, o.sD)(a),
      game_executable: (0, d.N6)(a.exePath),
      game_detection_enabled: (0, f.ik)(a),
      initial_heartbeat: t,
      final_heartbeat: n,
      game_session_id: e.sessionId,
      duration_tracked_ms: _,
      rtc_connection_id: l.Z.getRTCConnectionId(),
      media_session_id: l.Z.getMediaSessionId()
    }), e.lastHeartbeatTime = u
  }
  processSessionChanges() {
    let e = f.ZP.getRunningGames(),
      t = performance.now(),
      n = new Set;
    for (let i of e) {
      if (i.isLauncher) continue;
      let e = g(i);
      if (n.add(e), !this.gameSessions.has(e)) {
        let n = {
          sessionId: (0, r.Z)(),
          lastHeartbeatTime: t,
          runningGame: i
        };
        this.gameSessions.set(e, n), this.logHeartbeat(n, true, false)
      }
    }
    for (let [e, t] of this.gameSessions) n.has(e) || (this.logHeartbeat(t, false, true), this.gameSessions.delete(e))
  }
  constructor(...e) {
    super(...e), _(this, "heartbeatInterval", new i.Xp), _(this, "gameSessions", new Map), _(this, "actions", {
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
let b = new E