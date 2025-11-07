/** Chunk was on 10150 **/
/** chunk id: 759853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk238651 = require("./238651.js"),
  Chunk603113 = require("./603113.js"),
  Chunk509442 = require("./509442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk819640 = require("./819640.js"),
  Chunk569379 = require("./569379.js"),
  Chunk675654 = require("./675654.js"),
  Chunk674386 = require("./674386.js"),
  Chunk197857 = require("./197857.js");
let j = ["#51BC9D"],
  _ = e => {
    var t;
    let {
      expansionSpring: n,
      overlayRef: o,
      quest: _,
      progressBarRef: b,
      isExpanded: v,
      isHovered: C
    } = e, {
      completionSpring: y,
      startCompletionAnimation: E
    } = (0, g.G)(), O = (null == (t = _.userStatus) ? true : t.completedAt) != null, S = s.useRef(false), T = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), w = s.useRef(null), P = (0, d.e7)([m.Z], () => m.Z.hasLayers()), N = (0, u.Z)(P), [A, R] = s.useState(null), [B, k] = s.useState(null), I = s.useRef(new i.qA({
      gravity: 0,
      wind: 0
    })), D = (0, i.uR)(A, B), q = s.useCallback(() => {
      if (T) return;
      let e = b.current,
        t = w.current;
      if (null != t && null != e && D.isReady) {
        var n, r, s, o, a, i;
        let {
          x: l,
          y: c
        } = e.getBoundingClientRect(), {
          x: d,
          y: u
        } = t.getBoundingClientRect();
        D.createMultipleConfetti((n = l - d, r = c - u, s = e.clientHeight, o = e.clientWidth, a = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, f.We), i = i = {
          position: {
            type: "static-random",
            minValue: {
              x: n,
              y: r
            },
            maxValue: {
              x: n + s,
              y: r + o
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
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
        }), a), 100)
      }
    }, [b, w, D, T]), Q = (0, u.Z)(v);
    return (s.useEffect(() => {
      O && v && !Q && (E(), q())
    }, [v, O, E, q, Q]), s.useEffect(() => {
      O && !P && N && setTimeout(() => {
        E(), q()
      }, 200)
    }, [O, N, P, E, q]), s.useEffect(() => {
      D.isReady && (!S.current && O && (E(), q()), S.current = O)
    }, [O, S, q, E, D]), s.useEffect(() => {
      C && O && (E(), q())
    }, [C, O, E, q]), T) ? null : (0, r.jsxs)("div", {
      className: h.wrapper,
      "aria-hidden": "true",
      ref: w,
      children: [(0, r.jsx)(c.animated.div, {
        className: h.background,
        style: {
          opacity: y
        }
      }), (0, r.jsx)(c.animated.div, {
        className: a()(h.borders, h.bordersTopLeft),
        style: {
          opacity: y
        }
      }), (0, r.jsxs)(c.animated.div, {
        className: h.confettiWrapper,
        style: {
          transform: n.to({
            range: [0, 1],
            output: [false, 0]
          }).to(e => "translateY(".concat(e, "px)"))
        },
        children: [(0, r.jsx)(i.O_, {
          ref: R,
          className: h.confetti,
          environment: I.current
        }), (0, r.jsx)(i.Ji, {
          ref: k,
          sprites: [x],
          colors: j,
          spriteWidth: f.Ko,
          spriteHeight: f.Ko
        }), null != o.current && (0, l.createPortal)((0, r.jsx)(c.animated.div, {
          className: a()(h.borders, h.bordersBottom),
          style: {
            opacity: y
          }
        }), o.current)]
      })]
    })
  }