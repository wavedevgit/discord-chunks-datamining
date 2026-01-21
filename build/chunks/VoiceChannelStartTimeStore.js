/** Chunk was on 82124 **/
/** chunk id: 168611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var r, i, Chunk106351 = require("./106351.js"),
  Chunk818710 = require("./818710.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk38618 = require("./38618.js"),
  Chunk70956 = require("./70956.js"),
  Chunk662237 = require("./662237.js");
let p = new Set,
  f = {};

function h(e) {
  return new Date(e * u.Z.Millis.SECOND).getTime()
}

function g() {
  p.clear()
}

function m(e) {
  p.delete(e.guild.id)
}
class b extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(c.Z)
  }
  getStartTime(e) {
    var t;
    if (null != e && null != e.guild_id && e.type === l.d.GUILD_VOICE) return null == (t = f[e.guild_id]) ? true : t[e.id]
  }
  hasRequestedStartTimes(e) {
    return p.has(e)
  }
}(i = "displayName") in b ? Object.defineProperty(b, i, {
  value: "VoiceChannelStartTimeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[i] = "VoiceChannelStartTimeStore";
let y = new b(Chunk570140.Z, {
  GUILD_CREATE: m,
  GUILD_DELETE: m,
  CONNECTION_RESUMED: g,
  CONNECTION_OPEN: g,
  VOICE_CHANNEL_START_TIME_UPDATE: function(e) {
    let {
      guildId: t,
      id: n,
      voiceStartTime: r
    } = e, i = d.F.getCurrentConfig({
      guildId: t,
      location: "VoiceChannelStartTimeStore"
    }).enabled;
    if (((0, a.gn)() || (0, a.Dt)()) && !i) returnfalse;
    null == f[t] && (f[t] = {}), f[t][n] = null != r ? h(r) : true
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
      of(f[t] = {}, n)) f[t][e] = null != r ? h(r) : true
  },
  FETCH_CHANNEL_INFO: function(e) {
    let {
      guildId: t
    } = e;
    p.add(t), c.Z.getSocket().requestChannelInfo(t, ["status", "voice_start_time"])
  }
})