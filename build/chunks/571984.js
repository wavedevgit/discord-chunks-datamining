/** Chunk was on web.js **/
/** chunk id: 571984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk872810 = require("./872810.js"),
  Chunk147913 = require("./147913.js"),
  Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk944486 = require("./944486.js"),
  Chunk45652 = require("./45652.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = 1e3;
class p extends Chunk147913.Z {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    u.d.getState().isEnabled && null != t && this.findAndWatchStream()
  }
  findAndWatchStream() {
    let e = c.Z.getVoiceChannelId();
    if (null == e) return;
    let t = l.Z.getAllApplicationStreamsForChannel(e)[0];
    null != t && (0, a.rn)(t)
  }
  constructor(...e) {
    super(...e), d(this, "actions", {
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      VOICE_STATE_UPDATES: e => this.handleVoiceStateUpdates(e)
    }), d(this, "handleVoiceStateUpdates", i().debounce(e => {
      let {
        voiceStates: t
      } = e;
      if (!u.d.getState().isEnabled) return;
      let n = c.Z.getVoiceChannelId();
      null != n && t.forEach(e => {
        if (e.channelId !== n) return;
        let t = l.Z.getStreamForUser(e.userId, e.guildId),
          r = l.Z.getActiveStreamForUser(e.userId, e.guildId);
        null != t && null == r ? (0, a.rn)(t) : null == t && null != r && ((0, a.g)((0, s.V9)(r), false, true), this.findAndWatchStream())
      })
    }, f))
  }
}
let _ = new p