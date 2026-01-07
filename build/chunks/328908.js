/** Chunk was on web.js **/
/** chunk id: 328908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GA: () => h,
  Hb: () => _,
  Hi: () => E,
  LN: () => g,
  OG: () => T,
  Qj: () => I,
  Qy: () => v,
  Rg: () => m,
  q5: () => y,
  t0: () => S,
  z8: () => b
});
var Chunk663042 = require("./663042.js"),
  Chunk731965 = require("./731965.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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
    messageReactionConfetti: true
  }),
  f = (0, Chunk663042.U)(() => d),
  p = (e, t) => {
    a.default.track(o.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, {
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
              emoji: true,
              hasAutoPopped: false
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
  m = (e, t) => {
    null != f.getState().messageSendConfetti[e] ? _(e) : p(e, t)
  },
  h = e => {
    let t = f.getState();
    null != t.messageSendConfetti[e] && 0 === t.messageSendConfetti[e].state && (t.messageSendConfetti[e].hasAutoPopped = true)
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

function b(e) {
  return f(t => {
    var n;
    return null == (n = t.messageSendConfetti[e]) ? true : n.emoji
  })
}

function y(e) {
  var t;
  return null == (t = f.getState().messageSendConfetti[e]) ? true : t.emoji
}

function O(e) {
  return (0, i.j)(() => {
    f.setState(() => ({
      messageReactionConfetti: e
    }))
  })
}

function v() {
  return (0, i.j)(() => {
    f.setState(() => ({
      messageReactionConfetti: true
    }))
  })
}

function S(e, t, n) {
  n ? O(e) : E(e, t)
}

function I(e, t) {
  return f(n => {
    var r;
    return t ? n.messageReactionConfetti : null == (r = n.messageSendConfetti[e]) ? true : r.emoji
  })
}

function T(e) {
  return f(t => {
    let n = t.messageSendConfetti[e];
    if ((null == n ? true : n.state) === 0) return n.hasAutoPopped
  })
}