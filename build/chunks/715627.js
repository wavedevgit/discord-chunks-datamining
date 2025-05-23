/** Chunk was on 24304 **/
r.d(t, {
  Z: () => s
}), r(388685);
var o = r(255367),
  n = r(73800),
  i = r(505266),
  a = r(745510),
  c = r(675654);
let l = {
    xMin: -40,
    xMax: 40,
    yMin: -40,
    yMax: -70
  },
  u = (e, t, r) => null == r ? t : e * r / 100,
  s = n.memo(function(e) {
    let {
      confettiTarget: t,
      colors: r,
      emojiURL: s,
      numBursts: f,
      particlesPerBurst: p,
      offsetXPercentageMax: y,
      offsetXPercentageMin: b,
      offsetYPercentageMax: m,
      offsetYPercentageMin: d,
      customConfettiCanvas: h,
      speedValues: O = l,
      dragCoefficientValue: _ = 1.66,
      onAnimationEnd: g
    } = e, [v, w] = n.useState(null), {
      confettiCanvas: j
    } = n.useContext(a.h), P = (0, i.uR)(null != h ? h : j, v), [x, C] = n.useState(!1);
    n.useEffect(() => {
      x && (null == g || g())
    });
    let S = n.useMemo(() => {
      if (null != s) return [{
        src: s,
        colorize: !1
      }]
    }, [s]);
    return n.useEffect(() => {
      if (null == t) return;
      let e = Array(null != f ? f : 4).fill(0);
      return e = e.map((r, o) => setTimeout(() => {
        P.createMultipleConfetti(function(e, t, r, o, n) {
          var i, a;
          let s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : l,
            f = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
            p = u(e.width, 100, r),
            y = u(e.height, 75, n),
            b = u(e.width, 350, t),
            m = u(e.height, 75, o),
            {
              xMin: d,
              xMax: h,
              yMin: O,
              yMax: _
            } = s;
          return i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                o = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), o.forEach(function(t) {
                var o;
                o = r[t], t in e ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = o
              })
            }
            return e
          }({}, c.We), a = a = {
            position: {
              type: "static-random",
              minValue: {
                x: e.left + p,
                y: e.top + y
              },
              maxValue: {
                x: e.left + b,
                y: e.top + m
              }
            },
            velocity: {
              type: "static-random",
              minValue: {
                x: d,
                y: O
              },
              maxValue: {
                x: h,
                y: _
              }
            },
            size: {
              type: "static-random",
              minValue: c.Ko,
              maxValue: c.Ko
            },
            dragCoefficient: {
              type: "static",
              value: f
            }
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              r.push.apply(r, o)
            }
            return r
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
          }), i
        }(t.getBoundingClientRect(), y, b, m, d, O, _), null != p ? p : 50), o === e.length - 1 && null != g && C(!0)
      }, 60 * o)), () => {
        for (let t of e) clearTimeout(t)
      }
    }, [P, t, f, p, y, b, m, d, O, _, g]), (0, o.jsx)(i.Ji, {
      ref: w,
      sprites: null != S ? S : c.CA,
      colors: null != r ? r : c.Br,
      spriteWidth: c.Ko,
      spriteHeight: c.Ko
    })
  })