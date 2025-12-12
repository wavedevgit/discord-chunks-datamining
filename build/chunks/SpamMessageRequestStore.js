/** Chunk was on web.js **/
/** chunk id: 333984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk592125 = require("./592125.js"),
  Chunk750041 = require("./750041.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = new Set,
  s = new Set,
  l = false;

function c(e) {
  return e.isSpam
}

function u(e) {
  let t = false;
  return c(e) && !a.has(e.id) && (a.add(e.id), t = true), !c(e) && a.has(e.id) && (a.delete(e.id), t = true), !c(e) && s.has(e.id) && (s.delete(e.id), t = true), t
}

function d() {
  a.clear(), s.clear(), Object.values(Chunk592125.Z.getMutablePrivateChannels()).forEach(e => {
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

function m(e) {
  let {
    channel: t
  } = e, n = false;
  return a.has(t.id) && (a.delete(t.id), n = true), n
}
class h extends Chunk750041.Z {
  initialize() {
    this.waitFor(Chunk592125.Z)
  }
  loadCache() {
    let e = this.readSnapshot(h.LATEST_SNAPSHOT_VERSION);
    null != module && (a = new Set(module))
  }
  takeSnapshot() {
    return {
      version: h.LATEST_SNAPSHOT_VERSION,
      data: Array.from(a)
    }
  }
  getSpamChannelIds() {
    return a
  }
  getSpamChannelsCount() {
    return a.size
  }
  isSpam(e) {
    return a.has(e)
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
      CHANNEL_DELETE: m,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: f
    })
  }
}
o(h, "displayName", "SpamMessageRequestStore"), o(h, "LATEST_SNAPSHOT_VERSION", 1);
let g = new h