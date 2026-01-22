/** Chunk was on 96811 **/
/** chunk id: 715587, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk505312 = require("./505312.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk744086 = require("./744086.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    align: t = "left"
  } = e, r = l.useRef(null), o = (0, s.w)();
  return (0, n.jsx)(i.YNO, {
    targetElementRef: r,
    position: "top",
    align: t,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(a.Ay, {
        onClose: t,
        onSelect: true
      })
    },
    children: e => (0, n.jsx)(i.K0, function(e) {
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
    }({
      buttonRef: r,
      size: "md",
      variant: "secondary",
      icon: o.Component,
      "aria-label": c.intl.string(c.t["+1H47t"])
    }, e, o.events))
  })
}