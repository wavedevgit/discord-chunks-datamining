/** Chunk was on 74941 **/
/** chunk id: 766650, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk481060 = require("./481060.js"),
  Chunk144114 = require("./144114.js"),
  Chunk317175 = require("./317175.jsx"),
  Chunk952566 = require("./952566.js");

function d(e) {
  let {
    show: t,
    alpha2: r,
    countryCode: i
  } = e, d = s.useRef(null), p = s.useRef(null), [m, f] = s.useState(0), [g, b] = s.useState(false);
  s.useEffect(() => {
    function e() {
      var e, r;
      f(t && null != (r = null == (e = p.current) ? true : e.getBoundingClientRect().width) ? r : 0)
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [t, r, i]);
  let j = (0, a.q_F)({
      width: "".concat(m, "px"),
      onStart: () => {
        b(true)
      },
      onRest: () => {
        b(false)
      }
    }),
    y = e => {
      c.Z.setCountryCode(e)
    };
  return (0, n.jsx)(a.yRy, {
    targetElementRef: d,
    position: "top",
    renderPopout: e => (0, n.jsx)(u.Z, {
      className: h.popout,
      onClick: t => {
        y(t), e.closePopout()
      }
    }),
    children: e => {
      var s, c;
      return (0, n.jsx)("div", {
        className: l()(h.outerContainer, {
          [h.hidden]: !(t || g)
        }),
        ref: d,
        children: (0, n.jsx)(o.animated.div, {
          className: h.container,
          style: j,
          children: (0, n.jsxs)("div", {
            className: h.innerContainer,
            ref: p,
            children: [(0, n.jsxs)(a.P3F, (s = function(e) {
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
              className: h.countryCode,
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
              className: h.separator
            })]
          })
        })
      })
    }
  })
}