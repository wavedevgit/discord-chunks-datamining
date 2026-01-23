/** Chunk was on web.js **/
/** chunk id: 741961, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => P
});
var i, Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk695870 = require("./695870.js"),
  Chunk927813 = require("./927813.js"),
  Chunk961350 = require("./961350.js"),
  Chunk101392 = require("./101392.js"),
  Chunk652215 = require("./652215.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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
let h = 10 * Chunk927813.A.Millis.SECOND,
  m = 1.5 * Chunk927813.A.Millis.SECOND,
  g = 5,
  E = {},
  y = Object.freeze({});

function b(e) {
  var t;
  return null != (t = E[e]) ? t : y
}

function O(e) {
  let {
    channelId: t
  } = e, n = u.default.getId();
  if (null == n || t === l.E) returnfalse;
  null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), r = null);
  let i = Date.now(),
    a = .8 * h;
  if (null != r && (null != r.timeout || r.prevSend + a > i)) returnfalse;
  let c = setTimeout(() => {
    null == r || r.channelId !== t || n !== u.default.getId() || null == r.timeout || (r.timeout = null, R(t) > g || s.Bo.post({
      url: f.Rsh.TYPING(t),
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => {
      if (200 === e.status) {
        var n, r;
        let i = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
          a = null != (r = e.body.thread_create_cooldown_ms) ? r : 0;
        i > 0 && o.h.dispatch({
          type: "SLOWMODE_SET_COOLDOWN",
          channelId: t,
          slowmodeType: d.R.SendMessage,
          cooldownMs: i
        }), a > 0 && o.h.dispatch({
          type: "SLOWMODE_SET_COOLDOWN",
          channelId: t,
          slowmodeType: d.R.CreateThread,
          cooldownMs: a
        })
      }
    }))
  }, null == r || r.prevSend > i - 2 * a ? m : 0);
  return r = {
    channelId: t,
    timeout: c,
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

function A(e) {
  let {
    channelId: t
  } = e, n = u.default.getId();
  return null != n && null != r && r.channelId === t && null != r.timeout && (clearTimeout(r.timeout), r = null, T({
    channelId: t,
    userId: n
  }))
}

function I(e, t) {
  return setTimeout(() => {
    o.h.dispatch({
      type: "TYPING_STOP",
      channelId: e,
      userId: t
    })
  }, h)
}

function S(e) {
  let {
    channelId: t,
    userId: n
  } = e, r = _({}, b(t));
  clearTimeout(r[n]), r[n] = I(t, n), E[t] = r
}

function T(e) {
  let {
    channelId: t,
    userId: n
  } = e, r = E[t];
  if (null == r || null == r[n]) returnfalse;
  let i = _({}, r);
  clearTimeout(i[n]), delete i[n], E[t] = i
}

function C(e) {
  let {
    channelId: t,
    message: {
      author: n
    },
    optimistic: r
  } = e;
  return r && v(t), null != n && T({
    channelId: t,
    userId: n.id
  })
}

function N() {
  E = {}
}

function R(e) {
  let t = b(e);
  return t === y ? 0 : Object.keys(t).length
}
class w extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.default)
  }
  getTypingUsers(e) {
    return b(e)
  }
  isTyping(e, t) {
    return null != b(e)[t]
  }
}
p(w, "displayName", "TypingStore");
let P = new w(Chunk73153.h, {
  TYPING_START: S,
  TYPING_STOP: T,
  TYPING_START_LOCAL: O,
  TYPING_STOP_LOCAL: A,
  CONNECTION_OPEN: N,
  OVERLAY_INITIALIZE: N,
  MESSAGE_CREATE: C
})