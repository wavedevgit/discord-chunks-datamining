/** Chunk was on web.js **/
/** chunk id: 766219, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk854492 = require("./854492.js"),
  Chunk734057 = require("./734057.js"),
  Chunk967198 = require("./967198.js"),
  Chunk403362 = require("./403362.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk272355.A {
  _initialize() {
    r.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.h.subscribe("LOGOUT", this.handleLogout)
  }
  _terminate() {
    r.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.h.unsubscribe("LOGOUT", this.handleLogout)
  }
  constructor(...e) {
    super(...e), c(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t,
        guildId: n
      } = e;
      if (null != t) {
        let e = o.A.getChannel(t);
        if (null == e || e.isGuildStageVoice()) return
      }
      this.terminate();
      let r = null == t ? null : null != n ? n : null;
      this.handleDisconnectFromStageChannel(r)
    }), c(this, "handleDisconnectFromStageChannel", e => {
      let t = s.A.getGuildId();
      (0, a.A)([t, e].filter(l.Vq))
    }), c(this, "handleLogout", () => {
      this.terminate(), this.handleDisconnectFromStageChannel(null)
    })
  }
}
let d = new u