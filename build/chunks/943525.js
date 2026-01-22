/** Chunk was on web.js **/
/** chunk id: 943525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk961350 = require("./961350.js"),
  Chunk309010 = require("./309010.js"),
  Chunk525002 = require("./525002.js"),
  Chunk312006 = require("./312006.js"),
  Chunk516607 = require("./516607.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk272355.A {
  _initialize() {
    i.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    i.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    super(...e), d(this, "handleVoiceStateUpdates", e => {
      let {
        voiceStates: t
      } = e;
      t.forEach(e => {
        if (null == e.channelId || e.userId !== s.default.getId() || (this.terminate(), r.w.get(u.zh, false))) return;
        let t = o.A.getVoiceChannelId();
        null == t || e.channelId === t && c.Ay.isAudienceMember(e.userId, t) && (r.w.set(u.zh, true), l.H(t))
      })
    })
  }
}
let p = new f