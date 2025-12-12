/** Chunk was on 64722 **/
/** chunk id: 168611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, i, Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk38618 = require("./38618.js"),
  Chunk70956 = require("./70956.js");
let u = new Set,
  d = {};

function f(e) {
  return new Date(e * c.Z.Millis.SECOND).getTime()
}

function h() {
  u.clear()
}

function p(e) {
  u.delete(e.guild.id)
}
class g extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk38618.Z)
  }
  getStartTime(e) {
    var t;
    if (null != e && null != e.guild_id && e.type === l.d.GUILD_VOICE) return null == (t = d[e.guild_id]) ? true : t[e.id]
  }
  hasRequestedStartTimes(e) {
    return u.has(e)
  }
}(i = "displayName") in g ? Object.defineProperty(g, i, {
  value: "VoiceChannelStartTimeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : g[i] = "VoiceChannelStartTimeStore";
let m = new g(Chunk570140.Z, {
  GUILD_CREATE: p,
  GUILD_DELETE: p,
  CONNECTION_RESUMED: h,
  CONNECTION_OPEN: h,
  VOICE_CHANNEL_START_TIME_UPDATE: function(e) {
    let {
      guildId: t,
      id: n,
      voiceStartTime: r
    } = e;
    null == d[t] && (d[t] = {}), d[t][n] = null != r ? f(r) : true
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
      of(d[t] = {}, n)) d[t][e] = null != r ? f(r) : true
  },
  FETCH_CHANNEL_INFO: function(e) {
    let {
      guildId: t
    } = e;
    u.add(t), s.Z.getSocket().requestChannelInfo(t, ["status", "voice_start_time"])
  }
})