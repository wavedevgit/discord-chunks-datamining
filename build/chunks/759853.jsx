/** Chunk was on 37082 **/
/** chunk id: 759853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk505266 = require("./505266.js"),
  Chunk867309 = require("./867309.js"),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk819640 = require("./819640.js"),
  Chunk569379 = require("./569379.js"),
  Chunk675654 = require("./675654.js"),
  Chunk513940 = require("./513940.js"),
  Chunk197857 = require("./197857.js");
let j = ["#51BC9D"],
  _ = e => {
    var t;
    let {
      expansionSpring: n,
      overlayRef: o,
      quest: _,
      progressBarRef: b,
      isExpanded: v
    } = e, {
      completionSpring: C,
      startCompletionAnimation: y
    } = (0, g.G)(), O = (null == (t = _.userStatus) ? true : t.completedAt) != null, E = s.useRef(false), S = (0, u.e7)([p.Z], () => p.Z.useReducedMotion), T = s.useRef(null), w = (0, u.e7)([m.Z], () => m.Z.hasLayers()), P = (0, d.Z)(w), [N, A] = s.useState(null), [R, B] = s.useState(null), k = s.useRef(new i.qA({
      gravity: 0,
      wind: 0
    })), I = (0, i.uR)(N, R), q = s.useCallback(() => {
      if (S) return;
      let e = b.current,
        t = T.current;
      if (null != t && null != e && I.isReady) {
        var n, r, s, o, a, i;
        let {
          x: l,
          y: c
        } = e.getBoundingClientRect(), {
          x: u,
          y: d
        } = t.getBoundingClientRect();
        I.createMultipleConfetti((n = l - u, r = c - d, s = e.clientHeight, o = e.clientWidth, a = function(e) {
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
    }, [b, T, I, S]), D = (0, d.Z)(v);
    return (s.useEffect(() => {
      O && v && !D && (y(), q())
    }, [v, O, y, q, D]), s.useEffect(() => {
      O && !w && P && setTimeout(() => {
        y(), q()
      }, 200)
    }, [O, P, w, y, q]), s.useEffect(() => {
      I.isReady && (!E.current && O && (y(), q()), E.current = O)
    }, [O, E, q, y, I]), S) ? null : <div className={x.wrapper} aria-hidden={"true"} ref={T}>{<c.animated.div className={x.background} style={{
          opacity: C
        }} />}{<c.animated.div className={a()(x.borders, x.bordersTopLeft)} style={{
          opacity: C
        }} />}{<c.animated.div className={x.confettiWrapper} style={{
          transform: n.to({
            range: [0, 1],
            output: [false, 0]
          }).to(e => "translateY(".concat(e, "px)"))
        }}>{<i.O_ ref={A} className={x.confetti} environment={k.current} />}{<i.Ji ref={B} sprites={[h]} colors={j} spriteWidth={f.Ko} spriteHeight={f.Ko} />}{null != o.current && (0, l.createPortal)(<c.animated.div className={a()(x.borders, x.bordersBottom)} style={{
            opacity: C
          }} />, o.current)}</c.animated.div>}</div>
  }