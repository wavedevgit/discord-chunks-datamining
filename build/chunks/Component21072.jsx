/** Chunk was on 46746 **/
/** chunk id: 21072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk397938 = require("./397938.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk250005 = require("./250005.js");

function a(e) {
  let {
    mainCTADisabled: t,
    mainCTAOnClick: n,
    align: a,
    ctaText: d,
    hideOptionsButton: u
  } = e, f = i.useRef(null);
  return (0, r.jsxs)("div", {
    className: c.root,
    children: [(0, r.jsx)(s.Button, {
      variant: "primary",
      size: "md",
      text: d,
      onClick: n,
      disabled: t
    }), !u && (0, r.jsx)(s.yRy, {
      targetElementRef: f,
      position: "top",
      align: a,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(l.ZP, {
          onClose: t,
          onSelect: true
        })
      },
      children: e => (0, r.jsx)(s.hU, function(e) {
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
        buttonRef: f,
        size: "md",
        variant: "secondary",
        icon: s.Huf,
        "aria-label": o.intl.string(o.t["+1H47t"])
      }, e))
    })]
  })
}