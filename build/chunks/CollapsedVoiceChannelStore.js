/** Chunk was on 4756 **/
/** chunk id: 58468, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk709054 = require("./709054.js"),
  Chunk592125 = require("./592125.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = {},
  c = u;

function d() {
  Chunk709054.default.keys(c).forEach(e => {
    null == o.Z.getChannel(e) && delete c[e]
  })
}
class h extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(o.Z), c = null != e ? e : u
  }
  getState() {
    return c
  }
  getCollapsed() {
    return c
  }
  isCollapsed(e) {
    return c[e] || false
  }
}
a(h, "displayName", "CollapsedVoiceChannelStore"), a(h, "persistKey", "collapsedChannels");
let p = new h(Chunk570140.Z, {
  CONNECTION_OPEN: d,
  OVERLAY_INITIALIZE: d,
  CHANNEL_COLLAPSE: function(e) {
    let {
      channelId: t
    } = e;
    c[t] ? delete c[t] : c[t] = true, c = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          a(e, t, n[t])
        })
      }
      return e
    }({}, c)
  }
})