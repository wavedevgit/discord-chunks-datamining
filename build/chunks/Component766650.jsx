/** Chunk was on 25761 **/
/** chunk id: 766650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
  Chunk481060 = require("./481060.js"),
  Chunk144114 = require("./144114.js"),
  Chunk317175 = require("./317175.jsx"),
  Chunk33048 = require("./33048.js");

function p(e) {
  let {
    show: t,
    alpha2: n,
    countryCode: i
  } = e, p = s.useRef(null), h = s.useRef(null), [f, m] = s.useState(0), [g, y] = s.useState(false);
  s.useEffect(() => {
    function e() {
      var e, n;
      m(t && null != (n = null == (e = h.current) ? true : e.getBoundingClientRect().width) ? n : 0)
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [t, n, i]);
  let b = (0, o.q_F)({
    width: "".concat(f, "px"),
    onStart: () => {
      y(true)
    },
    onRest: () => {
      y(false)
    }
  });
  return (0, r.jsx)(o.yRy, {
    targetElementRef: p,
    position: "top",
    renderPopout: e => (0, r.jsx)(u.Z, {
      className: d.popout,
      onClick: t => {
        c.Z.setCountryCode(t), e.closePopout()
      }
    }),
    children: e => {
      var s, c;
      return (0, r.jsx)("div", {
        className: a()(d.outerContainer, {
          [d.hidden]: !(t || g)
        }),
        ref: p,
        children: (0, r.jsx)(l.animated.div, {
          className: d.container,
          style: b,
          children: (0, r.jsxs)("div", {
            className: d.innerContainer,
            ref: h,
            children: [(0, r.jsxs)(o.P3F, (s = function(e) {
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
            }({}, e), c = c = {
              className: d.countryCode,
              children: [n, " ", i]
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(c)).forEach(function(e) {
              Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e))
            }), s)), (0, r.jsx)("div", {
              className: d.separator
            })]
          })
        })
      })
    }
  })
}