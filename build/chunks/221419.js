/** Chunk was on web.js **/
/** chunk id: 221419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk835245 = require("./835245.js"),
  Chunk439372 = require("./439372.js"),
  Chunk815706 = require("./815706.js"),
  Chunk41984 = require("./41984.js"),
  Chunk291869 = require("./291869.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Map;
class d extends Chunk439372.A {
  handleTrackStateChanged(e) {
    o.A.getConfig({
      location: "tracking-manager"
    }).enabled && (e.newState === s.AR.INITIALIZING && u.set(e.pid, (0, r.A)()), (0, a.z)(l.HAw.OVERLAY_STATE_CHANGED, {
      new_state: e.newState,
      old_state: e.oldState,
      pid: e.pid,
      init_session_id: u.get(e.pid),
      reason: e.reason
    }), (e.newState === s.AR.OVERLAY_RENDERING || e.newState === s.AR.OVERLAY_DISABLED || e.newState === s.AR.OVERLAY_CRASHED_DISABLED || e.newState === s.AR.OVERLAY_TEARING_DOWN) && u.delete(e.pid))
  }
  handleRunningGamesChange(e) {
    for (let t of e.removed) u.delete(t.pid)
  }
  constructor(...e) {
    super(...e), c(this, "actions", {
      OVERLAY_TRACK_STATE_CHANGED: this.handleTrackStateChanged,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange
    })
  }
}
let f = new d