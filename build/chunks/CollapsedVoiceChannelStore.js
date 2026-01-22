/** Chunk was on web.js **/
/** chunk id: 945886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk661191 = require("./661191.js"),
  Chunk734057 = require("./734057.js");

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
  s.default.keys(d).forEach(e => {
    null == o.A.getChannel(e) && delete d[e]
  })
}
class _ extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(o.A), d = null != e ? e : u
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
let h = new _(Chunk73153.h, {
  CONNECTION_OPEN: p,
  OVERLAY_INITIALIZE: p,
  CHANNEL_COLLAPSE: f
})