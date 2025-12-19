/** Chunk was on web.js **/
/** chunk id: 438784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => S,
  b: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk807794 = require("./807794.js"),
  Chunk481060 = require("./481060.js"),
  Chunk892071 = require("./892071.jsx"),
  Chunk84527 = require("./84527.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m() {
  return new Promise(e => setTimeout(e, 1e3))
}
let h = .25,
  g = 4,
  E = 1,
  b = 2.8,
  y = {
    config: {
      friction: 50,
      tension: 900,
      mass: 1
    },
    unique: true,
    initial: {
      dotPosition: 1
    },
    from: {
      dotPosition: 0
    },
    enter: {
      dotPosition: 1
    },
    leave: {
      dotPosition: 0
    }
  },
  O = {
    config: {
      duration: 2400
    },
    from: {
      dotCycle: 2.8
    },
    reset: true
  };

function v(e) {
  let t = e % 2;
  return t > 1 ? 1 - (t - 1) : t
}
let S = Chunk473749.memo(function(e) {
    let {
      dotRadius: t,
      dotPosition: n,
      fill: a = "currentColor",
      spacing: o = 2.5
    } = e, {
      focused: u
    } = (0, c.vP)(), d = i.useRef(true);
    i.useEffect(() => () => void(d.current = false), []);
    let [p] = (0, l.q_F)(() => _(f({}, O), {
      to: async e => {
        let t = b;
        for (; d.current;) u ? (t += E * g, await e({
          dotCycle: t,
          immediate: false
        })) : t !== b ? (t = b, await e({
          dotCycle: t,
          immediate: true
        })) : await m()
      }
    }), "animate-always", [u]), y = (2 * t * 3 + t / 4 * 2) / 2;
    return (0, r.jsx)(r.Fragment, {
      children: [0, 1, 2].map(e => {
        let i = h * e,
          l = t + t * o * e;
        return (0, r.jsx)(s.animated.circle, {
          cx: n ? n.to([0, 1], [y, l]) : l,
          cy: t,
          r: p.dotCycle.to(e => v(e - i)).to([0, .4, .8, 1], [.8 * t, .8 * t, t, t]).to(e => u ? e : t),
          fill: a,
          style: {
            opacity: p.dotCycle.to(e => v(e - i)).to([0, .4, .8, 1], [.3, .3, 1, 1]).to(e => u ? e : 1)
          }
        }, e)
      })
    })
  }),
  I = Chunk473749.memo(function(e) {
    let {
      dotRadius: t,
      x: n,
      y: i,
      hide: a = false,
      themed: d = false,
      className: p,
      ref: m
    } = e, {
      focused: h
    } = (0, c.vP)();
    return (0, l.Yzy)(a, _(f({}, y), {
      key: e => e ? "true" : "false"
    }), h ? "animate-always" : "animate-never")((e, a, l) => {
      let {
        dotPosition: c
      } = e, {
        key: f
      } = l;
      return a ? null : (0, r.jsx)("svg", {
        ref: m,
        x: n,
        y: i,
        width: 2 * t * 3 + t / 2 * 2,
        height: 2 * t,
        className: o()(p, u.dots, d ? u.themed : null),
        children: (0, r.jsx)(s.animated.g, {
          style: {
            opacity: c.to(e => Math.min(1, Math.max(e, 0)))
          },
          children: (0, r.jsx)(S, {
            dotRadius: t,
            dotPosition: c
          })
        })
      }, f)
    })
  })