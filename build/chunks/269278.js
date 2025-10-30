/** Chunk was on web.js **/
/** chunk id: 269278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk594190 = require("./594190.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk626968 = require("./626968.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk147913.Z {
  ensureInitialized() {
    if (!this.initialized)
      for (let e of (this.initialized = true, (0, Chunk626968.C)())) "voiceChannel" === module.type ? this.registerVoiceChannel(module.name, module.importHandler, module.isEnabled) : "application" === module.type && this.registerApplication(module.name, module.applicationId, module.importHandler, module.isEnabled)
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
    let e = Chunk594174.default.getCurrentUser();
    if (null == module) returnfalse;
    let t = Chunk979651.Z.getVoiceStateForUser(module.id);
    return (null == exports ? true : exports.channelId) != null
  }
  async updateActiveHandlers() {
    this.ensureInitialized();
    let e = Chunk435064.Z.getSettings().clipsEnabled,
      t = Chunk594190.ZP.getRunningGames(),
      n = this.isUserInVoiceChannel();
    if (!module) return void await this.stopAllHandlers();
    let r = new Set(exports.map(e => e.id));
    for (let [e, t] of this.registrations) {
      let i = false;
      null == exports.isEnabled || exports.isEnabled() ? "application" === exports.type ? i = null == exports.applicationId ? Chunk147913.size > 0 : Chunk147913.has(exports.applicationId) : "voiceChannel" === exports.type && (i = require) : i = false;
      let a = this.activeHandlers.has(module);
      Chunk594190 && !Chunk594174 ? await this.startHandler(module, exports) : !Chunk594190 && Chunk594174 && await this.stopHandler(module)
    }
  }
  async startHandler(e, t) {
    let n = (0, (await t.importHandler()).default)(l.XK);
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
    for (let e of Array.from(this.activeHandlers.keys())) this.stopHandler(module)
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
    for (let [, e] of this.activeHandlers) module.handler.stop();
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