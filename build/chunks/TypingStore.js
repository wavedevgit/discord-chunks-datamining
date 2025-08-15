/** Chunk was on 81498 **/
/** chunk id: 111583, original params: e,t,n (module,exports,require) **/
"use strict";
let i;
require.d(exports, {
  Z: () => _
});
var r, Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk333023 = require("./333023.js"),
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

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let f = 10 * Chunk70956.Z.Millis.SECOND,
  v = 1.5 * Chunk70956.Z.Millis.SECOND,
  m = {},
  C = Object.freeze({});

function b(e) {
  var t;
  return null != (t = m[e]) ? t : C
}

function y(e) {
  let {
    channelId: t,
    userId: n
  } = e, i = g({}, b(t));
  clearTimeout(i[n]), i[n] = setTimeout(() => {
    o.Z.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: n
    })
  }, f), m[t] = i
}

function O(e) {
  let {
    channelId: t,
    userId: n
  } = e, i = m[t];
  if (null == i || null == i[n]) returnfalse;
  let r = g({}, i);
  clearTimeout(r[n]), delete r[n], m[t] = r
}

function S() {
  m = {}
}
class E extends(r = Chunk442837.ZP.Store) {
  getTypingUsers(e) {
    return b(e)
  }
  isTyping(e, t) {
    return null != b(e)[t]
  }
}
p(E, "displayName", "TypingStore");
let _ = new E(Chunk570140.Z, {
  TYPING_START: y,
  TYPING_STOP: O,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = c.default.getId();
    if (null == n || t === a.V) returnfalse;
    null != i && i.channelId !== t && (null != i.timeout && clearTimeout(i.timeout), i = null);
    let r = Date.now(),
      s = .8 * f;
    if (null != i && (null != i.timeout || i.prevSend + s > r)) returnfalse;
    let u = setTimeout(() => {
      null != i && i.channelId === t && n === c.default.getId() && null != i.timeout && (i.timeout = null, function(e) {
        let t = b(e);
        return t === C ? 0 : Object.keys(t).length
      }(t) > 5 || l.tn.post({
        url: h.ANM.TYPING(t),
        oldFormErrors: true,
        rejectWithError: true
      }).then(e => {
        if (200 === e.status) {
          var n, i;
          let r = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
            s = null != (i = e.body.thread_create_cooldown_ms) ? i : 0;
          r > 0 && o.Z.dispatch({
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: t,
            slowmodeType: d.S.SendMessage,
            cooldownMs: r
          }), s > 0 && o.Z.dispatch({
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: t,
            slowmodeType: d.S.CreateThread,
            cooldownMs: s
          })
        }
      }))
    }, null == i || i.prevSend > r - 2 * s ? v : 0);
    return i = {
      channelId: t,
      timeout: u,
      prevSend: r
    }, y({
      channelId: t,
      userId: n
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = c.default.getId();
    return null != n && null != i && i.channelId === t && null != i.timeout && (clearTimeout(i.timeout), i = null, O({
      channelId: t,
      userId: n
    }))
  },
  CONNECTION_OPEN: S,
  OVERLAY_INITIALIZE: S,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: {
        author: n
      },
      optimistic: r
    } = e;
    return r && function(e) {
      if (null != i && i.channelId === e) null != i.timeout && clearTimeout(i.timeout), i = null
    }(t), null != n && O({
      channelId: t,
      userId: n.id
    })
  }
})