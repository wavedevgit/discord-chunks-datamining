/** Chunk was on web.js **/
/** chunk id: 146661, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk430824 = require("./430824.js"),
  Chunk70956 = require("./70956.js"),
  Chunk553385 = require("./553385.js"),
  Chunk556178 = require("./556178.js"),
  Chunk890477 = require("./890477.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 0;
class d extends Chunk147913.Z {
  constructor(...e) {
    super(...e), c(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      IDLE: () => this.handleIdleChange()
    }), c(this, "handleConnectionOpen", e => {
      this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment()
    }), c(this, "handleIdleChange", () => {
      Date.now() - u > a.Z.Millis.HOUR && this._attemptDeadchatPrompt()
    }), c(this, "_attemptDeadchatPrompt", () => {
      let e = i.Z.getGuildIds().filter(e => l.Z.getCurrentConfig({
        guildId: e,
        location: "manager"
      }).triggerDeadchat);
      e.length > 0 && (u = Date.now(), (0, o.N7)(e))
    }), c(this, "_triggerGamingStatsSetupExperiment", () => {
      for (let e of i.Z.getGuildIds()) s.g.trackExposure({
        guildId: e,
        location: "manager"
      })
    })
  }
}
let f = new d