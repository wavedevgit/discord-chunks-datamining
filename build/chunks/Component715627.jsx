/** Chunk was on 38029 **/
/** chunk id: 715627, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk921254 = require("./921254.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk675654 = require("./675654.js");
let o = {
    xMin: false,
    xMax: 40,
    yMin: false,
    yMax: false
  },
  c = (e, t, n) => null == n ? t : e * n / 100,
  u = Chunk473749.memo(function(e) {
    let {
      confettiTarget: t,
      colors: n,
      emojiURL: u,
      numBursts: d,
      particlesPerBurst: f,
      offsetXPercentageMax: p,
      offsetXPercentageMin: h,
      offsetYPercentageMax: m,
      offsetYPercentageMin: g,
      customConfettiCanvas: b,
      speedValues: y = o,
      dragCoefficientValue: O = 1.66,
      onAnimationEnd: j
    } = e, [P, v] = i.useState(null), {
      confettiCanvas: x
    } = i.useContext(l.h), S = (0, s.uR)(null != b ? b : x, P), [w, _] = i.useState(false);
    i.useEffect(() => {
      w && (null == j || j())
    });
    let Z = i.useMemo(() => {
      if (null != u) return [{
        src: u,
        colorize: false
      }]
    }, [u]);
    return i.useEffect(() => {
      if (null == t) return;
      let e = Array(null != d ? d : 4).fill(0);
      return e = e.map((n, r) => setTimeout(() => {
        S.createMultipleConfetti(function(e, t, n, r, i) {
          var s, l;
          let u = arguments.length > 5 && true !== arguments[5] ? arguments[5] : o,
            d = arguments.length > 6 && true !== arguments[6] ? arguments[6] : 1.66,
            f = c(e.width, 100, n),
            p = c(e.height, 75, i),
            h = c(e.width, 350, t),
            m = c(e.height, 75, r),
            {
              xMin: g,
              xMax: b,
              yMin: y,
              yMax: O
            } = u;
          return s = function(e) {
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
          }({}, a.We), l = l = {
            position: {
              type: "static-random",
              minValue: {
                x: e.left + f,
                y: e.top + p
              },
              maxValue: {
                x: e.left + h,
                y: e.top + m
              }
            },
            velocity: {
              type: "static-random",
              minValue: {
                x: g,
                y: y
              },
              maxValue: {
                x: b,
                y: O
              }
            },
            size: {
              type: "static-random",
              minValue: a.Ko,
              maxValue: a.Ko
            },
            dragCoefficient: {
              type: "static",
              value: d
            }
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e))
          }), s
        }(t.getBoundingClientRect(), p, h, m, g, y, O), null != f ? f : 50), r === e.length - 1 && null != j && _(true)
      }, 60 * r)), () => {
        for (let t of e) clearTimeout(t)
      }
    }, [S, t, d, f, p, h, m, g, y, O, j]), (0, r.jsx)(s.Ji, {
      ref: v,
      sprites: null != Z ? Z : a.CA,
      colors: null != n ? n : a.Br,
      spriteWidth: a.Ko,
      spriteHeight: a.Ko
    })
  })