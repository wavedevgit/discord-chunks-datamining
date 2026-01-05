/** Chunk was on 46746 **/
/** chunk id: 492627, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk789639 = require("./789639.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk397938 = require("./397938.jsx"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let {
    align: t = "left"
  } = e, n = i.useRef(null), a = (0, s.i)();
  return (0, r.jsx)(l.yRy, {
    targetElementRef: n,
    position: "top",
    align: t,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.ZP, {
        onClose: t,
        onSelect: true
      })
    },
    children: e => (0, r.jsx)(l.hU, function(e) {
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
      buttonRef: n,
      size: "md",
      variant: "secondary",
      icon: a.Component,
      "aria-label": c.intl.string(c.t["+1H47t"])
    }, e, a.events))
  })
}