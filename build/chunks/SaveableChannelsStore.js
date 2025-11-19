/** Chunk was on web.js **/
/** chunk id: 40455, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => j
}), require("./388685.js");
var Chunk592125 = require("./592125.js"),
  Chunk650774 = require("./650774.js"),
  Chunk750041 = require("./750041.js"),
  Chunk944486 = require("./944486.js"),
  Chunk368321 = require("./368321.js"),
  Chunk553245 = require("./553245.js"),
  Chunk143806 = require("./143806.js"),
  Chunk814074 = require("./814074.js"),
  Chunk582142 = require("./582142.js"),
  Chunk989263 = require("./989263.js"),
  Chunk872261 = require("./872261.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 750,
  m = 15,
  g = 500,
  E = 25,
  b = 25,
  y = 1,
  O = null,
  v = new Chunk553245.b(h, g),
  I = new Chunk143806.S(m),
  T = false;
class S extends Chunk750041.Z {
  initialize() {
    this.waitFor(Chunk592125.Z), this.waitFor(Chunk944486.Z), this.waitFor(Chunk650774.Z), this.syncWith([Chunk368321.Z], () => true), this.syncWith([Chunk944486.Z], A)
  }
  loadCache() {
    let e = this.readSnapshot(S.LATEST_SNAPSHOT_VERSION);
    null != module && (T = true, S.mergeSnapshot(module))
  }
  canEvictOrphans() {
    return T
  }
  saveLimit(e) {
    let t = r.Z.getBasicChannel(e);
    return null != t && (0, d.p)(t) ? E : null != t && v.has(e) ? b : y
  }
  getSaveableChannels() {
    let e = Chunk592125.Z.getChannelIds(null).map(e => ({
      guildId: null,
      channelId: e
    }));
    return Chunk368321.Z.isLowDisk ? null != O ? [...module, O] : module : [...module, ...v.values()]
  }
  takeSnapshot() {
    return {
      version: S.LATEST_SNAPSHOT_VERSION,
      data: {
        channels: [...v.allValues()].filter(e => !e.fallback),
        penalized: [...I.keys()],
        lastChannel: O
      }
    }
  }
  static mergeSnapshot(e) {
    let t = v,
      n = I;
    for (let n of (v = new l.b(v.primaryCapacity, v.extendedCapacity), I = new c.S(I.capacity), O = null != O ? O : e.lastChannel, [e.channels, t.values()]))
      for (let e of n) e.fallback || v.put(e.channelId, e);
    for (let t of [e.penalized, n.keys()])
      for (let e of t) I.put(e, null)
  }
  static recordChannel(e) {
    let t = r.Z.getBasicChannel(e);
    if (null != t && (0, f.v)(t)) {
      var n;
      let r = {
        guildId: null != (n = t.guild_id) ? n : null,
        channelId: e,
        channelType: t.type
      };
      O = r, v.put(e, r), (0, u.Hr)(t) && null != I.put(e, null) && v.delete(e)
    }
  }
  static deleteChannel(e) {
    v.delete(e)
  }
  static deleteGuild(e) {
    for (let t of v.allValues()) t.guildId === e && v.delete(t.channelId)
  }
  static dropUnreachableChannels() {
    for (let e of v.keys()) {
      let t = Chunk592125.Z.getBasicChannel(module);
      (0, Chunk989263.v)(exports) || S.deleteChannel(module)
    }
  }
  static deleteUnreadableGuildChannels(e) {
    for (let t of v.values()) e !== t.guildId || (0, f.$)(t.channelId) || S.deleteChannel(t.channelId)
  }
  static replaceLru(e) {
    v = e
  }
  constructor() {
    super({
      CACHE_LOADED_LAZY_NO_CACHE: M,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      CHANNEL_DELETE: P,
      CHANNEL_UPDATES: R,
      CONNECTION_OPEN_SUPPLEMENTAL: C,
      GUILD_DELETE: L,
      LOGIN_SUCCESS: x,
      THREAD_DELETE: w,
      THREAD_UPDATE: D
    })
  }
}

function A() {
  let e = Chunk944486.Z.getChannelId();
  null != module && S.recordChannel(module)
}

function C() {
  S.dropUnreachableChannels(), S.replaceLru((0, Chunk872261.J)(v, h + g))
}

function N(e) {
  let t = e.id,
    n = (0, f.v)(e),
    r = o.Z.getChannelId();
  n && t === r && S.recordChannel(t), n || S.deleteChannel(t)
}

function R(e) {
  for (let t of e.channels) N(t)
}

function P(e) {
  S.deleteChannel(e.channel.id)
}

function D(e) {
  N(e.channel)
}

function w(e) {
  S.deleteChannel(e.channel.id)
}

function L(e) {
  return !e.guild.unavailable && (S.deleteGuild(e.guild.id), true)
}

function x(e) {
  v.clear(), I.clear(), T = false
}

function M(e) {
  T = true
}
p(S, "displayName", "SaveableChannelsStore"), p(S, "LATEST_SNAPSHOT_VERSION", 1);
let j = new S