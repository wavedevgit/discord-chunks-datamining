/** Chunk was on 6043 **/
/** chunk id: 373322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk921254 = require("./921254.js"),
  Chunk24156 = require("./24156.js"),
  Chunk620792 = require("./620792.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk819640 = require("./819640.js"),
  Chunk444134 = require("./444134.jsx"),
  Chunk526188 = require("./526188.jsx"),
  Chunk617889 = require("./617889.js"),
  Chunk675654 = require("./675654.js"),
  Chunk922630 = require("./922630.js"),
  Chunk197857 = require("./197857.js");
let j = ["#51BC9D"],
  y = e => {
    var t;
    let {
      overlayRef: n,
      progressBarRef: i,
      isHovered: y
    } = e, {
      quest: C,
      isExpanded: _
    } = r.useContext(f.A), {
      expansionSpring: S
    } = r.useContext(h.xo), {
      completionSpring: E,
      startCompletionAnimation: T
    } = (0, x.GX)(), O = (null == (t = C.userStatus) ? true : t.completedAt) != null, N = r.useRef(false), P = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), w = r.useRef(null), I = (0, d.e7)([p.Z], () => p.Z.hasLayers()), k = (0, u.Z)(I), [R, A] = r.useState(null), [Z, D] = r.useState(null), L = r.useRef(new s.qA({
      gravity: 0,
      wind: 0
    })), M = (0, s.uR)(R, Z), U = r.useCallback(() => {
      if (P) return;
      let e = i.current,
        t = w.current;
      if (null != t && null != e && M.isReady) {
        var n, a, r, l, s, o;
        let {
          x: i,
          y: c
        } = e.getBoundingClientRect(), {
          x: d,
          y: u
        } = t.getBoundingClientRect();
        M.createMultipleConfetti((n = i - d, a = c - u, r = e.clientHeight, l = e.clientWidth, s = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({}, b.We), o = o = {
          position: {
            type: "static-random",
            minValue: {
              x: n,
              y: a
            },
            maxValue: {
              x: n + r,
              y: a + l
            }
          },
          velocity: {
            type: "static-random",
            minValue: {
              x: false,
              y: false
            },
            maxValue: {
              x: 20,
              y: 20
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
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e))
        }), s), 100)
      }
    }, [i, w, M, P]), B = (0, u.Z)(_);
    return (r.useEffect(() => {
      O && _ && !B && (T(), U())
    }, [_, O, T, U, B]), r.useEffect(() => {
      O && !I && k && setTimeout(() => {
        T(), U()
      }, 200)
    }, [O, k, I, T, U]), r.useEffect(() => {
      M.isReady && (!N.current && O && (T(), U()), N.current = O)
    }, [O, N, U, T, M]), r.useEffect(() => {
      y && O && (T(), U())
    }, [y, O, T, U]), P) ? null : (0, a.jsxs)("div", {
      className: g.wrapper,
      "aria-hidden": "true",
      ref: w,
      children: [(0, a.jsx)(c.animated.div, {
        className: g.background,
        style: {
          opacity: E
        }
      }), (0, a.jsx)(c.animated.div, {
        className: l()(g.borders, g.bordersTopLeft),
        style: {
          opacity: E
        }
      }), (0, a.jsxs)(c.animated.div, {
        className: g.confettiWrapper,
        style: {
          transform: S.to({
            range: [0, 1],
            output: [false, 0]
          }).to(e => "translateY(".concat(e, "px)"))
        },
        children: [(0, a.jsx)(s.O_, {
          ref: A,
          className: g.confetti,
          environment: L.current
        }), (0, a.jsx)(s.Ji, {
          ref: D,
          sprites: [v],
          colors: j,
          spriteWidth: b.Ko,
          spriteHeight: b.Ko
        }), null != n.current && (0, o.createPortal)((0, a.jsx)(c.animated.div, {
          className: l()(g.borders, g.bordersBottom),
          style: {
            opacity: E
          }
        }), n.current)]
      })]
    })
  }