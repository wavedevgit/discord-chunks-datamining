/** Chunk was on 41619 **/
/** chunk id: 766650, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk666917 = require("./666917.js"),
  Chunk481060 = require("./481060.js"),
  Chunk144114 = require("./144114.js"),
  Chunk317175 = require("./317175.jsx"),
  Chunk33048 = require("./33048.js");

function h(e) {
  let {
    show: t,
    alpha2: r,
    countryCode: i
  } = e, h = s.useRef(null), p = s.useRef(null), [f, m] = s.useState(0), [g, y] = s.useState(false);
  s.useEffect(() => {
    function e() {
      var e, r;
      m(t && null != (r = null == (e = p.current) ? true : e.getBoundingClientRect().width) ? r : 0)
    }
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [t, r, i]);
  let O = (0, l.q_F)({
    width: "".concat(f, "px"),
    onStart: () => {
      y(true)
    },
    onRest: () => {
      y(false)
    }
  });
  return (0, n.jsx)(l.yRy, {
    targetElementRef: h,
    position: "top",
    renderPopout: e => (0, n.jsx)(u.Z, {
      className: d.popout,
      onClick: t => {
        c.Z.setCountryCode(t), e.closePopout()
      }
    }),
    children: e => {
      var s, c;
      return (0, n.jsx)("div", {
        className: a()(d.outerContainer, {
          [d.hidden]: !(t || g)
        }),
        ref: h,
        children: (0, n.jsx)(o.animated.div, {
          className: d.container,
          style: O,
          children: (0, n.jsxs)("div", {
            className: d.innerContainer,
            ref: p,
            children: [(0, n.jsxs)(l.P3F, (s = function(e) {
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
              className: d.countryCode,
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
              className: d.separator
            })]
          })
        })
      })
    }
  })
}