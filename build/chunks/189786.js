/** Chunk was on web.js **/
/** chunk id: 189786, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk81825 = require("./81825.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk81825.Z {
  isVoiceMuted() {
    return this.selfMute || this.mute || this.suppress || null != this.requestToSpeakTimestamp
  }
  isVoiceDeafened() {
    return this.selfDeaf || this.deaf
  }
  constructor(e) {
    var t;
    super(), i(this, "userId", true), i(this, "channelId", true), i(this, "sessionId", true), i(this, "mute", true), i(this, "deaf", true), i(this, "selfMute", true), i(this, "selfDeaf", true), i(this, "selfVideo", true), i(this, "selfStream", true), i(this, "suppress", true), i(this, "requestToSpeakTimestamp", true), i(this, "discoverable", true), this.userId = e.userId || "", this.channelId = e.channelId || null, this.sessionId = e.sessionId || null, this.mute = e.mute || false, this.deaf = e.deaf || false, this.selfMute = e.selfMute || false, this.selfDeaf = e.selfDeaf || false, this.selfVideo = e.selfVideo || false, this.selfStream = e.selfStream || false, this.suppress = e.suppress || false, this.requestToSpeakTimestamp = e.requestToSpeakTimestamp, this.discoverable = null == (t = e.discoverable) || t
  }
}