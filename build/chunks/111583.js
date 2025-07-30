/** Chunk was on 80416 **/
let a;
n.d(t, {
  Z: () => x
});
var o, i = n(442837),
  r = n(544891),
  c = n(570140),
  l = n(333023),
  s = n(384278),
  u = n(70956),
  d = n(314897),
  m = n(300429),
  p = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let g = 10 * u.Z.Millis.SECOND,
  b = {},
  h = Object.freeze({});

function y(e) {
  var t;
  return null != (t = b[e]) ? t : h
}

function T(e) {
  let {
    channelId: t,
    userId: n
  } = e, a = f({}, y(t));
  clearTimeout(a[n]), a[n] = setTimeout(() => {
    c.Z.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: n
    })
  }, g), b[t] = a
}

function C(e) {
  let {
    channelId: t,
    userId: n
  } = e, a = b[t];
  if (null == a || null == a[n]) return !1;
  let o = f({}, a);
  clearTimeout(o[n]), delete o[n], b[t] = o
}

function O() {
  b = {}
}
class E extends(o = i.ZP.Store) {
  getTypingUsers(e) {
    return y(e)
  }
  isTyping(e, t) {
    return null != y(e)[t]
  }
}
_(E, "displayName", "TypingStore");
let x = new E(c.Z, {
  TYPING_START: T,
  TYPING_STOP: C,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = d.default.getId();
    if (null == n || t === l.V) return !1;
    null != a && a.channelId !== t && (null != a.timeout && clearTimeout(a.timeout), a = null);
    let o = Date.now(),
      i = .8 * g;
    if (null != a && (null != a.timeout || a.prevSend + i > o)) return !1;
    let {
      delayMs: u
    } = (0, s.M1)("typing_store"), _ = setTimeout(() => {
      null != a && a.channelId === t && n === d.default.getId() && null != a.timeout && (a.timeout = null, function(e) {
        let t = y(e);
        return t === h ? 0 : Object.keys(t).length
      }(t) > 5 || r.tn.post({
        url: p.ANM.TYPING(t),
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
            slowmodeType: m.S.SendMessage,
            cooldownMs: o
          }), i > 0 && c.Z.dispatch({
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: t,
            slowmodeType: m.S.CreateThread,
            cooldownMs: i
          })
        }
      }))
    }, null == a || a.prevSend > o - 2 * i ? u : 0);
    return a = {
      channelId: t,
      timeout: _,
      prevSend: o
    }, T({
      channelId: t,
      userId: n
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = d.default.getId();
    return null != n && null != a && a.channelId === t && null != a.timeout && (clearTimeout(a.timeout), a = null, C({
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