/** Chunk was on 46636 **/
/** chunk id: 648427, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./667532.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js");

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
class p extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(o.Ay, a.A, s.A), d = new Set([...c = null != (t = null == e ? true : e.channelHistory) ? t : []])
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
let g = new p(Chunk73153.h, {
  POST_CONNECTION_OPEN: function() {
    d = new Set([...c])
  },
  VOICE_CHANNEL_SELECT: function(e) {
    var t, n;
    let {
      channelId: r
    } = e;
    return null != r && !!(null != (t = null == (n = s.A.getChannel(r)) ? true : n.isVocal()) && t) && (d.has(r) ? ((c = c.filter(e => e !== r)).unshift(r), d = new Set([...c])) : (c.unshift(r), d.add(r)), c.length > 10 && (c.length = 10, d = new Set([...c])), true)
  }
})