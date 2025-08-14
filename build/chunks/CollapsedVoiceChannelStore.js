/** Chunk was on 62117 **/
/** chunk id: 58468, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk709054 = require("./709054.js"),
  Chunk592125 = require("./592125.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {},
  h = o;

function u() {
  Chunk709054.default.keys(h).forEach(e => {
    null == a.Z.getChannel(e) && delete h[e]
  })
}
class c extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(a.Z), h = null != e ? e : o
  }
  getState() {
    return h
  }
  getCollapsed() {
    return h
  }
  isCollapsed(e) {
    return h[e] || false
  }
}
d(c, "displayName", "CollapsedVoiceChannelStore"), d(c, "persistKey", "collapsedChannels");
let g = new c(Chunk570140.Z, {
  CONNECTION_OPEN: u,
  OVERLAY_INITIALIZE: u,
  CHANNEL_COLLAPSE: function(e) {
    let {
      channelId: t
    } = e;
    h[t] ? delete h[t] : h[t] = true, h = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          d(e, t, n[t])
        })
      }
      return e
    }({}, h)
  }
})