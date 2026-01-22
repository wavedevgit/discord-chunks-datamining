/** Chunk was on 97492 **/
/** chunk id: 725613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var r, l, Chunk478437 = require("./478437.js"),
  Chunk574381 = require("./574381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk142120 = require("./142120.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661470 = require("./661470.js");
let f = new Set,
  p = {};

function h(e) {
  return new Date(e * u.A.Millis.SECOND).getTime()
}

function b() {
  f.clear()
}

function g(e) {
  f.delete(e.guild.id)
}
class m extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A)
  }
  getStartTime(e) {
    var t;
    if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE) return null == (t = p[e.guild_id]) ? true : t[e.id]
  }
  hasRequestedStartTimes(e) {
    return f.has(e)
  }
}(l = "displayName") in m ? Object.defineProperty(m, l, {
  value: "VoiceChannelStartTimeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : m[l] = "VoiceChannelStartTimeStore";
let A = new m(Chunk73153.h, {
  GUILD_CREATE: g,
  GUILD_DELETE: g,
  CONNECTION_RESUMED: b,
  CONNECTION_OPEN: b,
  VOICE_CHANNEL_START_TIME_UPDATE: function(e) {
    let {
      guildId: t,
      id: n,
      voiceStartTime: r
    } = e, l = d.L.getCurrentConfig({
      guildId: t,
      location: "VoiceChannelStartTimeStore"
    }).enabled;
    if (((0, a.un)() || (0, a.m0)()) && !l) returnfalse;
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
    f.add(t), c.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"])
  }
})