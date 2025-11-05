/** Chunk was on 1272 **/
/** chunk id: 501809, original params: e,t,n (module,exports,require) **/
require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk38618 = require("./38618.js"),
  Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js");

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
class h extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(a.Z, s.Z), p = null != e ? e : d
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
    }, a.Z.getSocket().requestChannelMemberCount(e, t)
  }
}
c(h, "displayName", "ChannelMemberCountStore"), c(h, "persistKey", "channelMemberCounts"), new h(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    null != f && Chunk38618.Z.getSocket().requestChannelMemberCount(f.guildId, f.channelId), Chunk709054.default.keys(p).forEach(e => {
      null == s.Z.getChannel(e) && delete p[e]
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