/** Chunk was on 29709 **/
/** chunk id: 46145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./290780.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = [],
  d = new Set;
class p extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(o.ZP, a.Z, s.Z), d = new Set([...c = null != (t = null == e ? true : e.channelHistory) ? t : []])
  }
  getState() {
    return {
      channelHistory: c
    }
  }
  getChannelHistory() {
    return c
  }
}
u(p, "displayName", "RecentVoiceChannelStore"), u(p, "persistKey", "RecentVoiceChannelStore");
let g = new p(Chunk570140.Z, {
  POST_CONNECTION_OPEN: function() {
    d = new Set([...c])
  },
  VOICE_CHANNEL_SELECT: function(e) {
    var t, n;
    let {
      channelId: r
    } = e;
    return null != r && !!(null != (n = null == (t = s.Z.getChannel(r)) ? true : t.isVocal()) && n) && (d.has(r) ? ((c = c.filter(e => e !== r)).unshift(r), d = new Set([...c])) : (c.unshift(r), d.add(r)), c.length > 10 && (c.length = 10, d = new Set([...c])), true)
  }
})