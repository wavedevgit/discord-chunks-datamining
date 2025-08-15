/** Chunk was on web.js **/
/** chunk id: 783295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk242291 = require("./242291.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c extends Chunk147913.Z {
  constructor(...e) {
    super(...e), l(this, "prevConnected", false), l(this, "tempMutedChannel", null), l(this, "handleRTCConnectionState", e => {
      let {
        state: t,
        channelId: n
      } = e, r = t === s.hes.RTC_CONNECTED, i = r && !this.prevConnected, l = a.Z.getChannel(n), c = null == l ? true : l.getGuildId(), u = this.tempMutedChannel === n;
      i && null != c && (u ? this.tempMutedChannel = null : (0, o.M2)(c)), this.prevConnected = r
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