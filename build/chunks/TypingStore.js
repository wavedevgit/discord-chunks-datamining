/** Chunk was on web.js **/
/** chunk id: 111583, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => w
});
var i, Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk333023 = require("./333023.js"),
  Chunk384278 = require("./384278.js"),
  Chunk70956 = require("./70956.js"),
  Chunk314897 = require("./314897.js"),
  Chunk300429 = require("./300429.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let m = 10 * Chunk70956.Z.Millis.SECOND,
  g = 5,
  E = {},
  b = Object.freeze({});

function y(e) {
  var t;
  return null != (t = E[e]) ? t : b
}

function O(e) {
  let {
    channelId: t
  } = e, n = d.default.getId();
  if (null == n || t === l.V) returnfalse;
  null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), r = null);
  let i = Date.now(),
    o = .8 * m;
  if (null != r && (null != r.timeout || r.prevSend + o > i)) returnfalse;
  let {
    delayMs: u
  } = (0, c.M1)("typing_store"), p = setTimeout(() => {
    null != r && r.channelId === t && n === d.default.getId() && null != r.timeout && (r.timeout = null, R(t) > g || a.tn.post({
      url: _.ANM.TYPING(t),
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => {
      if (200 === e.status) {
        var n, r;
        let i = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
          o = null != (r = e.body.thread_create_cooldown_ms) ? r : 0;
        i > 0 && s.Z.dispatch({
          type: "SLOWMODE_SET_COOLDOWN",
          channelId: t,
          slowmodeType: f.S.SendMessage,
          cooldownMs: i
        }), o > 0 && s.Z.dispatch({
          type: "SLOWMODE_SET_COOLDOWN",
          channelId: t,
          slowmodeType: f.S.CreateThread,
          cooldownMs: o
        })
      }
    }))
  }, null == r || r.prevSend > i - 2 * o ? u : 0);
  return r = {
    channelId: t,
    timeout: p,
    prevSend: i
  }, S({
    channelId: t,
    userId: n
  })
}

function v(e) {
  if (null == r || r.channelId !== e) returnfalse;
  null != r.timeout && clearTimeout(r.timeout), r = null
}

function I(e) {
  let {
    channelId: t
  } = e, n = d.default.getId();
  return null != n && null != r && r.channelId === t && null != r.timeout && (clearTimeout(r.timeout), r = null, A({
    channelId: t,
    userId: n
  }))
}

function T(e, t) {
  return setTimeout(() => {
    s.Z.dispatch({
      type: "TYPING_STOP",
      channelId: e,
      userId: t
    })
  }, m)
}

function S(e) {
  let {
    channelId: t,
    userId: n
  } = e, r = h({}, y(t));
  clearTimeout(r[n]), r[n] = T(t, n), E[t] = r
}

function A(e) {
  let {
    channelId: t,
    userId: n
  } = e, r = E[t];
  if (null == r || null == r[n]) returnfalse;
  let i = h({}, r);
  clearTimeout(i[n]), delete i[n], E[t] = i
}

function N(e) {
  let {
    channelId: t,
    message: {
      author: n
    },
    optimistic: r
  } = e;
  return r && v(t), null != n && A({
    channelId: t,
    userId: n.id
  })
}

function C() {
  E = {}
}

function R(e) {
  let t = y(e);
  return t === b ? 0 : Object.keys(t).length
}
class P extends(i = Chunk442837.ZP.Store) {
  getTypingUsers(e) {
    return y(e)
  }
  isTyping(e, t) {
    return null != y(e)[t]
  }
}
p(P, "displayName", "TypingStore");
let w = new P(Chunk570140.Z, {
  TYPING_START: S,
  TYPING_STOP: A,
  TYPING_START_LOCAL: O,
  TYPING_STOP_LOCAL: I,
  CONNECTION_OPEN: C,
  OVERLAY_INITIALIZE: C,
  MESSAGE_CREATE: N
})