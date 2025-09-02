/** Chunk was on web.js **/
/** chunk id: 759853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk238651 = require("./238651.js"),
  Chunk603113 = require("./603113.js"),
  Chunk261616 = require("./261616.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk819640 = require("./819640.js"),
  Chunk569379 = require("./569379.js"),
  Chunk675654 = require("./675654.js"),
  Chunk674386 = require("./674386.js"),
  Chunk197857 = require("./197857.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = ["#51BC9D"],
  I = 100,
  S = 20,
  T = false;

function A(e, t, n, r) {
  return O(b({}, h.We), {
    position: {
      type: "static-random",
      minValue: {
        x: e,
        y: t
      },
      maxValue: {
        x: e + n,
        y: t + r
      }
    },
    velocity: {
      type: "static-random",
      minValue: {
        x: -S,
        y: -S
      },
      maxValue: {
        x: S,
        y: S
      }
    },
    opacity: {
      type: "linear",
      value: 2,
      addValue: false
    },
    dragCoefficient: {
      type: "static",
      value: .166
    },
    size: {
      type: "static-random",
      minValue: 2,
      maxValue: 3
    }
  })
}
let C = e => {
  var t;
  let {
    expansionSpring: n,
    overlayRef: a,
    quest: E,
    progressBarRef: b,
    isExpanded: y,
    isHovered: O,
    shouldShowRewardsCTAWhenCollapsed: S
  } = e, {
    completionSpring: C,
    startCompletionAnimation: N
  } = (0, p.G)(), R = (null == (t = E.userStatus) ? true : t.completedAt) != null, P = i.useRef(false), w = (0, u.e7)([f.Z], () => f.Z.useReducedMotion), D = i.useRef(null), x = (0, u.e7)([_.Z], () => _.Z.hasLayers()), L = (0, d.Z)(x), [j, M] = i.useState(null), [k, U] = i.useState(null), G = i.useRef(new s.qA({
    gravity: 0,
    wind: 0
  })), B = (0, s.uR)(j, k), Z = i.useCallback(() => {
    if (w) return;
    let e = b.current,
      t = D.current;
    if (null != t && null != e && B.isReady) {
      let {
        x: n,
        y: r
      } = e.getBoundingClientRect(), {
        x: i,
        y: a
      } = t.getBoundingClientRect();
      B.createMultipleConfetti(A(n - i, r - a, e.clientHeight, e.clientWidth), I)
    }
  }, [b, D, B, w]), F = (0, d.Z)(y);
  return (i.useEffect(() => {
    R && y && !F && (N(), Z())
  }, [y, R, N, Z, F]), i.useEffect(() => {
    R && !x && L && setTimeout(() => {
      N(), Z()
    }, 200)
  }, [R, L, x, N, Z]), i.useEffect(() => {
    B.isReady && (!P.current && R && (N(), Z()), P.current = R)
  }, [R, P, Z, N, B]), i.useEffect(() => {
    O && S && (N(), Z())
  }, [O, S, N, Z]), w) ? null : (0, r.jsxs)("div", {
    className: m.wrapper,
    "aria-hidden": "true",
    ref: D,
    children: [(0, r.jsx)(c.animated.div, {
      className: m.background,
      style: {
        opacity: C
      }
    }), (0, r.jsx)(c.animated.div, {
      className: o()(m.borders, m.bordersTopLeft),
      style: {
        opacity: C
      }
    }), (0, r.jsxs)(c.animated.div, {
      className: m.confettiWrapper,
      style: {
        transform: n.to({
          range: [0, 1],
          output: [T, 0]
        }).to(e => "translateY(".concat(e, "px)"))
      },
      children: [(0, r.jsx)(s.O_, {
        ref: M,
        className: m.confetti,
        environment: G.current
      }), (0, r.jsx)(s.Ji, {
        ref: U,
        sprites: [g],
        colors: v,
        spriteWidth: h.Ko,
        spriteHeight: h.Ko
      }), null != a.current && (0, l.createPortal)((0, r.jsx)(c.animated.div, {
        className: o()(m.borders, m.bordersBottom),
        style: {
          opacity: C
        }
      }), a.current)]
    })]
  })
}