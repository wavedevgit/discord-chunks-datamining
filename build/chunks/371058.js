/** Chunk was on web.js **/
/** chunk id: 371058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk510398 = require("./510398.js"),
  Chunk587952 = require("./587952.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk439372.A {
  handleVoiceChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    null != n && a.$.trigger({
      guildId: null != t ? t : true
    })
  }
  handleCallCreate() {
    a.$.trigger()
  }
  handleUserSettingsModalOpen() {
    i.$.trigger()
  }
  constructor(...e) {
    super(...e), s(this, "actions", {
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
      CALL_CREATE: this.handleCallCreate,
      USER_SETTINGS_MODAL_OPEN: this.handleUserSettingsModalOpen
    })
  }
}
let l = new o