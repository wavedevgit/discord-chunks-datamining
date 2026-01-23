/** Chunk was on web.js **/
/** chunk id: 863610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => A,
  n: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js"),
  Chunk611635 = require("./611635.jsx"),
  Chunk680256 = require("./680256.js");

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

function h() {
  return new Promise(e => setTimeout(e, 1e3))
}
let m = .25,
  g = 4,
  E = 1,
  y = 2.8,
  b = {
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
let A = Chunk64700.memo(function(e) {
    let {
      dotRadius: t,
      dotPosition: n,
      fill: a = "currentColor",
      spacing: s = 2.5
    } = e, {
      focused: u
    } = (0, c.xb)(), d = i.useRef(true);
    i.useEffect(() => () => void(d.current = false), []);
    let [p] = (0, l.zhh)(() => _(f({}, O), {
      to: async e => {
        let t = y;
        for (; d.current;) u ? (t += E * g, await e({
          dotCycle: t,
          immediate: false
        })) : t !== y ? (t = y, await e({
          dotCycle: t,
          immediate: true
        })) : await h()
      }
    }), "animate-always", [u]), b = (2 * t * 3 + t / 4 * 2) / 2;
    return (0, r.jsx)(r.Fragment, {
      children: [0, 1, 2].map(e => {
        let i = m * e,
          l = t + t * s * e;
        return (0, r.jsx)(o.animated.circle, {
          cx: n ? n.to([0, 1], [b, l]) : l,
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
  I = Chunk64700.memo(function(e) {
    let {
      dotRadius: t,
      x: n,
      y: i,
      hide: a = false,
      themed: d = false,
      className: p,
      ref: h
    } = e, {
      focused: m
    } = (0, c.xb)();
    return (0, l.pnh)(a, _(f({}, b), {
      key: e => e ? "true" : "false"
    }), m ? "animate-always" : "animate-never")((e, a, l) => {
      let {
        dotPosition: c
      } = e, {
        key: f
      } = l;
      return a ? null : (0, r.jsx)("svg", {
        ref: h,
        x: n,
        y: i,
        width: 2 * t * 3 + t / 2 * 2,
        height: 2 * t,
        className: s()(p, u.r, d ? u.S : null),
        children: (0, r.jsx)(o.animated.g, {
          style: {
            opacity: c.to(e => Math.min(1, Math.max(e, 0)))
          },
          children: (0, r.jsx)(A, {
            dotRadius: t,
            dotPosition: c
          })
        })
      }, f)
    })
  })