/** Chunk was on 99546 **/
let a;
n.d(t, {
  Z: () => O
});
var o, i = n(442837),
  r = n(544891),
  c = n(570140),
  l = n(333023),
  s = n(70956),
  u = n(314897),
  d = n(300429),
  m = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let f = 10 * s.Z.Millis.SECOND,
  g = 1.5 * s.Z.Millis.SECOND,
  b = {},
  h = Object.freeze({});

function T(e) {
  var t;
  return null != (t = b[e]) ? t : h
}

function y(e) {
  let {
    channelId: t,
    userId: n
  } = e, a = _({}, T(t));
  clearTimeout(a[n]), a[n] = setTimeout(() => {
    c.Z.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: n
    })
  }, f), b[t] = a
}

function C(e) {
  let {
    channelId: t,
    userId: n
  } = e, a = b[t];
  if (null == a || null == a[n]) return !1;
  let o = _({}, a);
  clearTimeout(o[n]), delete o[n], b[t] = o
}

function v() {
  b = {}
}
class x extends(o = i.ZP.Store) {
  getTypingUsers(e) {
    return T(e)
  }
  isTyping(e, t) {
    return null != T(e)[t]
  }
}
p(x, "displayName", "TypingStore");
let O = new x(c.Z, {
  TYPING_START: y,
  TYPING_STOP: C,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = u.default.getId();
    if (null == n || t === l.V) return !1;
    null != a && a.channelId !== t && (null != a.timeout && clearTimeout(a.timeout), a = null);
    let o = Date.now(),
      i = .8 * f;
    if (null != a && (null != a.timeout || a.prevSend + i > o)) return !1;
    let s = setTimeout(() => {
      null != a && a.channelId === t && n === u.default.getId() && null != a.timeout && (a.timeout = null, function(e) {
        let t = T(e);
        return t === h ? 0 : Object.keys(t).length
      }(t) > 5 || r.tn.post({
        url: m.ANM.TYPING(t),
        oldFormErrors: !0,
        rejectWithError: !0
      }).then(e => {
        if (200 === e.status) {
          var n, a;
          let o = null != (n = e.body.message_send_cooldown_ms) ? n : 0,
            i = null != (a = e.body.thread_create_cooldown_ms) ? a : 0;
          o > 0 && c.Z.dispatch({
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: t,
            slowmodeType: d.S.SendMessage,
            cooldownMs: o
          }), i > 0 && c.Z.dispatch({
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: t,
            slowmodeType: d.S.CreateThread,
            cooldownMs: i
          })
        }
      }))
    }, null == a || a.prevSend > o - 2 * i ? g : 0);
    return a = {
      channelId: t,
      timeout: s,
      prevSend: o
    }, y({
      channelId: t,
      userId: n
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = u.default.getId();
    return null != n && null != a && a.channelId === t && null != a.timeout && (clearTimeout(a.timeout), a = null, C({
      channelId: t,
      userId: n
    }))
  },
  CONNECTION_OPEN: v,
  OVERLAY_INITIALIZE: v,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: {
        author: n
      },
      optimistic: o
    } = e;
    return o && function(e) {
      if (null != a && a.channelId === e) null != a.timeout && clearTimeout(a.timeout), a = null
    }(t), null != n && C({
      channelId: t,
      userId: n.id
    })
  }
})