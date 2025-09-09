/** Chunk was on 38029 **/
/** chunk id: 715627, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk675654 = require("./675654.js");
let o = {
    xMin: false,
    xMax: 40,
    yMin: false,
    yMax: false
  },
  u = (t, e, n) => null == n ? e : t * n / 100,
  c = Chunk647438.memo(function(t) {
    let {
      confettiTarget: e,
      colors: n,
      emojiURL: c,
      numBursts: d,
      particlesPerBurst: f,
      offsetXPercentageMax: p,
      offsetXPercentageMin: m,
      offsetYPercentageMax: g,
      offsetYPercentageMin: h,
      customConfettiCanvas: y,
      speedValues: b = o,
      dragCoefficientValue: O = 1.66,
      onAnimationEnd: v
    } = t, [P, j] = r.useState(null), {
      confettiCanvas: S
    } = r.useContext(s.h), x = (0, l.uR)(null != y ? y : S, P), [w, I] = r.useState(false);
    r.useEffect(() => {
      w && (null == v || v())
    });
    let _ = r.useMemo(() => {
      if (null != c) return [{
        src: c,
        colorize: false
      }]
    }, [c]);
    return r.useEffect(() => {
      if (null == e) return;
      let t = Array(null != d ? d : 4).fill(0);
      return t = t.map((n, i) => setTimeout(() => {
        x.createMultipleConfetti(function(t, e, n, i, r) {
          var l, s;
          let c = arguments.length > 5 && true !== arguments[5] ? arguments[5] : o,
            d = arguments.length > 6 && true !== arguments[6] ? arguments[6] : 1.66,
            f = u(t.width, 100, n),
            p = u(t.height, 75, r),
            m = u(t.width, 350, e),
            g = u(t.height, 75, i),
            {
              xMin: h,
              xMax: y,
              yMin: b,
              yMax: O
            } = c;
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
                x: t.left + m,
                y: t.top + g
              }
            },
            velocity: {
              type: "static-random",
              minValue: {
                x: h,
                y: b
              },
              maxValue: {
                x: y,
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
        }(e.getBoundingClientRect(), p, m, g, h, b, O), null != f ? f : 50), i === t.length - 1 && null != v && I(true)
      }, 60 * i)), () => {
        for (let e of t) clearTimeout(e)
      }
    }, [x, e, d, f, p, m, g, h, b, O, v]), (0, i.jsx)(l.Ji, {
      ref: j,
      sprites: null != _ ? _ : a.CA,
      colors: null != n ? n : a.Br,
      spriteWidth: a.Ko,
      spriteHeight: a.Ko
    })
  })