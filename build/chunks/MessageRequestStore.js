/** Chunk was on web.js **/
/** chunk id: 355298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk133080 = require("./133080.js"),
  Chunk592125 = require("./592125.js"),
  Chunk750041 = require("./750041.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Set,
  l = new Set,
  c = false,
  u = null;

function d(e) {
  return e.isMessageRequest && !e.isSpam
}

function f(e) {
  let t = false;
  return d(e) && !s.has(e.id) && (s.add(e.id), t = true), !d(e) && s.has(e.id) && (s.delete(e.id), t = true), !d(e) && l.has(e.id) && (l.delete(e.id), t = true), t
}

function p(e) {
  var t;
  null != e && (u = null != (t = (0, r.Zz)(e)) ? t : (0, r.K4)())
}

function _(e) {
  "CONNECTION_OPEN" === e.type && p(e.countryCode), s.clear(), l.clear(), Object.values(i.Z.getMutablePrivateChannels()).forEach(e => {
    f(e)
  }), c = true
}

function m(e) {
  let {
    channelId: t
  } = e;
  l.add(t)
}

function h(e) {
  let {
    channel: t
  } = e;
  return f(t)
}

function g(e) {
  let {
    channels: t
  } = e;
  for (let e of t) f(e)
}

function E(e) {
  let {
    channel: t
  } = e;
  return !!s.has(t.id) && (s.delete(t.id), true)
}

function b(e) {
  let {
    messageRequestChannelIds: t
  } = e;
  t.forEach(e => s.add(e))
}

function y(e) {
  let {
    countryCode: t
  } = e;
  p(t)
}
class O extends Chunk750041.Z {
  initialize() {
    this.waitFor(Chunk592125.Z)
  }
  loadCache() {
    let e = this.readSnapshot(O.LATEST_SNAPSHOT_VERSION);
    null != module && (s = new Set(module))
  }
  takeSnapshot() {
    return {
      version: O.LATEST_SNAPSHOT_VERSION,
      data: Array.from(s)
    }
  }
  getMessageRequestChannelIds() {
    return s
  }
  getMessageRequestsCount() {
    return s.size
  }
  isMessageRequest(e) {
    return s.has(e)
  }
  isAcceptedOptimistic(e) {
    return l.has(e)
  }
  getUserCountryCode() {
    return u
  }
  isReady() {
    return c
  }
  constructor() {
    super({
      CONNECTION_OPEN: _,
      CONNECTION_OPEN_SUPPLEMENTAL: _,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      OVERLAY_INITIALIZE: b,
      CHANNEL_CREATE: h,
      CHANNEL_UPDATES: g,
      CHANNEL_DELETE: E,
      SET_LOCATION_METADATA: y,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: m
    })
  }
}
a(O, "displayName", "MessageRequestStore"), a(O, "LATEST_SNAPSHOT_VERSION", 1);
let v = new O