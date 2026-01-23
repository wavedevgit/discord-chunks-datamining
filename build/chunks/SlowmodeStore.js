/** Chunk was on web.js **/
/** chunk id: 101392, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S,
  R: () => p
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk960850 = require("./960850.js"),
  Chunk927813 = require("./927813.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = 100;
var p = function(e) {
  return e[e.SendMessage = 0] = "SendMessage", e[e.CreateThread = 1] = "CreateThread", e
}({});
let _ = {
  0: {},
  1: {}
};

function h(e, t, n) {
  if (m(e, t), (0, o.F)(e, t) || n <= 0) return;
  let r = n + Date.now();
  _[t][e.id] = {
    rateLimitPerUser: e.rateLimitPerUser,
    cooldownMs: n,
    cooldownEndTimestamp: r,
    timer: new a.Ep
  }, _[t][e.id].timer.start(1e3, () => {
    s.h.dispatch({
      type: "SLOWMODE_SET_COOLDOWN",
      channelId: e.id,
      slowmodeType: t,
      cooldownMs: Math.max(r - Date.now(), 0)
    })
  }, true)
}

function m(e, t) {
  null != _[t][e.id] && (_[t][e.id].timer.stop(), delete _[t][e.id])
}

function g(e, t) {
  let n = c.A.getChannel(e);
  if (null == n) returnfalse;
  h(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * l.A.Millis.SECOND + f)
}

function E(e) {
  let {
    channelId: t
  } = e;
  return g(t, 0)
}

function y(e) {
  let {
    channelId: t
  } = e, n = c.A.getChannel(t);
  return null != n && h(n, 0, 0)
}

function b(e) {
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
  } = e, i = c.A.getChannel(t);
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
      let t = _[e][r.id],
        i = r.rateLimitPerUser;
      null != t && t.rateLimitPerUser !== i && h(r, e, Math.min(null != (n = null == t ? true : t.cooldownMs) ? n : 0, i * l.A.Millis.SECOND))
    }
  })
}

function A() {
  [0, 1].forEach(e => {
    Object.keys(_[e]).forEach(t => _[e][t].timer.stop()), _[e] = {}
  })
}
class I extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.A, u.A)
  }
  getSlowmodeCooldownGuess(e, t) {
    let n = _[null != t ? t : 0][e];
    return null != n ? n.cooldownMs : 0
  }
  isChannelOnCooldown(e, t) {
    return this.getSlowmodeCooldownGuess(e.id, t) > 0 && e.rateLimitPerUser > 0
  }
}
d(I, "displayName", "SlowmodeStore");
let S = new I(Chunk73153.h, {
  SLOWMODE_RESET_COOLDOWN: b,
  SLOWMODE_SET_COOLDOWN: O,
  UPLOAD_START: E,
  UPLOAD_FAIL: y,
  UPLOAD_CANCEL_REQUEST: y,
  CHANNEL_UPDATES: v,
  LOGOUT: A
})