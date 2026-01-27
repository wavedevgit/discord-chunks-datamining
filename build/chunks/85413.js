/** Chunk was on web.js **/
/** chunk id: 85413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk15285 = require("./15285.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk572164 = require("./572164.js"),
  Chunk399925 = require("./399925.js"),
  Chunk450948 = require("./450948.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk439372.A {
  ensureInitialized() {
    if (!this.initialized)
      for (let e of (this.initialized = true, (0, c.O)())) "voiceChannel" === e.type ? this.registerVoiceChannel(e.name, e.importHandler, e.isEnabled) : "application" === e.type && this.registerApplication(e.name, e.applicationId, e.importHandler, e.isEnabled)
  }
  registerApplication(e, t, n, r) {
    this.registrations.set(e, {
      type: "application",
      name: e,
      applicationId: t,
      isEnabled: r,
      importHandler: n
    })
  }
  registerVoiceChannel(e, t, n) {
    this.registrations.set(e, {
      type: "voiceChannel",
      name: e,
      isEnabled: n,
      importHandler: t
    })
  }
  isUserInVoiceChannel() {
    let e = a.default.getCurrentUser();
    if (null == e) returnfalse;
    let t = o.A.getVoiceStateForUser(e.id);
    return (null == t ? true : t.channelId) != null
  }
  async updateActiveHandlers() {
    this.ensureInitialized();
    let e = (0, s.TD)(),
      t = i.Ay.getRunningGames(),
      n = this.isUserInVoiceChannel();
    if (!e) return void await this.stopAllHandlers();
    let r = new Set(t.map(e => e.id));
    for (let [e, t] of this.registrations) {
      let i = false;
      null == t.isEnabled || t.isEnabled() ? "application" === t.type ? i = null == t.applicationId ? r.size > 0 : r.has(t.applicationId) : "voiceChannel" === t.type && (i = n) : i = false;
      let a = this.activeHandlers.has(e);
      i && !a ? await this.startHandler(e, t) : !i && a && await this.stopHandler(e)
    }
  }
  async startHandler(e, t) {
    let n = (0, (await t.importHandler()).default)(l.Ts);
    n.start(), this.activeHandlers.set(e, {
      handler: n,
      registration: t
    })
  }
  stopHandler(e) {
    let t = this.activeHandlers.get(e);
    null != t && (t.handler.stop(), this.activeHandlers.delete(e))
  }
  stopAllHandlers() {
    for (let e of Array.from(this.activeHandlers.keys())) this.stopHandler(e)
  }
  getHandlerState(e) {
    var t, n;
    let r = this.activeHandlers.get(e);
    return null == r || null == (t = (n = r.handler).getState) ? true : t.call(n)
  }
  _initialize() {
    this.ensureInitialized()
  }
  _terminate() {
    for (let [, e] of this.activeHandlers) e.handler.stop();
    this.activeHandlers.clear()
  }
  constructor(...e) {
    super(...e), u(this, "registrations", new Map), u(this, "activeHandlers", new Map), u(this, "initialized", false), u(this, "actions", {
      RUNNING_GAMES_CHANGE: () => this.updateActiveHandlers(),
      CLIPS_SETTINGS_UPDATE: () => this.updateActiveHandlers(),
      VOICE_CHANNEL_SELECT: () => this.updateActiveHandlers(),
      VOICE_STATE_UPDATES: () => this.updateActiveHandlers()
    })
  }
}
let f = new d