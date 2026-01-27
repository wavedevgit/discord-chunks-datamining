/** Chunk was on 3911 **/
/** chunk id: 945886, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk661191 = require("./661191.js"),
  Chunk734057 = require("./734057.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = {},
  u = d;

function c() {
  l.default.keys(u).forEach(e => {
    null == o.A.getChannel(e) && delete u[e]
  })
}
class h extends(i = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(o.A), u = null != e ? e : d
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
let g = new h(Chunk73153.h, {
  CONNECTION_OPEN: c,
  OVERLAY_INITIALIZE: c,
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