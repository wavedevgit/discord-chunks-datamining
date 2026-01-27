/** Chunk was on web.js **/
/** chunk id: 503509, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => k
}), require("./896048.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk313961 = require("./313961.js"),
  Chunk253932 = require("./253932.js"),
  Chunk617617 = require("./617617.js"),
  Chunk164891 = require("./164891.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk461213 = require("./461213.js"),
  Chunk531685 = require("./531685.js"),
  Chunk652215 = require("./652215.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = "IncomingCallStore",
  y = 232,
  b = 315,
  O = 10,
  v = new Set,
  A = [],
  I = new Map,
  S = new Set,
  T = false;

function C() {
  let e = h.A.windowSize();
  return null != r && r.x + y < e.width && r.y + b < e.height ? r : {
    x: e.width / 2 - y / 2,
    y: e.height / 2 - b / 2
  }
}

function N(e) {
  if (null == e || null == I.get(e)) returnfalse;
  I.delete(e), (S = new Set(S)).delete(e)
}

function w(e) {
  let {
    channelId: t,
    ringing: n
  } = e;
  if ("GUILD_RING_START" === e.type && !d.A.getCurrentConfig({
      guildId: e.guildId,
      location: "IncomingCallCreate"
    }).enabled) returnfalse;
  let r = n.includes(f.default.getId());
  if (!S.has(t) && r) {
    let e = p.A.getChannel(t);
    if (null == e) returnfalse;
    let n = O * S.size,
      {
        x: r,
        y: i
      } = C();
    return I.set(t, {
      channel: e,
      x: r + n,
      y: i + n
    }), void(S = new Set(S)).add(t)
  }
  return !!S.has(t) && !r && N(t)
}

function R(e) {
  let {
    channelId: t
  } = e;
  return ("GUILD_RING_STOP" !== e.type || !!d.A.getCurrentConfig({
    guildId: e.guildId,
    location: "IncomingCallDelete"
  }).enabled && !!e.ringing.includes(f.default.getId())) && N(t)
}

function P(e) {
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
  }, o.w.set(E, r), false
}

function L(e) {
  let {
    channel: t
  } = e;
  return N(t.id)
}

function x() {
  T = _.A.getStatus() === m.clD.DND || c.NO.getSetting()
}

function M() {
  let e = f.default.getId();
  S.forEach(t => {
    var n;
    let r = t;
    null == (null == (n = p.A.getChannel(r)) ? true : n.guild_id) || l.A.getGuildRingingUsers(r).has(e) || N(r)
  })
}
class j extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.default, l.A, p.A, _.A, u.A, h.A), this.syncWith([_.A], x), this.syncWith([u.A], x), this.syncWith([l.A], M)
  }
  getIncomingCalls() {
    return T ? A : Array.from(I.values())
  }
  getIncomingCallChannelIds() {
    return T ? v : S
  }
  getFirstIncomingCallId() {
    return T ? null : S.values().next().value
  }
  hasIncomingCalls() {
    return !T && S.size > 0
  }
}
g(j, "displayName", "IncomingCallStore");
let k = new j(Chunk73153.h, {
  CALL_CREATE: w,
  CALL_UPDATE: w,
  CALL_DELETE: R,
  GUILD_RING_START: w,
  GUILD_RING_STOP: R,
  VOICE_CHANNEL_SELECT: P,
  INCOMING_CALL_MOVE: D,
  CHANNEL_DELETE: L
})