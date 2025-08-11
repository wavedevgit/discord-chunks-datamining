/** Chunk was on 29709 **/
/** chunk id: 46145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./290780.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = [],
  d = new Set;
class p extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(a.ZP, o.Z, s.Z), d = new Set([...u = null != (t = null == e ? true : e.channelHistory) ? t : []])
  }
  getState() {
    return {
      channelHistory: u
    }
  }
  getChannelHistory() {
    return u
  }
}
c(p, "displayName", "RecentVoiceChannelStore"), c(p, "persistKey", "RecentVoiceChannelStore");
let f = new p(Chunk570140.Z, {
  POST_CONNECTION_OPEN: function() {
    d = new Set([...u])
  },
  VOICE_CHANNEL_SELECT: function(e) {
    var t, n;
    let {
      channelId: i
    } = e;
    return null != i && !!(null != (n = null == (t = s.Z.getChannel(i)) ? true : t.isVocal()) && n) && (d.has(i) ? ((u = u.filter(e => e !== i)).unshift(i), d = new Set([...u])) : (u.unshift(i), d.add(i)), u.length > 10 && (u.length = 10, d = new Set([...u])), true)
  }
})