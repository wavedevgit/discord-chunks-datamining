/** Chunk was on 13368 **/
/** chunk id: 111583, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  Z: () => S
});
var i, Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk333023 = require("./333023.js"),
  Chunk70956 = require("./70956.js"),
  Chunk314897 = require("./314897.js"),
  Chunk300429 = require("./300429.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let b = 10 * Chunk70956.Z.Millis.SECOND,
  h = 1.5 * Chunk70956.Z.Millis.SECOND,
  v = {},
  m = Object.freeze({});

function g(e) {
  var t;
  return null != (t = v[e]) ? t : m
}

function y(e) {
  let {
    channelId: t,
    userId: n
  } = e, r = p({}, g(t));
  clearTimeout(r[n]), r[n] = setTimeout(() => {
    a.Z.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: n
    })
  }, b), v[t] = r
}

function I(e) {
  let {
    channelId: t,
    userId: n
  } = e, r = v[t];
  if (null == r || null == r[n]) returnfalse;
  let i = p({}, r);
  clearTimeout(i[n]), delete i[n], v[t] = i
}

function O() {
  v = {}
}
class E extends(i = Chunk442837.ZP.Store) {
  getTypingUsers(e) {
    return g(e)
  }
  isTyping(e, t) {
    return null != g(e)[t]
  }
}
_(E, "displayName", "TypingStore");
let S = new E(Chunk570140.Z, {
  TYPING_START: y,
  TYPING_STOP: I,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = s.default.getId();
    if (null == n || t === c.V) returnfalse;
    null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), r = null);
    let i = Date.now(),
      o = .8 * b;
    if (null != r && (null != r.timeout || r.prevSend + o > i)) returnfalse;
    let u = setTimeout(() => {
      null != r && r.channelId === t && n === s.default.getId() && null != r.timeout && (r.timeout = null, function(e) {
        let t = g(e);
        return t === m ? 0 : Object.keys(t).length
      }(t) > 5 || l.tn.post({
        url: f.ANM.TYPING(t),
        oldFormErrors: true,
        rejectWithError: true
      }).then(e => {
        if (200 === e.status) {
          var n, r;
          let i = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
            o = null != (r = e.body.thread_create_cooldown_ms) ? r : 0;
          i > 0 && a.Z.dispatch({
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: t,
            slowmodeType: d.S.SendMessage,
            cooldownMs: i
          }), o > 0 && a.Z.dispatch({
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: t,
            slowmodeType: d.S.CreateThread,
            cooldownMs: o
          })
        }
      }))
    }, null == r || r.prevSend > i - 2 * o ? h : 0);
    return r = {
      channelId: t,
      timeout: u,
      prevSend: i
    }, y({
      channelId: t,
      userId: n
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = s.default.getId();
    return null != n && null != r && r.channelId === t && null != r.timeout && (clearTimeout(r.timeout), r = null, I({
      channelId: t,
      userId: n
    }))
  },
  CONNECTION_OPEN: O,
  OVERLAY_INITIALIZE: O,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: {
        author: n
      },
      optimistic: i
    } = e;
    return i && function(e) {
      if (null != r && r.channelId === e) null != r.timeout && clearTimeout(r.timeout), r = null
    }(t), null != n && I({
      channelId: t,
      userId: n.id
    })
  }
})