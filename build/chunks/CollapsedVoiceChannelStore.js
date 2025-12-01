/** Chunk was on web.js **/
/** chunk id: 58468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk709054 = require("./709054.js"),
  Chunk592125 = require("./592125.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = {},
  d = u;

function f(e) {
  let {
    channelId: t
  } = e;
  d[t] ? delete d[t] : d[t] = true, d = c({}, d)
}

function p() {
  Chunk709054.default.keys(d).forEach(e => {
    null == s.Z.getChannel(e) && delete d[e]
  })
}
class _ extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(s.Z), d = null != e ? e : u
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
l(_, "displayName", "CollapsedVoiceChannelStore"), l(_, "persistKey", "collapsedChannels");
let m = new _(Chunk570140.Z, {
  CONNECTION_OPEN: p,
  OVERLAY_INITIALIZE: p,
  CHANNEL_COLLAPSE: f
})