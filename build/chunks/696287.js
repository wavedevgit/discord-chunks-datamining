/** Chunk was on web.js **/
/** chunk id: 696287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk772848 = require("./772848.js"),
  Chunk846519 = require("./846519.js"),
  Chunk147913 = require("./147913.js"),
  Chunk509003 = require("./509003.js"),
  Chunk77498 = require("./77498.js"),
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
let m = 5 * Chunk70956.Z.Millis.MINUTE;

function h(e) {
  return e.distributor === p.GQo.ROBLOX ? (0, o.x3)(e) : null
}

function g(e) {
  let t = null != e.name ? e.name : "",
    n = "".concat(e.exePath, ":").concat(t),
    r = h(e);
  return null != r && (n += ":".concat(r)), n
}

function E(e) {
  return "".concat(g(e), ":").concat(e.pid)
}
class b extends Chunk147913.Z {
  _terminate() {
    this.heartbeatInterval.stop()
  }
  handleLogout() {
    this.gameSessions.clear(), this.heartbeatInterval.stop()
  }
  scheduleHeartbeatTracking() {
    if (this.processSessionChanges(), 0 === Chunk594190.ZP.getRunningGames().length) return void this.heartbeatInterval.stop();
    this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(m, this.logRunningGameHeartbeats)
  }
  logHeartbeat(e, t, n, r) {
    var i, a;
    let u = performance.now(),
      _ = n ? 0 : Math.round(u - t.lastHeartbeatTime),
      m = null != (a = e.id) ? a : null == (i = s.Z.getGameByName(e.name)) ? true : i.id;
    c.default.track(p.rMx.RUNNING_GAME_HEARTBEAT, {
      game_id: m,
      game_name: e.name,
      game_distributor: e.distributor,
      game_distributor_game_id: e.sku,
      game_metadata: (0, o.sD)(e),
      game_executable: (0, d.N6)(e.exePath),
      game_detection_enabled: (0, f.ik)(e),
      initial_heartbeat: n,
      final_heartbeat: r,
      game_session_id: t.sessionId,
      duration_tracked_ms: _,
      rtc_connection_id: l.Z.getRTCConnectionId(),
      media_session_id: l.Z.getMediaSessionId()
    }), t.lastHeartbeatTime = u
  }
  processSessionChanges() {
    let e = Chunk594190.ZP.getRunningGames(),
      t = performance.now(),
      n = new Set;
    for (let i of module) {
      let e = E(Chunk846519);
      if (require.add(module), !this.gameSessions.has(module)) {
        let n = {
          sessionId: (0, Chunk772848.Z)(),
          lastHeartbeatTime: exports,
          runningGame: Chunk846519
        };
        this.gameSessions.set(module, require), this.logHeartbeat(Chunk846519, require, true, false)
      }
    }
    for (let [e, t] of this.gameSessions) require.has(module) || (this.logHeartbeat(exports.runningGame, exports, false, true), this.gameSessions.delete(module))
  }
  constructor(...e) {
    super(...e), _(this, "heartbeatInterval", new i.Xp), _(this, "gameSessions", new Map), _(this, "actions", {
      RUNNING_GAMES_CHANGE: e => this.handleRunningGamesChanged(e),
      POST_CONNECTION_OPEN: () => this.scheduleHeartbeatTracking(),
      LOGOUT: () => this.handleLogout()
    }), _(this, "handleRunningGamesChanged", e => {
      this.scheduleHeartbeatTracking()
    }), _(this, "logRunningGameHeartbeats", () => {
      for (let e of f.ZP.getRunningGames()) {
        let t = E(e),
          n = this.gameSessions.get(t);
        null != n && this.logHeartbeat(e, n, false, false)
      }
    })
  }
}
let y = new b