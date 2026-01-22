/** Chunk was on web.js **/
/** chunk id: 240525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => M
}), require("./896048.js");
var Chunk734057 = require("./734057.js"),
  Chunk498642 = require("./498642.js"),
  Chunk536802 = require("./536802.js"),
  Chunk309010 = require("./309010.js"),
  Chunk753027 = require("./753027.js"),
  Chunk447508 = require("./447508.js"),
  Chunk383682 = require("./383682.js"),
  Chunk27548 = require("./27548.js"),
  Chunk363433 = require("./363433.js"),
  Chunk552618 = require("./552618.js"),
  Chunk879658 = require("./879658.js");

function _(e, t, n) {
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
  A = new Chunk447508.o(h, g),
  v = new Chunk383682.K(m),
  S = false;
class I extends Chunk536802.A {
  initialize() {
    this.waitFor(r.A), this.waitFor(s.A), this.waitFor(i.A), this.syncWith([o.A], () => true), this.syncWith([s.A], T)
  }
  loadCache() {
    let e = this.readSnapshot(I.LATEST_SNAPSHOT_VERSION);
    null != e && (S = true, I.mergeSnapshot(e))
  }
  canEvictOrphans() {
    return S
  }
  saveLimit(e) {
    let t = r.A.getBasicChannel(e);
    return null != t && (0, d.Z)(t) ? E : null != t && (s.A.getChannelId() === e || A.has(e)) ? b : y
  }
  getSaveableChannels() {
    let e = r.A.getChannelIds(null).map(e => ({
      guildId: null,
      channelId: e
    }));
    return o.A.isLowDisk ? null != O ? [...e, O] : e : [...e, ...A.values()]
  }
  takeSnapshot() {
    return {
      version: I.LATEST_SNAPSHOT_VERSION,
      data: {
        channels: [...A.allValues()].filter(e => !e.fallback),
        penalized: [...v.keys()],
        lastChannel: O
      }
    }
  }
  static mergeSnapshot(e) {
    let t = A,
      n = v;
    for (let n of (A = new l.o(A.primaryCapacity, A.extendedCapacity), v = new c.K(v.capacity), O = null != O ? O : e.lastChannel, [e.channels, t.values()]))
      for (let e of n) e.fallback || A.put(e.channelId, e);
    for (let t of [e.penalized, n.keys()])
      for (let e of t) v.put(e, null)
  }
  static recordChannel(e) {
    let t = r.A.getBasicChannel(e);
    if (null != t && (0, f.c)(t)) {
      var n;
      let r = {
        guildId: null != (n = t.guild_id) ? n : null,
        channelId: e,
        channelType: t.type
      };
      O = r, A.put(e, r), (0, u.qA)(t) && null != v.put(e, null) && A.delete(e)
    }
  }
  static deleteChannel(e) {
    A.delete(e)
  }
  static deleteGuild(e) {
    for (let t of A.allValues()) t.guildId === e && A.delete(t.channelId)
  }
  static dropUnreachableChannels() {
    for (let e of A.keys()) {
      let t = r.A.getBasicChannel(e);
      (0, f.c)(t) || I.deleteChannel(e)
    }
  }
  static deleteUnreadableGuildChannels(e) {
    for (let t of A.values()) e !== t.guildId || (0, f.J)(t.channelId) || I.deleteChannel(t.channelId)
  }
  static replaceLru(e) {
    A = e
  }
  constructor() {
    super({
      CACHE_LOADED_LAZY_NO_CACHE: j,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      CHANNEL_DELETE: w,
      CHANNEL_UPDATES: R,
      CONNECTION_OPEN_SUPPLEMENTAL: C,
      GUILD_DELETE: x,
      LOGIN_SUCCESS: L,
      THREAD_DELETE: D,
      THREAD_UPDATE: P
    })
  }
}

function T() {
  let e = s.A.getChannelId();
  null != e && I.recordChannel(e)
}

function C() {
  I.dropUnreachableChannels(), I.replaceLru((0, p.I)(A, h + g))
}

function N(e) {
  let t = e.id,
    n = (0, f.c)(e),
    r = s.A.getChannelId();
  n && t === r && I.recordChannel(t), n || I.deleteChannel(t)
}

function R(e) {
  for (let t of e.channels) N(t)
}

function w(e) {
  I.deleteChannel(e.channel.id)
}

function P(e) {
  N(e.channel)
}

function D(e) {
  I.deleteChannel(e.channel.id)
}

function x(e) {
  return !e.guild.unavailable && (I.deleteGuild(e.guild.id), true)
}

function L(e) {
  A.clear(), v.clear(), S = false
}

function j(e) {
  S = true
}
_(I, "displayName", "SaveableChannelsStore"), _(I, "LATEST_SNAPSHOT_VERSION", 1);
let M = new I