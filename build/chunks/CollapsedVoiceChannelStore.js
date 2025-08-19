/** Chunk was on 31930 **/
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
let c = {},
  u = c;

function d() {
  Chunk709054.default.keys(u).forEach(e => {
    null == o.Z.getChannel(e) && delete u[e]
  })
}
class h extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(o.Z), u = null != e ? e : c
  }
  getState() {
    return u
  }
  getCollapsed() {
    return u
  }
  isCollapsed(e) {
    return u[e] || false
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
    u[t] ? delete u[t] : u[t] = true, u = function(e) {
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
    }({}, u)
  }
})