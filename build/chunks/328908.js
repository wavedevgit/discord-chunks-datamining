/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  GA: () => m,
  Hb: () => _,
  Hi: () => E,
  LN: () => g,
  OG: () => T,
  Qj: () => I,
  Qy: () => O,
  Rg: () => h,
  q5: () => b,
  t0: () => S,
  z8: () => v
});
var r = n(15729),
  i = n(731965),
  o = n(626135),
  a = n(981631);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = Object.freeze({
    messageSendConfetti: {},
    messageReactionConfetti: void 0
  }),
  f = (0, r.U)(() => d),
  p = (e, t) => {
    o.default.track(a.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, {
      location: t
    }), (0, i.j)(() => {
      f.setState(t => {
        let {
          messageSendConfetti: n
        } = t;
        return {
          messageSendConfetti: u(l({}, n), {
            [e]: {
              state: 0,
              emoji: void 0,
              hasAutoPopped: !1
            }
          })
        }
      })
    })
  },
  _ = e => {
    (0, i.j)(() => {
      f.setState(t => {
        let {
          messageSendConfetti: n
        } = t, r = l({}, n);
        return delete r[e], {
          messageSendConfetti: r
        }
      })
    })
  },
  h = (e, t) => {
    null != f.getState().messageSendConfetti[e] ? _(e) : p(e, t)
  },
  m = e => {
    let t = f.getState();
    null != t.messageSendConfetti[e] && 0 === t.messageSendConfetti[e].state && (t.messageSendConfetti[e].hasAutoPopped = !0)
  };

function g(e) {
  return f(t => null != t.messageSendConfetti[e])
}

function E(e, t) {
  return (0, i.j)(() => {
    f.setState(n => {
      let {
        messageSendConfetti: r
      } = n;
      return {
        messageSendConfetti: u(l({}, r), {
          [t]: {
            state: 1,
            emoji: e
          }
        })
      }
    })
  })
}

function v(e) {
  return f(t => {
    var n;
    return null === (n = t.messageSendConfetti[e]) || void 0 === n ? void 0 : n.emoji
  })
}

function b(e) {
  var t;
  return null === (t = f.getState().messageSendConfetti[e]) || void 0 === t ? void 0 : t.emoji
}

function y(e) {
  return (0, i.j)(() => {
    f.setState(() => ({
      messageReactionConfetti: e
    }))
  })
}

function O() {
  return (0, i.j)(() => {
    f.setState(() => ({
      messageReactionConfetti: void 0
    }))
  })
}

function S(e, t, n) {
  n ? y(e) : E(e, t)
}

function I(e, t) {
  return f(n => {
    var r;
    return t ? n.messageReactionConfetti : null === (r = n.messageSendConfetti[e]) || void 0 === r ? void 0 : r.emoji
  })
}

function T(e) {
  return f(t => {
    let n = t.messageSendConfetti[e];
    if ((null == n ? void 0 : n.state) === 0) return n.hasAutoPopped
  })
}