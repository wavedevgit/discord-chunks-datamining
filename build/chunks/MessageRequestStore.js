/** Chunk was on web.js **/
/** chunk id: 380335, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk518977 = require("./518977.js"),
  Chunk734057 = require("./734057.js"),
  Chunk536802 = require("./536802.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = new Set,
  l = new Set,
  c = false,
  u = null;

function d(e) {
  return e.isMessageRequest && !e.isSpam
}

function f(e) {
  let t = false;
  return d(e) && !o.has(e.id) && (o.add(e.id), t = true), !d(e) && o.has(e.id) && (o.delete(e.id), t = true), !d(e) && l.has(e.id) && (l.delete(e.id), t = true), t
}

function p(e) {
  var t;
  null != e && (u = null != (t = (0, r.XF)(e)) ? t : (0, r.rE)())
}

function _(e) {
  "CONNECTION_OPEN" === e.type && p(e.countryCode), o.clear(), l.clear(), Object.values(i.A.getMutablePrivateChannels()).forEach(e => {
    f(e)
  }), c = true
}

function h(e) {
  let {
    channelId: t
  } = e;
  l.add(t)
}

function m(e) {
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
  return !!o.has(t.id) && (o.delete(t.id), true)
}

function b(e) {
  let {
    messageRequestChannelIds: t
  } = e;
  t.forEach(e => o.add(e))
}

function y(e) {
  let {
    countryCode: t
  } = e;
  p(t)
}
class O extends Chunk536802.A {
  initialize() {
    this.waitFor(i.A)
  }
  loadCache() {
    let e = this.readSnapshot(O.LATEST_SNAPSHOT_VERSION);
    null != e && (o = new Set(e))
  }
  takeSnapshot() {
    return {
      version: O.LATEST_SNAPSHOT_VERSION,
      data: Array.from(o)
    }
  }
  getMessageRequestChannelIds() {
    return o
  }
  getMessageRequestsCount() {
    return o.size
  }
  isMessageRequest(e) {
    return o.has(e)
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
      CHANNEL_CREATE: m,
      CHANNEL_UPDATES: g,
      CHANNEL_DELETE: E,
      SET_LOCATION_METADATA: y,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: h
    })
  }
}
s(O, "displayName", "MessageRequestStore"), s(O, "LATEST_SNAPSHOT_VERSION", 1);
let A = new O