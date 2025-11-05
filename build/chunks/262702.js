/** Chunk was on 1272 **/
/** chunk id: 262702, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk846027 = require("./846027.js"),
  Chunk872810 = require("./872810.js"),
  Chunk317770 = require("./317770.js"),
  Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk590415 = require("./590415.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    super(...e), f(this, "handleVoiceStateUpdates", e => {
      let {
        voiceStates: t
      } = e, n = c.default.getId();
      t.forEach(e => {
        var t;
        e.userId === n && (null == (t = u.Z.getChannel(e.channelId)) ? true : t.isGuildStageVoice()) && (0, p.gf)(e) !== p.xO.ON_STAGE && (this.handleStopStream(e), this.handleStopUserVideo())
      })
    }), f(this, "handleStopStream", e => {
      let t = o.Z.getActiveStreamForUser(e.userId, e.guildId);
      null != t && (0, l.g)((0, s.V9)(t), false)
    }), f(this, "handleStopUserVideo", () => {
      d.Z.isVideoEnabled() && i.Z.setVideoEnabled(false)
    })
  }
}
let g = new h