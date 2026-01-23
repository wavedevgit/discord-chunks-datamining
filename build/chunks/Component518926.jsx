/** Chunk was on 14439 **/
/** chunk id: 518926, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk106778 = require("./106778.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk851110 = require("./851110.js");
let o = {
    xMin: false,
    xMax: 40,
    yMin: false,
    yMax: false
  },
  c = (e, t, r) => null == r ? t : e * r / 100,
  u = Chunk64700.memo(function(e) {
    let {
      confettiTarget: t,
      colors: r,
      emojiURL: u,
      numBursts: d,
      particlesPerBurst: p,
      offsetXPercentageMax: f,
      offsetXPercentageMin: h,
      offsetYPercentageMax: m,
      offsetYPercentageMin: y,
      customConfettiCanvas: g,
      speedValues: b = o,
      dragCoefficientValue: O = 1.66,
      onAnimationEnd: j
    } = e, [A, x] = i.useState(null), {
      confettiCanvas: v
    } = i.useContext(s.x), P = (0, l.f9)(null != g ? g : v, A), [S, _] = i.useState(false);
    i.useEffect(() => {
      S && (null == j || j())
    });
    let w = i.useMemo(() => {
      if (null != u) return [{
        src: u,
        colorize: false
      }]
    }, [u]);
    return i.useEffect(() => {
      if (null == t) return;
      let e = Array(null != d ? d : 4).fill(0);
      return e = e.map((r, n) => setTimeout(() => {
        P.createMultipleConfetti(function(e, t, r, n, i) {
          var l, s;
          let u = arguments.length > 5 && true !== arguments[5] ? arguments[5] : o,
            d = arguments.length > 6 && true !== arguments[6] ? arguments[6] : 1.66,
            p = c(e.width, 100, r),
            f = c(e.height, 75, i),
            h = c(e.width, 350, t),
            m = c(e.height, 75, n),
            {
              xMin: y,
              xMax: g,
              yMin: b,
              yMax: O
            } = u;
          return l = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, a.Mw), s = s = {
            position: {
              type: "static-random",
              minValue: {
                x: e.left + p,
                y: e.top + f
              },
              maxValue: {
                x: e.left + h,
                y: e.top + m
              }
            },
            velocity: {
              type: "static-random",
              minValue: {
                x: y,
                y: b
              },
              maxValue: {
                x: g,
                y: O
              }
            },
            size: {
              type: "static-random",
              minValue: a.wn,
              maxValue: a.wn
            },
            dragCoefficient: {
              type: "static",
              value: d
            }
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
          }), l
        }(t.getBoundingClientRect(), f, h, m, y, b, O), null != p ? p : 50), n === e.length - 1 && null != j && _(true)
      }, 60 * n)), () => {
        for (let t of e) clearTimeout(t)
      }
    }, [P, t, d, p, f, h, m, y, b, O, j]), (0, n.jsx)(l.K_, {
      ref: x,
      sprites: null != w ? w : a.uI,
      colors: null != r ? r : a._t,
      spriteWidth: a.wn,
      spriteHeight: a.wn
    })
  })