/** Chunk was on 23736 **/
/** chunk id: 373322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk921254 = require("./921254.js"),
  Chunk24156 = require("./24156.js"),
  Chunk467721 = require("./467721.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk819640 = require("./819640.js"),
  Chunk617889 = require("./617889.js"),
  Chunk675654 = require("./675654.js"),
  Chunk922630 = require("./922630.js"),
  Chunk197857 = require("./197857.js");
let g = ["#51BC9D"],
  v = e => {
    var t;
    let {
      expansionSpring: n,
      overlayRef: i,
      quest: v,
      progressBarRef: j,
      isExpanded: y,
      isHovered: C
    } = e, {
      completionSpring: _,
      startCompletionAnimation: S
    } = (0, h.GX)(), E = (null == (t = v.userStatus) ? true : t.completedAt) != null, T = r.useRef(false), O = (0, d.e7)([m.Z], () => m.Z.useReducedMotion), N = r.useRef(null), P = (0, d.e7)([p.Z], () => p.Z.hasLayers()), w = (0, u.Z)(P), [I, k] = r.useState(null), [R, A] = r.useState(null), D = r.useRef(new s.qA({
      gravity: 0,
      wind: 0
    })), Z = (0, s.uR)(I, R), L = r.useCallback(() => {
      if (O) return;
      let e = j.current,
        t = N.current;
      if (null != t && null != e && Z.isReady) {
        var n, a, r, i, l, s;
        let {
          x: o,
          y: c
        } = e.getBoundingClientRect(), {
          x: d,
          y: u
        } = t.getBoundingClientRect();
        Z.createMultipleConfetti((n = o - d, a = c - u, r = e.clientHeight, i = e.clientWidth, l = function(e) {
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
        }({}, f.We), s = s = {
          position: {
            type: "static-random",
            minValue: {
              x: n,
              y: a
            },
            maxValue: {
              x: n + r,
              y: a + i
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
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
        }), l), 100)
      }
    }, [j, N, Z, O]), M = (0, u.Z)(y);
    return (r.useEffect(() => {
      E && y && !M && (S(), L())
    }, [y, E, S, L, M]), r.useEffect(() => {
      E && !P && w && setTimeout(() => {
        S(), L()
      }, 200)
    }, [E, w, P, S, L]), r.useEffect(() => {
      Z.isReady && (!T.current && E && (S(), L()), T.current = E)
    }, [E, T, L, S, Z]), r.useEffect(() => {
      C && E && (S(), L())
    }, [C, E, S, L]), O) ? null : (0, a.jsxs)("div", {
      className: x.wrapper,
      "aria-hidden": "true",
      ref: N,
      children: [(0, a.jsx)(c.animated.div, {
        className: x.background,
        style: {
          opacity: _
        }
      }), (0, a.jsx)(c.animated.div, {
        className: l()(x.borders, x.bordersTopLeft),
        style: {
          opacity: _
        }
      }), (0, a.jsxs)(c.animated.div, {
        className: x.confettiWrapper,
        style: {
          transform: n.to({
            range: [0, 1],
            output: [false, 0]
          }).to(e => "translateY(".concat(e, "px)"))
        },
        children: [(0, a.jsx)(s.O_, {
          ref: k,
          className: x.confetti,
          environment: D.current
        }), (0, a.jsx)(s.Ji, {
          ref: A,
          sprites: [b],
          colors: g,
          spriteWidth: f.Ko,
          spriteHeight: f.Ko
        }), null != i.current && (0, o.createPortal)((0, a.jsx)(c.animated.div, {
          className: l()(x.borders, x.bordersBottom),
          style: {
            opacity: _
          }
        }), i.current)]
      })]
    })
  }