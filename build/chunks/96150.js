/** Chunk was on web.js **/
/** chunk id: 96150, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk280837 = require("./280837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk914010 = require("./914010.js"),
  Chunk823379 = require("./823379.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), Chunk570140.Z.subscribe("LOGOUT", this.handleLogout)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), Chunk570140.Z.unsubscribe("LOGOUT", this.handleLogout)
  }
  constructor(...e) {
    super(...e), c(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t,
        guildId: n
      } = e;
      if (null != t) {
        let e = a.Z.getChannel(t);
        if (null == e || e.isGuildStageVoice()) return
      }
      this.terminate();
      let r = null == t ? null : null != n ? n : null;
      this.handleDisconnectFromStageChannel(r)
    }), c(this, "handleDisconnectFromStageChannel", e => {
      let t = s.Z.getGuildId();
      (0, o.O)([t, e].filter(l.lm))
    }), c(this, "handleLogout", () => {
      this.terminate(), this.handleDisconnectFromStageChannel(null)
    })
  }
}
let d = new u