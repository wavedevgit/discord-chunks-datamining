/** Chunk was on 92446 **/
/** chunk id: 715627, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk505266 = require("./505266.js"),
  Chunk745510 = require("./745510.js"),
  Chunk675654 = require("./675654.js");
let o = {
    xMin: false,
    xMax: 40,
    yMin: false,
    yMax: false
  },
  c = (t, e, n) => null == n ? e : t * n / 100,
  u = Chunk73800.memo(function(t) {
    let {
      confettiTarget: e,
      colors: n,
      emojiURL: u,
      numBursts: d,
      particlesPerBurst: p,
      offsetXPercentageMax: f,
      offsetXPercentageMin: h,
      offsetYPercentageMax: m,
      offsetYPercentageMin: g,
      customConfettiCanvas: y,
      speedValues: O = o,
      dragCoefficientValue: b = 1.66,
      onAnimationEnd: j
    } = t, [S, P] = r.useState(null), {
      confettiCanvas: v
    } = r.useContext(l.h), x = (0, s.uR)(null != y ? y : v, S), [w, Z] = r.useState(false);
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
          var s, l;
          let u = arguments.length > 5 && true !== arguments[5] ? arguments[5] : o,
            d = arguments.length > 6 && true !== arguments[6] ? arguments[6] : 1.66,
            p = c(t.width, 100, n),
            f = c(t.height, 75, r),
            h = c(t.width, 350, e),
            m = c(t.height, 75, i),
            {
              xMin: g,
              xMax: y,
              yMin: O,
              yMax: b
            } = u;
          return s = function(t) {
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
          }({}, a.We), l = l = {
            position: {
              type: "static-random",
              minValue: {
                x: t.left + p,
                y: t.top + f
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
                y: O
              },
              maxValue: {
                x: y,
                y: b
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
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l)) : (function(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              n.push.apply(n, i)
            }
            return n
          })(Object(l)).forEach(function(t) {
            Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(l, t))
          }), s
        }(e.getBoundingClientRect(), f, h, m, g, O, b), null != p ? p : 50), i === t.length - 1 && null != j && Z(true)
      }, 60 * i)), () => {
        for (let e of t) clearTimeout(e)
      }
    }, [x, e, d, p, f, h, m, g, O, b, j]), <s.Ji ref={P} sprites={null != C ? C : a.CA} colors={null != n ? n : a.Br} spriteWidth={a.Ko} spriteHeight={a.Ko} />
  })