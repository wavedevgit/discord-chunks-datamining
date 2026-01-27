/** Chunk was on web.js **/
/** chunk id: 157550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk734057 = require("./734057.js"),
  Chunk536802 = require("./536802.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = new Set,
  s = new Set,
  l = false;

function c(e) {
  return e.isSpam
}

function u(e) {
  let t = false;
  return c(e) && !o.has(e.id) && (o.add(e.id), t = true), !c(e) && o.has(e.id) && (o.delete(e.id), t = true), !c(e) && s.has(e.id) && (s.delete(e.id), t = true), t
}

function d() {
  o.clear(), s.clear(), Object.values(r.A.getMutablePrivateChannels()).forEach(e => {
    u(e)
  }), l = true
}

function f(e) {
  let {
    channelId: t
  } = e;
  s.add(t)
}

function p(e) {
  let {
    channel: t
  } = e;
  return u(t)
}

function _(e) {
  let {
    channels: t
  } = e;
  for (let e of t) u(e)
}

function h(e) {
  let {
    channel: t
  } = e, n = false;
  return o.has(t.id) && (o.delete(t.id), n = true), n
}
class m extends Chunk536802.A {
  initialize() {
    this.waitFor(r.A)
  }
  loadCache() {
    let e = this.readSnapshot(m.LATEST_SNAPSHOT_VERSION);
    null != e && (o = new Set(e))
  }
  takeSnapshot() {
    return {
      version: m.LATEST_SNAPSHOT_VERSION,
      data: Array.from(o)
    }
  }
  getSpamChannelIds() {
    return o
  }
  getSpamChannelsCount() {
    return o.size
  }
  isSpam(e) {
    return o.has(e)
  }
  isAcceptedOptimistic(e) {
    return s.has(e)
  }
  isReady() {
    return l
  }
  constructor() {
    super({
      CONNECTION_OPEN: d,
      CONNECTION_OPEN_SUPPLEMENTAL: d,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      CHANNEL_CREATE: p,
      CHANNEL_UPDATES: _,
      CHANNEL_DELETE: h,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: f
    })
  }
}
a(m, "displayName", "SpamMessageRequestStore"), a(m, "LATEST_SNAPSHOT_VERSION", 1);
let g = new m