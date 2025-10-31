/** Chunk was on 56710 **/
/** chunk id: 168611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var r, i, Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk38618 = require("./38618.js"),
  Chunk70956 = require("./70956.js"),
  Chunk973285 = require("./973285.js");
let d = new Set,
  p = {};

function h(e) {
  return new Date(e * c.Z.Millis.SECOND).getTime()
}

function f() {
  d.clear()
}

function g(e) {
  d.delete(e.guild.id)
}
class m extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk38618.Z)
  }
  getStartTime(e) {
    var t;
    if (null != e && null != e.guild_id && e.type === l.d.GUILD_VOICE) return null == (t = p[e.guild_id]) ? true : t[e.id]
  }
  hasRequestedStartTimes(e) {
    return d.has(e)
  }
}(i = "displayName") in m ? Object.defineProperty(m, i, {
  value: "VoiceChannelStartTimeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[i] = "VoiceChannelStartTimeStore";
let b = new m(Chunk570140.Z, {
  GUILD_CREATE: g,
  GUILD_DELETE: g,
  CONNECTION_RESUMED: f,
  CONNECTION_OPEN: f,
  VOICE_CHANNEL_START_TIME_UPDATE: function(e) {
    let {
      guildId: t,
      id: n,
      voiceStartTime: r
    } = e;
    if (!u.W.getCurrentConfig({
        guildId: t,
        location: "VoiceChannelStartTimeStore"
      }).enabled) returnfalse;
    null == p[t] && (p[t] = {}), p[t][n] = null != r ? h(r) : true
  },
  CHANNEL_INFO: function(e) {
    let {
      guildId: t,
      channels: n
    } = e;
    for (let {
        id: e,
        voiceStartTime: r
      }
      of(p[t] = {}, n)) p[t][e] = null != r ? h(r) : true
  },
  FETCH_CHANNEL_INFO: function(e) {
    let {
      guildId: t
    } = e;
    d.add(t), s.Z.getSocket().requestChannelInfo(t, ["status", "voice_start_time"])
  }
})