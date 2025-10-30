/** Chunk was on web.js **/
/** chunk id: 300429, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => _,
  Z: () => S
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk923664 = require("./923664.js"),
  Chunk70956 = require("./70956.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = 100;
var _ = function(e) {
  return e[e.SendMessage = 0] = "SendMessage", e[e.CreateThread = 1] = "CreateThread", e
}({});
let p = {
  0: {},
  1: {}
};

function h(e, t, n) {
  if (m(e, t), (0, s.t)(e, t) || n <= 0) return;
  let r = n + Date.now();
  p[t][e.id] = {
    rateLimitPerUser: e.rateLimitPerUser,
    cooldownMs: n,
    cooldownEndTimestamp: r,
    timer: new a.V7
  }, p[t][e.id].timer.start(1e3, () => {
    o.Z.dispatch({
      type: "SLOWMODE_SET_COOLDOWN",
      channelId: e.id,
      slowmodeType: t,
      cooldownMs: Math.max(r - Date.now(), 0)
    })
  }, true)
}

function m(e, t) {
  null != p[t][e.id] && (p[t][e.id].timer.stop(), delete p[t][e.id])
}

function g(e, t) {
  let n = c.Z.getChannel(e);
  if (null == n) returnfalse;
  h(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * l.Z.Millis.SECOND + f)
}

function E(e) {
  let {
    channelId: t
  } = e;
  return g(t, 0)
}

function b(e) {
  let {
    channelId: t
  } = e, n = c.Z.getChannel(t);
  return null != n && h(n, 0, 0)
}

function y(e) {
  let {
    channelId: t,
    slowmodeType: n
  } = e;
  return g(t, n)
}

function O(e) {
  let {
    channelId: t,
    slowmodeType: n,
    cooldownMs: r
  } = e, i = c.Z.getChannel(t);
  if (null == i) returnfalse;
  h(i, n, 0 === r ? 0 : r + f)
}

function v(e) {
  let {
    channels: t
  } = e;
  [0, 1].forEach(e => {
    for (let r of t) {
      var n;
      let t = p[e][r.id],
        i = r.rateLimitPerUser;
      null != t && t.rateLimitPerUser !== i && h(r, e, Math.min(null != (n = null == t ? true : t.cooldownMs) ? n : 0, i * l.Z.Millis.SECOND))
    }
  })
}

function I() {
  [0, 1].forEach(e => {
    Object.keys(p[e]).forEach(t => p[e][t].timer.stop()), p[e] = {}
  })
}
class T extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk496675.Z)
  }
  getSlowmodeCooldownGuess(e, t) {
    let n = p[null != t ? t : 0][e];
    return null != n ? n.cooldownMs : 0
  }
  isChannelOnCooldown(e, t) {
    return this.getSlowmodeCooldownGuess(e.id, t) > 0 && e.rateLimitPerUser > 0
  }
}
d(T, "displayName", "SlowmodeStore");
let S = new T(Chunk570140.Z, {
  SLOWMODE_RESET_COOLDOWN: y,
  SLOWMODE_SET_COOLDOWN: O,
  UPLOAD_START: E,
  UPLOAD_FAIL: b,
  UPLOAD_CANCEL_REQUEST: b,
  CHANNEL_UPDATES: v,
  LOGOUT: I
})