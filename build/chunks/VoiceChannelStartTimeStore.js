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
let p = new Set,
  h = {};

function f(e) {
  return new Date(e * u.A.Millis.SECOND).getTime()
}

function g() {
  p.clear()
}

function m(e) {
  p.delete(e.guild.id)
}
class b extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A)
  }
  getStartTime(e) {
    var t;
    if (null != e && null != e.guild_id && e.type === i.r.GUILD_VOICE) return null == (t = h[e.guild_id]) ? true : t[e.id]
  }
  hasRequestedStartTimes(e) {
    return p.has(e)
  }
}(l = "displayName") in b ? Object.defineProperty(b, l, {
  value: "VoiceChannelStartTimeStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[l] = "VoiceChannelStartTimeStore";
let A = new b(Chunk73153.h, {
  GUILD_CREATE: m,
  GUILD_DELETE: m,
  CONNECTION_RESUMED: g,
  CONNECTION_OPEN: g,
  VOICE_CHANNEL_START_TIME_UPDATE: function(e) {
    let {
      guildId: t,
      id: n,
      voiceStartTime: r
    } = e, l = d.L.getCurrentConfig({
      guildId: t,
      location: "VoiceChannelStartTimeStore"
    }).enabled;
    if (((0, s.un)() || (0, s.m0)()) && !l) returnfalse;
    null == h[t] && (h[t] = {}), h[t][n] = null != r ? f(r) : true
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
      of(h[t] = {}, n)) h[t][e] = null != r ? f(r) : true
  },
  FETCH_CHANNEL_INFO: function(e) {
    let {
      guildId: t
    } = e;
    p.add(t), c.A.getSocket().requestChannelInfo(t, ["status", "voice_start_time"])
  }
})