/** Chunk was on web.js **/
/** chunk id: 572044, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk536432 = require("./536432.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk439372.A {
  constructor(...e) {
    super(...e), l(this, "prevConnected", false), l(this, "tempMutedChannel", null), l(this, "handleRTCConnectionState", e => {
      let {
        state: t,
        channelId: n
      } = e, r = t === o.S7L.RTC_CONNECTED, i = r && !this.prevConnected, l = a.A.getChannel(n), c = null == l ? true : l.getGuildId(), u = this.tempMutedChannel === n;
      i && null != c && (u ? this.tempMutedChannel = null : (0, s.fh)(c)), this.prevConnected = r
    }), l(this, "handleMute", e => {
      let {
        channelId: t
      } = e;
      this.tempMutedChannel = t
    }), l(this, "handleVoiceStateUpdates", e => {
      let {
        voiceStates: t
      } = e, n = i.default.getId(), r = i.default.getSessionId();
      t.forEach(e => {
        let {
          userId: t,
          channelId: i,
          sessionId: a
        } = e;
        t === n && a !== r && null != i && (this.tempMutedChannel = i)
      })
    }), l(this, "actions", {
      RTC_CONNECTION_STATE: this.handleRTCConnectionState,
      SOUNDBOARD_MUTE_JOIN_SOUND: this.handleMute,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
    })
  }
}
let u = new c