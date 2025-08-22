/** Chunk was on 38029 **/
/** chunk id: 715627, original params: t,e,i (module,exports,require) **/
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
  u = (t, e, i) => null == i ? e : t * i / 100,
  c = Chunk647438.memo(function(t) {
    let {
      confettiTarget: e,
      colors: i,
      emojiURL: c,
      numBursts: d,
      particlesPerBurst: f,
      offsetXPercentageMax: p,
      offsetXPercentageMin: m,
      offsetYPercentageMax: h,
      offsetYPercentageMin: g,
      customConfettiCanvas: y,
      speedValues: b = o,
      dragCoefficientValue: O = 1.66,
      onAnimationEnd: P
    } = t, [v, j] = r.useState(null), {
      confettiCanvas: S
    } = r.useContext(s.h), x = (0, l.uR)(null != y ? y : S, v), [w, Z] = r.useState(false);
    r.useEffect(() => {
      w && (null == P || P())
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
      return t = t.map((i, n) => setTimeout(() => {
        x.createMultipleConfetti(function(t, e, i, n, r) {
          var l, s;
          let c = arguments.length > 5 && true !== arguments[5] ? arguments[5] : o,
            d = arguments.length > 6 && true !== arguments[6] ? arguments[6] : 1.66,
            f = u(t.width, 100, i),
            p = u(t.height, 75, r),
            m = u(t.width, 350, e),
            h = u(t.height, 75, n),
            {
              xMin: g,
              xMax: y,
              yMin: b,
              yMax: O
            } = c;
          return l = function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(i);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                return Object.getOwnPropertyDescriptor(i, t).enumerable
              }))), n.forEach(function(e) {
                var n;
                n = i[e], e in t ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = n
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
                y: t.top + h
              }
            },
            velocity: {
              type: "static-random",
              minValue: {
                x: g,
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
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(t);
              i.push.apply(i, n)
            }
            return i
          })(Object(s)).forEach(function(t) {
            Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(s, t))
          }), l
        }(e.getBoundingClientRect(), p, m, h, g, b, O), null != f ? f : 50), n === t.length - 1 && null != P && Z(true)
      }, 60 * n)), () => {
        for (let e of t) clearTimeout(e)
      }
    }, [x, e, d, f, p, m, h, g, b, O, P]), (0, n.jsx)(l.Ji, {
      ref: j,
      sprites: null != _ ? _ : a.CA,
      colors: null != i ? i : a.Br,
      spriteWidth: a.Ko,
      spriteHeight: a.Ko
    })
  })