/** Chunk was on web.js **/
/** chunk id: 107511, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk314897 = require("./314897.js"),
  Chunk944486 = require("./944486.js"),
  Chunk105372 = require("./105372.js"),
  Chunk88751 = require("./88751.js"),
  Chunk157925 = require("./157925.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    super(...e), d(this, "handleVoiceStateUpdates", e => {
      let {
        voiceStates: t
      } = e;
      t.forEach(e => {
        if (null == e.channelId || e.userId !== a.default.getId() || (this.terminate(), r.K.get(u.$z, false))) return;
        let t = s.Z.getVoiceChannelId();
        null != t && e.channelId === t && c.ZP.isAudienceMember(e.userId, t) && (r.K.set(u.$z, true), l.$(t))
      })
    })
  }
}
let p = new f