/** Chunk was on web.js **/
/** chunk id: 277358, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk104755 = require("./104755.js"),
  Chunk355281 = require("./355281.js"),
  Chunk817788 = require("./817788.js"),
  Chunk509003 = require("./509003.js"),
  Chunk802512 = require("./802512.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = +Chunk70956.Z.Millis.DAY,
  m = 3 * Chunk70956.Z.Millis.DAY,
  g = {
    joinGameLogPrefix: "[FLog::GameJoinLoadTime] Report game_join_loadtime:",
    joinGameFields: [{
      regex: "universeid:([0-9]+)",
      key: Chunk817788.SQ.UNIVERSE_ID
    }, {
      regex: "placeid:([0-9]+)",
      key: Chunk817788.SQ.PLACE_ID
    }],
    leaveGameLogPrefix: "[FLog::SingleSurfaceApp] returnToLuaApp:"
  };
class E extends Chunk147913.Z {
  _initialize() {
    this.stores = new Map().set(Chunk802512.Z, () => this.handleRobloxSubgameStoreChanged())
  }
  constructor(...e) {
    super(...e), p(this, "currentInterval_", null), p(this, "currentSubgameInfo_", null), p(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      RUNNING_GAMES_CHANGE: e => this.handleRunningGamesChange(e)
    }), p(this, "handleRobloxSubgameStoreChanged", () => {
      let e = f.Z.getCurrentSubgameInfo();
      if (null == e.subgameInfo || null == e.subgameInfo.universeId || !c.D.getCurrentConfig({
          location: "roblox_subgame_detection"
        }).enabled) return;
      let t = e.subgameInfo.universeId,
        n = f.Z.getState();
      (null == n.universeIdToApplicationInfo[t] || null == e.application && n.universeIdToApplicationInfo[t].lastFetchedTime < Date.now() - h || null != e.application && n.universeIdToApplicationInfo[t].lastFetchedTime < Date.now() - m) && (0, l.s)(t)
    }), p(this, "handleGetRobloxSubgameInfo", e => {
      let t = (0, d.I8)(e);
      (0, d.yA)(this.currentSubgameInfo_, t) && (this.currentSubgameInfo_ = t, r.Z.dispatch({
        type: "ROBLOX_SUBGAME_UPDATE",
        subgameInfo: t
      }))
    }), p(this, "handlePostConnectionOpen", () => {
      !__OVERLAY__ && ((0, o.isWindows)() || (0, o.isMac)()) && s.ZP.setRobloxSubgameDetectionConfig(g, this.handleGetRobloxSubgameInfo)
    }), p(this, "handleRunningGamesChange", e => {
      if (__OVERLAY__) return;
      let t = e.games.some(e => e.distributor === _.GQo.ROBLOX);
      t && !e.added.some(e => e.distributor === _.GQo.ROBLOX) && r.Z.dispatch({
        type: "ROBLOX_SUBGAME_UPDATE",
        subgameInfo: this.currentSubgameInfo_
      }), t || null == this.currentInterval_ ? t && null == this.currentInterval_ && (s.ZP.checkForRobloxSubgameUpdate(), this.currentInterval_ = setInterval(() => {
        s.ZP.checkForRobloxSubgameUpdate()
      }, 5e3)) : (clearInterval(this.currentInterval_), this.currentInterval_ = null)
    })
  }
}
let b = new E