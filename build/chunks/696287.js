/** Chunk was on web.js **/
/** chunk id: 696287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk846519 = require("./846519.js"),
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

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = 5 * Chunk70956.Z.Millis.MINUTE;

function m(e) {
  return e.distributor === f.GQo.ROBLOX ? (0, a.x3)(e) : null
}

function g(e) {
  let t = null != e.name ? e.name : "",
    n = "".concat(e.exePath, ":").concat(t),
    r = m(e);
  return null != r && (n += ":".concat(r)), n
}
class E extends Chunk147913.Z {
  _terminate() {
    this.stopHeartbeat()
  }
  maybeStartHeartbeat() {
    this.heartbeatInterval.isStarted() || (this.logRunningGameHeartbeats(), this.heartbeatInterval.start(h, this.logRunningGameHeartbeats))
  }
  stopHeartbeat() {
    this.heartbeatInterval.stop(), this.runningGameKeys.clear()
  }
  handlePostConnectionOpen() {
    Chunk594190.ZP.getRunningGames().length > 0 && this.maybeStartHeartbeat()
  }
  constructor(...e) {
    super(...e), _(this, "heartbeatInterval", new r.Xp), _(this, "runningGameKeys", new Set), _(this, "actions", {
      RUNNING_GAMES_CHANGE: e => this.handleRunningGamesChanged(e),
      LOGOUT: () => this.stopHeartbeat(),
      CONNECTION_CLOSED: () => this.stopHeartbeat(),
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), _(this, "handleRunningGamesChanged", e => {
      let {
        games: t
      } = e;
      if (0 === t.length) return void this.stopHeartbeat();
      this.maybeStartHeartbeat()
    }), _(this, "logRunningGameHeartbeats", () => {
      let e = d.ZP.getRunningGames(),
        t = {
          rtc_connection_id: s.Z.getRTCConnectionId(),
          media_session_id: s.Z.getMediaSessionId()
        },
        n = new Set;
      e.forEach(e => {
        var r, i;
        let s = g(e),
          c = !this.runningGameKeys.has(s),
          _ = null != (i = e.id) ? i : null == (r = o.Z.getGameByName(e.name)) ? true : r.id;
        l.default.track(f.rMx.RUNNING_GAME_HEARTBEAT, p({
          game_id: _,
          game_name: e.name,
          game_distributor: e.distributor,
          game_distributor_game_id: e.sku,
          game_metadata: (0, a.sD)(e),
          game_executable: (0, u.N6)(e.exePath),
          game_detection_enabled: (0, d.ik)(e),
          initial_heartbeat: c
        }, t)), n.add(g(e))
      }), this.runningGameKeys = n
    })
  }
}
let b = new E