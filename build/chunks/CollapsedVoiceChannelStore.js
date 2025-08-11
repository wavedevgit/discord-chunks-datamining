/** Chunk was on 4192 **/
/** chunk id: 58468, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk709054 = require("./709054.js"),
  Chunk592125 = require("./592125.js");

function s(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
let o = {},
  d = o;

function c() {
  Chunk709054.default.keys(d).forEach(e => {
    null == u.Z.getChannel(e) && delete d[e]
  })
}
class g extends(l = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(u.Z), d = null != e ? e : o
  }
  getState() {
    return d
  }
  getCollapsed() {
    return d
  }
  isCollapsed(e) {
    return d[e] || false
  }
}
s(g, "displayName", "CollapsedVoiceChannelStore"), s(g, "persistKey", "collapsedChannels");
let f = new g(Chunk570140.Z, {
  CONNECTION_OPEN: c,
  OVERLAY_INITIALIZE: c,
  CHANNEL_COLLAPSE: function(e) {
    let {
      channelId: n
    } = e;
    d[n] ? delete d[n] : d[n] = true, d = function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), l.forEach(function(n) {
          s(e, n, t[n])
        })
      }
      return e
    }({}, d)
  }
})