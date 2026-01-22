/** Chunk was on 21738 **/
/** chunk id: 212371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk827343 = require("./827343.js"),
  Chunk401843 = require("./401843.js"),
  Chunk272355 = require("./272355.js"),
  Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk105530 = require("./105530.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends Chunk272355.A {
  _initialize() {
    r.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    r.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    super(...e), f(this, "handleVoiceStateUpdates", e => {
      let {
        voiceStates: t
      } = e, n = c.default.getId();
      t.forEach(e => {
        var t;
        e.userId === n && (null == (t = u.A.getChannel(e.channelId)) ? true : t.isGuildStageVoice()) && (0, p.eY)(e) !== p.zF.ON_STAGE && (this.handleStopStream(e), this.handleStopUserVideo())
      })
    }), f(this, "handleStopStream", e => {
      let t = o.A.getActiveStreamForUser(e.userId, e.guildId);
      null != t && (0, l.vN)((0, s._z)(t), false)
    }), f(this, "handleStopUserVideo", () => {
      d.A.isVideoEnabled() && i.A.setVideoEnabled(false)
    })
  }
}
let A = new h