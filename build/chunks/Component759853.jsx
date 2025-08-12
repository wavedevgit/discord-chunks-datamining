/** Chunk was on 37082 **/
/** chunk id: 759853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk505266 = require("./505266.js"),
  Chunk867309 = require("./867309.js"),
  Chunk717976 = require("./717976.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk819640 = require("./819640.js"),
  Chunk569379 = require("./569379.js"),
  Chunk675654 = require("./675654.js"),
  Chunk513940 = require("./513940.js"),
  Chunk197857 = require("./197857.js");
let j = ["#51BC9D"],
  b = e => {
    var t;
    let {
      expansionSpring: n,
      overlayRef: o,
      quest: b,
      progressBarRef: _,
      isExpanded: v,
      isHovered: C,
      shouldShowRewardsCTAWhenCollapsed: y
    } = e, {
      completionSpring: O,
      startCompletionAnimation: E
    } = (0, g.G)(), S = (null == (t = b.userStatus) ? true : t.completedAt) != null, T = s.useRef(false), w = (0, u.e7)([p.Z], () => p.Z.useReducedMotion), P = s.useRef(null), A = (0, u.e7)([m.Z], () => m.Z.hasLayers()), N = (0, d.Z)(A), [R, B] = s.useState(null), [k, q] = s.useState(null), I = s.useRef(new i.qA({
      gravity: 0,
      wind: 0
    })), Q = (0, i.uR)(R, k), D = s.useCallback(() => {
      if (w) return;
      let e = _.current,
        t = P.current;
      if (null != t && null != e && Q.isReady) {
        var n, r, s, o, a, i;
        let {
          x: l,
          y: c
        } = e.getBoundingClientRect(), {
          x: u,
          y: d
        } = t.getBoundingClientRect();
        Q.createMultipleConfetti((n = l - u, r = c - d, s = e.clientHeight, o = e.clientWidth, a = function(e) {
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
    }, [_, P, Q, w]), V = (0, d.Z)(v);
    return (s.useEffect(() => {
      S && v && !V && (E(), D())
    }, [v, S, E, D, V]), s.useEffect(() => {
      S && !A && N && setTimeout(() => {
        E(), D()
      }, 200)
    }, [S, N, A, E, D]), s.useEffect(() => {
      Q.isReady && (!T.current && S && (E(), D()), T.current = S)
    }, [S, T, D, E, Q]), s.useEffect(() => {
      C && y && (E(), D())
    }, [C, y, E, D]), w) ? null : (0, r.jsxs)("div", {
      className: x.wrapper,
      "aria-hidden": "true",
      ref: P,
      children: [(0, r.jsx)(c.animated.div, {
        className: x.background,
        style: {
          opacity: O
        }
      }), (0, r.jsx)(c.animated.div, {
        className: a()(x.borders, x.bordersTopLeft),
        style: {
          opacity: O
        }
      }), (0, r.jsxs)(c.animated.div, {
        className: x.confettiWrapper,
        style: {
          transform: n.to({
            range: [0, 1],
            output: [false, 0]
          }).to(e => "translateY(".concat(e, "px)"))
        },
        children: [(0, r.jsx)(i.O_, {
          ref: B,
          className: x.confetti,
          environment: I.current
        }), (0, r.jsx)(i.Ji, {
          ref: q,
          sprites: [h],
          colors: j,
          spriteWidth: f.Ko,
          spriteHeight: f.Ko
        }), null != o.current && (0, l.createPortal)((0, r.jsx)(c.animated.div, {
          className: a()(x.borders, x.bordersBottom),
          style: {
            opacity: O
          }
        }), o.current)]
      })]
    })
  }