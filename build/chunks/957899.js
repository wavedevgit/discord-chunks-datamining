/** Chunk was on web.js **/
/** chunk id: 957899, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk604375 = require("./604375.js"),
  Chunk268004 = require("./268004.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk147913.Z {
  handleVoiceChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    null != n && a.M.trigger({
      guildId: null != t ? t : true
    })
  }
  handleCallCreate() {
    a.M.trigger()
  }
  handleUserSettingsModalOpen() {
    i.X.trigger()
  }
  constructor(...e) {
    super(...e), o(this, "actions", {
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
      CALL_CREATE: this.handleCallCreate,
      USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen
    })
  }
}
let l = new s