/** Chunk was on web.js **/
/** chunk id: 700775, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk772848 = require("./772848.js"),
  Chunk147913 = require("./147913.js"),
  Chunk318885 = require("./318885.js"),
  Chunk837268 = require("./837268.js"),
  Chunk397156 = require("./397156.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Map;
class d extends Chunk147913.Z {
  handleTrackStateChanged(e) {
    s.Z.getConfig({
      location: "tracking-manager"
    }).enabled && (e.newState === o.mM.INITIALIZING && u.set(e.pid, (0, r.Z)()), (0, a.Q)(l.rMx.OVERLAY_STATE_CHANGED, {
      new_state: e.newState,
      old_state: e.oldState,
      pid: e.pid,
      init_session_id: u.get(e.pid)
    }), (e.newState === o.mM.OVERLAY_RENDERING || e.newState === o.mM.OVERLAY_DISABLED || e.newState === o.mM.OVERLAY_CRASHED_DISABLED || e.newState === o.mM.OVERLAY_TEARING_DOWN) && u.delete(e.pid))
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