/** Chunk was on 46746 **/
/** chunk id: 492627, original params: e,t,r (module,exports,require) **/
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
  } = e, r = i.useRef(null), a = (0, s.i)();
  return (0, n.jsx)(l.yRy, {
    targetElementRef: r,
    position: "top",
    align: t,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(o.ZP, {
        onClose: t,
        onSelect: true
      })
    },
    children: e => (0, n.jsx)(l.hU, function(e) {
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
      icon: a.Component,
      "aria-label": c.intl.string(c.t["+1H47t"])
    }, e, a.events))
  })
}