/** Chunk was on 21738 **/
/** chunk id: 333893, original params: e,t,n (module,exports,require) **/
require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk142120 = require("./142120.js"),
  Chunk734057 = require("./734057.js"),
  Chunk661191 = require("./661191.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = Object.freeze({
    online: null,
    total: null
  }),
  d = {},
  p = {},
  f = null;
class h extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(a.A, s.A), p = null != e ? e : d
  }
  getState() {
    return p
  }
  getMemberCount(e) {
    var t;
    return null != (t = p[e]) ? t : u
  }
  requestCount(e, t) {
    f = {
      guildId: e,
      channelId: t
    }, a.A.getSocket().requestChannelMemberCount(e, t)
  }
}
c(h, "displayName", "ChannelMemberCountStore"), c(h, "persistKey", "channelMemberCounts"), new h(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    null != f && a.A.getSocket().requestChannelMemberCount(f.guildId, f.channelId), o.default.keys(p).forEach(e => {
      null == s.A.getChannel(e) && delete p[e]
    })
  },
  CHANNEL_MEMBER_COUNT_UPDATE: function(e) {
    let {
      channelId: t,
      online: n,
      total: r
    } = e;
    return (null != n || null != r) && (p[t] = {
      online: n,
      total: r
    }), true
  }
})