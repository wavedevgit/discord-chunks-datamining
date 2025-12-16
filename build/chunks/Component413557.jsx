/** Chunk was on 1272 **/
/** chunk id: 413557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk31336 = require("./31336.js"),
  Chunk252899 = require("./252899.jsx"),
  Chunk682475 = require("./682475.jsx"),
  Chunk478057 = require("./478057.jsx"),
  Chunk665149 = require("./665149.jsx");

function d(e) {
  let {
    onClose: t
  } = e, n = (0, s.F)(), i = (0, o.F)(n, a.d8), u = (0, c.Z)();
  return (0, r.jsxs)(l.v2r, {
    onSelect: () => {},
    navId: "devtools-popout",
    variant: "fixed",
    onClose: t,
    "aria-label": "DevTools Actions",
    children: [i, (0, r.jsx)(l.kSQ, {
      "aria-label": "Playgrounds",
      children: u
    })]
  })
}

function p(e) {
  let {
    className: t,
    focusSectionProps: n
  } = e, [o, s] = i.useState(false), [c, p] = i.useState(0), f = i.useRef(null), g = e => {
    clearTimeout(c), p(setTimeout(() => {
      s(e)
    }, 100))
  };
  return (0, r.jsx)("div", {
    onMouseEnter: () => g(true),
    onMouseLeave: () => g(false),
    children: (0, r.jsx)(l.yRy, {
      targetElementRef: f,
      shouldShow: o,
      animation: l.yRy.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: false,
      onRequestOpen: () => s(true),
      onRequestClose: () => s(false),
      renderPopout: () => (0, r.jsx)(d, {
        onClose: () => s(false)
      }),
      children: (e, i) => {
        let {
          isShown: o
        } = i;
        return (0, r.jsx)(u.JO, function(e) {
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
        }({
          ref: f,
          onClick: () => (0, a.d8)(),
          icon: l.Ymb,
          "aria-label": "DevTools",
          selected: o,
          className: t
        }, n))
      }
    })
  })
}