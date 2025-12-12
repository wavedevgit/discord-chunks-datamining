/** Chunk was on web.js **/
/** chunk id: 340895, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk358221 = require("./358221.js"),
  Chunk695346 = require("./695346.js"),
  Chunk581883 = require("./581883.js"),
  Chunk163612 = require("./163612.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk885110 = require("./885110.js"),
  Chunk451478 = require("./451478.js"),
  Chunk981631 = require("./981631.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = "IncomingCallStore",
  b = 232,
  y = 315,
  O = 10,
  v = new Set,
  S = [],
  I = new Map,
  T = new Set,
  C = false;

function A() {
  let e = Chunk451478.Z.windowSize();
  return null != r && r.x + b < module.width && r.y + y < module.height ? r : {
    x: module.width / 2 - b / 2,
    y: module.height / 2 - y / 2
  }
}

function N(e) {
  if (null == e || null == I.get(e)) returnfalse;
  I.delete(e), (T = new Set(T)).delete(e)
}

function P(e) {
  let {
    channelId: t,
    ringing: n
  } = e;
  if ("GUILD_RING_START" === e.type && !d.Z.getCurrentConfig({
      guildId: e.guildId,
      location: "IncomingCallCreate"
    }).enabled) returnfalse;
  let r = n.includes(f.default.getId());
  if (!T.has(t) && r) {
    let e = p.Z.getChannel(t);
    if (null == e) returnfalse;
    let n = O * T.size,
      {
        x: r,
        y: i
      } = A();
    return I.set(t, {
      channel: e,
      x: r + n,
      y: i + n
    }), void(T = new Set(T)).add(t)
  }
  return !!T.has(t) && !r && N(t)
}

function R(e) {
  let {
    channelId: t
  } = e;
  return ("GUILD_RING_STOP" !== e.type || !!d.Z.getCurrentConfig({
    guildId: e.guildId,
    location: "IncomingCallDelete"
  }).enabled && !!e.ringing.includes(f.default.getId())) && N(t)
}

function w(e) {
  let {
    channelId: t
  } = e;
  return N(t)
}

function D(e) {
  let {
    x: t,
    y: n
  } = e;
  return r = {
    x: t,
    y: n
  }, o.K.set(E, r), false
}

function x(e) {
  let {
    channel: t
  } = e;
  return N(t.id)
}

function L() {
  C = Chunk885110.Z.getStatus() === Chunk981631.Skl.DND || Chunk695346.QZ.getSetting()
}

function j() {
  let e = Chunk314897.default.getId();
  T.forEach(t => {
    var n;
    let r = t;
    null != (null == (n = p.Z.getChannel(r)) ? true : n.guild_id) && (l.Z.getGuildRingingUsers(r).has(e) || N(r))
  })
}
class M extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk358221.Z, Chunk592125.Z, Chunk885110.Z, Chunk581883.Z, Chunk451478.Z), this.syncWith([Chunk885110.Z], L), this.syncWith([Chunk581883.Z], L), this.syncWith([Chunk358221.Z], j)
  }
  getIncomingCalls() {
    return C ? S : Array.from(I.values())
  }
  getIncomingCallChannelIds() {
    return C ? v : T
  }
  getFirstIncomingCallId() {
    return C ? null : T.values().next().value
  }
  hasIncomingCalls() {
    return !C && T.size > 0
  }
}
g(M, "displayName", "IncomingCallStore");
let k = new M(Chunk570140.Z, {
  CALL_CREATE: P,
  CALL_UPDATE: P,
  CALL_DELETE: R,
  GUILD_RING_START: P,
  GUILD_RING_STOP: R,
  VOICE_CHANNEL_SELECT: w,
  INCOMING_CALL_MOVE: D,
  CHANNEL_DELETE: x
})