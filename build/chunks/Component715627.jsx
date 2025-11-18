/** Chunk was on 38029 **/
/** chunk id: 715627, original params: t,e,n (module,exports,require) **/
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
  c = (t, e, n) => null == n ? e : t * n / 100,
  u = Chunk473749.memo(function(t) {
    let {
      confettiTarget: e,
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
    } = t, [P, v] = r.useState(null), {
      confettiCanvas: S
    } = r.useContext(s.h), x = (0, l.uR)(null != b ? b : S, P), [w, _] = r.useState(false);
    r.useEffect(() => {
      w && (null == j || j())
    });
    let C = r.useMemo(() => {
      if (null != u) return [{
        src: u,
        colorize: false
      }]
    }, [u]);
    return r.useEffect(() => {
      if (null == e) return;
      let t = Array(null != d ? d : 4).fill(0);
      return t = t.map((n, i) => setTimeout(() => {
        x.createMultipleConfetti(function(t, e, n, i, r) {
          var l, s;
          let u = arguments.length > 5 && true !== arguments[5] ? arguments[5] : o,
            d = arguments.length > 6 && true !== arguments[6] ? arguments[6] : 1.66,
            f = c(t.width, 100, n),
            p = c(t.height, 75, r),
            h = c(t.width, 350, e),
            m = c(t.height, 75, i),
            {
              xMin: g,
              xMax: b,
              yMin: y,
              yMax: O
            } = u;
          return l = function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              }))), i.forEach(function(e) {
                var i;
                i = n[e], e in t ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = i
              })
            }
            return t
          }({}, a.We), s = s = {
            position: {
              type: "static-random",
              minValue: {
                x: t.left + f,
                y: t.top + p
              },
              maxValue: {
                x: t.left + h,
                y: t.top + m
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
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              n.push.apply(n, i)
            }
            return n
          })(Object(s)).forEach(function(t) {
            Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(s, t))
          }), l
        }(e.getBoundingClientRect(), p, h, m, g, y, O), null != f ? f : 50), i === t.length - 1 && null != j && _(true)
      }, 60 * i)), () => {
        for (let e of t) clearTimeout(e)
      }
    }, [x, e, d, f, p, h, m, g, y, O, j]), (0, i.jsx)(l.Ji, {
      ref: v,
      sprites: null != C ? C : a.CA,
      colors: null != n ? n : a.Br,
      spriteWidth: a.Ko,
      spriteHeight: a.Ko
    })
  })