/** Chunk was on 34078 **/
/** chunk id: 920768, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk864605 = require("./864605.js"),
  Chunk397927 = require("./397927.js"),
  Chunk557722 = require("./557722.js"),
  Chunk219716 = require("./219716.jsx"),
  Chunk484410 = require("./484410.js");

function d(e) {
  let {
    show: t,
    alpha2: r,
    countryCode: i
  } = e, d = s.useRef(null), p = s.useRef(null), [f, m] = s.useState(0), [y, g] = s.useState(false);
  s.useEffect(() => {
    function e() {
      var e, r;
      m(t && null != (e = null == (r = p.current) ? true : r.getBoundingClientRect().width) ? e : 0)
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [t, r, i]);
  let O = (0, o.zhh)({
    width: "".concat(f, "px"),
    onStart: () => {
      g(true)
    },
    onRest: () => {
      g(false)
    }
  });
  return (0, n.jsx)(o.YNO, {
    targetElementRef: d,
    position: "top",
    renderPopout: e => (0, n.jsx)(u.A, {
      className: h.SW,
      onClick: t => {
        c.A.setCountryCode(t), e.closePopout()
      }
    }),
    children: e => {
      var s, c;
      return (0, n.jsx)("div", {
        className: l()(h.nw, {
          [h.R]: !(t || y)
        }),
        ref: d,
        children: (0, n.jsx)(a.animated.div, {
          className: h.kL,
          style: O,
          children: (0, n.jsxs)("div", {
            className: h.WH,
            ref: p,
            children: [(0, n.jsxs)(o.DUT, (s = function(e) {
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
            }({}, e), c = c = {
              className: h.kf,
              children: [r, " ", i]
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
              }
              return r
            })(Object(c)).forEach(function(e) {
              Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e))
            }), s)), (0, n.jsx)("div", {
              className: h.me
            })]
          })
        })
      })
    }
  })
}