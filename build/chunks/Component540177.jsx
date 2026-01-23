/** Chunk was on 21738 **/
/** chunk id: 540177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk538064 = require("./538064.js"),
  Chunk786574 = require("./786574.jsx"),
  Chunk641616 = require("./641616.jsx"),
  Chunk616621 = require("./616621.jsx"),
  Chunk58736 = require("./58736.jsx");

function d(e) {
  let {
    onClose: t
  } = e, n = (0, o.x)(), i = (0, s.N)(n, a.Ft), u = (0, c.A)();
  return (0, r.jsxs)(l.W1t, {
    "data-menu-mixed": true,
    onSelect: () => {},
    navId: "devtools-popout",
    variant: "fixed",
    onClose: t,
    "aria-label": "DevTools Actions",
    children: [i, (0, r.jsx)(l.rXV, {
      "aria-label": "Playgrounds",
      children: u
    })]
  })
}

function p(e) {
  let {
    className: t,
    focusSectionProps: n
  } = e, [s, o] = i.useState(false), [c, p] = i.useState(0), h = i.useRef(null), g = e => {
    clearTimeout(c), p(setTimeout(() => {
      o(e)
    }, 100))
  };
  return (0, r.jsx)("div", {
    onMouseEnter: () => g(true),
    onMouseLeave: () => g(false),
    children: (0, r.jsx)(l.YNO, {
      targetElementRef: h,
      shouldShow: s,
      animation: l.YNO.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: false,
      onRequestOpen: () => o(true),
      onRequestClose: () => o(false),
      renderPopout: () => (0, r.jsx)(d, {
        onClose: () => o(false)
      }),
      children: (e, i) => {
        let {
          isShown: s
        } = i;
        return (0, r.jsx)(u.In, function(e) {
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
          ref: h,
          onClick: () => (0, a.Ft)(),
          icon: l.VaJ,
          "aria-label": "DevTools",
          selected: s,
          className: t
        }, n))
      }
    })
  })
}